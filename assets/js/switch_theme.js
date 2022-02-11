function ChangeColor(state) {
  var clrDiv = document.getElementsByClassName("invertColor")[0];
  clrDiv.style.filter = "invert(" + state + ")";

  var images = document.getElementsByClassName("image");

  for (let index = 0; index < images.length; index++) {
    images[index].style.filter = "invert(" + state + ")";
  }

  console.log(images);
}

function toggleTheme(classname) {
  var theme = document.getElementById(link);
}

document.getElementById("darklight").addEventListener("click", function () {
  if (this.classList.contains("active")) {
    console.log("notActive");
    this.classList.remove("active");
    try {
      document.querySelector("link[href='/light.css']").href = "dark.css";
    } catch {
      document.querySelector("link[href='light.css']").href = "dark.css";
    }
    //ChangeColor(1);
  } else {
    console.log("Active");
    this.classList.add("active");
    try {
      document.querySelector("link[href='/dark.css']").href = "light.css";
    } catch {
      document.querySelector("link[href='dark.css']").href = "light.css";
    }

    //ChangeColor(0);
  }
});

document
  .getElementById("star-atlas-dashboard")
  .addEventListener("click", function () {
    console.log("sa change!");
  });
