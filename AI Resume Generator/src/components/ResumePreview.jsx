import { forwardRef } from 'react'

const fallbackText = {
  name: 'Your Name',
  email: 'email@example.com',
  course: 'Course',
  qualifications: 'Add your qualifications to show your academic background.',
  about: 'Write a short summary about your strengths, goals, and interests.',
  activities: 'Add extracurricular activities, events, volunteering, or awards.',
}

const ResumePreview = forwardRef(function ResumePreview({ formData }, ref) {
  const selectedSkills =
    formData.skills.length > 0 ? formData.skills : ['HTML', 'CSS', 'React']

  return (
    <article className="resume-preview-wrap" aria-label="Live resume preview">
      <div className="resume-paper" ref={ref}>
        <header className="resume-top">
          <div>
            <h2>{formData.name || fallbackText.name}</h2>
            <p>{formData.course || fallbackText.course}</p>
          </div>
          <a href={`mailto:${formData.email || fallbackText.email}`}>
            {formData.email || fallbackText.email}
          </a>
        </header>

        <section className="resume-section">
          <h3>About</h3>
          <p>{formData.about || fallbackText.about}</p>
        </section>

        <section className="resume-section">
          <h3>Qualifications</h3>
          <p>{formData.qualifications || fallbackText.qualifications}</p>
        </section>

        <section className="resume-section">
          <h3>Skills</h3>
          <div className="resume-skills">
            {selectedSkills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h3>Extra Activities</h3>
          <p>{formData.activities || fallbackText.activities}</p>
        </section>
      </div>
    </article>
  )
})

export default ResumePreview
