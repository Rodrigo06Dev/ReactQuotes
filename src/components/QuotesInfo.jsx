import React, { useState } from 'react'
import quotes from '../json/quotes.json';
import QuotesCard from '../components/QuotesCard'
import color from '../utils/color.js'
import '../styles/quoteContain.css'

const QuotesInfo = () => {
//se inicializan los valores de info que es donde van la frase y el autor y tambien se inicializa el valor de color
const [info, setInfo] = useState(quotes[Math.floor(Math.random() * quotes.length)])
const [randomColor, setRandomColor] = useState(color[Math.floor(Math.random() * color.length)])

//destructurzion de los valores de info
const {quote, author} = info; 

//funcion para cambiar el valor del estado
const getRandomAll = () => {
    setInfo(quotes[Math.floor(Math.random() * quotes.length)])
    setRandomColor(color[Math.floor(Math.random() * color.length)])
}
const colorBg = {
  backgroundColor: randomColor
}

  return (
    <main className='container' style={colorBg}>
        <QuotesCard 
        quote = {quote} 
        author = {author}
        randomColor = {randomColor}
        getRandomAll = {getRandomAll}/>
    </main>
  )
}

export default QuotesInfo
