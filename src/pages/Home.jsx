import Navbar from "../components/Navbar"; 
import Rooms from "../components/Rooms";
import Footer from "../components/Footer";
import Bookgreen from "../components/Bookgreen";
import logoURL from "../assets/Fotos&Icon/Icons/1x/Asset 13.png";
import wifiURL from "../assets/Fotos&Icon/Icons/1x/Asset 8.png";
import balconyURL from "../assets/Fotos&Icon/Icons/1x/Asset 4.png";
import kitchenURL from "../assets/Fotos&Icon/Icons/1x/Asset 7.png";
import tvURL from "../assets/Fotos&Icon/Icons/1x/Asset 6.png";
import artURL from "../assets/Fotos&Icon/Other/santAna.jpeg";
import surfURL from "../assets/Fotos&Icon/Other/amigos surf.jpg";
import ScrollToTop from '../components/ScrollToTop';

function Home() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <header className="hero">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12 col-md-6">
              <h1 className="text-white">DO YOU NEED A <br />
              <span style={{color: "#F5CF83"}}>GROOVY ESCAPE?</span></h1>
              <p className="text-white">A groovy style guesthouse nestled in the heart of Vegueta, Las Palmas enchanting historical center. Discover comfort and tranquility, where each private room welcomes you with open arms, immerse yourself in the vibrant energy of the city and experience the fusion of modern comforts and timeless charm. Welcome to Casa Eucalipto, your gateway to an unforgettable adventure.</p>
              <button className="btn-bookBed">
                book a bed
              </button>
            </div>
          </div>
        </div>
      </header>
      <section className="vh-100 bg-main-color">
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-12">
              <img src={logoURL} alt="" width={330} className="d-block mx-auto" />
              <h2 className="text-sec text-center mt-5">COMFORT, STYLE AND WARM HOSPITALITY</h2>
              <div className="row justify-content-center mt-3">
                <div className="col-12 col-md-7">
                  <p className="text-center text-white">Whether you&apos;re seeking a romantic getaway, a holiday in nature or an adventurous retreat, Casa Eucalipto promises an enchanting stay in a perfect location where you won&apos;t be disappointed. Discover the magic of Vegueta, the old town of Las Palmas, enjoy the beach and the beautiful weather from the comfort of our guesthouse, and create treasured memories that will linger long after your departure.</p>
                  {/* <div className="d-flex w-100 justify-content-center mt-5">
                    <button className="btn-info">
                      <a href="" className="text-decoration-none text-white">Rooms</a>
                    </button>
                    <button className="btn-info ms-5">
                      <a href="" className="text-decoration-none text-white">Location</a>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="Services" className="bg-sec-color">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 col-md-3">
              <div className="card border-0 text-center h-100 d-flex flex-column justify-content-around align-items-center bg-transparent">
                <img src={wifiURL} width={40} alt="" className="d-block mx-auto" />
                <p className="h2 text-white">FAST FREE WIFI</p>
              </div>
            </div>
            <div className="col-12 col-md-3">
            <div className="card border-0 text-center h-100 d-flex flex-column justify-content-around align-items-center bg-transparent">
                <img src={balconyURL} width={200} alt="" className="d-block mx-auto" />
                <p className="h2 text-white">BALCONY & <br /> TERRACE</p>
              </div>
            </div>
            <div className="col-12 col-md-3">
            <div className="card border-0 text-center h-100 d-flex flex-column justify-content-around align-items-center bg-transparent">
                <img src={kitchenURL} width={100} alt="" className="d-block mx-auto" />
                <p className="h2 text-white">KITCHEN & <br /> DINING AREA</p>
              </div>
            </div>
            <div className="col-12 col-md-3">
            <div className="card border-0 text-center h-100 d-flex flex-column justify-content-around align-items-center bg-transparent">
                <img src={tvURL} width={120} alt="" className="d-block mx-auto" />
                <p className="h2 text-white">SMART TVs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Rooms />
      <section id="Experiences" className="bg-sec-color">
        <div className="container py-5">
          <div className="row py-5 align-items-center">
              <div className="col-12 col-md-6 mb-5">
                <p className="h1 text-white mb-5">SURROUNDED BY ART & CULTURE</p>
                <p className="text-white mb-5">Vegueta, located in Las Palmas, is a vibrant neighborhood that embodies the rich culture and art of the Canary Islands, boasting colorful colonial architecture, bustling plazas, and a thriving arts scene that showcases a fusion of traditional and contemporary expressions.</p>
                  <a href="https://labrujulaocioycultura.com/" className="btn-bookBed text-decoration-none text-white">show me around</a>
              </div>
              <div className="col-12 col-md-6 mb-5">
                <img src={artURL} className="img-fluid" alt="" />
              </div>
          </div>
          <div className="row py-5 align-items-center">
              <div className="col-12 col-md-6 mb-5">
                <p className="h1 text-white mb-5">TRY SURFING FOR THE FIRST TIME</p>
                <p className="text-white mb-5">Stepping onto a surfboard for the very first time is an exhilarating and transformative experience that immerses you in the dynamic rhythm of the ocean, as you learn to navigate the waves, feel the rush of adrenaline, and embrace the profound sense of accomplishment that comes with conquering the surf.</p>
                    <a href="https://www.oceansidegrancanaria.com/" className="btn-bookBed text-decoration-none text-white">let&apos;s surf</a>
              </div>
              <div className="col-12 col-md-6 mb-5 order-md-first">
                <img src={surfURL} className="img-fluid" alt="" />
              </div>
          </div>
        </div>
      </section>
      <Bookgreen />
      <Footer />
    </div>
  )
}

export default Home;
