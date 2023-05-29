const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
  return React.createElement("header", null,
    React.createElement("h1", null, "The Shop!"),
    React.createElement("div", {
      className: "cart",
      children: [
        React.createElement("h2", null, "Your Cart"),
        React.createElement("p", null, "Your cart is empty"),
        React.createElement("p", null, "Total: $0"),
        React.createElement("button", {
          className: "checkout",
          disabled: true
        }, "Checkout"),
      ]
    },
    ),
  );
}


const App = () => {
  return React.createElement("div", { id: "app" }, Header());
}

root.render(App());