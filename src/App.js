import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import { BrowserRouter } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Catagory />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
