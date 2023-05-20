import React, {useState} from 'react'



export default function TextForm(props) {

    // use state text->'Enter text here' when call fun setText
    // its state variable 
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state 
    // correct way
    // setText("New Value");


    // handleUpClick function we some one click on button
    const handleUpClick = ()=>{
        // console.log("Uppercase was clciked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clciked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    }

    const clearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Clear Textarea!", "success");
    }

    // copy text
    const handleCopy = ()=>{
        // let newText = document.getElementById("myBox");
        // newText.select();
        // newText.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text);
        //document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard", "success");
    }

    // remove extra spaces | regx
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Remove Extra Spaces!", "success");
    }

    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button disabled={text.length===0} onClick={handleUpClick} className="btn btn-primary mx-1 my-1">Convert to Uppercase</button>
        <button disabled={text.length===0} onClick={handleLoClick} className="btn btn-primary mx-1 my-1">Convert to Lowercase</button>
        <button disabled={text.length===0} onClick={clearText} className="btn btn-primary mx-1 my-1">Clear Text</button>
        <button disabled={text.length===0} onClick={handleCopy} className="btn btn-primary mx-1 my-1">Copy Text</button>
        <button disabled={text.length===0} onClick={handleExtraSpaces} className="btn btn-primary mx-1 my-1">Remove Space</button>
        {/* handleExtraSpaces */}

    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview :</h3>
        <p>{text.length>0 ? text : "Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
