import React from 'react'

const Button = ({styles}) => {
  return (
    <a href="#form"type='button' className={`py-4 px-6 bg-yellow-gradient font-popping font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]`}>
      Get started
    </a>
  )
}

export default Button
