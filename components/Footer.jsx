import React from 'react'
import { AiFillInstagram, AiFillTwitter, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 No Ls Tech All Rights Reserved</p>
      <p className='icons'>
          <AiFillInstagram/>
          <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer