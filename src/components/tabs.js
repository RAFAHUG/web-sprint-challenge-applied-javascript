import axios from 'axios';
import { topics } from '../mocks/data';


const Tabs = (topics) => {


  const divTopics = document.createElement('div');
  
  const tabs = topics.map(element => {
    const newtab = document.createElement('div');
    newtab.classList.add("tab"); 
    newtab.textContent = element ; 
    return newtab ; 
  });

  console.log(tabs);
  
  tabs.forEach(element => {
    divTopics.appendChild(element) ; 
  });
  
  divTopics.classList.add("topics");


  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  
  return divTopics ; 

}

const tabsAppender = (selector) => {

axios.get(`http://localhost:5001/api/topics`)
.then( res => {
  console.log(res.data.topics)
  document.querySelector(selector).appendChild(Tabs(res.data.topics)) ; 
})
.catch(err => {
  console.error(err);
})

 
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //

  return tabsAppender;

}


export { Tabs, tabsAppender }
