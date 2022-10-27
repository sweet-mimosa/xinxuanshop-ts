import React, { memo, useEffect } from 'react'
import { NavWrapper, HomeWrapper } from './style'
import { NavLink,useLocation,useNavigate,Outlet } from 'react-router-dom'
import logo from '@/assets/images/logo.png'
import SearchBox from '@/components/SearchBox'
import Swipers from '@/components/Swiper'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { getTabsDataAction } from '@/store/actionCreators/tabs'
import { tabsType } from '@/models'

interface HomeProps {
    loading : boolean;
    tabs: tabsType[];
    getTabsDataActionDispatch: () => void;
}
const Home: React.FC<HomeProps> = (props) => {
    const {loading,tabs} = props;
    const {getTabsDataActionDispatch} = props;
    const navigator = useNavigate();
    useEffect(() => {
        navigator('/home/recommend');
        getTabsDataActionDispatch();
    }, []);
    return (
        <HomeWrapper>
            <NavWrapper>
                <NavLink to='/'>
                    <img src={logo} alt="logo" />
                </NavLink>
                <NavLink to='/home/recommend'>
                    <span>推荐</span>
                </NavLink>
                <NavLink to='/home/subs'>
                    <span>订阅</span>
                </NavLink>
                <NavLink to='/search'>
                    <i className='iconfont icon-sousuo'></i>
                </NavLink>
            </NavWrapper>
            <div className='searchbox'>
                <SearchBox />
            </div>
            <Swipers source={tabs} />
            <Outlet/>
        </HomeWrapper>
    )
}

const mapStateToProps = (state: rootState) => {
    return {
        loading: state.loading,
        tabs: state.home.tabs
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getTabsDataActionDispatch() {
        dispatch<any>(getTabsDataAction())
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(memo(Home))
