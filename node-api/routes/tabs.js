const router = require('koa-router')();
const tabs = require('../data/tabs');

router.get('/tabs', async (ctx) => {
    const resData = {
        data: tabs,
        code: 0,
        message: "success"
    }
    ctx.body = resData;
})

module.exports = router.routes();