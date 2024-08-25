import './App.css'
import FileUpload from './components/FileUpload'
import Timeline from './components/Timeline'

function App() {
  return (
    <>
      <h3 className="montserrat-heading">WELCOME TO THE WEDDING OF</h3>
      <h1>Harena & Rohith</h1>
      <h4 className="montserrat-heading">AUGUST 25, 2024</h4>
      <FileUpload/>
      <Timeline/>
    </>
  )
}

export default App
