import { useState } from "react";
import React from 'react'

export default function TextForm(props) {
    const [text,setText]=useState('Enter text here');
    const handleUpCase = (event) => {
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Upper Case','success');
    }
    const handleLowerCase = (event) => {
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lower Case','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleClearText= (event) => {
        setText("");
        props.showAlert('Cleared Text','success');
    }
    const handleCopy= () => {
        navigator.clipboard.writeText(text);
        props.showAlert('Copied Text','success');
    }
    const handleExtraSpaces =() => {
        let newText= text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <form>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea className="form-control" id="myBox" value={text} rows="10" style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}}  onChange={handleOnChange}></textarea>
                </div>
            </form>
            <button className="btn btn-primary my-2" onClick={handleUpCase}>Convert to UpperCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleLowerCase}>Convert to LowerCase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy</button>
            <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
            <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <h2>Preview</h2>
            <p>{text}</p>
            <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
        </div>
        </>
    )
}
