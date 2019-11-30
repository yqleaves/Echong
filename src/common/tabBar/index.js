import React,{Component} from 'react'
import {Footer} from "./styled"
import {TabBarRoute} from "../../router"
import {NavLink} from "react-router-dom"

class TabBar extends Component{
    render(){
        return(
            <Footer>
                <ul>
                    {
                        TabBarRoute.map(item => (
                            <li key={item.path}>
                                <NavLink to={item.path} >
                                    <i className="iconfont">{item.icon}</i>
                                    <b>{item.text}</b>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                
            </Footer>
        )
    }
}

export default TabBar
