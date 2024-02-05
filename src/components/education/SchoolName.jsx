function SchoolName({ schoolName, handleSchoolName }) {
  return (
    <>
      <label htmlFor="school-name">School Name: </label>
      <input
        type="text"
        value={schoolName}
        onChange={(e) => handleSchoolName(e)}
        id="school-name"
      />
    </>
  );
}

export default SchoolName;
