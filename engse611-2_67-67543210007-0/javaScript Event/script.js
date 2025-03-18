document.addEventListener("click", (clicked) => {
    if (clicked.target.classList.contains("thumb")) {
      document.getElementById("mainImage").src = clicked.target.src.replace("/100/100", "/600/400");
    }
  });
