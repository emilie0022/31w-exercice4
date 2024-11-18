(function () {
  let filtre__bouton = document.querySelectorAll(".filtre__bouton button");
  console.log(filtre__bouton.length);

  for (const elm of filtre__bouton) {
    elm.addEventListener("mousedown", function (e) {
      const categoryId = e.target.dataset.id;

      fetch(
        `http://localhost/31w/wordpress/wp-json/wp/v2/posts?categories[]=${categoryId}`
      )
        .then((response) => response.json())
        .then((posts) => {
          const resultsContainer = document.getElementById("filtre-results");
          resultsContainer.innerHTML = "";

          posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post-item");
            postDiv.innerHTML = `
                            <h2>${post.title.rendered}</h2>
                            <p>${post.excerpt.rendered}</p>
                            <a href="${post.link}">Lire la suite</a>
                        `;
            resultsContainer.appendChild(postDiv);
          });
        })
        .catch((error) => console.error("Erreur de la requête:", error));
    });
  }
})();
