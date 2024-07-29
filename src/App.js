import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
    return (
        <>
            <Navbar title="React App"/>
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
