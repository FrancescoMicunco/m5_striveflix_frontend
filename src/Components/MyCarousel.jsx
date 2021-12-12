import { Carousel } from "react-bootstrap";
import SingleMovie from "./SingleMovie"


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
          <SingleMovie />
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
