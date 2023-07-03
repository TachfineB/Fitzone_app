import { features } from "../constants/index3"
import styles, {layout} from "../style"
import Button from './Button'

const FeatureCard= ({icon, title, content, index}) =>(
  <div className={`flex flex-row p-6 rounded-[20px] ${index !==features.length-1 ? "mb-6" :"mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimYellow`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Each person holds untapped<br className="sm:block hidden" /> power to unleash within. </h2>
      <p className={`${styles.paragraph} max-w-[490px] mt-5`}>We believe in the power of community, creating a space where individuals come together to motivate and inspire one another. We encourage a positive and inclusive atmosphere, where everyone feels welcome, regardless of their age, background, or fitness level.</p>
      <Button styles="mt-10"/>
      
      </div>

      <div className={`${layout.sectionsImg} flex-col`}>
        {features.map((feature, index)=>(
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>

    </section>
  )
}

export default Business
