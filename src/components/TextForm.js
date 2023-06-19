import React, {useState} from 'react'

// hooks / usestate is used 
export default function TextForm(props) {
    // this function helps in converting to uppercase
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('text has converted to uppercase', 'success');
    }

    // this function helps in converting to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('text has converted to lowercase', 'success');
    }

    // this function helps in clearing the output
    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert('text has been cleared', 'success');
    }
    
    // this function helps in copying the output
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert('text has been copied', 'success');
    }

    // this function helps in assigning value onchanging or inputting
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // this function helps in removing extra spaces using regex
    const handleExtraSpacesClick = () => {
        let withoutExtraSpaces = text.split(/[  ]+/);
        setText(withoutExtraSpaces.join(" "));
        props.showAlert('extra spaces has been removed', 'success');
    }

    // this is a usestate or hook used for assigning and updating using hook
    const [text, setText] = useState("");
    // it is updated only via setText() [ the second param ]

    /**
     * text = "new text" - wrong way to update the state
     * setText("new text") - correct way to update the state
     */
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.title}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>copy output</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>clear text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpacesClick}>remove extra spaces</button>
        
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>the text summary</h2>
        {/* <p>{text.split(" ").length} words and {text.length} letters</p> */}
        {/* <p>{text.charAt[0]=== " " && text.split(" ").length === 1?"0":text.split(" ").length} words and {text.length} letters</p> */}
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>preview</h2>
        <p>{text.length>0?text:'enter something to preview'}</p>
    </div>
    </>
  )
}