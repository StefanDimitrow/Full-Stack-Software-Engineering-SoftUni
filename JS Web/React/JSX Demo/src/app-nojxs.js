// Get root HTML element;
const rootHtmlEl = document.getElementById("root");

// Initialize root react element

const rootReactEl = ReactDOM.createRoot(rootHtmlEl);

// Create basic react element
const headingReactEl = React.createElement("h1", null, "Hello JSX from React");
const secondHeadingReactEl = React.createElement("h2", null, "JSX is awesome!");
const headingReactSectionEl = React.createElement(
  "header",
  null,
  headingReactEl,
  secondHeadingReactEl
);

// Render content
rootReactEl.render(headingReactSectionEl);
