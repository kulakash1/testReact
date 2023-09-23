import "./Travel Diary.css";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../components/Navbar/navbar.js";

import { PlacesVisited } from "../components/assets/Content/dataTravelDiary.js";

const TravelDiary = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/* Travel Diary */}
      <div className="about-me-section pt-5 pb-5">
        <main>
          <section id="travel-diary">
            <div className="place-card">
              {PlacesVisited.map((keyItem) => {
                let keyValue,
                  city,
                  country,
                  images,
                  imageBasePath,
                  description,
                  imageName,
                  reviews;
                ({
                  keyValue,
                  city,
                  country,
                  images,
                  imageBasePath,
                  description,
                  imageName,
                  reviews,
                } = keyItem);

                return (
                  <div className="place-info" key={keyValue}>
                    <h2>
                      {city}, {country}
                    </h2>
                    <p>{description}</p>

                    {/* Loop to display images */}
                    <div className="img-container">
                      {images.map((imageURL) => (
                        <img
                          src={`${imageBasePath}/${city}/${imageURL}`}
                          alt={`${city}, ${country}`}
                          key={imageURL}
                        />
                      ))}
                    </div>

                    {/* Loop to display reviews */}
                    <ul className="reviews">
                      {reviews.map((review, index) => (
                        <li className="reviewItem" key={index}>
                          {review}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default TravelDiary;
