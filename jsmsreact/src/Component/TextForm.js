import { useState } from "react"
import React  from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("Enter the text here");
    const handleOnChange = (event) => {
        console.log("On Change");
        setText(event.target.value);
    }

    const handleOnClick = () => {
        console.log("uppercase was clicked");
        
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to upperCase", "success");
    }
    return (
        <>
        <div className="container">
            <h1 className="mb-3">{props.headings}</h1>
            <div className="mb-3">
                <textarea className="form-control" value= {text} id="exampleFormControlTextarea1" onChange={handleOnChange} rows="25"></textarea>
                
            </div>
            <button className='btn btn-primary' onClick={handleOnClick}>Convert to uppercase</button>
        </div>
        <div className="conatiner my-3">
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and  {text.length} charchters </p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}
