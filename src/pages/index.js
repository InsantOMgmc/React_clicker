import React from "react";
import logo from "./assets/logo.jpg";
const book = {
    name: 'Убийства по алфавиту',
    bookAuthor: 'Aгата кристи',
    ganre: 'Детектив',
    pageCount: 321,
    review: 'Одна из лучших книг Агаты Кристи. Как можно было додуматься до такой концепции убийства до сих пор не могу понять. Браво',
    img: 'assets/k.jpg'
}
const Book = () => {
    return (
        <div>
            <h1>Название книги: {book.name} </h1>
            <h3>ФИО автора: {book.bookAuthor}</h3>
            <h4>Жанр: {book.ganre}</h4>
            <p>Кол-во страниц: {book.pageCount}</p>
            <p>Рецензия: {book.review}</p>
            <img src={logo} className='logo'></img>
        </div>
    );
}

export default Book;