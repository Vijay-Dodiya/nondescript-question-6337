const centerDiv = document.getElementById("justInimage");

fetch("https://jsonplaceholder.typicode.com/photos?_limit=35")
  .then((apidata) => {
    return apidata.json();
  })
  .then((jsondata) => {
    jsondata.map((val) => {
      key = val.id;
      let img = document.createElement("img");
      img.src = `https://picsum.photos/200/350?random=${key}`;

      centerDiv.appendChild(img);
    });
  });
