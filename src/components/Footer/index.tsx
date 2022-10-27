import { NavLink,useLocation } from 'react-router-dom'
import { isPathPartlyExisted } from '@/utils/index'
import { FooterWrapper } from './style'
import { memo } from 'react'

const Footer = (): any => {
    const { pathname } = useLocation();
    const arr = ['/search'];
    if(isPathPartlyExisted(arr,pathname))
        return null;
    return (
        <FooterWrapper>
            <NavLink to='/home/'>
                <i className='iconfont icon-shouye'></i>
                <span>首页</span>
            </NavLink>
            <NavLink to='/shopcart'>
                <i className='iconfont icon-shopcart'></i>
                <span>购物车</span>
            </NavLink>
            <NavLink to='/mine'>
                <i className='iconfont icon-mine'></i>
                <span>我的</span>
            </NavLink>
        </FooterWrapper>
    )
}

export default memo(Footer)
