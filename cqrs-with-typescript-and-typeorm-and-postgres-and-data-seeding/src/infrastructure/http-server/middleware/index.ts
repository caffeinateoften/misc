import { logger } from './logger'
import { requestBodyParser } from './request-body-parser'

// koa.ts will apply any middleware that is exported here.
export const middlewares = [
    logger,
    requestBodyParser
]
