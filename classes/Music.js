const Media = require('./Media.js');


class Music extends Media{

constructor(title,year,genre, artist, length)
{
    super(title,year,genre);
    this.artist= artist;
    this.length= length;


}

summary()
{

    return  "Title: "+ this.title+", Artist: "+ this.artist+", Year: "+ this.year+", Genre: "+ this.genre+", Length: "+ this.length+ " seconds";
}

static shortestAlbum(Music)
{
    let duration =Music[0].length;
    let shortest=0;
   for(let i=0;i<Music.length;i++)
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