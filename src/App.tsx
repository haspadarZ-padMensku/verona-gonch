import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'providers/Theme';
import 'scss/main.scss';

const Home = lazy(() => import('routes/Home'));
const About = lazy(() => import('routes/About'));

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
};

export default App;
