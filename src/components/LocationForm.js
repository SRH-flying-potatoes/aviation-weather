import { Form } from "semantic-ui-react";
import React, { useState } from "react";
import axios from "axios";

const LocationForm = () => {
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const handleChange = (e, { name, value }) => {
    name === "lat" ? setLat(value) : setLong(value);
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:5000/", {
        lat: lat,
        long: long,
      })
      .then((res) => console.log(res.data));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            placeholder="Latitude"
            name="lat"
            value={lat}
            onChange={handleChange}
          />
          <Form.Input
            placeholder="Longitude"
            name="long"
            value={long}
            onChange={handleChange}
          />
          <Form.Button content="Submit" />
        </Form.Group>
      </Form>
    </div>
  );
};

export default LocationForm;
