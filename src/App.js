import { BrowserRouter,Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import {makeStyles} from "@material-ui/core"

function App() {
  const useStyles = makeStyles(() => ({
    App:{
      backgroundColor:"#14161a",
      color:"white",
      minHeight:"100vh",
    }
  }));
  const classes =useStyles()
  return (
    <BrowserRouter>
      <div className="classses.App">
        <Header />
        <Route path="/" Component={Homepage} exact/>
        <Route path="/coins/:id" Component={Coinpage}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
