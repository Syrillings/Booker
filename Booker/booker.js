
  /* Dear Programmer,
  When i wrote this code, only God and I understood how it worked. 
  Now, at the time you are reading it, only God knows how it works.
  Have fun scrolling through the most off class and ID names and
  ridiculous but somehow still functional data and API requests
  and whispering wtf along the way. Enjoy.
  Ps.There is no documentation and this code is recycled from 
  an older project of mine.
   Best of luck*/

   const link = "https://www.googleapis.com/books/v1/volumes";
   const key = "AIzaSyCQhqsuF3RUSYZA4BesCvir_Oh6pkyckik";
   
   const searchbtn = document.querySelector(".search button");
   
   
   
   async function findbook(){
     
     const book = document.getElementById("cake").value;
     const url = `${link}?q=${book}&key=${key}`
     console.log(url);
   
     const response = await fetch(url);
     var data = await response.json();
     console.log(data);
     
     
     document.querySelector("#grind").innerHTML = data.items[0].volumeInfo.authors[0];
     document.querySelector("#mud").innerHTML = data.items[0].volumeInfo.title;
     document.querySelector("#lexus").innerHTML = data.items[0].volumeInfo.categories;
     document.querySelector("#pig").innerHTML = data.items[2].volumeInfo.pageCount;
     document.querySelector("#karn").innerHTML = data.items[0].volumeInfo.description;
     }
   
     const weblink = "https://openlibrary.org/search.json";
     async function getdate(){
     const book =  document.getElementById("cake").value;
     const turl = `${weblink}?q=${book}`;
     const response = await fetch(turl);
     var metadata = await response.json();
     console.log(metadata);
   
     document.querySelector("#mid").innerHTML = metadata.docs[0].first_publish_year;
     document.querySelector("#rage").innerHTML = metadata.docs[0].ratings_count_2;
     document.querySelector("#num").innerHTML = metadata.docs[0].isbn[1];
   }
   
     searchbtn.addEventListener("click", ()=>{
     findbook()
   })