import express from "express";
import pool from "./pg.mjs"
const app = express();
const port = 4003;
app.use(express.json());
app.get("/users", async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM actor')
        return res.json(result.rows)
    }
    catch (err) {
        console.log(err.message)
        res.status(500).send("Error")
    }


})

app.post('/adduser', async (req, res) => {
    try {
        const { name } = req.body;
        const result = await pool.query(
            'INSERT INTO users (name, email) VALUES ($1) RETURNING *',
            [name]
        );
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

app.listen(port, () => {
    console.log(`App listenling on port ${port}`)
})
