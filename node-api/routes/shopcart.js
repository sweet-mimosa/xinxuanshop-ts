const router = require('koa-router')();
const shopcart = require('../data/shopcart');

router.get('/shopcart', async (ctx) => {
    const resData = {
        data: shopcart,
        code: 0,
        message: "success"
    }
    ctx.body = resData;
})

module.exports = router.routes();