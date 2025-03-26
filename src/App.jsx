import { BrowserRouter as Router, Routes, Route} from "react-router";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
