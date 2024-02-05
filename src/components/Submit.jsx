function Submit({ step, advance, backTrack }) {
  if (step === 0) {
    // filling out all forms
    return <button onClick={advance}>Next</button>;
  } else if (step === 1) {
    return (
      <>
        <button onClick={backTrack}>Edit</button>
        <button onClick={advance}>Submit</button>
      </>
    );
  }
}

export default Submit;
