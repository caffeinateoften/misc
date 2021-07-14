import { route as healthcheckRoutes } from './healthcheck'
import { route as personsRoutes } from './persons'

// koa.ts will apply all routes that are exported here
export const routes = [
    healthcheckRoutes,
    personsRoutes
]
