function Experience({
  workInfo,
  handleCompanyName,
  handlePosition,
  handleResponsibilties,
  handleStartDate,
  handleEndDate,
}) {
  return (
    <div className="section">
      <h2>Experience</h2>
      <label htmlFor="company-name">Company Name: </label>
      <input
        type="text"
        value={workInfo.companyName}
        onChange={handleCompanyName}
        id="company-name"
      />
      <label htmlFor="title">Title: </label>
      <input
        type="text"
        value={workInfo.position}
        onChange={handlePosition}
        id="title"
      />
      <label htmlFor="email">Responsibilities: </label>
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
    </div>
  );
}

export default Experience;
