import "./App.scss";
import Header from "./components/Header/Header";
// import Hero from "./components/Hero/Hero";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainContent from "./components/MainContent/MainContent";
import UploadFile from "./components/UploadFile/UploadFile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/" exact component={MainContent} />
          <Route
            path="/upload"
            render={(routerProps) => <UploadFile {...routerProps} />}
            component={UploadFile}
          />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
