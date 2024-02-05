import TextInputField from "./TextInputField";

function Experience({
  workInfo,
  handleCompanyName,
  handlePosition,
  handleResponsibilties,
  handleStartDate,
  handleEndDate,
  editable,
}) {
  if (editable) {
    // there is currently no component for textareas or dates
    return (
      <>
        <TextInputField
          id={"company-name"}
          prompt={"Company Name: "}
          value={workInfo.companyName}
          handleTextChange={handleCompanyName}
        />
        <TextInputField
          id={"title"}
          prompt={"Title: "}
          value={workInfo.position}
          handleTextChange={handlePosition}
        />
        <label htmlFor="responsibilities">Responsibilities: </label>
        <textarea
          onChange={handleResponsibilties}
          id="responsibilities"
        ></textarea>
        <label htmlFor="start-date">Start Date: </label>
        <input
          type="date"
          value={workInfo.startDate}
          onChange={handleStartDate}
          id="start-date"
        />
        <label htmlFor="end-date">End Date: </label>
        <input
          type="date"
          value={workInfo.endDate}
          min={workInfo.startDate}
          onChange={handleEndDate}
          id="end-date"
        />
      </>
    );
  } else {
    return (
      <>
        <p>Company Name: {workInfo.companyName}</p>
        <p>Title: {workInfo.position}</p>
        <p>Responsibilities: {workInfo.responsibilities}</p>
        <p>Start Date: {workInfo.startDate}</p>
        <p>End Date: {workInfo.endDate}</p>
      </>
    );
  }
}

export default Experience;
