import React,{Component} from 'react';
import {Content} from "./styled"
import {withRouter} from "react-router-dom"

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <Content>
                {/* 头 */}
                <div className="header">
                    <div className="back" onClick={this.handleBack.bind(this)}></div>
                </div>
                {/* 登录 */}
                <div className="login">
                    <h3>账号密码登录</h3>
                    <input type="text" placeholder="用户名/手机号/邮箱号"/>
                    <input type="password" placeholder="请输入密码"/>
                    <button>登录</button>

                   <p>新用户注册</p>
                </div>

                {/* 其他 登录方式 */}
                <div className="else">
                    <img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother.png" alt=""/>
                    <div className="way">
                        <li>
                            <img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother2.png" alt=""/>
                        </li>
                        <li>
                            <img src="https://static.epetbar.com/static_web/wap/src/images/newlogin/newother3.png" alt=""/>
                        </li>
                    </div>
                    <p>登录代表您阅读并同意<span>《E宠商城用户协议》</span></p>
                </div>
                


            </Content>
        )
    }
    handleBack(){
        this.props.history.goBack()
    }
}

export default withRouter(Login)