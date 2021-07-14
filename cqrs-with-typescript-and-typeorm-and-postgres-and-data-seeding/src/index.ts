import { startKoaHttpServer } from './infrastructure/http-server/koa';
export { RouteHandler } from './infrastructure/http-server/koa';

import { createPostgresConnectionWithProjectConfig } from './infrastructure/database/typeorm-postgres';

async function main() {
    await createPostgresConnectionWithProjectConfig();
    startKoaHttpServer();
}

main().then().catch(err => console.log(err));
