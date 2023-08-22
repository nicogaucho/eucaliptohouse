import { Link } from "react-router-dom";
import yesURL from "../assets/Fotos&Icon/Icons/1x/Asset 5.png";

function Rooms() {
  return (
    <section id="Rooms" className="bg-main-color">
        <div className="container py-5">
          <div className="row py-5">
            <div className="col-12 text-center">
              <p className="h2 text-sec">OUR ROOMS</p>
            </div>
          </div>
          <div className="row py-5">
            <div className="col-12 col-md-4 mb-5">
              <div className="card-rooms card-red-gum mx-auto">
                <div className="titleRoom h-50 w-100 d-flex justify-content-center align-items-end">
                  <p className="text-uppercase h1 text-white">RED GUM</p>
                </div>
                <div className="roomInfo h-50 w-100 d-flex justify-content-center align-items-end">
                  <Link to="/redgum">
                    <button className="btn-info mb-3">KING-SIZE BED</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-5">
            <div className="card-rooms card-details mx-auto">
              <div className="titleRoom h-50 w-100 d-flex justify-content-center align-items-end">
                  <p className="text-uppercase h1 text-white">TASMANIAN</p>
                </div>
                <div className="roomInfo h-50 w-100 d-flex justify-content-center align-items-end">
                  <Link to="/tasmanian">
                    <button className="btn-info mb-3">2 SINGLE BEDS</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card-rooms card-rainbow mx-auto">
              <div className="titleRoom h-50 w-100 d-flex justify-content-center align-items-end">
                  <p className="text-uppercase h1 text-white">RAINBOW</p>
                </div>
                <div className="roomInfo h-50 w-100 d-flex justify-content-center align-items-end">
                  <Link to="/rainbow">
                    <button className="btn-info mb-3">KING-SIZE BED</button>
                  </Link>
                </div>
              </div>
            </div>  
            <div className="col-12 col-md-4 mb-5">
              <div className="card-rooms card-cider-gum mx-auto">
              <div className="titleRoom h-50 w-100 d-flex justify-content-center align-items-end">
                  <p className="text-uppercase h1 text-white">CIDER GUM</p>
                </div>
                <div className="roomInfo h-50 w-100 d-flex justify-content-center align-items-end">
                  <Link to="/cidergum">
                    <button className="btn-info mb-3">2 SINGLE BEDS</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-5">
              <div className="card-rooms card-globulus mx-auto">
                <div className="titleRoom h-50 w-100 d-flex justify-content-center align-items-end">
                    <p className="text-uppercase h1 text-white">GLOBULUS</p>
                  </div>
                  <div className="roomInfo h-50 w-100 d-flex justify-content-center align-items-end">
                    <Link to="/globulus">
                      <button className="btn-info mb-3">2 SINGLE BEDS</button>
                    </Link>
                  </div>
              </div>
            </div>
            <div className="col-12 col-md-4 mb-5 text-center">
              <img src={yesURL} width={150} className="d-block mx-auto" alt="" />
              <p className="text-sec h3 mt-5">TOWELS AND BEDSHEETS <br /> ARE PROVIDED</p>
            </div>  
          </div>
        </div>
    </section>
  )
}

export default Rooms; 