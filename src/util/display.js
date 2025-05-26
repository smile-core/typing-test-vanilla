function createUserInput() {
  const input = document.createElement("input");
  input.className = "user-input";
  input.placeholder = "Type here...";
  return input;
}

function createStoryDisplay() {
  const display = document.createElement("input");
  display.className = "story-display";
  display.readOnly = true;
  return display;
}

function createAppContainer() {
  const app = document.createElement("div");
  app.className = "story-app";
  return app;
}

export function initApp() {
  const appContainer = createAppContainer();
  const userInput = createUserInput();
  const storyDisplay = createStoryDisplay();

  appContainer.appendChild(storyDisplay);
  appContainer.appendChild(userInput);
  document.body.appendChild(appContainer);

  storyDisplay.value = "Once upon a time, there was a programmer.";
  userInput.focus();
}
