const {DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT} = process.env;

export default {
  "name": "mongodb",
  "connector": "mongodb",
  "url": `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  "host": DB_HOST,
  "port": DB_PORT,
  "user": DB_USER,
  "password": DB_PASS,
  "database": DB_NAME,
  "useNewUrlParser": true,
  useUnifiedTopology: true,
};
