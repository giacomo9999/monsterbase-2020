// Child of EditableTable

import React, { Component } from "react";
import { Card, Header, Table } from "semantic-ui-react";

export default class RegionTable extends Component {
  render() {
    const encounterList = this.props.regionMonstersAndFreq.map(
      (entry, index) => (
        <Table.Row key={index}>
          <Table.Cell>{entry[0]}</Table.Cell>
          <Table.Cell>{entry[1]}</Table.Cell>
        </Table.Row>
      )
    );
    return (
      <Card centered>
        <Card.Content>
          <div className="ui blue basic inverted segment">
            <Header
              as="h3"
              content={this.props.regionName}
              subheader={
                this.props.regionType +
                "  •  Difficulty " +
                this.props.regionDifficulty
              }
            />
          </div>
          <Table striped>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>d20</Table.HeaderCell>
                <Table.HeaderCell>Monster</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>{encounterList}</Table.Body>
          </Table>
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

// const tables = this.props.tables.map(table => (
//   <EditableTable
//     key={table.id}
//     id={table.id}
