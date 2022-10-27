/**
 * @param px像素
 * @returns rem像素
 * @fun 将px转为rem
 */
export const px2rem = (px:number): string => {
    return `${px / 20}rem`
}
/**
 * @param pathArr 
 * @param path 
 * @returns boolean
 * @fun 判断当前路由是否在路由数组中
 */
export const isPathPartlyExisted = (pathArr:string[],path:string):boolean =>{
    let pathRes =path.split('/');
    if(pathRes[1] && pathArr.indexOf(`/${pathRes[1]}`)!=-1) return true;
    return false;
}

/**
 * 防抖
 * @param func 
 * @param delay 
 * @returns 
 */
 export const debounce = (func:Function, delay:number) => {
    let timer:any;
    return function (...args:any[]) {
        if(timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.apply(this, args);
            clearTimeout(timer);
        }, delay);
    };
  };