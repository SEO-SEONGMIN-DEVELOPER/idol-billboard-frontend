import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import BIllboardPage from "./pages/BillboardPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/upload" element={<UploadPage></UploadPage>}></Route>
          <Route path="/billboard" element={<BIllboardPage></BIllboardPage>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
