import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// layout
import Header from "./layouts/Header";

// pages
import Home from "./pages/Home";
import Detail from "./pages/Detail";

// style components
import { Container } from "react-bootstrap";
// style
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.scss";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/:id" component={Detail} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default App;
