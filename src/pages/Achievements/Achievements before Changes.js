import "./Achievements.css";
import "bootstrap/dist/css/bootstrap.css";
import Navbar1 from "../components/Navbar/navbar.js";

const Achievements = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/*  <!--=============== Achievements ===============--> */}
      {/* <!-- <div className="about-me-section pt-5 pb-5">

        <div className="container">
            <div className="row">
                <div className="d-flex flex-column justify-content-center col-12 col-md-6 order-md-2">
                    <h1 className="main-point mb-3">"Success is not the destination, but the journey itself."</h1>
                    <h1 className="about-me-section-heading mb-3">This Page is Under Construction.</h1>
                    <img src="under construction.jpg" className="about-me-section-image d-md-none mb-3" />
                    <p className="description">Description </p>
                </div>

                <div className="col-12 col-md-6 order-1 order-md-1 d-none d-md-block">
                    <img src="under construction.jpg" className="about-me-section-image" />

                </div>
            </div>
        </div>
    </div> --> */}


    {/* <!-- ... (Previous HTML code remains the same) ... --> */}

<main>
    <section className="achievement-section">
        <h2>Earned Certificates</h2>

        <h3>Full Stack Web Development</h3>
        <div className="certificate-container">

            
            <div className="certificate" onclick="showCertificateDetails('Build Your Own Static Website', 'February 8, 2022', 'Web Development.', '55+ Hrs', '/Achievements/Certificates/Full Stack Web Development/Build Your Own Static Website.jpg', 'https://10xiitian.ccbp.in/certificate/ZSKZRZNPMD')">
                <img src="/Achievements/Certificates/Full Stack Web Development/Build Your Own Static Website.jpg" alt="Certificate 1" />
                <h3>Build Your Own Static Website</h3>
                <p>Issue Date: February 8, 2022</p>
                <p>Description: Web Development.</p>
                <p>Duration: 55+ Hrs</p>
            </div>
            {/* <!-- Add more Web Dev certificates as needed --> */}

            {/* <!-- <div className="certificate" onclick="showCertificateDetails('React JS - Getting started', 'September 22, 2023', 'Web Development.', '42+ Hrs', '/Achievements/Certificates/Full Stack Web Development/React JS - Getting started.jpg', 'ht')">
                <img src="/Achievements/Certificates/Full Stack Web Development/React JS - Getting started.jpg" alt="Certificate 8" />
                <h3>React JS - Getting started</h3>
                <p>Issue Date: September 22, 2023</p>
                <p>Description: Web Development.</p>
                <p>Duration: 42+ Hrs</p>
            </div> --> */}
        </div>

        <h3>Programming Language</h3>
        {/* <div className="certificate-container"> */}
            <div className="certificate-container">
                <div className="certificate" onclick="showCertificateDetails('Python & OOP Concepts', 'February 12, 2022', 'Python Concepts.', '57+ Hrs', '/Achievements/Certificates/Programming Language/Python & OOP Concepts.jpg', 'https://10xiitian.ccbp.in/certificate/EXSGOWJFSE')">
                    <img src="/Achievements/Certificates/Programming Language/Python & OOP Concepts.jpg" alt="Certificate 1" />
                    <h3>Python & OOP Concepts</h3>
                    <p>Issue Date: February 12, 2022</p>
                    <p>Description: Python Concepts.</p>
                    <p>Duration: 57+ Hrs</p>
                </div>
                {/* <!-- Add more Competi certificates as needed --> */}
            </div>
        {/* </div> */}

        <h3>Competitive Programming</h3>
        {/* <div className="certificate-container"> */}
            <div className="certificate-container">
                <div className="certificate" onclick="showCertificateDetails('Elementary Data Structures and Algorithms', 'February 13, 2022', 'DSA Fundamentals.', '29+ Hrs', '/Achievements/Certificates/Competitive Programming/Elementary Data Structures and Algorithms.jpg', 'https://10xiitian.ccbp.in/certificate/ZHXOQGMJWU')">
                    <img src="/Achievements/Certificates/Competitive Programming/Elementary Data Structures and Algorithms.jpg" alt="Certificate 2" />
                    <h3>Elementary Data Structures and Algorithms</h3>
                    <p>Issue Date: February 13, 2022</p>
                    <p>Description: DSA Fundamentals.</p>
                    <p>Duration: 29+ Hrs</p>
                </div>
            </div>
        {/* </div> */}

        
        <h3>Corporate Compliance</h3>
        {/* <div className="certificate-container"> */}
            <div className="certificate-container">
                <div className="certificate" onclick="showCertificateDetailsType2('Corporate Etiquette', 'May 5, 2022', 'Corporate Training.', 'E-202205-176223', '/Achievements/Certificates/Corporate Compliance/Corporate Etiquette.jpg', 'Learning and Development')">
                    <img src="/Achievements/Certificates/Corporate Compliance/Corporate Etiquette.jpg" alt="Certificate 1" />
                    <h3>Corporate Etiquette</h3>
                    <p>Issue Date: May 5, 2022</p>
                    <p>Description: Corporate Training.</p>
                    <p>Certification No.: E-202205-176223</p>
                </div>

            </div>
        {/* </div> */}

        
    </section>
</main>
 
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
