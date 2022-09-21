import { render } from 'react-dom'
import App from './App'
import { ThemeProvider } from './contexts/theme'
import './sass/index.scss'

render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
