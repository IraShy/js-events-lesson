function challengeOne() {
  function onFormSubmit(event) {
    event.preventDefault();

    let nameValue = document.getElementById("name").value;
    let languageValue = document.getElementById("language").value;
    let cohortValue = document.getElementById("cohort").value;
    let output = document.getElementById("output");

    output.innerText = `Hello ${nameValue}, hope you are enjoying learning about ${languageValue} in ${cohortValue}`;
  }

  document.querySelector("form").addEventListener("submit", onFormSubmit);
}

// -------

function challengeTwo() {
  const div = document.getElementById("challenge-two");
  const button = document.getElementById("change-theme");

  button.addEventListener("click", (event) => {
    if (div.classList.contains("darkmode")) {
      div.classList.remove("darkmode");
      button.textContent = "Dark Mode";
    } else {
      div.classList.add("darkmode");
      button.textContent = "Light Mode";
    }
  });
}

// do not change anything below this line

function activity() {
  challengeOne();
  challengeTwo();
  challengeThree();
}

try {
  module.exports = {
    challengeOne,
    challengeTwo,
    challengeThree,
  };
} catch {}
