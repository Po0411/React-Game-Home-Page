import React from 'react'
import imgin from '../../assets/lns.png'
import './Gtec.css'

const Gtec = () => {
  return (
    <div>
        <div className="promotion-container">
        <h1 className="promotion-link">외부링크</h1>
        <span className="promotion-text">경기과학기술대 홍보 채널 모음</span>
    </div>
    <a href="https://www.instagram.com/gtec_gamecontents?igsh=MXAzY2xtYmJtNzdm" target="_blank" rel="noopener noreferrer">
        <img src={imgin} alt='' className='lns' />
    </a>
    </div>
  )
}

export default Gtec