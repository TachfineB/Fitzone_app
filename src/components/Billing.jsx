import { apple, bill, google } from "../assets"
import styles, {layout} from "../style"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />


    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Power up your journey<br className="sm:block hidden"/> with our fitness app.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Get the most out of your fitness journey with our app. Track your progress, access personalized workout plans, and stay motivated with expert guidance. Anytime, anywhere, our app is here to support your fitness goals.
      </p>
      
      <div className="flex flex-row flex-wrap mt-6">
        <img src={apple} alt="apple-store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"/>
        <img src={google} alt="google-play" className="w-[128px] h-[42px] object-contain cursor-pointer"/>

      </div>

    </div>
  </section>

) 

export default Billing
