import { BrowserRouter as Router, Route } from 'react-router-dom';
import InfoPage from './components/InfoPage/InfoPage.js';
import WelcomePage from './components/WelcomePage/WelcomePage';
import MessagePageContainer from './components/MessagePage/MessagePageContainer';

function App() {
  return (
    <Router>
      <Route exact path="/" render={() => <WelcomePage />} />
      <Route exact path="/info" render={() => <InfoPage />} />
      <Route
        exact
        path="/sua-mensagem-aleatoria"
        render={() => <MessagePageContainer />}
      />
    </Router>
  );
}

export default App;
