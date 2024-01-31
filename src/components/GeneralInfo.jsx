function GeneralInfo(
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePhone
) {
  return (
    <div className="section">
      <h2>Information</h2>
      <label htmlFor="first-name">First Name: </label>
      <input type="text" onChange={handleFirstName} id="first-name" />
      <label htmlFor="last-name">Last Name: </label>
      <input type="text" onChange={handleLastName} id="last-name" />
      <label htmlFor="email">Email: </label>
      <input type="email" onChange={handleEmail} id="email" />
      <label htmlFor="phone-number">Phone Number: </label>
      <input type="tel" onChange={handlePhone} id="phone-number" />
    </div>
  );
}

export default GeneralInfo;
