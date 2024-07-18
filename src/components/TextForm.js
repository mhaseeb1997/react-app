import React, { useState } from 'react';



export default function TextForm(props) {
    const  handelUpClick = ()=> {
        setText('You Have Clicked');
    }

    const  handelOnChange = (event)=> {
        setText(event.target.value);
    }

    const [text, setText] = useState('Enter text here');
    return (

        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.heading}</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={text} rows="5" onChange={handelOnChange}></textarea>
            <button className="btn btn-primary mt-3" onClick={handelUpClick}>Convert to Uppercase</button>
        </div>

    )
}

