const tabs = () => {
  const artist = document.querySelector(".artist"),
    creater = document.querySelector(".creater"),
    tabArtist = document.querySelector(".tab_artist"),
    tabCreater = document.querySelector(".tab_creaters");

  artist.addEventListener("click", () => {
    creater.classList.remove("active");
    artist.classList.add("active");
    tabCreater.style.display = "none";
    tabArtist.style.display = "flex";
  });
  creater.addEventListener("click", () => {
    artist.classList.remove("active");
    creater.classList.add("active");
    tabArtist.style.display = "none";
    tabCreater.style.display = "flex";
  });

  // if (artist.classList.contains("active")) {

  // } else if (creater.classList.contains("active")) {

  // }
};
tabs();
