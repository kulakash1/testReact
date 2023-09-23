import "./Under Construction.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../../components/Navbar/navbar.js";

const UnderConstruction = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/*  <!--=============== Under Construction ===============--> */}
      <div className="about-me-section pt-5 pb-5">

        <div className="container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center col-12 col-md-6 order-md-2">
                    <h1 className="main-point mb-3">"Success is not the destination, but the journey itself."</h1>
                    <h1 className="about-me-section-heading mb-3">This Page is Under Construction.</h1>
                    <img src="./assets/image/Under Construction/under construction.jpg" alt="Work In Progress Image" className="about-me-section-image d-md-none mb-3" />
                    <p className="description">Description </p>
                </div>

                <div className="col-12 col-md-6 order-1 order-md-1 d-none d-md-block">
                    <img src="./assets/image/Under Construction/under construction.jpg" alt="Work In Progress Image" className="about-me-section-image" />

                </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default UnderConstruction;
// export { UnderConstruction };
