const db = require('../db')

class PostController {
    async createPost(req, res) {
        const { title, content, user_id } = req.body

        const nwePost = await db.query(
            `INSERT INTO post (title, content, user_id) values ($1, $2, $3) RETURNING *`,
            [title, content, user_id]
        )

        res.json(nwePost.rows[0])
    }
    async getPostByUser(req, res) {
        const id = req.query.id

        const posts = await db.query(`SELECT * FROM post where user_id = $1`, [id])

        res.json(posts.rows)
    }
    async createTable(req, res) {
        await db.query(`create TABLE post(id serial PRIMARY KEY, title VARCHAR(255), content VARCHAR(255), user_id INTEGER, FOREIGN KEY (user_id) REFERENCES person (id))`)

        res.json({ "Create table:": true })
    }
}

module.exports = new PostController()