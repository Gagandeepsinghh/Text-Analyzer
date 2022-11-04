import React, {useState} from 'react'


export default function 
(props) 

{ 

  

  //function for uppercase
  const handleUpClick = () =>{
    console.log("uppercase was clicked")
    let newText = text.toUpperCase();
    setText(newText)
  }

  //function for lowercase
    const handleLoClick = () =>{
      console.log("Lowercase was clicked")
      let newText = text.toLowerCase();
      setText(newText) 
  }

  //function for clearing text
  const handleClearClick = () =>{
    console.log("clear text was clicked")
    let newText = '';
    setText(newText) 
}

  //function for handeling change in the text area(to make it editable)
  const handleOnChange = (event) =>{
    console.log("onChange")
    setText(event.target.value)
  }

  //funtion top copy the text
  const handleCopy = (event) =>{
    console.log("copyText");
    var text=document.getElementById("myBox");
    navigator.clipboard.writeText(text.value);
  }

  //funtion remove the extra spaces
  const handleSpaces = () =>{
    console.log("HandleSapces");
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
  }



  const [text, setText] = useState('Enter Text here');
  
  
 

  return (
    <>
    <div className='container'>
        
        <div className="mb-3">
        <label forhtml="myBox" className="form-label"> <h1> {props.heading}  </h1></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button  className="btn btn-primary mx-1" onClick={handleUpClick}  >Convert to Uppercase  </button>
        <button  className="btn btn-primary mx-1" onClick={handleLoClick}  >Convert to Lowercase </button>
        <button  className="btn btn-primary mx-1" onClick={handleClearClick}  >Clear text </button>
        <button  className="btn btn-primary mx-1" onClick={handleCopy}  >Copy text </button>
        <button  className="btn btn-primary mx-1" onClick={handleSpaces}  >Remove Extra Spaces </button>
       

        
    </div>
    <div className="container my-2">
      <h2> Your text summary here </h2>
      <p> {text.split(" ").length} Words and {text.length} Characters </p>
      <p> {0.008*text.split(" ").length} Minutes read </p>
      <h2> Preview </h2>
      <p> {text} </p>
    </div>

    </>
  )
}
