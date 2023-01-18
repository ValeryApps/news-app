import { Route, Routes } from "react-router-dom";
import { AppHeader } from "./components/AppHeader";
import { Login } from "./pages/auth/Login";
import { Home } from "./pages/Home";
import { SinglePost } from "./pages/posts/SinglePost";

function App() {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:slug" element={<SinglePost />} />
      </Routes>
    </>
  );
}

export default App;
