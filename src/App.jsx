import styles from './style'
import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials, Clients, Footer} from '.'
import Page from './components/Card'
import StepByStepPage from './components/StepForm'

const App = () =>  (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
        </div>
    </div>
    

    <div className={`bg-primary ${styles.flexStart}`}>
      <div  className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div  className={`${styles.boxWidth}`}>
        <Stats/>
        <Business/>
        <Billing/>
        <CardDeal/>
        <Testimonials/>
        <Clients/>
        <Page/>
        <StepByStepPage/>
        <Footer/>
      </div>
    </div>


  </div>
  )

export default App
