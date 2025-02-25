// Get root HTML element;
var rootHtmlEl = document.getElementById("root");

// Initialize root react element

var rootReactEl = ReactDOM.createRoot(rootHtmlEl);

// Create basic react element
var headingReactEl = React.createElement("h1", null, "Hello JSX from React");
var secondHeadingReactEl = React.createElement("h2", null, "JSX is awesome!");
var headingReactSectionEl = React.createElement("header", null, headingReactEl, secondHeadingReactEl);

// Render content
rootReactEl.render(headingReactSectionEl);