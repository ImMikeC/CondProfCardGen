function render(conditional = {}) {

  let cover = `<div class="cover"><img src="${
    conditional.background ? conditional.background : ""
  }" /></div>`;
  if (conditional.includeCover == false) cover = "<div class='cover'></div>";

  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${
            conditional.miFoto ? conditional.miFoto : ""
          }" class="photo" />
          <h1>${conditional.name ? conditional.name : ""} ${
    conditional.lastname ? conditional.lastname : ""
  }</h1>
          <h2>${conditional.role ? conditional.role : ""}</h2>
          <h3>${conditional.city ? conditional.city : ""}, ${
    conditional.country ? conditional.country : ""
  }</h3>
          <ul class="${conditional.posicionIconos}">
            <li><a href="https://twitter.com/${
              conditional.twitter ? conditional.twitter : ""
            }"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              conditional.github ? conditional.github : ""
            }"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              conditional.linkedin ? conditional.linkedin : ""
            }"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              conditional.instagram ? conditional.instagram : ""
            }"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

window.onload = function() {
  window.conditional = {
    includeCover: true,
    background: "https://picsum.photos/seed/picsum/200/300",
    miFoto: "https://avatars.githubusercontent.com/u/69221181?v=4",
    posicionIconos: "position-left",
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.conditional);

  document.querySelectorAll(".picker").forEach(function(miEl) {
    miEl.addEventListener("change", function(funcionEl) {
     
      const attribute = funcionEl.target.getAttribute("for");
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.conditional, values));
    });
  });
};
