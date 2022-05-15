import React, { useState } from "react";
import fakeBookings from "../data/fakeBookings";
import Row from "./Row";

console.log(fakeBookings);

const SearchResults = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check In Date</th>
          <th scope="col">Check Out Date</th>
          <th scope="col">Nights</th>
        </tr>
      </thead>
      <tbody>
        {fakeBookings.map(booking => {
          return <Row booking={booking} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;
