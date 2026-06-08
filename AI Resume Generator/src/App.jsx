import { useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import ResumeForm from './components/ResumeForm'
import ResumePreview from './components/ResumePreview'
import { skillsList } from './data/skills'
import './App.css'

const initialFormData = {
  name: '',
  email: '',
  course: '',
  qualifications: '',
  about: '',
  activities: '',
  skills: [],
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const resumeRef = useRef(null)

  const updateField = (field, value) => {
    setFormData((currentData) => ({
      ...currentData,
      [field]: value,
    }))
  }

  const toggleSkill = (skill) => {
    setFormData((currentData) => {
      const hasSkill = currentData.skills.includes(skill)

      return {
        ...currentData,
        skills: hasSkill
          ? currentData.skills.filter((item) => item !== skill)
          : [...currentData.skills, skill],
      }
    })
  }

  const downloadResume = async () => {
    if (!resumeRef.current) {
      return
    }

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      backgroundColor: '#ffffff',
    })
    const imageData = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p', 'mm', 'a4')
    const pageWidth = pdf.internal.pageSize.getWidth()
    const pageHeight = pdf.internal.pageSize.getHeight()
    const imageWidth = pageWidth
    const imageHeight = (canvas.height * imageWidth) / canvas.width
    const topOffset = Math.max((pageHeight - imageHeight) / 2, 0)

    pdf.addImage(imageData, 'PNG', 0, topOffset, imageWidth, imageHeight)
    pdf.save(`${formData.name || 'resume'}.pdf`)
  }

  return (
    <main className="app-shell">
      <section className="builder-card" aria-labelledby="app-title">
        <div className="builder-header">
          <p className="eyebrow">AI Resume Generator</p>
          <h1 id="app-title">Build a clean resume</h1>
        </div>

        <div className="builder-grid">
          <ResumeForm
            formData={formData}
            skillsList={skillsList}
            onFieldChange={updateField}
            onSkillToggle={toggleSkill}
            onDownload={downloadResume}
          />
          <ResumePreview formData={formData} ref={resumeRef} />
        </div>
      </section>
    </main>
  )
}

export default App
