import { Container, Row, Col} from 'react-bootstrap'
import MovieSection from './ListMovieSection';


const Home = () => {
    return (
      <Container>
        <Row>
          <Col md={12} style={{ marginBottom: "20px" }}>
            <MovieSection />
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
