import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <header>
        Elijah Prosperie Portfolio.            
        </header>
        <h2>
          Who Am I?
        </h2>
        <div>
          <img src='Elijah.JPG' alt='Elijah Prosperie'></img>
          A Full-Stack Developer with a years experience of programming. Having worked on both solo and team projects, I have a grasp on the full cycle of an app's creation. From the planning phase to deployment. My current tech stack being:

          <ul>
            <li>
              JavaScript(React/Vanilla)
            </li>
            <li>
              Jest
            </li>
            <li>
              Express
            </li>
            <li>
              Node.js
            </li>
            <li>
              PostgreSQL
            </li>
            <li>
              Git
            </li>
          </ul>
          <h3>Purpose of This Application?</h3>
          <div>
            I wanted to create a portfolio to hold my current and future projects in a way that can allow me creative freedom and express the bare basics of web-development. Click <Link to="apps">here</Link> to view my array of projects.
          </div>
        </div>

        </div>
  )
}
