const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const snakeStats = {
  color: '#c0ffee',
  name: 'starter-snek',
  head_url: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/DCTM_Penguin_UK_DK_AL629526_pkusmj.jpg',
  taunt: 'heya',
  head_type: 'pixel',
  tail_type: 'pixel',
  secondary_color: '#badca7'
}

app.use(bodyParser.json())

app.get('/', (req, res) => res.json(snakeStats))

app.post('/start', (req, res) => {
  console.log(req.body)
  res.json(snakeStats)
})

app.post('/move', (req, res) => {
  const gameState = req.body
  const mySnake = gameState.you
  console.log(mySnake)
  const possibleMoves = ['up', 'down', 'left', 'right']
  res.json({ 'move': possibleMoves[Math.floor(Math.random() * 4)]})
})

app.listen(4000, () => console.log('Example app listening on port 4000!'))
