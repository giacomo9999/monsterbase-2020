import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Create from "./components/create.component";
import Index from "./components/index.component";
import Edit from "./components/edit.component";

const App = () => (
  <Container>
    <h1>MONSTERBASE</h1>
    <Create />
    <Edit />
    <Index />
  </Container>
);

export default App;
