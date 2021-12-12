import { Container, Row, Col} from 'react-bootstrap'
import MovieSection from './ListMovieSection';
import { useEffect } from "react";


const Home = () => {

let movies = [];
const url = "http://localhost:3001/media";
// const headersPost = new Headers({
//   "Content-Type": "application/JSON",
// });

const getMovies = async () => {
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json()
      movies= data
      console.log(movies)
    } else {
      throw new Error(alert("bad request error!"));
    }
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])


    return (
      <Container>
        <Row>
          <Col md={12} style={{ marginBottom: "20px" }}>
            <MovieSection movies={movies}/>
          </Col>
          <Col md={12} style={{ marginBottom: "20px" }}>
            <MovieSection />
          </Col>
          <Col md={12} style={{ marginBottom: "20px" }}>
            <MovieSection />
          </Col>
        </Row>
      </Container>
    );
   
};
export default Home;
