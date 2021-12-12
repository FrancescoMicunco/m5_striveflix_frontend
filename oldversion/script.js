import { useState, useEffect } from "react"



let movies = []
const url = "http://localhost:3001";
const headersPost = new Headers({

    'Content-Type': 'application/JSON'
})


const getMovies = async() => {

    try {
        const res = await fetch(url, {
            method: "POST",
            headersPost
        })
        if (res.ok) {
            const data = await res.json()
            movies = await data
        } else {

            throw new Error(alert("bad request error!"));
        }
    } catch (error) { console.log(error) }
}

export default Movies