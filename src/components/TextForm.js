import React, {useState} from 'react';


export default function TextForm(props) {
    const handelUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText);
    }

    const handelLoClick = () => {
        let newText = text.toLowerCase()
        setText(newText);
    }

    const handelOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (
        <>
            <div className="mb-3 container">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="5"
                          onChange={handelOnChange}></textarea>
                <button className="btn btn-primary mt-3" onClick={handelUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mt-3 mx-3" onClick={handelLoClick}>Convert to lowerCase</button>
            </div>
            <div className="container">
                <div className="float-end">
                    <p>{text.split(" ").length} Words , <span className="ml-3">{text.length} Character</span></p>
                    <p>{0.008 * text.split(" ").length} Minute Read</p>
                </div>

                <p><b>Your Content: </b>{text}</p>
            </div>
        </>
    )
}

