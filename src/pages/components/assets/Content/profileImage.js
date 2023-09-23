let count = 1;

const profileImage = [
  {
    id: count++,
    forPath: "home",
    imageName: "Profile Pic",
    imagePath: "./assets/image/Profile Pic/home/Profile Img.jpeg",
  },
  {
    id: count++,
    forPath: "about",
    imageName: "Profile Pic",
    imagePath: "./assets/image/Profile Pic/about/Profile Img.jpeg",
  },
  {
    id: count++,
    forPath: "footer",
    imageName: "Profile Pic",
    imagePath: "./assets/image/Profile Pic/footer/Profile Img.jpeg",
  },
];

// let id, forPath, imageName, imagePath;
// profileImage.map(imgItem => {
//     ({id, forPath, imageName, imagePath} = imgItem);
    
//     if(forPath=="home")
//         console.log(imagePath);
// });

export { profileImage };
