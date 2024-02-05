import TextInputField from "./TextInputField";

function GeneralInfo({
  personInfo,
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone,
  editable,
}) {
  if (editable) {
    // there is currently no component for emails or tels
    return (
      <>
        <TextInputField
          id={"first-name"}
          prompt={"First Name: "}
          value={personInfo.firstName}
          handleTextChange={handleFirstName}
        />
        <TextInputField
          id={"last-name"}
          prompt={"Last Name: "}
          value={personInfo.lastName}
          handleTextChange={handleLastName}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          value={personInfo.email}
          onChange={handleEmail}
          id="email"
        />
        <label htmlFor="phone-number">Phone Number: </label>
        <input
          type="tel"
          value={personInfo.phoneNumber}
          onChange={handlePhone}
          id="phone-number"
        />
      </>
    );
  } else {
    return (
      <>
        <p>Full Name: {personInfo.firstName + " " + personInfo.lastName}</p>
        <p>Email: {personInfo.email}</p>
        <p>Phone Number: {personInfo.phoneNumber}</p>
      </>
    );
  }
}

export default GeneralInfo;
