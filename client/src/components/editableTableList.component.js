import React, { Component } from "react";

import EditableTable from "./editableTable.component";

export default class EditableTableList extends Component {
  render() {
    return (
      <div id="lists">
        <EditableTable region="Scarab Mound, Level 3" editFormOpen={true} />
        <EditableTable
          region="Plain of the Standing Stones"
          editFormOpen={true}
        />
      </div>
    );
  }
}
