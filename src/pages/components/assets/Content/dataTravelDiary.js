// let variables = ["id", "PlacesName", "keyName", "certificateTitle","certificateType","forPlaces"];
// let keyValue,
//   city,
//   country,
//   images,
//   imageBasePath,
//   description,
//   imageName,
//   reviews;

let noOfPlaces = 1;

const PlacesVisited = [
  {
    keyValue: noOfPlaces++,
    city: "Agra",
    forPlaces: "Agra",
    country: "India",
    images: ["Agra1.jpg", "Agra2.jpg", "Agra3.jpg"],
    imageName: "Agra Image",
    imageBasePath: "./assets/image/Travel Diary/",
    description:
      "Agra is a historic city in northern India famous for the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
    reviews: [
      "One of the most beautiful cities I've ever visited!",
      "The Taj Mahal was marbelous beauty of Love.",
      "The food was amazing, especially the Kachoris and Bhalla.",
    ],
  },
  {
    keyValue: noOfPlaces++,
    city: "Manali",
    forPlaces: "Manali",
    country: "India",
    images: ["Manali1.jpg", "Manali2.jpg", "Manali3.jpg"],
    imageName: "Manali Image",
    imageBasePath: "./assets/image/Travel Diary/",
    description: "Manali is a picturesque hill station located in the Indian state of Himachal Pradesh, known for its stunning landscapes, snow-capped mountains, and adventurous activities.",
      reviews: [
          "Scenic landscapes and breathtaking mountain views.",
          "The local dish 'Siddu' was mouth-watering.",
          "Serene temples and cultural experiences"
      ]
  },
  // {
  //   keyValue: noOfPlaces++,
  //   city: "Agra",
  //   forPlaces: "Agra",
  //   country: "India",
  //   images: ["Agra1.jpg", "Agra2.jpg", "Agra3.jpg"],
  //   imageName: "Agra Image",
  //   imageBasePath: "./assets/image/Travel Diary/",
  //   description:
  //     "Agra is a historic city in northern India famous for the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
  //   reviews: [
  //     "One of the most beautiful cities I've ever visited!",
  //     "The Taj Mahal was marbelous beauty of Love.",
  //     "The food was amazing, especially the Kachoris and Bhalla.",
  //   ],
  // },
];

export { PlacesVisited };
