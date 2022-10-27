import React from 'react'
import { px2rem } from '@/utils'
import { SearchBoxWrapper } from './style'

const SearchBox = () => {
    return (
        <SearchBoxWrapper>
            <input type="text" className='box'
                placeholder='寻找宝贝店铺'
            />
            <i className='iconfont icon-sousuo'></i>
        </SearchBoxWrapper>
    )
}

export default SearchBox
