"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var builtFileName = process.argv[2];
var defaultConfig = {
    type: 'postgres',
    host: 'localhost',
    port: 5001,
    synchronize: true,
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/infrastructure/database/migration/*.ts'],
    cli: {
        migrationsDir: 'src/infrastructure/database/migration'
    },
    seeds: ['src/infrastructure/database/seeds/**/*{.ts,.js}'],
    factories: ['src/infrastructure/database/factories/**/*{.ts,.js}'],
};
var development = {
    username: 'postgres',
    password: 'password',
    database: 'phonebook_development'
};
var test = {
    username: 'postgres',
    password: 'password',
    database: 'phonebook_test'
};
var production = {
    username: 'postgres',
    password: 'password',
    database: 'phonebook_production'
};
var configMap = {
    development: __assign(__assign({}, defaultConfig), development),
    test: __assign(__assign({}, defaultConfig), test),
    production: __assign(__assign({}, defaultConfig), production)
};
var environment = process.env['NODE_ENV'] || 'development';
var config = configMap[environment];
// For running typeorm through npm script, cli will look for specific config
fs_1.default.writeFileSync(builtFileName, JSON.stringify(config, null, 2));
module.exports = configMap[environment];
