//Imporing Javascript files dont need to have the extension file
import React from "react";
import ReactDom from "react-dom";

//Importing other type of files need the full path
import "./index.css";

//Function to declare components needs to start with an Uppercase
function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
    </section>
  );
}

//For inline style in JSX you need a Javascrip object and using the Javascript properties for the style
function Book() {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/41+rguupalL._SX322_BO1,204,203,200_.jpg"
        alt="book"
      />
      <h1>El Hombre Duplicado</h1>

      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        Jose Saramago
      </h4>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
