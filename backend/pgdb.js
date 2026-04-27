const { Pool } = require('pg');

const pgPool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'Angular_AWS',
  password: '1234',
  port: 5432
});

module.exports = pgPool;