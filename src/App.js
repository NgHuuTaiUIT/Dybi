import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import MainPage from "./page/mainPage";

function App() {
  return (
    <>
      <div className="relative bg-primaryBg App">
        <Header />
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
