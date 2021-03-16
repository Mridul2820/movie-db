import { useState } from 'react'
import axios from 'axios'

import SearchBar from './components/SearchBar'
import Results from './components/Results'
import './styles/app.scss'

const apiURL =  'http://www.omdbapi.com/'
const apiKey = `?apikey=${process.env.REACT_APP_API_KEY}`

const App = () => {
    const [state, setState] = useState({
        s: "",
        results: [],
        selected: {}
    })

    const search = async(e) => {
        if(e.key === "Enter") {
            const result = await axios(apiURL + apiKey + "&s=" + state.s)
            let results = result.data.Search
            console.log(results)

            setState(prev => {
                return { ...prev, results: results }
            })
        }
    }

    const handleInput = e => {
        let s = e.target.value

        setState(prev => {
            return {...prev, s:s}
        })
    }
    

    return (
        <div className="app">
            <header>
                <h1>Movie Database</h1>
            </header>
            <main>
                <SearchBar handleInput={handleInput} search={search} />
                <Results results={state.results} />
            </main>
        </div>
    )
}

export default App