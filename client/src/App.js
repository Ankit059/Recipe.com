import { Main } from "./compo/Main";
import { FavPage } from "./compo/FavPage";
import { Navbar } from "./compo/Navbar";
import { BrowserRouter as Rout, Routes, Route } from "react-router-dom";

function App() {
  debugger

  return (
    <>
      <Rout>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Main />} />
            <Route path="favPage" element={<FavPage />} />
          </Route>
        </Routes>
      </Rout>
    </>
  );
}

export default App;
