import GraduationYear from "./GraduationYear";
import SchoolName from "./SchoolName";
import StudyTitle from "./StudyTitle";

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
        <SchoolName
          schoolName={schoolInfo.name}
          handleSchoolName={handleSchoolName}
        />
        <StudyTitle
          studyTitle={schoolInfo.studyTitle}
          handleStudyTitle={handleStudyTitle}
        />
        <GraduationYear
          graduationYear={schoolInfo.graduationYear}
          handleGraduationYear={handleGraduationYear}
        />
      </>
    );
  }
}

export default Education;
