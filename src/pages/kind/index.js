import React, { Component } from 'react';
import { Content } from "./styled"
import { NavLink } from "react-router-dom"

class Kind extends Component {
    constructor() {
        super();
        this.state = {
            title: [
                {
                    title: "分类",
                    path: "/kind/main"
                },
                {
                    title: "品牌",
                    path: "/kind/brand"
                }
            ],

           
        }
    }
    render() {
        let {  title } = this.state
        return (
            <Content>
                <div className="head-box">
                    {
                        title.map(item => (
                            <NavLink to={item.path} key={item.path}>
                                <span>{item.title}</span>
                            </NavLink>
                        ))
                    }

                   
                    <img src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png" alt="" />
                </div>
            </Content>
        )
    }
}

export default Kind