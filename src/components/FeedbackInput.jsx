import React from 'react'
import { quotes } from '../assets'
import styles from '../style'

const FeedbackInput = () => (

    <div className='flex justify-between flex-col px-10 py-12 rounded-[20px] w-[370px] md:mr-10 sm:mr-5 mr-0 my-y feedback-card'>
      <img src={quotes} alt="double-quotes" className="w-[42px] h-[27px] object-contain" />
      <p className="font-poppins font-normal text-[28px] leading-[32px] text-white my-10 mt-0">Leave a review</p>
      <div className="flex flex-row">
      <div className="flex flex-col ml-4">
        <input type="text" className='w-[250px] h-[120px] center border-input color-black mb-10 align-input '/>
        <button type='button' className={`py-4 px-6 bg-yellow-gradient font-popping font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px] mt-10`}>
      Submit
    </button>
      </div>
      </div>
    </div>
  )

export default FeedbackInput
