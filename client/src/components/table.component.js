import React, { Component } from "react";
import { Card, Header, Segment } from "semantic-ui-react";

export default class Table extends Component {
  render() {
    return (
      <Card centered>
        {/* <Card.Content>
          <div className="ui blue basic inverted center aligned segment">
            <h4>{this.props.regionName}</h4>
          </div>
        </Card.Content> */}
        <Card.Content>
          <div className="ui blue basic inverted  segment">
            <Header
              as="h3"
              content={this.props.regionName}
              subheader={this.props.regionType}
            />
          </div>
        </Card.Content>
        <Card.Content extra>
          <span className="right floated edit icon">
            <i className="edit icon" />
          </span>
          <span className="right floated trash icon">
            <i className="trash icon" />
          </span>
        </Card.Content>
      </Card>
    );
  }
}
