import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid fixed-top ">
          <Link to="/"></Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link className="nav-link" to='/'>Home</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to='/basket'>Basket</Link>
              </li>
              <li class="nav-item">
                <Link className="nav-link" to='/items'>Items</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/items' element={<Items />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;