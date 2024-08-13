import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Layout from "./Layout";
import TheWedding from "./pages/TheWedding";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/the-wedding" element={<TheWedding />} />

        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
