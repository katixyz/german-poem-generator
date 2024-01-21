function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let userInput = document.querySelector("#user-input");
  let key = "b32c1c35aa482d801df6bo8beet80d48";
  let context =
    "You're an poem expert and love to write short poems in basic HTML. You write a 4 line poem. Do NOT display the HTML elements. Do not show the title nor the theme of the poem. Make sure to follow the instructions from the prompt.";
  let prompt = `Write a poem about ${userInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
