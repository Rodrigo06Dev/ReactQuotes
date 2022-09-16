import React from 'react'
import '../styles/quoteCard.css'


const QuotesCard = ({quote, author, randomColor, getRandomAll}) => {

const colorText = {
    color: randomColor
}
const colorBg = {
    backgroundColor: randomColor
}
  return (
    <article className='card' style={colorText}>
        <span className='card__symbol'>&#8220;</span>
        <p className="card__quote">{quote}</p>           
        <h1 className='card__author'>{author}</h1>       
        <button className='card__btn' onClick={getRandomAll} style={colorBg}>&gt;</button>
    </article>
  )
}

export default QuotesCard