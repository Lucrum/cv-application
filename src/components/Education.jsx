function Education(handleSchoolName, handleStudyTitle, handleGraduationYear) {
  return (
    <div className="section">
      <h2>Education</h2>
      <label htmlFor="school-name">School Name: </label>
      <input type="text" onChange={handleSchoolName} id="school-name" />
      <label htmlFor="study-title">Major: </label>
      <input type="text" onChange={handleStudyTitle} id="study-title" />
      <label htmlFor="graduation-year">Graduation Year: </label>
      <input
        type="number"
        onChange={handleGraduationYear}
        id="graduation-year"
      />
    </div>
  );
}

export default Education;
