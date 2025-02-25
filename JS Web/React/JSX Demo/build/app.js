// Get root HTML element;
var rootHtmlEl = document.getElementById("root");

// Initialize root react element

var rootReactEl = ReactDOM.createRoot(rootHtmlEl);

// Create basic react element
// const headingReactEl = React.createElement("h1", null, "Hello JSX from React");
// const headingReactEl = <h1>Hello JSX from React</h1>;

// const secondHeadingReactEl = React.createElement("h2", null, "JSX is awesome!");
// const secondHeadingReactEl = <h2>JSX is awsome!</h2>;
// const headingReactSectionEl = React.createElement(
//   "header",
//   null,
//   headingReactEl,
//   secondHeadingReactEl
// );

var headingReactSectionEl = React.createElement(
  "header",
  null,
  React.createElement(
    "h1",
    null,
    "Hello JSX from React"
  ),
  React.createElement(
    "h2",
    null,
    "JSX is awsome!"
  ),
  React.createElement(
    "p",
    null,
    "Lorem10 "
  )
);

// Render content
rootReactEl.render(headingReactSectionEl);