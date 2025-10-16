import About from "../../components/About/About"
import Banner from "../../components/Banner/Banner"
import Brand from "../../components/Brand/Brand"
import Category from "../../components/Category/Category"
import CommonQuestions from "../../components/CommonQuestions/CommonQuestions"
import Connected from "../../components/Connected/Connected"
import Delivery from "../../components/Delivery/Delivery"

const Home = () => {
  return (
    <div>





      {/* {banner component  here ca} */}
      <div className="flex items-center justify-center">
        <Banner></Banner>

      </div>

      {/* {delivery component} */}

      <div className="flex items-center justify-center pt-[80px] pb-[120px]">
        <Delivery />
      </div>


      {/* {category component in here} */}
      <div className="flex items-center justify-center pb-[120px]">
        <Category />
      </div>

         {/* {Brand component in here} */}
      <div className="flex items-center justify-center pt-[30px] pb-[120px]">
        <Brand />
      </div>

      {/* {ABout component in here} */}
      <div className="flex items-center justify-center pt-[40px] pb-[120px]">
        <About />
      </div>

         {/* {Connected component in here} */}
      <div className="flex items-center justify-center pb-[120px]">
        <Connected />
      </div>

      {/* {Common Qns component in here} */}
      <div className="flex items-center justify-center pb-[120px]">
        <CommonQuestions />
      </div>



    </div>
  )
}

export default Home