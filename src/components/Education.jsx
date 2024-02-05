function Education({
  schoolInfo,
  handleSchoolName,
  handleStudyTitle,
  handleGraduationYear,
}) {
  return (
    <div className="section">
      <h2>Education</h2>
      <label htmlFor="school-name">School Name: </label>
      <input
        type="text"
        value={schoolInfo.name}
        onChange={(e) => handleSchoolName(e)}
        id="school-name"
      />
      <label htmlFor="study-title">Major: </label>
      <input
        type="text"
        onChange={(e) => handleStudyTitle(e)}
        id="study-title"
      />
      <label htmlFor="graduation-year">Graduation Year: </label>
      <input
        type="number"
        min={1900}
        value={schoolInfo.graduationYear}
        onChange={(e) => handleGraduationYear(e)}
        id="graduation-year"
      />
    </div>
  );
}

export default Education;
