import { card } from '../assets'
import {feedback} from '../constants/index3'
import styles from '../style'
import FeedbackCard from './FeedbackCard'
import FeedbackInput from './FeedbackInput'


const Testimonials = () => (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient'/>

      <div className='w-full flex justify-between items-center md:flex-row flex-col mb-6 relative z-[1]'>
        <h1 className={styles.heading2}>What our customers <br className='sm:block hidden'/>are saying about us</h1>
        <div className='w-full md:mt-0 mt-6'>
          <p className={`${styles.paragraph} tet-left max-w-[550px]`}>Client satisfaction is our top priority, and we strive to exceed expectations by delivering exceptional service and ensuring their needs are met with utmost care.</p>

        </div>
      </div>
      
      <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z[1]'>
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card}/>
        ))}
        <FeedbackInput/>
      </div>

    </section>
  )


export default Testimonials
