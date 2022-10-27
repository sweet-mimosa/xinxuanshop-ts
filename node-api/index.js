const Koa = require('koa');
const app = new Koa();
// 跨域中间件
const cors = require('koa-cors');
const router = require('koa-router')();
const recommendRouter = require('./routes/recommend');
const tabsRouter = require('./routes/tabs');
const shopcartRouter = require('./routes/shopcart');
app.use(cors())
    .use(router.routes())
    .use(recommendRouter)
    .use(tabsRouter)
    .use(shopcartRouter)

app.use((ctx) => {
    ctx.body = 'welcome to shop!'
})

app.listen(1300);