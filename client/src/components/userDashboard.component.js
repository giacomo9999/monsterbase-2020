import React, { Component } from "react";
import axios from "axios";
import EditableTableList from './editableTableList.component'
import ToggleableTableForm from './toggleableTableForm.component'


export default class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { encTables: [] };
  }

  // componentDidMount() {
  //   axios
  //     .get("/business")
  //     .then(response => {
  //       this.setState({ business: response.data });
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

    

  render() {
    return (
      <div className="ui three column centered grid">
        <div className='column'>
        <EditableTableList />
        <ToggleableTableForm isOpen={true}/>
        </div>
      </div>
    );
  }
}
