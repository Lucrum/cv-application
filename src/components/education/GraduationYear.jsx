function GraduationYear({ graduationYear, handleGraduationYear }) {
  return (
    <>
      <label htmlFor="graduation-year">Graduation Year: </label>
      <input
        type="number"
        min={1900}
        value={graduationYear}
        onChange={(e) => handleGraduationYear(e)}
        id="graduation-year"
      />
    </>
  );
}

export default GraduationYear;
