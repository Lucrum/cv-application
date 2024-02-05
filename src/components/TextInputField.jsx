function TextInputField({ id, prompt, value, handleTextChange }) {
  return (
    <>
      <label htmlFor={id}>{prompt}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => handleTextChange(e)}
        id={id}
      />
    </>
  );
}

export default TextInputField;
