import { HelmetProvider } from 'react-helmet-async'
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <LandingPage />
      </div>
    </HelmetProvider>
  )
}

export default App
