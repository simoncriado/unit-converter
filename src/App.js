import Converter from "./components/Converter";

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
    </div>
  );
}

export default App;
