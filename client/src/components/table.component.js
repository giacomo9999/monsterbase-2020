import React, { Component } from "react";
import { Card, Header, Content } from "semantic-ui-react";

export default class Table extends Component {
  render() {
    return (
      <Card centered>
        <Card.Content>
          <Card.Header>
            <h2>Jim Is Cool</h2>
          </Card.Header>
        </Card.Content>
      </Card>
    );
  }
}
