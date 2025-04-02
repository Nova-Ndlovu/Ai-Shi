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
    "You are tasked with creating a poem that does not exceed 12 lines and being particular about the poem's lineation by always begining each new verse on a new line whenever there is punctuation to create pause, using basic HTML and separating each line with a <br />. Please respond in the voice of a stoic person who has lived their entire lives in the frigid northern hinterlands and values the warmth of companionship, the awe inspiring beauty of nature and refuses to use more than a dozen verses when it comes to their poetry.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let iSeeYou = document.querySelector("#poem-text");
  iSeeYou.classList.remove("peekaboo");

  axios.get(apiUrl).then(displayPoetry);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let prompt = document.querySelector("#search-text-input");
  generatePoetry(prompt.value);

  prompt = `Please write a poem about ${prompt.value}.`;
}

let poetryForm = document.querySelector("#find-poetry");
poetryForm.addEventListener("submit", handleSearchSubmit);
