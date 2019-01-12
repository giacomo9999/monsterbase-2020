import React, { Component } from "react";
import axios from "axios";
// import TableRow from "./TableRow";

export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { business: [] };
  }

  componentDidMount() {
    axios
      .get("/business")
      .then(response => {
        this.setState({ business: response.data });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  //   tabRow() {
  //     return this.state.business.map(function(object, i) {
  //       return <TableRow obj={object} key={i} />;
  //     });
  //   }

  render() {
    return (
      <div className="ui three column centered grid">
        <h3 align="center">Encounter Tables</h3>
      </div>
    );
  }
}
