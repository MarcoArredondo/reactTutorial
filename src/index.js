//Imporing Javascript files dont need to have the extension file
import React from "react";
import ReactDom from "react-dom";

//Importing other type of files need the full path
import "./index.css";

const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41+rguupalL._SX322_BO1,204,203,200_.jpg",
    title: "El Hombre Duplicado",
    author: "Jose Saramago",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41+rguupalL._SX322_BO1,204,203,200_.jpg",
    title: "Second Book",
    author: "Second book author",
  },
];

//Function to declare components needs to start with an Uppercase
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
//Another way to pass all the parameters into a component is using the spread operator {...book} an is equals to img={img} title={title} author={author}

//For inline style in JSX you need a Javascrip object and using the Javascript properties for the style
function Book(props) {
  //Object destructuring:
  //A usefull way to use directly the props instead of accessing the object attributes
  const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="book" />
      <h1>{title}</h1>

      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
