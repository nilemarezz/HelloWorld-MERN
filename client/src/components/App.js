import React ,{useEffect}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './NavBar'
import ItemList from './ItemList'
import '../App.css';
import {loadUser} from '../actions/Authaction'
import { connect } from "react-redux";
const App = (props) => {
    useEffect(()=>{
        props.loadUser()
    },[])
    return (
        <div>
           <Navbar/>
           <ItemList/>
        </div>
    )
}
const mapStateToProps = state => {
    return state;
  };
export default connect(mapStateToProps,{loadUser})(App) ;