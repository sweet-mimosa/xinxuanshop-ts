import React, { memo, useEffect, useState } from 'react'
import { RecommendWrapper, Card } from './style'
import { PullToRefresh, InfiniteScroll, Toast } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { recommendType } from '@/models'
import { getRecommendDataAction, deleteItemAction, setLike } from '@/store/actionCreators/recommend'
import { setAddCart } from '@/store/actionCreators/shopcart'

interface RecommendProps {
    loading: boolean;
    recommend: recommendType[];
    getRecommendDataActionDispatch: () => void;
    deleteItemDispatch: (id: number) => void;
    setLikeDispatch: (id: number) => void;
    setAddCartDispatch: (data: recommendType) => void;
}

const Recommend:React.FC<RecommendProps> = (props) => {
    const { recommend, loading } = props;
    const { 
        getRecommendDataActionDispatch,
        deleteItemDispatch,
        setLikeDispatch,
        setAddCartDispatch
    } = props;
    const [hasMore,setHasMore] = useState(false);
    async function loadMore() {
    }
    useEffect(() => {
        if(loading) {
            getRecommendDataActionDispatch();
        }
    }, []);
    const deleteItem = (event: any, id: number) =>{
        deleteItemDispatch(id);
        event.stopPropagation(); // 阻止事件冒泡
    }
    const onChangeLike = (id: number) => {
        setLikeDispatch(id);
    }
    const putinCart = (item: recommendType) => {
        setAddCartDispatch(item);
        Toast.show({
            content: '加入购物车成功'
        })
    }
    return (
        <RecommendWrapper>
            <PullToRefresh
                onRefresh={async () => {
                    await sleep(1000);
                    getRecommendDataActionDispatch();
                }}
            >
                <div>
                {
                    recommend.map((item) => {
                        return (
                            <Card key={item.id} model={item.like}>
                                <img src={item.image} />
                                <div className='title'>{item.title}</div>
                                <div className='desc'>
                                    <div className="price">￥{item.price}</div>
                                    <div className="buys">{item.buys}人购买</div>
                                </div>
                                <div className="icon">
                                    <div className='iconbox'>
                                        <i className='iconfont icon-xihuan'></i>
                                        <span onClick={onChangeLike.bind(null,item.id)}>喜欢</span>
                                    </div>
                                    <div className='iconbox'>
                                        <i className='iconfont icon-shopcart'></i>
                                        <span onClick={putinCart.bind(null,item)}>加购</span>
                                    </div>
                                    <div className='iconbox'>
                                        <i className='iconfont icon-shanchu' onClick={(event) => deleteItem(event,item.id)}></i>
                                        <span onClick={(event) => deleteItem(event,item.id)}>删除</span>
                                    </div>
                                </div>
                            </Card>
                        )
                    })
                }
                </div>
                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </PullToRefresh>
        </RecommendWrapper>
    )
}
const mapStateToProps = (state: rootState) => {
    return {
        loading: state.loading,
        recommend: state.home.recommend
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => ({
    getRecommendDataActionDispatch() {
        dispatch<any>(getRecommendDataAction());
    },
    deleteItemDispatch(id: number){
        dispatch(deleteItemAction(id));
    },
    setLikeDispatch(data: number) {
        dispatch<any>(setLike(data));
    },
    setAddCartDispatch(data: recommendType) {
        dispatch<any>(setAddCart(data));
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
