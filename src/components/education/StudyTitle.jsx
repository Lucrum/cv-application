function StudyTitle({ studyTitle, handleStudyTitle }) {
  return (
    <>
      <label htmlFor="study-title">Major: </label>
      <input
        type="text"
        value={studyTitle}
        onChange={(e) => handleStudyTitle(e)}
        id="study-title"
      />
    </>
  );
}

export default StudyTitle;
