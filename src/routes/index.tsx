import { lazy, Suspense } from "react"
import { Routes,Route,Navigate } from 'react-router-dom'
import Home from '@/pages/Home'
import Recommend from '@/pages/Home/Recommend'
const Shopcart = lazy(() => import("@/pages/Shopcart"))
const Mine = lazy(() => import("@/pages/Mine"))
const Subs = lazy(() => import("@/pages/Home/Subs"))
const Search = lazy(() => import("@/pages/Search"))

const RouterConfig = () => {
    return (
        <Suspense fallback={<div>LOADING!!!!</div>}>
            <Routes>
                <Route path="/" element={<Navigate to="/home/recommend" replace={true}/>}></Route>
                <Route path="/home" element={<Home/>}>
                    <Route path="/home/recommend" element={<Recommend/>}></Route>
                    <Route path="/home/subs" element={<Subs/>}></Route>
                </Route>
                <Route path="/shopcart" element={<Shopcart/>}></Route>
                <Route path="/mine" element={<Mine/>}></Route>
                <Route path="/search" element={<Search/>}></Route>
            </Routes>
        </Suspense>
    )
}

export default RouterConfig
