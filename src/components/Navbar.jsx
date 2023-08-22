import logoURL from "../assets/Fotos&Icon/Icons/1x/Asset 13.png";
import phoneURL from "../assets/Fotos&Icon/Icons/1x/Asset 12.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-sec-navbar" aria-label="Thirteenth navbar example">
      <div className="container-fluid">
        <button className="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
          <span className="text-white">
            INFO
          </span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
          <ul className="navbar-nav col-lg-4">
            <li className="nav-item">
              <a className="nav-link text-uppercase mx-2 text-white" href="#Services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase mx-2 text-white" href="#Rooms">Rooms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase mx-2 text-white" href="#Experiences">Experiences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-uppercase mx-2 text-white" href="#Contact">Contact</a>
            </li>
          </ul>
           <a className="navbar-brand col-lg-4 d-none d-md-block" href="#">
            <img src={logoURL} width={150} className="d-block mx-auto" alt="" />
          </a>
          <div className="d-lg-flex col-lg-4 justify-content-lg-center d-none d-md-block">
            <div className="d-flex align-items-center">
              <img src={phoneURL} width={50} alt="" />
              <p className="m-0 ms-3 text-white">+34 603 786 656</p>
            </div>
            <a className="btn-bookBed ms-5 text-decoration-none text-white" href="https://frontdesk.counter.app/booking/eucalipto-house">
              Book a Bed
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar; 