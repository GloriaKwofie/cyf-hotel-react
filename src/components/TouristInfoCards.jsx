import React from "react";

function TouristInfoCards() {
  return (
    <div class="d-flex justify-content-between container">
      <div className="card">
        <img
          src="http://ukgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/10/14111044/Glasgow-cityscape.jpg"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="peoplemakeglasgow.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://static.amazon.jobs/locations/118/thumbnails/Manchester_-_Thumbnail.jpg?1456767226"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitmanchester.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
          className="card-img-top"
        />
        <div className="card-body">
          <a href="visitlondon.com" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
