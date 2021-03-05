import React from "react";
import { Form, Button } from "react-bootstrap";
import Content from "../components/Content";
import Hero from "../components/Hero";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    // console.log(name);
    // console.log(value);

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      disabled: true,
    });
  };

  render() {
    return (
      <div>
        <Hero {...this.props}></Hero>
        <Content>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label htmlFor="full-name">Full name</Form.Label>
              <Form.Control
                id="full-name"
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="email">Message</Form.Label>
              <Form.Control
                id="message"
                name="message"
                as="textarea"
                rows={4}
                value={this.state.message}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button type="submit" disabled={this.state.disabled}>
              Send
            </Button>

            {this.state.emailSent === true && (
              <p className="d-inline success-msg">Email Sent..</p>
            )}
            {this.state.emailSent === false && (
              <p className="d-inline err-msg">Email Not Sent..</p>
            )}
          </Form>
        </Content>
      </div>
    );
  }
}

export default ContactPage;
