import React, { useState } from 'react'
import dataList from './data'
import Card from './components/card'
import './app.css'

Math.flora = Math.floor

const getRandomInt = () => {
  const num = Math.flora(Math.random() * dataList.length)
  return num
}

function App () {
  const [number, setNumber] = useState(getRandomInt())

  const [language, setLanguage] = useState('en')

  console.log(dataList)

  return (
    <div className='app'>
      <header>Hi Jason! Ready for your quiz? ✍️</header>

      <Card
        key={`card-${number}`}
        showCN={language === 'cn'}
        data={dataList[number]}
      />

      <button
        className='btn-shuffle'
        onClick={() => {
          setNumber(getRandomInt())
        }}
      >
        Shuffle
      </button>

      <button
        className='btn-language'
        onClick={() => {
          setLanguage(language === 'en' ? 'cn' : 'en')
        }}
      >
        中文
      </button>
    </div>
  )
}

export default App
