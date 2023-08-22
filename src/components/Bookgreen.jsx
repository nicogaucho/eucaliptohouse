import balconyURL from "../assets/Fotos&Icon/Icons/1x/Asset 4.png";

function Bookgreen() {
  return (
    <section className="bg-green">
      <div className="container py-5">
        <div className="row py-3 align-items-center ">
          <div className="col-12 col-md-3 mb-5">
            <img src={balconyURL} width={200}  alt="" className="d-block mx-auto" />
          </div>
          <div className="col-12 col-md-6 mb-5 text-center">
            <p className="h2 text-white m-0">REST YOUR BODY, GROOVE YOUR DREAMS, AND LIVE AN ADVENTURE</p>
          </div>
          <div className="col-12 col-md-3 mb-5 text-center">
            <button className="btn-bookBed">
              book my bed
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Bookgreen; 