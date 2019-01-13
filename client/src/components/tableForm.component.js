import React, { Component } from "react";
import { Button, Card, Image } from "semantic-ui-react";

export default class TableForm extends Component {
  render() {
    const submitText = this.props.region ? "Update" : "Create";
    return (
      <div>
        <Card centered>
          <Card.Content>
            <Card.Header>{this.props.region}</Card.Header>
            <br />
            <div className="ui form">
              <div className="field">
                <label>Region Name</label>
                <input type="text" defaultValue={this.props.region} />
              </div>
            </div>
          </Card.Content>
          <Card.Content extra>
            <div className="ui compact two buttons">
              <Button primary>{submitText}</Button>
              <Button secondary>Cancel</Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}
