import { RouteHandler } from '../../../index';

export const route: RouteHandler = {
    httpMethod: 'get',
    path: '/',
    handler: async (ctx) => {
        ctx.body = 'I am healthy'
    }
}
