function toIncludeText(element, string) {
  let receivedValue;
  let pass = false;

  if (element) {
    // compensate the absence of innerText in jsdom
    if (element.innerText === undefined)
      element.innerText = element.textContent;

    for (let property of ["innerText", "textContent", "innerHTML"]) {
      receivedValue = element[property];

      if (element[property]?.includes(string)) {
        pass = true;
        break;
      }
    }
  }

  const green = "\x1b[32m"; // ANSI escape code for green text
  const red = "\x1b[31m"; // ANSI escape code for red text
  const resetColor = "\x1b[0m"; // Reset text color

  if (receivedValue === "") {
    receivedValue = '""';
  }

  const message = () =>
    `Expected: ${green}${string}${resetColor}\nReceived: ${red}${receivedValue}${resetColor}`;

  return { message, pass };
}

expect.extend({ toIncludeText });

module.exports = toIncludeText;
