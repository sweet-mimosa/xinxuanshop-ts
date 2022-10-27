import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/iconfont/iconfont.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '@/store'
import './rem'
import "swiper/css/bundle";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
