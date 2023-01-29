import NavBar from './NavBar';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Create from './Create';
import ReviewPage from './ReviewPage';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element ={<Home />}/>
            <Route path="/create" element ={<Create />} />
            <Route path="/blogs/:id" element ={<ReviewPage />} />
            <Route path="*" element ={<NotFound/>}  />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
