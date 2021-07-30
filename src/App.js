import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Work from './components/Work/';
import About from './components/About';

const theme =  createTheme({
  palette: {
    primary: {
      main: '#2A8CAE',
    },
    secondary: {
      main: '#90B0C0',
    },
  },
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
        <Switch>
          <Route path="/work" component={Work} />
        </Switch>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
