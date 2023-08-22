import Navbar from "../components/Navbar";
import room04 from "../assets/Fotos&Icon/Foto Rooms/Room 5/IMG_2658.jpg";
import room05 from "../assets/Fotos&Icon/Foto Rooms/Room 5/IMG_2655.jpg";
import room06 from "../assets/Fotos&Icon/Foto Rooms/Room 5/IMG_2656.jpg";
import Footer from "../components/Footer";
import Bookgreen from "../components/Bookgreen";
import ScrollToTop from '../components/ScrollToTop';
function Globulus() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <div className="container py-5 my-5">
        <div className="row py-5 my-5 justify-content-center">
          <div className="col-12 col-md-6 text-center">
            <h2 className="text-uppercase h1 text-sec">GLOBULUS</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <img src={room04} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <img src={room05} className="img-fluid" alt="" />
          </div>
          <div className="col-12 col-md-4 mb-3">
            <img src={room06} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
      <Bookgreen />
      <Footer />
    </>
  ) 
}

export default Globulus;