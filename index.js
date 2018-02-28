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
  res.json(snakeStats)
})

app.post('/move', (req, res) => {
  const gameState = req.body
  const mySnake = gameState.you

  const snakeHead = mySnake.body.data[0]
  const food = gameState.food.data[0]

  if (snakeHead.x - food.x === 0) {
    if (snakeHead.y - food.y > 0) {
      move = "up"
    } else {
      move = "down"
    }
  } else {
      if (snakeHead.x - food.x > 0) {
      move = "left"
    } else {
      move = "right"
    }
  }

  res.json({ 
    'move': move,
    "taunt": "Hi"
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
