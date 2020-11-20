import "./App.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import UploadFile from "./components/UploadFile/UploadFile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route path="/upload" component={UploadFile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
