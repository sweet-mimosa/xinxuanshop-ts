import { GlobalStyle } from './style'
import Footer from './components/Footer'
import RouterConfig from './routes'
function App() {

  return (
    <div className="App">
      <RouterConfig/>
      <GlobalStyle/>
      <Footer/>
    </div>
  )
}

export default App
