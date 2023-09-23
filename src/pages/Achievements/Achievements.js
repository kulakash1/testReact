import "./Achievements.css";
// import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../components/Navbar/navbar.js";

import {
  earnedCertificates,
  fsWebDev,
  pLang,
  compProg,
  corporateCompliance,
} from "../components/assets/Content/dataAchievements.js";

// let id, forPath, imageName, imagePath;

const Achievements = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      <div className="mainClass">
        <main>
          <section className="achievement-section">
            <h2>Earned Certificates</h2>

            {earnedCertificates.map((eachItem) => {
              let id, achievementName, keyName;
              ({ id, achievementName, keyName } = eachItem);

              const combinedKey = `${keyName} - ${id}`; // Combine id with keyName
              return (
                <div>
                  <h3 key={combinedKey}>{achievementName}</h3>
                  <div className="certificate-container">
                    {/* WEB DEV */}
                    {keyName === "fsWebDev" &&
                      fsWebDev.map((keyItem) => {
                        let certificateType;
                        ({ certificateType } = keyItem);
                        // certificate type 1,2,3
                        if (certificateType === 1) {
                          let keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            duration,
                            imagePath,
                            verificationLink;
                          ({
                            keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            duration,
                            imagePath,
                            verificationLink,
                          } = keyItem);
                          const valOfKey = `${keyName} - ${keyValue}`; // Combine id with keyName

                          return (
                            <div
                              className="certificate"
                              onclick="showCertificateDetails('{certificateTitle}', '{issueDate}', '{description}', '{duration}', '{imagePath}', '{verificationLink}')"
                              key={valOfKey}
                            >
                              <img src={imagePath} alt={imageName} />
                              <h3>{certificateTitle}</h3>
                              <p>Issue Date: {issueDate}</p>
                              <p>Description: {description}</p>
                              <p>Duration: {duration}</p>
                            </div>
                          );
                        }
                        //   }
                        //   return null; // Return null for non-"home" items
                      })}

                    {/* Programming Language */}
                    {keyName === "pLang" &&
                      pLang.map((keyItem) => {
                        let certificateType;
                        ({ certificateType } = keyItem);
                        // certificate type 1,2,3
                        if (certificateType === 1) {
                          let keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            duration,
                            imagePath,
                            verificationLink;
                          ({
                            keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            duration,
                            imagePath,
                            verificationLink,
                          } = keyItem);
                          const valOfKey = `${keyName} - ${keyValue}`; // Combine id with keyName

                          return (
                            <div
                              className="certificate"
                              onclick="showCertificateDetails('{certificateTitle}', '{issueDate}', '{description}', '{duration}', '{imagePath}', '{verificationLink}')"
                              key={valOfKey}
                            >
                              <img src={imagePath} alt={imageName} />
                              <h3>{certificateTitle}</h3>
                              <p>Issue Date: {issueDate}</p>
                              <p>Description: {description}</p>
                              <p>Duration: {duration}</p>
                            </div>
                          );
                        }
                        //   }
                        //   return null; // Return null for non-"home" items
                      })}

                    {/* Competitive Programming */}
                    {keyName === "compProg" &&
                      compProg.map((keyItem) => {
                        let certificateType;
                        ({ certificateType } = keyItem);
                        // certificate type 1,2,3
                        if (certificateType === 1) {
                          let keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            duration,
                            imagePath,
                            verificationLink;
                          ({
                            keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            duration,
                            imagePath,
                            verificationLink,
                          } = keyItem);
                          const valOfKey = `${keyName} - ${keyValue}`; // Combine id with keyName

                          return (
                            <div
                              className="certificate"
                              onclick="showCertificateDetails('{certificateTitle}', '{issueDate}', '{description}', '{duration}', '{imagePath}', '{verificationLink}')"
                              key={valOfKey}
                            >
                              <img src={imagePath} alt={imageName} />
                              <h3>{certificateTitle}</h3>
                              <p>Issue Date: {issueDate}</p>
                              <p>Description: {description}</p>
                              <p>Duration: {duration}</p>
                            </div>
                          );
                        }
                        //   }
                        //   return null; // Return null for non-"home" items
                      })}

                    {/* Corporate Compliance */}
                    {keyName === "corporateCompliance" &&
                      corporateCompliance.map((keyItem) => {
                        let certificateType;
                        ({ certificateType } = keyItem);
                        // certificate type 1,2,3
                        if (certificateType === 2) {
                          let keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            issuedBy,
                            imagePath,
                            certificationNo;
                          ({
                            keyValue,
                            certificateTitle,
                            imageName,
                            issueDate,
                            description,
                            issuedBy,
                            imagePath,
                            certificationNo,
                          } = keyItem);
                          const valOfKey = `${keyName} - ${keyValue}`; // Combine id with keyName

                          return (
                            <div
                              className="certificate"
                              onclick="showCertificateDetailsType2('{certificateTitle}', '{issueDate}', '{description}', '{certificationNo}', '{imagePath}', '{issuedBy}')"
                              key={valOfKey}
                            >
                              <img src={imagePath} alt={imageName} />
                              <h3>{certificateTitle}</h3>
                              <p>Issue Date: {issueDate}</p>
                              <p>Description: {description}</p>
                              <p>Certification No.: {certificationNo}</p>
                            </div>
                          );
                        }
                        //   }
                        //   return null; // Return null for non-"home" items
                      })}
                  </div>
                </div>
              );
            })}
          </section>
        </main>
      </div>


      
      {/* // Modal Part  Commented*/}
      {/* <!-- ... (Remaining HTML code remains the same) ... --> */}
      {/*<div className="modal" id="certificateModal">
    <div className="modal-content">
        <span className="close-button" onclick="closeModal()">&times;</span>
        <div id="modalContent">
            <!-- Certificate details will be dynamically added here -->
            <!-- <img id="fullCertificateImg" src="" alt="Full Certificate Image"> --> 
        </div>
    </div>
</div>
*/}

      {/* <!-- ... (Previous HTML code remains the same) ... --> */}

      {/* <!-- <div className="modal" id="certificateModal">
        <div className="modal-content">
          <span className="close-button" onclick="closeModal()">&times;</span>
          <div id="modalContent">
            <img id="fullCertificateImage" src="" alt="Full Certificate Image">
          </div>
        </div>
      </div> --> */}

      {/* <!-- ... (Remaining HTML code remains the same) ... --> */}

      {/* <!-- NEED TO UPDATE !--> */}
      {/* <!-- 
        <div className="modal" id="certificateModal">
        <div className="modal-content">
          <span className="close-button" onclick="closeModal()">&times;</span>
          <div id="modalContent">
            Certificate details will be dynamically added here
          </div>
        </div>
      </div> 
    --> */}
    </div>
  );
};

