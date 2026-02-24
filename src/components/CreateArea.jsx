import React from "react";

function CreateArea(props) {
 
  const [input, setInput] = React.useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    }); 
  }
   function submitNote(event) {
    event.preventDefault();
    props.onAdd(input);
    setInput({
      title: "",
      content: "",
    });
    
  }
  return (
    <div>
      <form >
        <input 
        onChange={handleChange}
        name="title" 
        placeholder="Title" 
        value={input.title}
        />
        <textarea 
        onChange={handleChange}
        name="content"
         placeholder="Take a note..."
          rows="3" 
          value={input.content}
          />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
