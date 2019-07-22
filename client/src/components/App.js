import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './NavBar'
import ItemList from './ItemList'
import '../App.css';
const App = () => {
    return (
        <div>
           <Navbar/>
           <ItemList/>
        </div>
    )
}
export default App ;