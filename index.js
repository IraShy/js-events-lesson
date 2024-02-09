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

// -------

function challengeThree() {
  const dragger = document.getElementById("dragger");
  const divs = document.querySelectorAll(".drag");

  function handleDrop(event) {
    const id = event.dataTransfer.getData("text/plain");
    const dropTarget = event.target;

    // prevent self-drop
    if (dropTarget !== document.getElementById(id)) {
      const child = document.getElementById(id);
      dropTarget.appendChild(child);

      // handle colour change on the last div
      if (dropTarget.id === "to") {
        dragger.style.backgroundColor = "green";
      } else {
        dragger.style.backgroundColor = "red";
      }
    }
  }

  divs.forEach((div) => {
    div.addEventListener("dragover", (event) => event.preventDefault());
    div.addEventListener("drop", handleDrop);
  });

  dragger.addEventListener("dragstart", (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
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
