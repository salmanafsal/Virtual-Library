const Media = require('./Media.js');


class Movie extends Media{

constructor(title,year,genre, director, duration)
{
    super(title,genre,year);
    this.director= director;
    this.rating= rating;


}

summary()
{

    return  "Title:"+ this.title+", Director:"+ this.director+", Year:"+ this.year+", Genre:"+ this.genre+", Duration:"+ this.duration+", Rating:"+ this.rating;
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