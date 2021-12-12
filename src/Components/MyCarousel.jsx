import { Container, Row, Card, Button, Carousel } from "react-bootstrap";


const MyCarousel = () => {
  return (
  <Carousel
    id="trendingNowControls"
    className="slide d-none d-md-block  "
    style={{
      maxHeight: "200px",
      overflowY: "hidden",
      overflowX: "auto",
      verticalAlign: "middle",
      display: "inline-block",
    }}
    data-ride="carousel"
  >
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div
          className="row no-gutters row-cols-12 row-cols-sm-6 row-cols-md-3 row-cols-lg-3"
          style={{ wrap: "nowrap" }}
        >
          <div className="col p-1">
            <img
              src="assets/media/media1.webp"
              alt=""
              className="img-fluid rounded movie-cover"
            />
          </div>
          <div className="col p-1">
            <img
              src="assets/media/media2.webp"
              alt=""
              className="img-fluid rounded movie-cover"
            />
          </div>
          <div className="col p-1">
            <img
              src="assets/media/media3.webp"
              alt=""
              className="img-fluid rounded movie-cover"
            />
          </div>
          <div className="col p-1">
            <img
              src="assets/media/media4.webp"
              alt=""
              className="img-fluid rounded movie-cover"
            />
          </div>
          {/* <div class="col p-1"><img src="assets/media/media5.webp" alt="" class="img-fluid rounded movie-cover"/></div>
                        <div class="col p-1"><img src="assets/media/media6.webp" alt="" class="img-fluid rounded movie-cover"/></div> */}
        </div>
      </div>
    </div>

    <a
      class="carousel-control-prev"
      href="#trendingNowControls"
      role="button"
      data-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a
      class="carousel-control-next"
      href="#trendingNowControls"
      role="button"
      data-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </Carousel>
  )
};
export default MyCarousel;
