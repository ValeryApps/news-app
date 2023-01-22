import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Category } from "./pages/categories/Category";
import { Country } from "./pages/coutries/Country";
import { Home } from "./pages/Home";
import { SinglePost } from "./pages/posts/SinglePost";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route path="/countries/:country" element={<Country />} />
        <Route path="/categories/:category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
