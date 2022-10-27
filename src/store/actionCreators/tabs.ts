import * as actionTypes from '@/store/actionTypes'
import { AnyAction, Dispatch } from 'redux'
import { getTabsRequest } from '@/api/request'
import { tabsType } from '@/models'

export const getTabsDataAction = () => {
    return (dispatch: Dispatch) => {
        getTabsRequest().then(data => {
            // console.log(data);
            dispatch(setLoading(true));
            dispatch(setTabs(data.data));
            dispatch(setLoading(false));
        })
    }
}

export const setLoading = (data: boolean): AnyAction => ({
    type: actionTypes.SET_LOADING,
    data
})

export const setTabs = (data: tabsType[]): AnyAction => ({
    type: actionTypes.SET_TABS,
    data
})