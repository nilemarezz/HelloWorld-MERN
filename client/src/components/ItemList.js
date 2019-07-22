import React, { useState, useEffect } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import {getItemAction} from '../actions/index'

const ItemList = (props) => {
  const [items, setItems] = useState([]);

  // GET Items
  // const fetchItems = async () => {
  //   const response = await fetch("/api/items");
  //   const data = await response.json();
  //   setItems(data);
  // };
  // // DELETE Item
  // const delItem = async id => {
  //   const response = await fetch(`/api/items/${id}`, {
  //     method: "DELETE"
  //   });
  //   const data = await response.json();
  //   const filter = items.filter(item => item._id !== data.id);
  //   setItems(filter);
  // };
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
  console.log(props);
  return (<div></div>
    // <Container>
    //   <Button
    //     color="dark"
    //     style={{ marginBottom: "2rem" }}
    //     onClick={() => addItem()}
    //   >
    //     Add Item
    //   </Button>
    //   <ListGroup>
    //     <TransitionGroup className="item-list">
    //       {items.map(item => (
    //         <CSSTransition key={item._id} timeout={500} classNames="fade">
    //           <ListGroupItem>
    //             <Button
    //               className="remove-btn"
    //               color="danger"
    //               onClick={() => {
    //                 delItem(item._id);
    //               }}
    //             >
    //               &times;
    //             </Button>
    //             {item.name}
    //           </ListGroupItem>
    //         </CSSTransition>
    //       ))}
    //     </TransitionGroup>
    //   </ListGroup>
    // </Container>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps,{getItemAction})(ItemList);
