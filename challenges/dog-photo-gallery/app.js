let addButtonEl = document.getElementById("addBtn");

addButtonEl.addEventListener("click", ()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
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

    let dogEl = document.createElement("img")
    dogEl.src = jsonResponse.message;
    let liEl = document.createElement("li");
    liEl.appendChild(dogEl);
    let ulEl = document.getElementById("imageBar");
    ulEl.appendChild(liEl);

  })
  .catch((error) => {
    // Handle the error
    console.log(error);
  });

});

let delButtonEl = document.getElementById("deleteBtn");

delButtonEl.addEventListener("click", ()=> {
let ulEl = document.getElementById("imageBar");
    ulEl.removeChild(ulEl.lastChild);
});
