import Banner from "../../components/Banner/Banner"
import Category from "../../components/Category/Category"
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
      <div className="flex items-center justify-center pt-[80px] pb-[120px]">
        <Category />
      </div>


    </div>
  )
}

export default Home