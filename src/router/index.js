import {
    Selected,Kind,Book,Mine,Login,Cart,
    Home,Collect,Video,Check,Detail,Shop,
    VideoDetail,Brand,Main,Search
} from "pages"


export const TabBarRoute = [
    {
        path:"/selected",
        component:Selected,
        meta:{
            flag:true
        },
        icon:"\ue711",
        text:"精选"
    },
    {
        path:"/kind",
        component:Kind,
        meta:{
            flag:true
        },
        icon:"\ue635",
        text:"分类",
        children:[
            {
                path:'/kind/main',
                component:Main,
                meta:{
                    flag:true
                }
            },
            {
                path:'/kind/brand',
                component:Brand,
                meta:{
                    flag:true
                }
            },
        ]
    },
    {
        path:"/book",
        component:Book,
        meta:{
            flag:true
        },
        icon:"\ue6bc",
        text:"小萌书",
        children:[
            {
                path:"/book/home",
                component:Home,
                text:"推荐",
                meta:{
                    flag: true
                }
            },
            {
                path:"/book/collect",
                component:Collect,
                text:"收藏",
                meta:{
                    flag: true
                }
            },
            {
                path:"/book/check",
                component:Check,
                text:"达人测评",
                meta:{
                    flag: true
                }
            },
            {
                path:"/book/video",
                component:Video,
                text:"养宠视频",
                meta:{
                    flag: true
                }
            }
        ]
    },
    {
        path:"/cart",
        component:Cart,
        meta:{
            flag:true,
        },
        icon:"\ue64c",
        text:"购物车"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue60f",
        text:"我的"
    },
   
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
   
    {
        path:"/detail",
        component:Detail,
        meta:{},
        children:[
            {
                path:'/detail/shop',
                component:Shop,
                text:"商品",
                meta:{
                    
                }
            },
            {
                path:'/detail/item',
                component:Shop,
                text:"详情",
                meta:{
                    
                }
            },
            {
                path:'/detail/evaluate',
                component:Shop,
                text:"评价",
                meta:{
                   
                }
            }
        ]
    },
    {
        path:"/videoDetail",
        component:VideoDetail,
        meta:{}
    },
    {
        path:"/search",
        component:Search,
        meta:{
            flag:true
        }
    },
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)