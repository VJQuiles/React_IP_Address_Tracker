import './App.css'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import SearchForm from './components/SearchForm'
import ResultsDisplay from './components/ResultsDisplay'
import MapDisplay from './components/MapDisplay'

function App() {
  const [ipData, setIpData] = useState(null)

  return (
    <>
      <Container>
        <SearchForm onSearch={setIpData} />
        <ResultsDisplay data={ipData} />
        <MapDisplay data={ipData} />
      </Container>
    </>
  )
}

export default App
