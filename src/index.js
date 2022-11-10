import express from 'express'
import { pool } from './db.js'
import { PORT } from './config.js'
const app = express()

app.get('/', async (req, res) => {
  const [data] = await pool.query('select * from users')
  res.json(data)
})

app.get('/ping', async (req, res) => {
  const [data] = await pool.query('select 1 + 1 as suma')
  console.log(data[0])
  res.send('hola')
})

app.get('/create', async (req, res) => {
  const [data] = await pool.query('insert into users(name) values("Juan")')

  res.json({ data })
})

app.listen(PORT)
console.log(`server on port ${PORT}`)
