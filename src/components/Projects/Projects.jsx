import React from 'react'
import "./Projects.css"

export default function Projects() {
  return (
    <>
    <div>
<header>A collection of Apps put together.</header>  
<h2>Code Pals</h2>
<img src='CodePals.png' alt='A Screenshot from the Home page of Code Pals'/>
      <p>An app made with a team of four to combine the best elements of Stack Overflow and social media sites such as Twitter. Tech Stack included using JavaScript to create our client-side dynamic view and holding our database in a SQL back-end for ease of manipulation. I worked on the planning, back-end foundation and features such as the group chat functionality.</p>
    </div>
    <div>
      <h2>Mmmuscles</h2>
      <img src='mmmuscles.png' alt='A Screenshot from the sign up page of Mmmuscles' />
        <p>An app made with a team of four aimed towards helping those who need to plan out their schedule ahead of time. Tech Stack involved was Javascript and React for the client-side, while storing the data in SupaBase to hold the database. I created the calendar and implimented the feature that connected an exercise with the selected calendar date. </p>   
    </div>
    <div>
      <h2>Paw-Stars</h2>
      <img src='Paw-Stars.png' alt='A Screenshot of the sign up page of Paw-Stars' />
        <p>An app made with a team of four aimed towards those who wanted to connect with their pets on a deeper level. Basing off their astrology signs, multiple API's were used to give the user a selection of ideas and local places they could take their cat or dog. The Tech Stack consisting of Javascript with the React framework for our client-side. Using SQL and Node.JS for our back-end to store users in our tables. I created the features to connect the login/signup page with our back-end as well as connecting the API's to our app.</p>
    </div>
    
    
    </>

)
    }
