function ResumeForm({
  formData,
  skillsList,
  onFieldChange,
  onSkillToggle,
  onDownload,
}) {
  return (
    <form className="resume-form" onSubmit={(event) => event.preventDefault()}>
      <div className="field-group">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(event) => onFieldChange('name', event.target.value)}
          placeholder="Your full name"
        />
      </div>

      <div className="field-group">
        <label htmlFor="email">Email ID</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(event) => onFieldChange('email', event.target.value)}
          placeholder="name@example.com"
        />
      </div>

      <div className="field-group">
        <label htmlFor="course">Course</label>
        <input
          id="course"
          type="text"
          value={formData.course}
          onChange={(event) => onFieldChange('course', event.target.value)}
          placeholder="B.Sc Computer Science"
        />
      </div>

      <div className="field-group">
        <label htmlFor="qualifications">Qualifications</label>
        <textarea
          id="qualifications"
          value={formData.qualifications}
          onChange={(event) =>
            onFieldChange('qualifications', event.target.value)
          }
          placeholder="Education, certifications, academic highlights"
          rows="4"
        />
      </div>

      <div className="field-group">
        <label htmlFor="about">Short About</label>
        <textarea
          id="about"
          value={formData.about}
          onChange={(event) => onFieldChange('about', event.target.value)}
          placeholder="Brief professional summary"
          rows="4"
        />
      </div>

      <div className="field-group">
        <label htmlFor="activities">Extra Activities</label>
        <textarea
          id="activities"
          value={formData.activities}
          onChange={(event) => onFieldChange('activities', event.target.value)}
          placeholder="Clubs, events, volunteering, achievements"
          rows="4"
        />
      </div>

      <fieldset className="skills-fieldset">
        <legend>Skills</legend>
        <div className="skills-grid">
          {skillsList.map((skill) => (
            <label className="skill-option" key={skill}>
              <input
                type="checkbox"
                checked={formData.skills.includes(skill)}
                onChange={() => onSkillToggle(skill)}
              />
              <span>{skill}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <button className="download-button" type="button" onClick={onDownload}>
        Download Resume
      </button>
    </form>
  )
}

export default ResumeForm
