import { recommendType } from '@/models';
import { combineReducers, AnyAction } from 'redux'
import * as actionTypes from '@/store/actionTypes'

const initState = {
    loading: true,
    home: {
        tabs: [],
        recommend: []
    },
    shopcart: []
}
// 选中/取消选中商品
const changeCart = (list: recommendType[], id: number) => {
    let idx = list.findIndex(data => id == data.id);
    list[idx].check = !list[idx].check;
    return list;
}
// 改变数量
const changeCount = (list: recommendType[], data: any) => {
    let idx = list.findIndex(item => item.id === data.id);
    list[idx].count = data.value;
    return list;
}
// 喜欢商品
const changeLike = (list: recommendType[], id: number) => {
    let idx = list.findIndex(data => id == data.id);
    list[idx].like = !list[idx].like;
    console.log(list);
    
    return list;
}
// 添加商品
const addCart = (list: recommendType[], data: recommendType) => {
    let newList = list;
    let newdata = {
        ...data,
        addcart: true
    }
    let index = newList.findIndex(item => item.id == newdata.id);
    // console.log(index);
    if(index == -1){
        newList.push(newdata);
        return newList;
        
    }else{
        newList[index].count++;
        return newList;
    }
}
const homeReducer = (state = initState.home, action: AnyAction) => {
    switch(action.type){
        case actionTypes.SET_TABS :
            return {
                ...state,
                tabs: action.data
            }
        case actionTypes.SET_RECOMMEND:
            return {
                ...state,
                recommend: action.data
            }
        case actionTypes.DELETE_ITEM:
            let deleteID = action.data;
            let newList = state.recommend.filter((item: recommendType) => item.id !== deleteID);
            return {
                ...state,
                recommend: newList
            }
        case actionTypes.SET_LIKE:
            return {
                ...state,
                recommend: changeLike(Object.assign([],state.recommend),action.data)
            }
        default:
            return state;
    }
}
const shopcartReducer = (state = initState.shopcart, action: AnyAction) => {
    switch(action.type) {
        case actionTypes.SET_SHOPCART:
            return action.data;
        case actionTypes.SET_GOODSCHECK:
            return changeCart(Object.assign([],state),action.data);
        case actionTypes.SET_CHECKALL:
            return state.map((item: recommendType) => {
                item.check = !action.data;
                return item;
            })
        case actionTypes.SET_GOODSCOUNT:
            return changeCount(Object.assign([],state),action.data);
        case actionTypes.SET_ADDCART:
            return addCart(Object.assign([],state),action.data);
        default: 
            return state;
    }
}
const loadingReducer = (state = initState.loading, action: AnyAction) => {
    switch(action.type) {
        case actionTypes.SET_LOADING:
            return action.data;
        default:
            return state;
    }
}

const reducers = combineReducers({
    home: homeReducer,
    loading: loadingReducer,
    shopcart: shopcartReducer
})
export default reducers;