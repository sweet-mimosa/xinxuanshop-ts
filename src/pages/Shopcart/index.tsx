import { connect } from 'react-redux'
import React, { memo, useEffect } from 'react'
import { ShopcartWrapper } from './style'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { PullToRefresh, Stepper } from 'antd-mobile'
import { 
    getShopcartDataAction, 
    setGoodsCheck,
    setCheckAll, 
    setGoodsCount
} from '@/store/actionCreators/shopcart'
import { recommendType } from '@/models'
import { sleep } from 'antd-mobile/es/utils/sleep'

interface ShopcartProps {
    loading: boolean;
    shopcart: recommendType[];
    getShopcartDataActionDispatch: () => void;
    setGoodsCheckDispatch: (id: number) => void;
    setCheckAllDispatch: (data: boolean) => void;
    checkAll: boolean;
    setGoodsCountDispatch: (data: any) => void;
    total: number;
}

const Shopcart:React.FC<ShopcartProps> = (props) => {
    const { shopcart, loading, checkAll, total } = props;
    const { getShopcartDataActionDispatch, 
        setGoodsCheckDispatch,
        setCheckAllDispatch,
        setGoodsCountDispatch
    } = props;
    useEffect(() => {
        if(loading){
            getShopcartDataActionDispatch();
        }
    }, []);
    const onCheckChange = (id: number) => {
        setGoodsCheckDispatch(id);
    }
    const onCheckAll = () => {
        setCheckAllDispatch(checkAll);
    }
    const onChangeCount = (id: number, value: number) => {
        setGoodsCountDispatch({id,value});
    }
    return (
        <ShopcartWrapper>
            <div className="header">
                购物车
            </div>
            <PullToRefresh
                onRefresh={async () => {
                    await sleep(1000);
                    getShopcartDataActionDispatch();
                }}
            >
                <ul>
                    {
                        shopcart.map((item) => {
                            return (
                                <li className='container' key={item.id}>
                                    <input type="checkbox" 
                                        checked={item.check}
                                        onChange={onCheckChange.bind(null,item.id)}
                                    />
                                    <div className="images">
                                        <img src={item.image} />
                                    </div>
                                    <div className='body-right'>
                                        <p>{item.title}</p>
                                        <div className='count'>
                                            <p>￥{item.price}</p>
                                            <Stepper min={1} 
                                                defaultValue={item.count}
                                                onChange={value =>{
                                                    onChangeCount(item.id,value);
                                                }}
                                            />
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </PullToRefresh>
            <div className="pricecount">
                <input type="checkbox" onChange={() => onCheckAll()} checked={checkAll}/>
                <span>全选</span>
                <div className="price">
                    <p>总价为:￥{total}</p>
                </div>
            </div>
        </ShopcartWrapper>
    )
}

const mapStateToProps = (state: rootState) => {
    return {
        loading: state.loading,
        shopcart: state.shopcart,
        checkAll: state.shopcart.length &&
            state.shopcart.every((item: recommendType) => item.check == true),
        total: state.shopcart.reduce((pre: number,item: recommendType) => 
            item.check ? pre + item.price*item.count : pre, 0)
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getShopcartDataActionDispatch() {
        dispatch<any>(getShopcartDataAction());
    },
    setGoodsCheckDispatch(data: number) {
        dispatch<any>(setGoodsCheck(data));
    },
    setCheckAllDispatch(data: boolean) {
        dispatch<any>(setCheckAll(data));
    },
    setGoodsCountDispatch(data: any) {
        dispatch<any>(setGoodsCount(data));
    }
})

export default connect(mapStateToProps,mapDispatchToProps)(memo(Shopcart))
