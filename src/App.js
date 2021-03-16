import React from 'react'
import SearchBar from './components/SearchBar'
import './styles/app.scss'

const App = () => {
    const apiURL =  'http://www.omdbapi.com/'
    const apiKey = `?apikey=${process.env.REACT_APP_API_KEY}`

    return (
        <div className="app">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <SearchBar />
            </main>
        </div>
    )
}

export default App