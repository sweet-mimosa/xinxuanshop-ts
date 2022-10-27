import { axiosInstance } from "./config";
import { URL_RECOMMEND, URL_TABS, URL_SHOPCART } from "./url";


export const getRecommendRequest = () => 
    axiosInstance.get(URL_RECOMMEND);

export const getTabsRequest = () => 
    axiosInstance.get(URL_TABS);

export const getShopcartRequest = () => 
    axiosInstance.get(URL_SHOPCART);
