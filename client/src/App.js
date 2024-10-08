import { Main } from "./compo/Main";
import { FavPage } from "./compo/FavPage";
import { Navbar } from "./compo/Navbar";
import { ForgetPass } from "./compo/ForgetPass";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Description } from "./compo/Description";
import { Login } from "./compo/Login";
import { Signup } from "./compo/Signup";
import { Confirm } from "./compo/Confirm";
import {Footer} from "./compo/Footer";
import { Upload } from "./compo/UploadPage";
import { Loader } from "./compo/Loader";

function App() {

  return (
    <>
        <Routes> 
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/confirm" element={<Confirm />} />
          <Route path="/forgetpass" element={<ForgetPass />} />
          <Route path="/" element={<Navbar />}>
            <Route index element={<Main />} />
            <Route path="upload" element={<Upload />} />
            <Route path="loading" element={<Loader />} />
            <Route path="favPage" element={<FavPage />} />
            <Route path="description" element={<Description />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
