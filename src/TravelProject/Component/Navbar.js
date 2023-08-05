import { Component } from "react";
import "../Routes/Style.css"
import { MenuItem } from "./ManuItems";
import { Link } from "react-router-dom";

class navbar extends Component{
    render(){
        return(
            <nav className="navbarItems">
                <img src ="image\logo2.png" id='pagelogo'/>
                <ul className="nav-menu">
                    {MenuItem.map((item, index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName}to={item.url}>
                                <i className={item.icon}></i>{item.title}</Link>
                            </li>
                        )
                    })}
                    <button id="sign"><div>Sign Up</div></button>
                    
                </ul>
            </nav>
        )

    }
}
export default navbar;