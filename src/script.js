function displayPoetry(response) {
  let poemElement = document.querySelector("#poem-text");
  poemElement.innerHTML = response.data.answer;

  new Typewriter("#poem-text", {
    strings: `<div>The sun rises</div>
          <div>The moon sets</div>
          <div>Your neck breaks</div>
          <div>Staring down</div>
          <div>at your screen.</div>`,
    autoStart: true,
    delay: 2,
    cursor: "",
  });
}

function generatePoetry(prompt) {
  let apiKey = "2903bd515o84e51d2d0at09a3a53f67a";
  let context =
    "Please respond in the style of a stoic person who has lived their entire lives in the frigid northern hinterlands and values the warmth of companionship. Please also phrase the response in a poem.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoetry);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let prompt = document.querySelector("#search-text-input");

  generatePoetry(prompt.value);
}

let poetryForm = document.querySelector("#find-poetry");
poetryForm.addEventListener("submit", handleSearchSubmit);
