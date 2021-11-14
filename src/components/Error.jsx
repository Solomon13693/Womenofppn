import React from "react";
import { UncontrolledAlert } from "reactstrap";

class Error extends React.Component {

  render() {
    return (
      <>
        <UncontrolledAlert color="danger"> Form was not Sent
        </UncontrolledAlert>
      </>
    );
  }
}

export default Error;