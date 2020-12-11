//Imporing Javascript files dont need to have the extension file
import React from "react";
import ReactDom from "react-dom";

//Importing other type of files outside the node_modules need the full path and extensions sauf js extensions
import "./index.css";
import { books } from "./books";
//Function to declare components needs to start with an Uppercase
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        //... <- Sintax for rest parameters
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
//Another way to pass all the parameters into a component is using the spread operator {...book} an is equals to img={img} title={title} author={author}

function Book(props) {
  //Object destructuring: A usefull way to use directly the props instead of accessing the object attributes
  const { img, title, author } = props;

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
  };

  const complex = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1>{title}</h1>

      {/*For inline style in JSX you need a Javascrip object and using the Javascript properties (camelCase) for the HTML style*/}
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>

      {/*Wrap inside an arrow function methods with parameters to avoid being called when the application is loaded*/}
      <button type="button" onClick={() => complex(author)}>
        Complex
      </button>
    </article>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
