import React,{Component} from "react"
import {Search_Box} from "./styled"
import {Link,withRouter} from "react-router-dom"

class Search extends Component{
    constructor(pros){
        super(pros);
        this.state = {
            label:["宝路","狗狗香波","比熊","海藻粉","比瑞吉","跳蚤","驱虫药","狗粮"]
        }
    }
    render(){
        let {label} = this.state
        return(
            <Search_Box>
               <div className="head">
                    <i onClick={this.handleBack.bind(this)}></i>
                    <input type="text" placeholder="搜索你喜欢的宝贝"/>
                    <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/search-ico.png" alt=""/>
                    <Link to="/shopList">搜索</Link>
               </div>           

                {/* 精品推荐 */}
               <div className="rare">
                   <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt=""/>
                   精品推荐
                </div>   

                {/* label */}
                <div className="label">
                    {
                        label.map((item,index)=>(
                            <Link to="/shopList" key={index}>
                                {item}
                            </Link>
                        ))
                    }
                   
                </div>

                 {/* 最近搜索 */}
               <div className="rare">
                   <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" alt=""/>
                   最近搜索
                </div> 
            </Search_Box>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default withRouter(Search)