import TextInputField from "./TextInputField";

function Education({
  schoolInfo,
  handleSchoolName,
  handleStudyTitle,
  handleGraduationYear,
  editable,
}) {
  if (!editable) {
    return (
      <>
        <p>School: {schoolInfo.name}</p>
        <p>Major: {schoolInfo.studyTitle}</p>
        <p>Graduation Year: {schoolInfo.graduationYear}</p>
      </>
    );
  } else {
    return (
      <>
        <TextInputField
          id={"school-name"}
          prompt={"School Name: "}
          value={schoolInfo.name}
          handleTextChange={handleSchoolName}
        />
        <TextInputField
          id={"study-title"}
          prompt={"Major: "}
          value={schoolInfo.studyTitle}
          handleTextChange={handleStudyTitle}
        />
        <TextInputField
          id={"graduation-year"}
          prompt={"Graduation Year: "}
          value={schoolInfo.graduationYear}
          handleTextChange={handleGraduationYear}
        />
      </>
    );
  }
}

export default Education;
