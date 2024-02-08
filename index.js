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
