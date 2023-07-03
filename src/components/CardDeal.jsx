import { card } from "../assets"
import styles, {layout} from "../style"
import Button from "./Button"


const CardDeal = () => (

    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
        Effortlessly track and<br className="sm:block hidden"/>  monitor your progress.
        </h2>
        <p className={`${styles.paragraph} max-w-[490px] mt-5`}>Stay on track with your fitness goals by easily tracking and monitoring your progress with our comprehensive tracking features. Keep a close eye on calories burned, steps taken, distance covered, and other key metrics to gain valuable insights into your workouts. With intuitive charts and graphs, you can visualize your progress over time and make informed decisions to optimize your fitness routine.</p>
        <Button styles='mt-10 rounded-[10px]'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card"  className="w-[100%] h-[100%]"/>
      </div>

    </section>
  )

export default CardDeal
