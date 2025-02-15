import React, {useState} from 'react';

export default function About() {
    const [darkMode, setDarkMode] = useState(
        {
            color: "#000000",
            backgroundColor: `#ffffff`,
        }
    )
    const [btnText, setBtnText] = useState('Dark Mode')
    const toggleColor = () => {
        if (darkMode.color === '#ffffff') {
            setDarkMode({
                color: "#000000",
                backgroundColor: `#ffffff`,
            })
            setBtnText('Dark Mode')
        } else {
            setDarkMode({
                color: "#ffffff",
                backgroundColor: `#000000`,
            })
            setBtnText('Light Mode')
        }
    }

    return (
        <>
            <div className="container py-3" style={darkMode}>
                <h1 className="my-3">About Us</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"
                                    style={darkMode}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={darkMode}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until
                                the
                                collapse plugin adds the appropriate classes that we use to style each element. These
                                classes control the overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or overriding our default
                                variables.
                                It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"
                                    style={darkMode}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={darkMode}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                until
                                the collapse plugin adds the appropriate classes that we use to style each element.
                                These
                                classes control the overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or overriding our default
                                variables.
                                It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"
                                    style={darkMode}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={darkMode}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until
                                the
                                collapse plugin adds the appropriate classes that we use to style each element. These
                                classes control the overall appearance, as well as the showing and hiding via CSS
                                transitions. You can modify any of this with custom CSS or overriding our default
                                variables.
                                It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <button onClick={toggleColor} className="btn btn-dark btn-sm mt-3">{btnText}</button>
            </div>
        </>

    )
}