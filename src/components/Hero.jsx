import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from './Getstarted.jsx'

const Hero = () =>  (
    <section id='home' className={`flex md:flex-row flex-col  ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">30%</span> Discount For {""}
          <span className="text-white">2 Weeks</span> Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full pl-4">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"> 
           Unleashing <br className="sm:block hidden"/> {" "}
           <span className="text-gradient">fitness potential</span> {" "}
           
          </h1>
          
          
          <div className="ss:flex hidden md:mr-4 mr-0">
              <GetStarted/>
          </div>

        </div>
        
        <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full pl-4">
         one member at a time.
        </h1>
        <p className={`${styles.paragraph} max-w-[760px] mt-5 pl-4`}>Our gym is more than just a place to work out; it's a vibrant community of like-minded individuals who share a passion for fitness and personal growth. We foster a positive and inclusive atmosphere where everyone feels welcome and supported.</p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} relative`}>
        <img src={robot} alt="home-gym" className="w-[100%] h-[100%] relative z-[5]  " />

        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"/>
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>

      
      </div>


    </section>
  )

export default Hero
