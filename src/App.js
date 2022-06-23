import "./App.css";
import { GroupList } from "./components/lists/GroupList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import { Home } from "./pages/Home";
import { CarAdd } from "./components/form/CarAdd";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="form" element={<CarAdd />} />
          <Route path="grouped" element={<GroupList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
