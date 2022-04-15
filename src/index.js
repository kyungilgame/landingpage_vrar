import React, { useState } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "react-responsive-modal/styles.css";

import { Modal } from "react-responsive-modal";
import { render } from "@testing-library/react";

import StudentOneInterview from "./Image/StudentOneInterview.png";
import StudentTwoInterview from "./Image/StudentTwoInterview.png";

import "./styles/css/App.css";

const studentOne = (
  <img src={StudentOneInterview} style={{ width: "100%" }}></img>
);

const studentTwo = (
  <img src={StudentTwoInterview} style={{ width: "100%" }}></img>
);

class Index extends React.Component {
  state = {
    openFirst: false,
    openSecond: false,
  };

  onOpenFirstModal = () => {
    this.setState({ openFirst: true });
  };

  onCloseFirstModal = () => {
    this.setState({ openFirst: false });
  };

  onOpenSecondModal = () => {
    this.setState({ openSecond: true });
  };

  onCloseSecondModal = () => {
    this.setState({ openSecond: false });
  };

  render() {
    const { openFirst, openSecond } = this.state;
    return (
      <React.StrictMode>
        <Router basename={process.env.PUBLIC_URL}>
          <App
            onOpenFirstModal={this.onOpenFirstModal}
            onOpenSecondModal={this.onOpenSecondModal}
          />
          <Modal
            open={openFirst}
            onClose={this.onCloseFirstModal}
            center
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
          >
            {studentOne}
          </Modal>
          <Modal open={openSecond} onClose={this.onCloseSecondModal} center>
            {studentTwo}
          </Modal>
        </Router>
      </React.StrictMode>
    );
  }
}

render(<Index />, document.getElementById("root"));
