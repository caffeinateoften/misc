import { startKoaHttpServer } from './infrastructure/http-server/koa';
export { RouteHandler } from './infrastructure/http-server/koa';

import { createPostgresConnection } from './infrastructure/database/typeorm-postgres';

async function main() {
    await createPostgresConnection();
    startKoaHttpServer();
}

main().then().catch(err => console.log(err));
