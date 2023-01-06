const express = require('express');
const router = express.Router();
const mariadb = require('mariadb');
const tabel = fs.readFileSync('./movie_table.sql').toString();

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    connectionLimit: 5
});

router.post('/', async (req, res) => {
    let conn = null;
    try {
        conn = await pool.getConnection();
        const body = req.body;
        await conn.query("CREATE DATABASE IF NOT EXISTS " + body.nim);
        await conn.query("USE " + body.nim);

    } catch (error) {
        console.log(error);
    }finally{
        if(conn) return conn.end();
    }
})