import Loadable from "react-loadable"
import Loading from "../components/loading"

export const Selected = Loadable({
    loader:()=>import("./selected"),
    loading:Loading
})

export const Kind = Loadable({
    loader:()=>import("./kind"),
    loading:Loading
})

export const Book = Loadable({
    loader:()=>import("./book"),
    loading:Loading
})

export const Cart = Loadable({
    loader:()=>import("./cart"),
    loading:Loading
})

export const Mine = Loadable({
    loader:()=>import("./mine"),
    loading:Loading
})

export const Login = Loadable({
    loader:()=>import("./login"),
    loading:Loading
})


export const Home = Loadable({
    loader:()=>import("./home"),
    loading:Loading
})

export const Collect = Loadable({
    loader:()=>import("./collect"),
    loading:Loading
})

export const Video = Loadable({
    loader:()=>import("./video"),
    loading:Loading
})

export const Check = Loadable({
    loader:()=>import("./check"),
    loading:Loading
})

export const Detail = Loadable({
    loader:()=>import("./detail"),
    loading:Loading
})

export const Shop = Loadable({
    loader:()=>import("./shop"),
    loading:Loading
})

export const ShopList = Loadable({
    loader:()=>import("./shopList"),
    loading:Loading
})


export const Brand = Loadable({
    loader:()=>import("./brand"),
    loading:Loading
})

export const Main = Loadable({
    loader:()=>import("./main"),
    loading:Loading
})

export const Search = Loadable({
    loader:()=>import("./search"),
    loading:Loading
})

export const VideoDetail = Loadable({
    loader:()=>import("./videoDetail"),
    loading:Loading
})
