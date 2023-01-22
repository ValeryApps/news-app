import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FiLock, FiLogIn } from "react-icons/fi";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link } from "react-router-dom";
import { AuthInput } from "../../components/inputs/AuthInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import { BarLoader } from "react-spinners";
import { login_user } from "../../api/authApi";

export const Login = () => {
  const userInfo = {
    email: "",
    password: "",
  };
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState(userInfo);
  const { email, password } = userData;
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const registerValidation = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(22).required(),
  });
  const handleSubmit = async () => {
    try {
      await login_user(userData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="flex flex-wrap justify-center items-center mx-auto md:w-[40%] sm:w-[75%] w-full bg-white pag-2 shadow-md p-4 h-fit my-4 rounded-md">
      <h1 className="text-center text-3xl text-teal-700  px-3 py-2">
        Welcome to E24
      </h1>
      <Formik
        initialValues={{ email, password }}
        enableReinitialize
        validationSchema={registerValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="w-full flex flex-col gap-4">
            <div className="relative">
              <AiOutlineMail className="top-3.5 absolute left-1" />
              <AuthInput
                type="text"
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleOnchange}
              />
            </div>
            <div className="relative">
              <FiLock className="top-3.5 absolute left-1" />
              <AuthInput
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleOnchange}
              />
              {showPassword ? (
                <ImEye
                  className="top-3.5 right-3 absolute cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <ImEyeBlocked
                  className="top-3.5 right-3 absolute cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>
            <button
              type="submit"
              className={`${
                isSubmitting || !isValid
                  ? "bg-gray-400 cursor-not-allowed text-black"
                  : "bg-teal-800 text-white"
              } mx-auto w-fit  font-bold text-lg px-5  lg:px-20 py-2  rounded-tl-full rounded-br-full `}
              disabled={isSubmitting && !isValid}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center gap-2 text-sm">
                  Logging in <BarLoader color="#36d7b7" width={50} />
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  Login
                  <FiLogIn />
                </div>
              )}
            </button>
            <h2 className="text-center">
              You already have an account?{" "}
              <Link
                className="text-teal-600 hover:text-teal-800 hover:font-bold hover:translate-x-20"
                to="/register"
              >
                Sign up
              </Link>
            </h2>
          </Form>
        )}
      </Formik>
    </div>
  );
};
