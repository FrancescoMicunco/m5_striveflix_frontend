// 1 create a movie array
let movies = []
const url = "https://striveschool-api.herokuapp.com/api/movies";
const headers = new Headers({
    "Authorization": "process.env.BEARER_KEY",
    'Content-Type': 'application/JSON'
})

// 2 fetching data globally
const moviesFromServer = async() => {
    try {
        const res = await fetch(url, {})
        if (res.ok) {
            const data = await res.json()
            movies = await data
        } else {

            throw new Error(alert("bad request error!"));
        }
    } catch (error) { console.log(error) }
}

moviesFromServer()