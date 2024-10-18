const Media = require('./Media.js');


class Music extends Media{

constructor(title,year,genre, artist, length)
{
    super(title,genre,year);
    this.artist= director;
    this.length= rating;


}

summary()
{

    return  "Title:"+ this.title+", Artist:"+ this.artist+", Year:"+ this.year+", Genre:"+ this.genre+", Length:"+ this.length;
}

static shortestAlbum(Music)
{
    let duration =Music[0].length;
    let shortest=0;
   for(let i=0;i<Movie.length;i++)
   {
   
       if (Music[i].length<duration )
       {
   
           duration= Music[i].length;
           shortest=i;
       }
   
   
   
   }
   return Music[shortest];
   
   }

}


module.exports = Music;