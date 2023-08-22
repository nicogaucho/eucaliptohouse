import logoURL from "../assets/Fotos&Icon/Icons/1x/Asset 13.png";
function Footer() {
  return (
    <footer id="Contact" className="bg-footer">
      <div className="container py-2">
      <div className="row py-5 align-items-center justify-content-between text-white">
        <div className="col-12 col-md-4 mb-3">
          <div className="">
            <p>CALLE JUAN DE QUESADA 31 <br /> 35001 LAS PALMAS GC</p>
            <p>+34 671318352 <br />
            CASAEUCALIPTO.GC@GMAIL.COM</p>
          </div>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <img src={logoURL} width={200} alt="" className="d-block mx-auto" />
        </div>
      </div>
        <p className="text-muted">© 2023 Digital Consulting Aguita SL
        CIF B44711299
        Inc. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer;