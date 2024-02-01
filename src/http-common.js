import axios from "axios";

export default axios.create({
  baseURL: "http://tutoriales-env.eba-9z3wg8ma.us-east-1.elasticbeanstalk.com/api/v1",
  headers: {
    "Content-type": "application/json"
  }
});