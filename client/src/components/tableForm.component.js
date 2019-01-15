import React, { Component } from "react";
import { Button, Card, Header } from "semantic-ui-react";

export default class TableForm extends Component {
  render() {
    const submitText = this.props.regionName ? "Update" : "Create";
    return (
      <Card centered>
        <Card.Content>
          <div className="ui blue basic inverted  segment">
            <Header
              as="h3"
              content={this.props.regionName || "New Region"}
              subheader={this.props.regionType}
            />
          </div>
          <div className="ui form">
            <div className="field">
              <label>Region Name</label>
              <input
                type="text"
                defaultValue={this.props.regionName || "enter name here"}
              />
            </div>
            <div className="field">
              <label>Type</label>
              <input
                type="text"
                defaultValue={this.props.regionType || "enter type here"}
              />
            </div>
            <div className="field">
              <label>Difficulty</label>
              <input
                type="text"
                defaultValue={
                  this.props.regionDifficulty || "enter difficulty here"
                }
              />
            </div>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className="ui compact two buttons">
            <Button basic color="grey">
              {submitText}
            </Button>
            <Button basic color="grey">
              Cancel
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
