import React from "react";
import { Container, Row } from "react-bootstrap";
import Card from "./Card";

import twitter from "../assets/images/twitter.png";
import blog from "../assets/images/blog.png";
import contact from "../assets/images/contact.png";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Twitter",
          subtitle: "I'm working on happiness",
          imgSrc: twitter,
          link: "",
          selected: false,
        },
        {
          id: 1,
          title: "Blog",
          subtitle: "Still learning...",
          imgSrc: blog,
          link: "",
          selected: false,
        },
        {
          id: 2,
          title: "Contact",
          subtitle: "Come. Let's have coffee!",
          imgSrc: contact,
          link: "",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) item.selected = false;
    });

    this.setState({ items });
  };

  displayItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          onClick={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.displayItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
