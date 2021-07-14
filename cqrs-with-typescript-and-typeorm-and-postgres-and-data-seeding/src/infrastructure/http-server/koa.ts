import Koa, { Middleware } from 'koa';
import Router from 'koa-router';

import { routes } from './routes'
import { middlewares } from './middleware';
import { config } from './config';

export async function startKoaHttpServer() {
    const app = new Koa();
    const router = new Router();

    initialize(router, app);
    app.listen(config.port, () => {
        console.log(`Server is running in http://localhost:${config.port}`)
    })
}

function initialize(router: Router, app: Koa) {
    applyMiddleware(middlewares, app)
    applyRoutes(routes, router);
    app.use(router.routes()).use(router.allowedMethods())
}

// middleware
function applyMiddleware(middlewareFunctions: Middleware[], app: Koa): void {
    middlewareFunctions.forEach(func => app.use(func))
}

// routes
export interface RouteHandler {
    httpMethod: 'get' | 'put' | 'post' | 'delete';
    path: string
    handler: Middleware
}

function applyRoutes(routes: RouteHandler[], router: Router): void {
    routes.forEach(route => router[route.httpMethod](route.path, route.handler))
}
