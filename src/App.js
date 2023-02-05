import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AppHeader } from "./components/AppHeader";
import { Login } from "./pages/auth/Login";
import { SignUp } from "./pages/auth/SignUp";
import { Category } from "./pages/categories/Category";
import { Country } from "./pages/coutries/Country";
import { Home } from "./pages/Home";
import { SinglePost } from "./pages/posts/SinglePost";
import "react-toastify/dist/ReactToastify.css";
import { AddPost } from "./pages/posts/AddPost";
import { PrivateRoute } from "./private_route/PrivateRoute";
import { EditPost } from "./pages/posts/EditPosts";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/post/:slug" element={<SinglePost />} />
        <Route element={<PrivateRoute />}>
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/edit-post/:postId" element={<EditPost />} />
        </Route>

        <Route path="/countries/:country" element={<Country />} />
        <Route path="/categories/:category" element={<Category />} />
      </Routes>
    </>
  );
}

export default App;
