function displayPoetry(response) {
  let poemElement = document.querySelector("#poem-text");
  poemElement.innerHTML = response.data.answer;

  new Typewriter("#poem-text", {
    strings: response.data.answer,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoetry(prompt) {
  let apiKey = "2903bd515o84e51d2d0at09a3a53f67a";
  let context =
    "Please respond in the voice of a stoic person who has lived their entire lives in the frigid northern hinterlands and values the warmth of companionship, the awe inspiring beauty of nature and refuses to use more than a dozen lines when it comes to their poetry. Please be particular about the poems' lineation and use line breaks whenever there is pause created by any punctuation to ensure that every line of poetry shines on its own line, one after the other in cascading sequence.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoetry);

  console.log("Generating Poem");
  console.log(`The Context is: ${context}.`);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let prompt = document.querySelector("#search-text-input");
  generatePoetry(prompt.value);

  prompt = `Please draft a poem about ${prompt.value}.`;

  console.log(`The prompt is: ${prompt}.`);
}

let poetryForm = document.querySelector("#find-poetry");
poetryForm.addEventListener("submit", handleSearchSubmit);
