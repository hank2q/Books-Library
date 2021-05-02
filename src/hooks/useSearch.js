import { useState } from "react";

const useSearch = (setter) => {
    const searchGoogle = async (q) => {
        try {
            const data = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=${q}&printType=books&langRestrict=en&maxResults=8&key=AIzaSyB4BrYz08qiq2OFr5ef1bJRJvbFkiqCCUI`
            );
            const response = await data.json();
            let newGB = [];
            response.items.forEach((item) => {
                let fromat = {
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors,
                    publisher: item.volumeInfo.publisher,
                    image:
                        item.volumeInfo.imageLinks &&
                        item.volumeInfo.imageLinks.thumbnail,
                    description: item.volumeInfo.description,
                    genre: item.volumeInfo.categories && item.volumeInfo.categories,
                };
                newGB.push(fromat);
            });
            setter(newGB);
        } catch (error) {
            console.log(error);
        }
    };
    return searchGoogle;
};

export default useSearch;
