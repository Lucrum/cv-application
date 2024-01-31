import GeneralInfo from "./components/GeneralInfo";
import "./application.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { useState } from "react";

function Application() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <h1>CV Time</h1>
      <GeneralInfo
        handleFirstName={setFirstName}
        handleLastName={setLastName}
        handleEmail={setEmail}
        handlePhone={setPhoneNumber}
      />
      <Education />
      <Experience />
    </>
  );
}

export default Application;
