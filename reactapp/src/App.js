import Login from './Pages/Login'
import UserDashboard from './Pages/UserDashboard'

export default function App() {
 
  return (
    <Router>
      <div>

        <div className="App">
          <Routes>
            <Route element={<Login/>} path="/"></Route>
            <Route  element={<UserDashboard/>}  path="/dashboard"></Route>
          </Routes>
        </div>
      </div>
      </Router>
  );
}

