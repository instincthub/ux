function triggerEmoji() {
  let input = document.querySelector(".password");

  if (input.type === "password") {
    input.type = "text";
    document.getElementById("hide").style.display = "block";
    document.getElementById("show").style.display = "none";
  } else {
    input.type = "password";
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
  }
}

const password = document.querySelectorAll(".password");
// const passwordInput = document.querySelector(".parent_password");

const showPasswordError = (e) => {
  if (e.value.length <= 6) {
    e.parentElement.classList.add("active");
    console.log(e.parentElement);
  } else if (e.value.length > 6) {
    e.parentElement.classList.remove("active");
  }
};
