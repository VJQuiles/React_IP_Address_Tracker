import './App.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchForm from './components/SearchForm'
import ResultsDisplay from './components/ResultsDisplay'
import MapDisplay from './components/MapDisplay'
import { fetchIPData } from './services/apiService'
import { ValidationError, NetworkError, DataError } from './util/errorHandler'

function App() {
  const [ipData, setIpData] = useState(null)

  const handleSearch = async (query: string) => {
    try {
      const data = await fetchIPData(query)
      //void for now because I havent defined the api call, that should fix this
      setIpData(data)
    }
    catch (e: unknown) {
      if (e instanceof ValidationError || e instanceof NetworkError || e instanceof DataError) {
        alert(e.message)
      }
      else {
        alert("You're not supposed to see this, that means something went wrong.")
      }
    }
  }

  return (
    <>
      <Container>
        <div className='map-wrapper'>
          <SearchForm onSearch={handleSearch} />
          <ResultsDisplay data={ipData} />
          <MapDisplay data={ipData} />
        </div>
      </Container>
    </>
  )
}

export default App
