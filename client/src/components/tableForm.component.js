// Child of ToggleableTableForm

import React, { Component } from "react";
import { Button, Card, Header } from "semantic-ui-react";

export default class TableForm extends Component {
  state = {
    regionName: this.props.regionName || "",
    regionType: this.props.regionType || "",
    regionDifficulty: this.props.regionDifficulty || ""
  };

  handleRegionNameChange = e => {
    this.setState({ regionName: e.target.value });
  };

  handleRegionTypeChange = e => {
    this.setState({ regionType: e.target.value });
  };

  handleRegionDifficultyChange = e => {
    this.setState({ regionDifficulty: e.target.value });
  };

  // uses HandleFormSubmit from ToggleableTableForm
  handleSubmit = () => {
    console.log("TableForm submitting table for " + this.state.regionName);
    this.props.onFormSubmit({
      id: this.props.id,
      regionName: this.state.regionName,
      regionType: this.props.regionType,
      regionDifficulty: this.props.regionDifficulty
    });
  };

  render() {
    const submitText = this.props.id ? "Update" : "Create";
    return (
      <Card centered>
        <Card.Content>
          <div className="ui blue basic inverted segment">
            <Header
              as="h3"
              content={this.state.regionName || "New Region"}
              subheader={this.state.regionType}
            />
          </div>
          <div className="ui form">
            <div className="field">
              <label>Region Name</label>
              <input
                type="text"
                value={this.state.regionName}
                onChange={this.handleRegionNameChange}
              />
            </div>
            <div className="field">
              <label>Type</label>
              <input
                type="text"
                value={this.state.regionType}
                onChange={this.handleRegionTypeChange}
              />
            </div>
            <div className="field">
              <label>Difficulty</label>
              <input
                type="text"
                value={this.state.regionDifficulty}
                onChange={this.handleRegionDifficultyChange}
              />
            </div>
          </div>
        </Card.Content>
        <Card.Content extra>
          <div className="ui compact two buttons">
            <Button basic color="grey" onClick={this.handleSubmit}>
              {submitText}
            </Button>
            <Button basic color="grey" onClick={this.props.onFormClose}>
              Cancel
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}
