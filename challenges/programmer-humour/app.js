fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw new Error(
        `Encountered something unexpected: ${response.status} ${response.statusText}`
      );
    }
  })
  .then((jsonResponse) => {
    // do whatever you want with the JSON response
    console.log(jsonResponse);
    let imgEl = document.createElement("img");
    imgEl.src = jsonResponse.img;
    let displayEl = document.getElementById("display");
    displayEl.appendChild(imgEl);
  })
    .catch((error) => {
    // Handle the error
    console.log(error);
  });