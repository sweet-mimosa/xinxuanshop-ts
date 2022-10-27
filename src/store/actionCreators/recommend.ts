import * as actionTypes from '@/store/actionTypes'
import { AnyAction, Dispatch } from 'redux'
import { getRecommendRequest } from '@/api/request'
import { recommendType } from '@/models'

// 获取推荐列表
export const getRecommendDataAction = () => {
    return (dispatch: Dispatch) => {
        getRecommendRequest().then(data => {
            // console.log(data);
            dispatch(setLoading(true));
            dispatch(setRecommend(data.data));
            dispatch(setLoading(false));
        })
    }
}
// 删除商品
export const deleteItemAction = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(deleteItem(id));
    }
}

export const setLoading = (data: boolean): AnyAction => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setRecommend = (data: recommendType[]): AnyAction => ({
    type: actionTypes.SET_RECOMMEND,
    data
})

export const deleteItem = (id:number): AnyAction => ({
    type: actionTypes.DELETE_ITEM,
    data: id
})

export const setLike = (data: number): AnyAction => ({
    type: actionTypes.SET_LIKE,
    data
})