import React, { useRef } from "react";

const Events = () => {
  return (
    <>
      <Title />
      <Paragraph />
      <Button />
    </>
  );
};

const Title = () => {
  return <div style={{width:"300px", backgroundColor:"#202020", padding:"10px", borderRadius:"8px 8px 8px 8px", color:"white", fontFamily:"sans-serif", margin:"15px"}}><h1>Веб-компоненты</h1></div>
};

const Paragraph = () => {
  return (
    <div style={{backgroundColor:"#202020", width:"700px", padding:"20px", color:"white", borderRadius:"8px 8px 8px 8px", fontFamily:"sans-serif", margin:"15px"}}>
    <p>
      Веб-компоненты — совокупность стандартов, которая позволяет создавать<br></br>
      новые, пользовательские HTML-элементы со своими свойствами, методами,<br/>
      инкапсулированными DOM и стилями.
    </p></div>
  );
};

const Button = () => {
  const ref = useRef();

  const EventsText = (name) => {
    console.log(name);
  };

  const Input = () => {
    const refInput = useRef();
    function EventsText(eventName) {console.log(eventName)}

    return <input style={{margin:"15px" }} ref={refInput} 
    onKeyDown={() => {
      EventsText("keyDown");
    }}
    onKeyUp={() => {
      EventsText("keyUp");
    }}/>;
  };

  return (
    <div>
      <Input />
      <button
        ref={ref}
        onClick={() => {
          EventsText("click");
        }}
        onBlur={() => {
          EventsText("onBlur");
        }}
        onMouseOver={() => {
          EventsText("mouseOver");
        }}
        onMouseDown={() => {
          EventsText("mouseDown");
        }}
        onContextMenu={() => {
          EventsText("contextMenu");
        }}
        onMouseOut={() => {
          EventsText("mouseOut");
        }}
        onMouseUp={() => {
          EventsText("mouseUp");
        }}
        onMouseMove={() => {
          EventsText("mouseMove");
        }}
       
      >
        Click here
      </button>
    </div>
  );
};

export default Events;
