import './App.css';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
      <>
        <Navbar title="React App"/>
          <div className="container my-3">
              <TextForm heading={'Heading'}/>
          </div>

      </>
  );
}

export default App;
