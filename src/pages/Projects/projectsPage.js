import "./projectsPage.css";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../components/Navbar/navbar.js";

// import "https://kit.fontawesome.com/15696a5f7b.js";

import { projectsmade } from "../components/assets/Content/dataProjects";

const Projects = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      <div className="about-my-projects-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center col-12 col-md-12">
              <h1 className="main-point mb-3">Portfolio</h1>
              <h1 className="about-me-section-heading mb-3">
                Projects I have done
              </h1>
            </div>

            {/* Projects Made */}
            {projectsmade.map((keyItem) => {
              let keyValue,
                projectTitle,
                projectType,
                imageName,
                description,
                imagePath,
                hrefLink;
              ({
                keyValue,
                projectTitle,
                projectType,
                imageName,
                description,
                imagePath,
                hrefLink,
              } = keyItem);
              const valOfKey = `"projectsmade" - ${keyValue}`; // Combine id with keyName

              return (
                <div className="col-12 col-md-6">
                  <div className="project-section-project-card mb-3">
                    <img
                      src={imagePath}
                      alt={imageName}
                      className="project-card-img"
                      key={keyValue}
                    />
                    <div className="p-3">
                      <h3 className="project-type-heading">{projectType}</h3>
                      <h1 className="project-heading">{projectTitle}</h1>
                      <p className="project-description">{description}</p>

                      <a className="project-card-link" href={hrefLink}>
                        See Demo
                        <i class="bi bi-arrow-right-short"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
              //   }
              //   return null; // Return null for non-"home" items
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
// export { Projects };
