import { Container, Row, Col } from "react-bootstrap";
//import { useState, useEffect } from "react";

const Backoffice = () => {
let movies = [];
const url = "http://localhost:3001";
const headersPost = new Headers({
  "Content-Type": "application/JSON",
});

const getMovies = async () => {
  try {
    const res = await fetch(url, {
      method: "POST",
      headersPost,
    });
    if (res.ok) {
      
    } else {
      throw new Error(alert("bad request error!"));
    }
  } catch (error) {
    console.log(error);
  }
};

  return(
  <Container>
          <Row className="text-center">
        <Col md={6}>
          <h2 id="title" className="text-light mt-5 d-inline-block">
            BACKOFFICE ---{" "}
          </h2>

                    <div className="alert d-none" role="alert"></div>
          <form id="form" className="need-validation" novalidate>
            <div className="mb-3">
              <label for="name">Title</label>
              <textarea
                className="form-control "
                id="name"
                placeholder="Required Title"
                required
              ></textarea>
                    <div className="invalid-feedback">Please enter a title here.</div>
            </div>
            <div className="mb-3">
              <label for="description">Description</label>
              <textarea
                className="form-control "
                id="description"
                placeholder="Required Description"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter description here.</div>
            </div>

            <div className="mb-3">
              <label for="category">Category</label>
              <textarea
                className="form-control "
                id="category"
                placeholder="Required Category"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter a category here.</div>
            </div>

            <div className="mb-3">
              <label for="urlImage">Title</label>
              <textarea
                className="form-control "
                id="urlImage"
                type="url"
                placeholder="Required urlImage"
                required
              ></textarea>
              <div className="invalid-feedback">Please enter a valid url.</div>
            </div>

            <button
              id="add"
              className="btn btn-outline-primary d-inline-block"
              type="submit"
            >
              Add new film
            </button>
            <button id="send" className="btn btn-outline-primary " type="submit">
              Send Edit
            </button>
          </form>
        </Col>
      </Row>
    
  </Container>
  )};
export default Backoffice;
