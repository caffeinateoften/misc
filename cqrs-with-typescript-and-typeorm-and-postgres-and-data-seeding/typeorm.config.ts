import fs from 'fs';

const builtFileName = process.argv[2]

const defaultConfig = {
  type: 'postgres',
  host: 'localhost',
  port: 5001,
  synchronize: false,
  entities: ['./dist/commands/**/*.entity{.ts,.js}'],
  migrations: ['./dist/infrastructure/database/migration/*.ts'],
  cli: {
    migrationsDir: './dist/infrastructure/database/migration'
  },
  seeds: ['./dist/infrastructure/database/seeds/**/*{.ts,.js}'],
  factories: ['./dist/infrastructure/database/factories/**/*{.ts,.js}'],
};

const development = {
  username: 'postgres',
  password: 'password',
  database: 'phonebook_development'
};

const test = {
  username: 'postgres',
  password: 'password',
  database: 'phonebook_test'
};

const production = {
  username: 'postgres',
  password: 'password',
  database: 'phonebook_production'
};

const configMap: { [key: string]: any } = {
  development: { ...defaultConfig, ...development },
  test: { ...defaultConfig, ...test },
  production: { ...defaultConfig, ...production }
};

const environment = process.env['NODE_ENV'] || 'development';
const config = configMap[environment];

// For running typeorm through npm script, cli will look for specific config
fs.writeFileSync(builtFileName as fs.PathOrFileDescriptor, JSON.stringify(config, null, 2))

module.exports = configMap[environment];
