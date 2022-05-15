import React from "react";

function TouristInfoCards() {
  return (
    <div class="d-flex justify-content-between container">
      <div className="card">
        <img
          src="http://ukgbc.s3.eu-west-2.amazonaws.com/wp-content/uploads/2021/10/14111044/Glasgow-cityscape.jpg"
          className="card-img-top"
        />
        <h2 className="cities">Glasgow</h2>
        <p className="para">
          Glasgow is situated along both banks of the River Clyde 20 miles (32
          km) from that river’s mouth on the western, or Atlantic, coast.
          Glasgow is Scotland’s largest city, and it forms an independent
          council area that lies entirely within the historic county of
          Lanarkshire.
        </p>
        <div className="card-body">
          <a
            href="peoplemakeglasgow.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://static.amazon.jobs/locations/118/thumbnails/Manchester_-_Thumbnail.jpg?1456767226"
          className="card-img-top"
        />
        <h2 className="cities">Manchester</h2>
        <p className="para">
          Manchester is a major city in the northwest of England with a rich
          industrial heritage. The Castlefield conservation area’s 18th-century
          canal system recalls the city’s days as a textile powerhouse, and
          visitors can trace this history at the interactive Museum of Science
          and Industry.
        </p>
        <div className="card-body">
          <a
            href="visitmanchester.com"
            target="_blank"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card">
        <img
          src="https://cdn.londonandpartners.com/-/media/images/london/visit/things-to-do/sightseeing/london-attractions/tower-bridge/thames_copyright_visitlondon_antoinebuchet640x360.jpg?mw=640&hash=27AEBE2D1B7279A196CC1B4548638A9679BE107A"
          className="card-img-top"
        />
        <h2 className="cities">London</h2>
        <p className="para">
          London is the capital of the United Kingdom. It is among the oldest of
          the world’s great cities, its history spanning nearly two millennia,
          and is one of the most cosmopolitan. By far Britain’s largest
          metropolis, it is also the country’s economic, transportation, and
          cultural centre.
        </p>
        <div className="card-body">
          <a href="visitlondon.com" target="_blank" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default TouristInfoCards;
