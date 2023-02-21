const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-input");
const resultsContainer = document.querySelector("#results");

searchButton.addEventListener("click", function () {
  const searchTerm = searchInput.value.toLowerCase();
  const searchTerm2 = searchInput.value.toLowerCase();

  // Make a GET request to the JSON file with search results
  fetch("database.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      let results = "";

      // Loop through the search results and see if the search term matches any of them
      data.forEach(function (searchResult) {
        if (searchResult.title.toLowerCase().includes(searchTerm) || searchResult.keyword.toLowerCase().includes(searchTerm)) {
          results += `<div class="card"><a href="${searchResult.link}" class="title-res">${searchResult.title}</a><div style="width: 100%;overflow-x: scroll;padding: 0px 0px 10px 0px;"><a href="${searchResult.link}" class="link-res">${searchResult.link}</a></div><a class="desciption-res">${searchResult.keyword}</a></div>`;
        }
      });
      // data.forEach(function (searchResult2) {
      //   if (searchResult2.description.toLowerCase().includes(searchTerm2)) {
      //     results += `<div class="card"><a href="${searchResult2.link}" class="title-res">${searchResult2.title}</a><div style="width: 100%;overflow-x: scroll;padding: 0px 0px 10px 0px;"><a href="${searchResult2.link}" class="link-res">${searchResult2.link}</a></div><a class="desciption-res">${searchResult2.keyword}</a></div>`;
      //   }
      // });
      // searchResult.title.toLowerCase().includes(searchTerm) || 
      // Display the results in the results container
      resultsContainer.innerHTML = results;
    });

});


// else if (searchResult.description.includes(searchTerm2)) {
//   results += `<div class="card"><a href="${searchResult.link}" class="title-res">${searchResult.title}</a><div style="width: 100%;overflow-x: scroll;padding: 0px 0px 10px 0px;"><a href="${searchResult.link}" class="link-res">${searchResult.link}</a></div><a class="desciption-res">${searchResult.keyword}</a></div>`;
// }