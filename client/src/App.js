// Children: UserDashboard
// Routes to SignInForm, SignUpForm, HomepageHeading

import PropTypes from "prop-types";
import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Icon,
  Image,
  Menu,
  Responsive,
  Segment
} from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import UserDashboard from "./components/userDashboard.component";
import SignInForm from "./components/signInForm.component";
import SignUpForm from "./components/signUpForm.component";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      src="/MBLogo-190127.svg"
      size="huge"
      centered
      style={{
        marginBottom: "2em",
        marginTop: mobile ? "1.5em" : "3em"
      }}
    />

    <Header
      as="h5"
      content="Custom Encounter Tables For Your D&D World"
      inverted
      style={{
        fontSize: mobile ? "1em" : "1em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : ".25em"
      }}
    />
    <Button
      primary
      size="small"
      as={Link}
      to="/userDashboard"
      style={{
        marginBottom: "2em",
        marginTop: mobile ? "1.5em" : "1.5em"
      }}
    >
      Get Started
      <Icon name="right arrow" />
      {/* <Route path="/userDashboard" component={UserDashboard} /> */}
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { fixed } = this.state;

    return (
      <Router>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 800, padding: "1em 0em" }}
            vertical
          >
            <Menu
              fixed={fixed ? "top" : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
            >
              <Container>
                {/* <Menu.Item position="left" as={Link} to="/">
                  <Image src="/MBLogo-190127.svg" size="small" centered />
                </Menu.Item> */}
                <Menu.Item position="right">
                  <Button
                    as={Link}
                    to="/signInForm"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Log in
                  </Button>
                  <Button
                    as={Link}
                    to="/signUpForm"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
              </Container>
            </Menu>
            <Switch>
              <Route exact path="/" component={HomepageHeading} />
              <Route path="/userDashboard" component={UserDashboard} />
              <Route path="/signInForm" component={SignInForm} />
              <Route path="/signUpForm" component={SignUpForm} />
            </Switch>
          </Segment>
        </Responsive>
      </Router>
    );
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node
};

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
  </div>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node
};

export default ResponsiveContainer;
