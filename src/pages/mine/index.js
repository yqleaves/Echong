import React,{Component} from 'react';
import {Content} from "./styled"
import Header from "../../common/header"

class Mine extends Component{
    constructor(){
        super();
        this.state = {
            title: "我的E宠",
        }
    }
    render(){
        return(
            <Content>
                <Header title={this.state.title}></Header>
                <div className="set">
                    <div className="icon">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QTEzNTAxQTFERDg1MTFFOEIyNDlDRUE4ODhBRUIwRTQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QTEzNTAxQTBERDg1MTFFOEIyNDlDRUE4ODhBRUIwRTQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OEIwNUY5REZDMDY3MTFFODhDQzVFNTJCQkU3MEY1QjMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OEIwNUY5RTBDMDY3MTFFODhDQzVFNTJCQkU3MEY1QjMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6IVkSFAAAE6ElEQVR42syaa2wVRRTH+8DybHsLVIpSHgI2xShQUCEaI4khYiLhAxBIDJAYNOEDxAQij/LwAZqqEUUUgRDkk3wgYojyNBAIaISQ0PAoaD/wTFteghS4WLv+T/xvPB17987s3ZvuJL/Mtntm5py7szP/mdlcz/NyIkrlYAl4DpSQbuAuuAlugMNgJbgUVaO5EQVQBo6Cfha2TWAkuBJFw50i+iEW0flb4D3+wvKr/wG6g0IwBCwDD4MF4K1IWpYnkCEJ8Kf3b1qcxraadjdBjwjajiSANXTqLuibxrY37SR9GocAJnn/pRWWZVbR/m8wo6MD+JLOHAYFlmXE7heWawHLQadsBNAfjABlIJcNlxo2JWAm3wOXhqUr/aqe3jkwF1SAPLYn7Q4H5a4B9AK7vLbpgbqujqLvgs6ghl3JTEnj752gp00A+eCgF5yWRhSAj/zqa0Fjmnb38skEBrBcFXgdFIMq8BIYy26Vk0UGgRfYnrRbBGYrn+YGBVCpHt3mLDvqyhY1VD+eKoAfaHSekccpgAT9krSjvQDGqMc0JWbO+0xXPo4xA9jGGyfae1Figvh1kn5u9f/vi7nxzNeKPMpQXvUFr4LRoAg0glqwg0o0tGwDa8A68LKpRkWz96BiDJt6gvfB7BQq9wFYD6qpWsOkoczvmGq0ho+mlfomzFj+u9I4e8BC8AZYAn5i3ZLOgMdC6i6/jg/Md6BATe1NjtJAZMFvLFsLRqawGwXqaHeac4xtGyVqojukdZc2GgjuhZAL3yjniywcOUf71Q5trGCZO+Zkahp+QcOTlhUPYJcRnrQs8wy7QpJPz6ZMfao1hGn4vBpr+1lUPI+2Pzr25wMsN8vCdmB7479PnvGWH1XXwyxGhUrm+x1HkwPMn7KwrVDXx82bZgBJcJvXhRaV92be6BiAb9/LwraY+S0OxYEBdOHkI+mqReXXmPdxDMC3v25he1sF0jldAGPVdb1F5WeYj3MM4EXmtRa2deq6Kt22yldqSMyxfMFaiO0o9LQahUoty/hD7+dBo9BgtR5Y5DCibHCYB2SCPBtiHljMMs1c9PwvgK7gOI2uOK4HzJl4eAq7KsoIX064zMTF9MvjjkYXM4CP1TbHhBA6pdLQQruUFpKnuU/pmLqQWugV+udRu7UJ4BpvrMxAr8tuxtfgrxSL8iQX74kM2viQdTWY64EC5uczkNMyJL7J7fOJYAQlehNHku0R7EhfZN7VHIW2MrJTMV6R5dE/Sd+aXehZ9ainxzSA15SPo9sbRr/nzQugMGbOy6h4kf59l2oeqFDrgXUxC8Cfa8S/IfqeecQkJy2reD0HbAODKdru8+TlLGjNiT7lUXk+Sk12nXJmMjcbJL0NaoKkRD7Xr0HpBtjoIB3SIfVsYr1BaTdf5LS70wm+D62qcLPqXp7aAFitZ0VHZPb/zGjH7ybNRjvbU83cQQ3I/vwTxsQj4m2Bkg4eNwOKHZ0vVdLFPx+Yz/q1fJD2+2TjhCafEsGf2n8GD4U8oVnI+jrkiGmaCuIdyzLvKuenxuGU8hM6dN9il6FMSfaP4nLM2h1ctdxPivycOIqT+mawGcwnLRRtclJ/j8JLvpt4hPclbWqzvxmDbyVkkX7M8luJy2BUiJ2MrAbgb6sv5caAXCe4i5Dk02gAR/gtRUPcvlbpsPSPAAMAGD8KmWqC6N0AAAAASUVORK5CYII=" alt=""/>
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEFDQTczNkNERDg1MTFFODlDMjY4NzJEMkExMEZGMDEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEFDQTczNkJERDg1MTFFODlDMjY4NzJEMkExMEZGMDEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OTEzRDlFMUFDMDY3MTFFOEJFQTZCMzM5OEY0N0I3NkIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OTEzRDlFMUJDMDY3MTFFOEJFQTZCMzM5OEY0N0I3NkIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47zYVrAAAEWUlEQVR42uyaWUgVURjH7x0XsrQsNVrMlFIrqGgjDfEWRQ9Fm0RgEfhQ4EMhQU89tEEv4UPRQ/RQRAX1YAstRCmYLWTrQ5RlWt1sVSkNS1Hv7fb/7D91Gu61uTOac6EPfoyOc875vnPOnPkW3YFAwBXJorkiXKL7qJ+JYCGYBiaBDJAIhnGSWsE3UE8egBugBny3M7DbxhaaDDaCVSDdYh/vQBk4Ae7/KwMWgR0gT7nXDMrBPc7qC/AZfOEM66shK5UF5gEPGKf0cQvsBefD0kYMMMl0UBn4La3gAJgD3GH0ozIblIJPSr9V7NNUH2YeigHbQScHaAZbwWCLSgdD+toMPnKMbrCLY9syIJkzIuIH+0FCHypuJJ4r4ueYN0CKVQOyQT07egPy+1FxI3nAy7FfUpewDJgI3rODO2DMP1ReXf2b1OEDdTJlQCqoY8OrfbzXrbwb5dSlLth2MjaIBtVsUD3AyqtG3KVOFUDrzYBtfFD233AHKK/uCn1Ll4QyIAN0gO9ggYOU11lKA9pBejADjvOBYw5UPqSOuiuRxs+/fPYzQYNDnc/xoJZOqPhidbo7vYU3TzlYeZHX4DiIAsW6L6TxnA3QN3E5nFnUtUlOTdlCObDjNngJJkRIHPMMZIP5GgMRkcsWOzsIOsGhfm6jyhVe58uSlHFJCi0uqY/tff3cRqWQ7c9oDDJcfLsjRR7zOknj0STitdjZYdAFjvRzG2MoKjJKXmI9pnRHWDKiG/g1/iASE4FZlYDG4FtkRAQpPpTXNtWAZDvpGbCTx+Ogvyz9brDJpgFjef0oR9IFHkmrbXwds5SswgrlfhpIUn5frjyXbmO8tezjtMYsmcuQ5wlXJC+kHwYrQRxYA+6Ch6CA9wr5jB+02BhvLq+PxBoPramx6aNcCpiXszbHes5+PHoY2cgbs2xGTbUGRZsMSSuRJzaTBLOVvqPkpfKBk6AEFClbKlx5y+TuKiZ3Jb64yBd8KR1FcRjP0Q+yKsW8Hu3ZirRqCkPJNpDoYFc6gxlCn55m0QMaScheBfFgg4PP/z0glkFNvTG5W8C9dd2hs7+M+n0F44MF9SP4QJsDlU9VEr8lveWFOvhQrIOUl8TWAyVT+EdiS62RDaEb0E5X1wkiOl0CM7nn1xlLUqoBC3593ZwhI0FFT9j4M1OymF/8kFXKIl4vOkB5D2tmOfyeiBGveisxTeXZKmfs6AHc74ksougFjmtMs/+1wKF7pPsGSPEEni7N1KOLZa1osyUm/fRJMVkG2gBukSiLSks4m8tJa1F8pUoWFE31oxe6m5gf3cq3voH32ukGZ3I/you0hPf0RIAxlk7l35tZ4I7hFz6J/pAkpHK5z0cr7apAadjvIC0poi9kRvws/K0HcYYZSWH626x4WdSbYXX7qYXufJ5EWVyNZM6kzGIjA5Ob9Cbfh5iPWHq2M1jcHs6kwVeGrl6e5/dZ2H5q97iy868G//9bpS/khwADAOwYKYZNFJk3AAAAAElFTkSuQmCC" alt=""/>
                    </div>

                    <div className="potrait">
                        <img src="https://static.epetbar.com/static_wap/appmall/avatar/dog.png" alt=""/>
                        <div className="grade">
                            <span>登录</span>
                            <i>|</i>
                            <span>注册</span>
                        </div>
                    </div>

                    <div className="vip">
                        <ul>
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/08/71ff7f9ee43b98e8c68cb150f3f03169.png" alt=""/>
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/08/d3d0bc1a081b6f0412b6f045863865be.png" alt=""/>
                            <img src="https://img2.epetbar.com/nowater/2018-11/22/08/e6f08976d0cf4a51d7eb209ba4c89df7.png" alt=""/>
                            <img src="https://img2.epetbar.com/nowater/2019-01/31/14/de8b18448de149a49288d3a2f6be91fe.png" alt=""/>
                        </ul>
                    </div>
                </div>

                <div className="order">
                    <div className="box">
                        <div className="title">
                            我的订单
                        </div>
                        <div className="list">
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/fb45b8f54a662a0574c941ffb4de2d88.png" alt=""/>
                                <span>待付款</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/51435308ce6c089a450fd3ab77a5520b.png" alt=""/>
                                <span>待收货</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/e0aac3c323912454b6b0c4222d3c0edd.png" alt=""/>
                                <span>待评价</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/c3109afb1d05a016e31394cff7e6bb99.png" alt=""/>
                                <span>自动售后</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/77d6a175fa1a030b57826f7c5bcda252.png" alt=""/>
                                <span>国际订单</span>
                            </li>

                        </div>
                    </div>
                </div>

                <div className="order">
                    <div className="box">
                        <div className="title">
                            我的钱包
                        </div>
                        <div className="list list2">
                            <li>
                                <i>0</i>
                                <span>优惠券</span>
                            </li>
                            <li>
                                <i>0</i>
                                <span>E宠币</span>
                            </li>
                            <li>
                                <i>0.00</i>
                                <span>余额</span>
                            </li>
                            <li>
                                <i>0.00</i>
                                <span>红包</span>
                            </li>
                        </div>
                    </div>
                </div>

                <img className="img" src="https://img2.epetbar.com/nowater/2019-10/24/10/7eaac29196b0d05288eba4d3c86a6c5c.jpg" alt=""/>

                {/* 我的服务 */}
                <div className="order server">
                    <div className="box">
                        <div className="title">
                            我的服务
                        </div>
                        <div className="list list2">
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-06/05/00/f2f93d58a1d8ee48053595c7a1fcefda.png" alt=""/>
                                <span>联系客服</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/28/17/d3813a6151551b28c2b34c358f4afd3c.png" alt=""/>
                                <span>潮品预售</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-06/05/00/2ef8974804eee7c917d1fbc3c51b6305.png" alt=""/>
                                <span>我的团购</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/28/17/42ae00bbb4a33fa804b0d852e0233c19.png" alt=""/>
                                <span>我的收藏</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-06/05/00/1d3a06612387336fdef4340d8367a03f.png" alt=""/>
                                <span>我的兑换</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/28/17/c2a952ea1e481e67f7f0223574b93afd.png" alt=""/>
                                <span>我的关注</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/22/09/928fe6cbd944c114206ace04f9094489.png" alt=""/>
                                <span>萌爪联盟</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2018-11/28/17/1574544034bb0653a49d69c337a2db3c.png" alt=""/>
                                <span>我的捐赠</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-06/05/00/d417474a0819261bea63d703c2d4fe1e.png" alt=""/>
                                <span>我的预售</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-10/19/15/24aa6012d8e85ea2ce7adebdbc1907c5.png" alt=""/>
                                <span>我的现金券</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-11/05/14/a5201c020888233120d212462dd28243.png" alt=""/>
                                <span>十克关爱</span>
                            </li>
                            <li>
                                <img src="https://img2.epetbar.com/nowater/2019-11/11/12/353dcdd05c29c9dc1453fcb57cf6d62a.png" alt=""/>
                                <span>隐私条款</span>
                            </li>
                        </div>
                    </div>
                </div>
            </Content>
        )
    }
}

export default Mine