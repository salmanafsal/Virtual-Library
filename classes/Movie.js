const Media = require('./Media.js');


class Movie extends Media{

constructor(title,year,genre, director,duration, rating)
{
    super(title,year,genre);
    this.director= director;
    this.rating= rating;
    this.duration = duration;

}

summary()
{

    return  "Title: "+ this.title+", Director: "+ this.director+", Year: "+ this.year+", Genre: "+ this.genre+", Rating: "+ this.rating;
}

static longestMovie(Movie)
{
    let duration =0;
    let highestduration=0;
   for(let i=0;i<Movie.length;i++)
   {
   
       if (Movie[i].duration> duration)
       {
   
           duration= Movie[i].duration;
           highestduration=i;
       }
   
   
   
   }
   return Movie[highestduration];
   
   }

}


module.exports = Movie;