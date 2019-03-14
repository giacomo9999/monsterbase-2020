// Child of ToggleableTableForm or EditableTable

import React, { Component } from "react";
import { Button, Card, Header, Dropdown } from "semantic-ui-react";

export default class TableForm extends Component {
  state = {
    regionName: this.props.regionName || "",
    regionType: this.props.regionType || "",
    regionDifficulty: this.props.regionDifficulty || 0,
    maxNumOfMonsters: this.props.maxNumOfMonsters || 0
  };

  handleRegionNameChange = e => {
    // console.log(this.state);
    this.setState({ regionName: e.target.value });
  };

  handleRegionTypeChange = e => {
    // console.log(this.state);
    this.setState({ regionType: e.target.value });
  };

  handleRegionDifficultyChange = e => {
    // console.log(this.state);
    this.setState({ regionDifficulty: e.target.value });
  };

  handleMaxNumOfMonstersChange = e => {
    // console.log(this.state);
    this.setState({ maxNumOfMonsters: e.target.value });
  };

  // uses HandleFormSubmit from ToggleableTableForm
  handleSubmit = () => {
    console.log(
      "TableForm submitting table for " + this.state.regionName,
      this.state.regionType,
      this.state.maxNumOfMonsters,
      this.props.id
    );
    this.props.onFormSubmit({
      _id: this.props._id,
      id: this.props.id,
      regionName: this.state.regionName,
      regionType: this.state.regionType,
      regionDifficulty: this.state.regionDifficulty,
      maxNumOfMonsters: this.state.maxNumOfMonsters
    });
  };

  render() {
    // console.log("TableForm state: ", this.state);
    // console.log("TableForm props: ", this.props);
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
              <label>
                Region Type:
                <select
                  value={this.state.regionType}
                  onChange={this.handleRegionTypeChange}
                >
                  <option value="desert">Desert</option>
                  <option value="forest">Forest</option>
                  <option value="frigid">Frigid</option>
                  <option value="hills">Hills</option>
                  <option value="jungle">Jungle</option>
                  <option value="mountain">Mountain</option>
                  <option value="outer plane">Outer Plane</option>
                  <option value="savanna">Savanna</option>
                  <option value="settlement">Settlement</option>
                  <option value="shoreline">Shoreline</option>
                  <option value="steppe">Steppe</option>
                  <option value="swamp">Swamp</option>
                  <option value="underground">Underground</option>
                </select>
              </label>
            </div>
            <div className="field">
              <label>Difficulty</label>
              <input
                type="text"
                value={this.state.regionDifficulty}
                onChange={this.handleRegionDifficultyChange}
              />
            </div>
            <div className="field">
              <label>Max. Number Of Monsters In Table</label>
              <input
                type="text"
                value={this.state.maxNumOfMonsters}
                onChange={this.handleMaxNumOfMonstersChange}
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
