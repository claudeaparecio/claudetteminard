import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./Layout";
import TheWedding from "./pages/TheWedding";
import FrequentlyAskedQuestions from "./pages/FAQs";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestions />} />
          <Route path="/the-wedding" element={<TheWedding />} />

        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
