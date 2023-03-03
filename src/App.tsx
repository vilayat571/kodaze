import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notfound from "./pages/404/Notfound";
import Aboutus from "./pages/About/Aboutus";
import Blog from "./pages/Blogs";
import SingleBlog from "./pages/Blogs/[id]";
import Contactus from "./pages/Contact/Contactus";
import Main from "./pages/Main/Main";
import Services from "./pages/Services/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs/:id" element={<SingleBlog />} />
        <Route path="/blogs/" element={<Blog />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
