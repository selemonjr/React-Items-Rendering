import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
const Books = [{
  id:1,
  image:"https://images-na.ssl-images-amazon.com/images/I/71tQ6jq5-ZL._AC_UL200_SR200,200_.jpg",
  author:"Simon Sinek",
  title:"Start With Why",
}, {
  id:2,
  image:"https://images-na.ssl-images-amazon.com/images/I/619M-4xNINL._AC_UL200_SR200,200_.jpg",
  author:"Gayle Laakmann McDowell",
  title:"Cracking the Coding Interview",
}, {
  id:3,
  image:"https://images-na.ssl-images-amazon.com/images/I/61GA1fTwZFL._AC_UL200_SR200,200_.jpg",
  author:"Kai-Fu Lee",
  title:"AI 2041: Ten Visions for Our Future"
}, {
  id:4,
  image:"https://images-na.ssl-images-amazon.com/images/I/71jDLpPMdFS._AC_UL200_SR200,200_.jpg",
  title:"The Bitcoin Standard",
  author:"Saifedean Ammous"
}, {
  id:5,
  image:"https://images-na.ssl-images-amazon.com/images/I/81vmJCNCm6L._AC_UL200_SR200,200_.jpg",
  title:"Python Crash Course",
  author:"Eric Matthes",
}, {
  id:6,
  image:"https://images-na.ssl-images-amazon.com/images/I/61RMsS9oXVL._AC_UL200_SR200,200_.jpg",
  title:"DOCS For Developers",
  author:"Jared Bhatti",
}]
const Lists = () => {
  return(
    <section className="lists">
    {Books.map((book) => {
         return <Pdf key={book.id} {...book}/>
    })}
    </section>
  )
}
const Pdf = (props) => {
  const {image,author,title} = props
  return (
    <article className="books">
    <img src={image} alt="" />
    <h3>{title}</h3>
    <h1>{author}</h1>
    </article>
  )
}
ReactDOM.render(<Lists/>,document.getElementById("root"))
