const Media = require('./Media.js');
class Book extends Media{

constructor(title,year,genre, author, numPages, rating){

    super(title,year,genre);
    this.author = author;
    this.numPages= numPages;
    this.rating= rating;


}

summary()
{

    return "Title:"+ this.title+" , Author:"+ this.Author+", Year:"+ this.year+", Page Count:"+ this.numPages+", Genre:"+ this.genre+", Rating:" + this.rating;

}

static highestRating(Book)
{
 let rating =0;
 let highestrank=0;
for(let i=0;i<Book.length;i++)
{

    if (Book[i].rating> rating)
    {

        rating= Book[i].rating;
        highestrank=i;
    }



}
return Book[highestrank];

}

}


module.exports = Book;