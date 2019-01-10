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

import Create from "./components/create.component";
import Index from "./components/index.component";
import Edit from "./components/edit.component";

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Image
      src="/logo.png"
      size="small"
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
      style={{
        marginBottom: "2em",
        marginTop: mobile ? "1.5em" : "1.5em"
      }}
    >
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
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
                <Menu.Item as={Link} to="/" active>
                  Home
                </Menu.Item>
                <Menu.Item as={Link} to="/create">
                  Create
                </Menu.Item>
                <Menu.Item as={Link} to="/index">
                  Index
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted={!fixed}>
                    Log in
                  </Button>
                  <Button
                    as="a"
                    inverted={!fixed}
                    primary={fixed}
                    style={{ marginLeft: "0.5em" }}
                  >
                    Sign Up
                  </Button>
                </Menu.Item>
                
              </Container>
            </Menu>
            <HomepageHeading />
            <Switch>
                  <Route exact path="/create" component={Create} />
                  <Route path="/edit/:id" component={Edit} />
                  <Route path="/index" component={Index} />
                </Switch>
          </Segment>

          {/* {children} */}
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
