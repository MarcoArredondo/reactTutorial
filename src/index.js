//Imporing Javascript files dont need to have the extension file
import React from "react";
import ReactDom from "react-dom";

//Importing other type of files need the full path
import "./index.css";
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/41+rguupalL._SX322_BO1,204,203,200_.jpg",
  title: "El Hombre Duplicado",
  author: "Jose Saramago",
};

//Function to declare components needs to start with an Uppercase
function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book />
      <Book />
    </section>
  );
}

//For inline style in JSX you need a Javascrip object and using the Javascript properties for the style
function Book(props) {
  console.log(props);
  return (
    <article className="book">
      <img src={props.img} alt="book" />
      <h1>{props.title}</h1>

      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {props.author}
      </h4>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
