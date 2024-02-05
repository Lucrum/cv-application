import GeneralInfo from "./components/GeneralInfo";
import "./application.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";
import Submit from "./components/Submit";

function Application() {
  const [personInfo, setPersonInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const [schoolInfo, setSchoolInfo] = useState({
    name: "",
    studyTitle: "",
    graduationYear: "",
  });

  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

  const [submissionStep, setSubmissionStep] = useState(0);

  const handleFirstNameChange = (e) => {
    setPersonInfo({ ...personInfo, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPersonInfo({ ...personInfo, lastName: e.target.value });
  };

  const handleEmailChange = (e) => {
    setPersonInfo({ ...personInfo, email: e.target.value });
  };

  const handlePhoneNumberChange = (e) => {
    setPersonInfo({ ...personInfo, phoneNumber: e.target.value });
  };

  const handleSchoolNameChange = (e) => {
    setSchoolInfo({ ...schoolInfo, name: e.target.value });
  };

  const handleStudyTitleChange = (e) => {
    setSchoolInfo({ ...schoolInfo, studyTitle: e.target.value });
  };

  const handleGraduationYearChange = (e) => {
    setSchoolInfo({ ...schoolInfo, graduationYear: e.target.value });
  };

  const handleCompanyNameChange = (e) => {
    setWorkInfo({ ...workInfo, companyName: e.target.value });
  };

  const handlePositionChange = (e) => {
    setWorkInfo({ ...workInfo, position: e.target.value });
  };

  const handleResponsibilitiesChange = (e) => {
    setWorkInfo({ ...workInfo, responsibilities: e.target.value });
  };

  const handleStartDateChange = (e) => {
    setWorkInfo({ ...workInfo, startDate: e.target.value });
  };

  const handleEndDateChange = (e) => {
    if (e.target.value > workInfo.startDate) {
      setWorkInfo({ ...workInfo, endDate: e.target.value });
    }
  };

  const advanceSubmissionProcess = () => {
    setSubmissionStep(submissionStep + 1);
  };

  const backTrackSubmissionProcess = () => {
    setSubmissionStep(submissionStep - 1);
  };

  if (submissionStep === 2) {
    return (
      <>
        <h2>Thank you for applying!</h2>
      </>
    );
  } else {
    return (
      <>
        <h1>Arbor Application</h1>
        <div className="section">
          <h2>General</h2>
          <GeneralInfo
            personInfo={personInfo}
            handleFirstName={handleFirstNameChange}
            handleLastName={handleLastNameChange}
            handleEmail={handleEmailChange}
            handlePhone={handlePhoneNumberChange}
            editable={submissionStep === 0}
          />
        </div>
        <div className="section">
          <h2>Education</h2>
          <Education
            schoolInfo={schoolInfo}
            handleSchoolName={handleSchoolNameChange}
            handleStudyTitle={handleStudyTitleChange}
            handleGraduationYear={handleGraduationYearChange}
            editable={submissionStep === 0}
          />
        </div>

        <div className="section">
          <h2>Experience</h2>
          <Experience
            workInfo={workInfo}
            handleCompanyName={handleCompanyNameChange}
            handlePosition={handlePositionChange}
            handleResponsibilities={handleResponsibilitiesChange}
            handleStartDate={handleStartDateChange}
            handleEndDate={handleEndDateChange}
            editable={submissionStep === 0}
          />
        </div>

        <Submit
          step={submissionStep}
          advance={advanceSubmissionProcess}
          backTrack={backTrackSubmissionProcess}
        />
      </>
    );
  }
}

export default Application;
