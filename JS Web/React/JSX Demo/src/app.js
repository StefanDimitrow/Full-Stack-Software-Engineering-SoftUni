// Get root HTML element;
const rootHtmlEl = document.getElementById("root");

// Initialize root react element

const rootReactEl = ReactDOM.createRoot(rootHtmlEl);

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

const headingReactSectionEl = (
  <header>
    <h1>Hello JSX from React</h1>
    <h2>JSX is awsome!</h2>
    <p>Lorem10 </p>
  </header>
);

// Render content
rootReactEl.render(headingReactSectionEl);
