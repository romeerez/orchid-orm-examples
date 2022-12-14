import path from 'path';
import { rakeDb } from 'rake-db';
import { config } from '../config';

const migrationsPath = path.resolve(__dirname, '..', 'migrations');

rakeDb({ databaseURL: config.databaseUrl }, { migrationsPath });
