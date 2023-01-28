import Movie from "./Movie";
import React from 'react';



//stores given movie data as objects
let dataArray = [

    {
       Title: "Shrek",

       Synopsis: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",

      },


    {
        Title: "Shrek 2",

        Synopsis: "Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona's parents are King and Queen, to celebrate their marriage ",
     },

     {
        Title: "Shrek the Third",

        Synopsis: "When King Harold suddenly croaks, Shrek learns he will have to rule the land of Far, Far Away, unless he can find a suitable heir to the throne.",
     },

     {
        Title: "Shrek the Halls",

        Synopsis: "Shrek the Halls is an American Christmas computer-animated comedy television special that premiered on the American television network ABC on November 28, 2007.",
     },

     {
        Title: "Shrek Forever After",
        Synopsis: "Long-settled into married life and fully domesticated, Shrek begins to long for the days when he felt like a real ogre.",
     },
]



//using props and rendering the movie component.
const MovieList = (props) => {
  return (
    <div>
      {dataArray.map((movie, index) => {
        return (
          <Movie
            key={index}
            title={movie.Title}
            rating={movie.Rating}
            synopsis={movie.Synopsis}
          />
        );
      })}
    </div>
  );
};

export default MovieList;



  