import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import {getItemAction,deleteItemAction} from '../actions/index'

const ItemList = (props) => {
  

  
   // DELETE Item
   const delItem = async id => {
    props.deleteItemAction(id);
  };
  // // Add Item
  // const addItem = async () => {
  //   const name = prompt("Enter Item");
  //   if (name) {
  //     const response = await fetch("/api/items", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify({ name: name })
  //     });
  //     const data = await response.json();
  //     console.log(data);
  //     setItems([...items, { name: data.name }]);
  //   }
  // };

  useEffect(() => {
    props.getItemAction();
  }, []);
  console.log(props.items)
  return (
    <Container>
      <Button
        color="dark"
        style={{ marginBottom: "2rem" }}
        // onClick={() => addItem()}
      >
        Add Item
      </Button>
      <ListGroup>
        <TransitionGroup className="item-list">
          {props.items.map(item => (
            <CSSTransition key={item._id} timeout={500} classNames="fade">
              <ListGroupItem>
                <Button
                  className="remove-btn"
                  color="danger"
                  onClick={() => {
                    delItem(item._id);
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

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps,{getItemAction,deleteItemAction})(ItemList);
