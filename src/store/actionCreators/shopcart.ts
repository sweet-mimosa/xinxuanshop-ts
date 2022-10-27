import * as actionTypes from '@/store/actionTypes'
import { AnyAction, Dispatch } from 'redux'
import { getShopcartRequest } from '@/api/request'
import { recommendType } from '@/models'

export const getShopcartDataAction = () => {
    return (dispatch: Dispatch) => {
        getShopcartRequest().then(data => {
            dispatch(setLoading(true));
            dispatch(setShopcart(data.data));
            dispatch(setLoading(false));
        })
    }
}

export const setShopcart = (data: recommendType[]): AnyAction => ({
    type: actionTypes.SET_SHOPCART,
    data
})

export const setLoading = (data: boolean): AnyAction => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setGoodsCheck = (data: number): AnyAction => ({
    type: actionTypes.SET_GOODSCHECK,
    data
})

export const setCheckAll = (data: boolean): AnyAction => ({
    type: actionTypes.SET_CHECKALL,
    data
})

export const setGoodsCount = (data: any): AnyAction => ({
    type: actionTypes.SET_GOODSCOUNT,
    data
})

export const setAddCart = (data: recommendType): AnyAction => ({
    type: actionTypes.SET_ADDCART,
    data
})