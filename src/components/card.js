import axios from "axios";

const Card = (article) => {

  const card = document.createElement("div") ;
  const headline = document.createElement("div") ; 
  const author = document.createElement("div") ; 
  const imgContainer = document.createElement("div") ; 
  const image = document.createElement("img") ; 
  const span = document.createElement("span") ; 

  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(image); 
  author.appendChild(span);

  card.classList.add("card") ; 
  headline.classList.add("headline") ; 
  author.classList.add("author") ; 
  imgContainer.classList.add("img-container") ;
  
  headline.textContent=article.headline;
  span.textContent=article.authorName;
  image.src=article.authorPhoto;

  
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
   return card ; 
}



const cardAppender = (selector) => {

  axios.get(`http://localhost:5001/api/articles/`)
  .then(res => {
    
    const articlesObj = res.data.articles ; 
    
    for ( let property in articlesObj ) {

          property = articlesObj[property] ; 

          for (let i = 0 ; i < property.length ; i ++ ) {
          const articleProperty =  property[i] ; 
          console.log (document.querySelector(selector).appendChild(Card(articleProperty)));
          }            
    }  ; 

  })

  .catch(err => {
    console.error(err)
  })
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}





export { Card, cardAppender }