export default Achievements;
// export { Achievements };

// // JS Code

// // Event listener for clicking outside the modal to close it
// window.onclick = function (event) {
//   const modal = document.getElementById("certificateModal");
//   if (event.target === modal) {
//     modal.style.display = "none";
//     const modalContent = document.getElementById("modalContent");
//     modalContent.innerHTML = "";
//   }
// };

// function showCertificateDetails(title, issueDate, description, duration, imageUrl, verificationLink) {
//   const modal = document.getElementById("certificateModal");
//   const fullImg = document.getElementById("fullCertificateImg"); // Corrected variable name here
//   const modalContent = document.getElementById("modalContent");

//   // Set modal content with certificate details
//   // fullImg.src = imageUrl;

//   // Create elements to display certificate details
//   const titleElement = document.createElement("h2");
//   titleElement.textContent = title;

//   const imageContainer = document.createElement("div"); // Container for the image
//   const certificateImage = document.createElement("img");
//   certificateImage.src = imageUrl;
//   certificateImage.alt = title;
//   imageContainer.appendChild(certificateImage);

//   const issueDateElement = document.createElement("p");
//   issueDateElement.innerHTML = `<strong>Issue Date:</strong> ${issueDate}`;

//   const durationElement = document.createElement("p"); // Added duration element
//   durationElement.innerHTML = `<strong>Duration:</strong> ${duration}`;

//   const descriptionElement = document.createElement("p");
//   descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

//   const verificationLinkElement = document.createElement("p");
//   verificationLinkElement.innerHTML = `<strong>Verification Link:</strong> <a href="${verificationLink}" target="_blank">${verificationLink}</a>`;

//   // Clear previous content and append new details
//   // modalContent.innerHTML = ""; // Clear previous content
//   modalContent.appendChild(imageContainer); // Append image container first
//   modalContent.appendChild(titleElement);
//   modalContent.appendChild(issueDateElement);
//   modalContent.appendChild(descriptionElement);
//   modalContent.appendChild(durationElement);
//   modalContent.appendChild(verificationLinkElement);

//   modal.style.display = "block";
// }

// function showCertificateDetailsType2(title, issueDate, description, certificationNo, imageUrl, issuedBy) {
//   const modal = document.getElementById("certificateModal");
//   const fullImg = document.getElementById("fullCertificateImg"); // Corrected variable name here
//   const modalContent = document.getElementById("modalContent");

//   // Set modal content with certificate details
//   // fullImg.src = imageUrl;

//   // Create elements to display certificate details
//   const titleElement = document.createElement("h2");
//   titleElement.textContent = title;

//   const imageContainer = document.createElement("div"); // Container for the image
//   const certificateImage = document.createElement("img");
//   certificateImage.src = imageUrl;
//   certificateImage.alt = title;
//   imageContainer.appendChild(certificateImage);

//   const issueDateElement = document.createElement("p");
//   issueDateElement.innerHTML = `<strong>Issue Date:</strong> ${issueDate}`;

//   const certificationNoElement = document.createElement("p"); // Added certificationNo element
//   certificationNoElement.innerHTML = `<strong>Certification No.:</strong> ${certificationNo}`;

//   const descriptionElement = document.createElement("p");
//   descriptionElement.innerHTML = `<strong>Description:</strong> ${description}`;

//   const issuedByElement = document.createElement("p");
//   issuedByElement.innerHTML = `<strong>Issued By:</strong> ${issuedBy}`;

//   // Clear previous content and append new details
//   // modalContent.innerHTML = ""; // Clear previous content
//   modalContent.appendChild(imageContainer); // Append image container first
//   modalContent.appendChild(titleElement);
//   modalContent.appendChild(issueDateElement);
//   modalContent.appendChild(descriptionElement);
//   modalContent.appendChild(certificationNoElement);
//   modalContent.appendChild(issuedByElement);

//   modal.style.display = "block";
// }

// function closeModal() {
//   const modal = document.getElementById("certificateModal");
//   modal.style.display = "none";
//   // Clear the image source to reset the modal when closing
//   // const fullImg = document.getElementById("fullCertificateImg");
//   const modalContent = document.getElementById("modalContent");
//   modalContent.innerHTML = "";

//   // modal.removeChild(modalContent);

//   // fullImg.src = "";
// }

// // DOMContentLoaded event listener is not required here

// // ... (Remaining JavaScript code remains the same) ...
