import { RouteHandler } from '../../../index';

export const route: RouteHandler = {
    httpMethod: 'get',
    path: '/persons',
    handler: async (ctx) => {
        ctx.body = 'Hello World from Persons'
    }
}
