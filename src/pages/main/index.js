import React from "react"
import { Content } from "./styled"
import { NavLink } from "react-router-dom"

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            activeIndex: 1,
            list: [
                {
                    title: "为您推荐",
                    path: "/kind/recommond",
                    id:1
                },
                {
                    title: "E宠国际",
                    path: "/kind/internal",
                    id:2
                },
                {
                    title: "狗狗主粮",
                    path: "/kind/host",
                    id:3
                },
                {
                    title: "狗狗零食",
                    path: "/kind/snacks",
                    id:4
                },
                {
                    title: "狗狗玩具",
                    path: "/kind/toy",
                    id:5
                },
                {
                    title: "狗狗清洁",
                    path: "/kind/clean",
                    id:6
                },
                {
                    title: "狗狗保健",
                    path: "/kind/health",
                    id:7
                },

                {
                    title: "狗狗护理",
                    path: "/kind/nurse",
                    id:8
                },
                {
                    title: "狗狗生活",
                    path: "/kind/life",
                    id:9
                },
                {
                    title: "狗狗牵引",
                    path: "/kind/tow",
                    id:10
                },
                {
                    title: "出游洗澡",
                    path: "/kind/bath",
                    id:11
                },
                {
                    title: "狗狗服饰",
                    path: "/kind/clothes",
                    id:12
                },
                {
                    title: "狗狗美容",
                    path: "/kind/Cosmetology",
                    id:13
                },
                {
                    title: "狗狗窝垫",
                    path: "/kind/mat",
                    id:14
                },

            ]
        }
    }
    render(){
        let {list,activeIndex} = this.state
        return(
            <Content>
                 <div className="left-box">
                    <ul>
                        {
                            list.map((item, index) => (
                                <li key={item.id} >
                                    <NavLink className={activeIndex === item.id?'active':""}
                                     to={item.path} onClick={this.handleIndex.bind(this,item.id)}>
                                         {item.title}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>

                </div>

                <div className="right-box">
                    <div className="title">
                        热门分类
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/shopList">
                                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="" />
                                <p>进口狗粮</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="" />
                                <p>进口狗粮</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="" />
                                <p>进口狗粮</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="" />
                                <p>进口狗粮</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="" />
                                <p>进口狗粮</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="" />
                                <p>进口狗粮</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Content>
        )
    }
    handleIndex(index){
        this.setState({
            activeIndex:index
        })
        console.log(this.state.activeIndex)
    }
}

export default Main