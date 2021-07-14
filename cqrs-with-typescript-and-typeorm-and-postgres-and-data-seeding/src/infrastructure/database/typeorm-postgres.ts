import { createConnection, getConnectionOptions } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";

export async function createPostgresConnectionWithProjectConfig(){
    //@ts-ignore // typeorm internals has a type issue.
    const ormOpts: PostgresConnectionOptions = await getConnectionOptions()
    const connection = await createConnection(ormOpts)
    return connection;
}
