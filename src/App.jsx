import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout";
import TheWedding from "./pages/TheWedding";
import FrequentlyAskedQuestions from "./pages/FAQs";
import RSVP from "./pages/RSVP";
import Admin from "./pages/Admin";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestions />} />
          <Route path="/the-wedding" element={<TheWedding />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
