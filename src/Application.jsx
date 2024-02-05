import GeneralInfo from "./components/GeneralInfo";
import "./application.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";

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
    graduationYear: new Date().getFullYear(),
  });

  const [workInfo, setWorkInfo] = useState({
    companyName: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });

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

  const handleResponsibiltiesChange = (e) => {
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

  return (
    <>
      <h1>CV Time</h1>
      <GeneralInfo
        personInfo={personInfo}
        handleFirstName={handleFirstNameChange}
        handleLastName={handleLastNameChange}
        handleEmail={handleEmailChange}
        handlePhone={handlePhoneNumberChange}
      />
      <Education
        schoolInfo={schoolInfo}
        handleSchoolName={handleSchoolNameChange}
        handleStudyTitle={handleStudyTitleChange}
        handleGraduationYear={handleGraduationYearChange}
      />
      <Experience
        workInfo={workInfo}
        handleCompanyName={handleCompanyNameChange}
        handlePosition={handlePositionChange}
        handleResponsibilities={handleResponsibiltiesChange}
        handleStartDate={handleStartDateChange}
        handleEndDate={handleEndDateChange}
      />
    </>
  );
}

export default Application;
