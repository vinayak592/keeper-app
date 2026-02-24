import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = React.useState([]);

  function addNote(input) {
    console.log(input);
    setItems((prevItems) => {
      return [...prevItems, input];
    });
  }
  function onDelete(id) {
    console.log("deleted", id);
    setItems((prevItems) => {
      return prevItems.filter((_, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea 
      onAdd={addNote} 
      />
      {items.map((items, index) => (
        <Note 
        id={index}
        key={index} 
        title={items.title} 
        content={items.content} 
       onDelete={onDelete} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
