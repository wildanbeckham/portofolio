import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand fixed-top">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="btn-group dropend">
              <button type="button" class="btn" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots-vertical h1"></i>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Action two
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Action three
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <nav class="navbar fixed-bottom">
        <div class="container-fluid">
          <a class="navbar-brand p-4 ms-2 bg-warning rounded-pill" href="#"></a>
        </div>
      </nav>
    </>
  );
}

export default App;
