import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hazriq I.",
      headerLinks: [
        { title: "home", path: "/" },
        { title: "home", path: "/" },
        { title: "home", path: "/" },
      ],
      home: {
        title: "Hazriq Ishak",
        subtext: "A panic developer.",
        opener: "At least I'm trying...",
      },
      about: { title: "About Me" },
      contact: { title: "Let's talk" },
    };
  }
  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="sm">
            <Navbar.Brand>HZRQISHK</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subtext={this.state.home.subtext}
                opener={this.state.home.opener}
              />
            )}
          />
          <Route
            path="/about"
            exact
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            exact
            render={() => <ContactPage title={this.state.contact.title} />}
          />

          <Footer />
        </Container>
      </Router>
    );
  }
}
export default App;
