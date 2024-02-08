/**
 * @jest-environment jsdom
 */

const indexFile = require("./indexFile.js");
const toIncludeText = require("./toIncludeText.js");
const { challengeOne, challengeTwo, challengeThree } = require("../index.js");

document.body.innerHTML = indexFile();

describe("challenge one - ", () => {
  challengeOne();
  const paragraph = document.getElementById("output");
  const form = document.querySelector("form");
  let name = document.getElementById("name");
  let language = document.getElementById("language");
  let cohort = document.getElementById("cohort");

  describe("paragraph tag should - ", () => {
    test("start empty", () => {
      expect(paragraph.innerText).toEqual(undefined);
    });

    test("have text after form submit", () => {
      name.value = "John";
      language.value = "JavaScript";
      cohort.value = "Melbourne";
      form.dispatchEvent(new Event("submit"));
      const expectedText =
        "Hello John, hope you are enjoying learning about JavaScript in Melbourne";
      expect(paragraph).toIncludeText(expectedText);
    });
  });
});

describe("challenge two - ", () => {
  challengeTwo();
  let button = document.getElementById("change-theme");
  let column = document.getElementById("challenge-two");

  describe("button text and column background should - ", () => {
    test("begin with 'Dark Mode' text and white background", () => {
      expect(button).toIncludeText("Dark Mode");
      expect(column.classList.contains("darkmode")).toEqual(false);
    });

    test("switch to text 'Light Mode' and color black after clicking button", () => {
      button.dispatchEvent(new Event("click"));
      expect(button).toIncludeText("Light Mode");
      expect(column.classList.contains("darkmode")).toEqual(true);
    });

    test("switch to text 'Dark Mode' and white background after clicking button again", () => {
      button.dispatchEvent(new Event("click"));
      expect(button).toIncludeText("Dark Mode");
      expect(column.classList.contains("darkmode")).toEqual(false);
    });
  });
});
