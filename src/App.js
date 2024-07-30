import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import {useState} from "react";

function App() {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if(mode === 'light'){
            setMode('dark');
        }else{
            setMode('light')
        }
        console.log(mode);
    }
    return (
        <>
            <Navbar title="React App" mode={mode} toggleMode={toggleMode} />
            <div className="container my-3">
                <div className="mb-5">
                    <About/>
                </div>
                <TextForm heading={'Heading'}/>
            </div>
        </>
    );
}

export default App;
