import React from "react";
import { UncontrolledAlert } from "reactstrap";

class Alert extends React.Component {

  render() {
    return (
      <>
        <UncontrolledAlert color="success"> Form was Sent
        </UncontrolledAlert>
      </>
    );
  }
}

export default Alert;