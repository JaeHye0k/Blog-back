import mariadb from "mysql";
const conn = mariadb.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "Blog",
});

export default conn;
