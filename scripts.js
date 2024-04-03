var pets = [
    { name: "Itza", species: "Dog", breed: "Chihuahua", age: 5, image: "https://image.shutterstock.com/image-photo/portrait-brown-chihuahua-dog-wearing-260nw-2134703151.jpg" },
    { name: "Titis", species: "Dog", breed: "Jack Russell Terrier", age: 11, image: "https://image.shutterstock.com/image-photo/happy-dog-jack-russell-playing-260nw-1727013217.jpg" },
    { name: "Anny", species: "Dog", breed: "Shetland Pastor", age: 2, image: "https://www.purina.es/sites/default/files/styles/square_medium_440x440/public/2024-02/sitesdefaultfilesstylessquare_medium_440x440public2022-08Shetland20Sheepdog1.jpg?itok=u-S8AiPd" }
  ];
  
  function displayPets() {
    var petImages = document.querySelectorAll(".pet-image");
    for (var i = 0; i < pets.length; i++) {
      var pet = pets[i];
      document.getElementById("pet" + (i + 1) + "-species").textContent = pet.species;
      document.getElementById("pet" + (i + 1) + "-breed").textContent = pet.breed;
      document.getElementById("pet" + (i + 1) + "-age").textContent = pet.age;
      petImages[i].src = pet.image;
    }
  }
  
  function learnAboutBreed(url) {
    window.location.href = url;
  }
  
  displayPets();