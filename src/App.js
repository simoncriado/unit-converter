import Converter from "./components/Converter";
import Footer from "./components/Footer";

// Styles
import "./styles/global.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <h2 className="title">
        <FontAwesomeIcon icon={faArrowRightArrowLeft} />
        <span> </span>
        Unit Converter
      </h2>
      <Converter />
      <Footer />
    </div>
  );
}

export default App;
