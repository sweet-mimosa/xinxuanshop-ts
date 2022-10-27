const router = require('koa-router')();
const recommend = require('../data/recommend');

router.get('/recommend', async (ctx) => {
    const resData = {
        data: recommend,
        code: 0,
        message: "success"
    }
    ctx.body = resData;
})

module.exports = router.routes();