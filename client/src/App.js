import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import Geography from "./components/Geography/Geography";
import Party from "./components/Party/Party";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Master from "./pages/Master";
import Register from "./pages/Register";

function App() {
  const user = localStorage.getItem("token");
  return (
    <div className="App">
      <Router>

        <Routes>

          {user && <Route path="/dashboard" exact element={<Dashboard />} />}

          <Route path="/register" exact element={user ? <Dashboard /> : <Register />} />

          <Route path="forgotpassword" exact element={<ForgotPassword />} />

          {<Route path="/" exact element={<Login />} />}

          {/* <Route path="/dashboard" */}

          <Route path='/about' exact element={user ? <Dashboard /> : <About />} />

          <Route path='/contact' exact element={user ? <Dashboard /> : <Contact />} />

          <Route path='/dashboard' element={<Dashboard />} />

          <Route path='/master' element={<Master />} />

          <Route path='/master/party' element={<Party />} />

          <Route path='/master/party/:_id' element={<Party />} />

          <Route path='/master/geography' element={<Geography />} />

          <Route path="*" element={<ErrorPage />} />

        </Routes>

      </Router>
    </div>
  );
}

export default App;
