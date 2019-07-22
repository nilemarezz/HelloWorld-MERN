import React, { useState } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "uuid";

const ItemList = () => {
  const [items, setItems] = useState([
    { id: uuid(), name: "Egg" },
    { id: uuid(), name: "Milk" },
    { id: uuid(), name: "Water" },
    { id: uuid(), name: "Steak" }
  ]);

const delItem = id =>{
    const filter = items.filter(item =>item.id !== id)
    setItems(filter);
}

  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        onClick={() => {
          const name = prompt("Enter Item");
          if (name) {
            setItems([...items, { id: uuid(), name: name }]);
          }
        }}
      >
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="item-list">
          {items.map(item => (
            <CSSTransition key={item.id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  onClick={() => {
                    delItem(item.id);
                  }}
                >
                  &times;
                </Button>
                {item.name}
              </ListGroupItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ListGroup>
    </Container>
  );
};

export default ItemList;
