import React from 'react'
import './Home.css'

const Home = (props) => (
    <div className="Home">
        <h1>Welcome to Codejobs</h1>
        <p>
            In this recipe you will learn how to add styles to
            components. If you want to learn more you can visit
            our Youtube Channel at
            <a href="http://youtube.com/codejobs">Codejobs</a>.
        </p>
        <p>
            <button
            style={{
                backgroundColor: 'gray',
                border: '1px solid black'
            }}
            >
            Click me!
            </button>
        </p>
        
    </div>
)

export default Home