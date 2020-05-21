import Koa from 'koa'

const app = new Koa()

app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next()
})

app.use(async (ctx, next) => {
    const start = new Date().getTime()
    if(start > 1){
        await next()
    }else {
        ctx.response.status = 403
    }
    const ms = new Date().getTime() - start;
    console.log(`Time: ${ms}ms`);
})

app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>Hello, Koa2!</h1>'
})

app.listen(8080)
console.log('app started at port 8080...');