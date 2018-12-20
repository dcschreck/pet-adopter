import React from "react";
import { Link } from "@reach/router";

class Pet extends React.Component {
  render() {
    //we're getting these from the parent (App.js)
    const { name, animal, breed, media, location, id } = this.props;

    let photos = [];

    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter(photo => photo["@size"] === "pn");
    }

    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={photos[0].value} alt={name} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {location}
          </h2>
        </div>
      </Link>
    );
  }
}

// // this is the child component of App; we are getting props from parent component; this is called a function component
// const Pet = props => {
//   return (
//     // curly braces means inside of it is a javascript expression and whatever it evaultes to will be uploaded to DOM
//     <div>
//       <h1>{props.name}</h1>
//       <h2>{props.animal}</h2>
//       <h2>{props.breed}</h2>
//     </div>
//   );
// };

export default Pet;
