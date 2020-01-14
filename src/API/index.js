import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
  baseURL: "https://it-blog-posts.herokuapp.com/api/",
  responseType: "json"
});

const Endpoint = EndpointFactory(axiosInstance);
export default {
  rooms       : new Endpoint("rooms"),
  roomsStatus : new Endpoint("rooms/status"),
  bookings    : new Endpoint("roomBookings"),
  visitors    : new Endpoint("visitors"),
  putBooking     :(id)=> new Endpoint("roomBookings/" + id),
}