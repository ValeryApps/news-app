import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { FiLock, FiLogIn } from "react-icons/fi";
import { ImEye, ImEyeBlocked } from "react-icons/im";
import { Link } from "react-router-dom";
import { BarLoader } from "react-spinners";
import { register_user } from "../../api/authApi";
import { AuthInput } from "../../components/inputs/AuthInput";
import * as Yup from "yup";
import { Form, Formik } from "formik";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const userInfo = {
    username: "",
    email: "",
    password: "",
  };
  const [userData, setUserData] = useState(userInfo);
  const [loading, setLoading] = useState(false);
  const { username, email, password } = userData;

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const registerValidation = Yup.object({
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(22).required(),
  });
  const handleSubmit = async () => {
    try {
      await register_user(userData);
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
        initialValues={{ username, email, password }}
        enableReinitialize
        validationSchema={registerValidation}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, isValid }) => (
          <Form className="w-full flex flex-col gap-4">
            <div className="relative">
              <FaRegUser className="top-3.5 absolute left-1" />
              <AuthInput
                type="text"
                name="username"
                value={username}
                placeholder="Username"
                onChange={handleOnchange}
              />
            </div>
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
                  Signing up <BarLoader color="#36d7b7" width={50} />
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3">
                  Register
                  <FiLogIn />
                </div>
              )}
            </button>
            <h2 className="text-center">
              You already have an account?{" "}
              <Link
                className="text-teal-600 hover:text-teal-800 hover:font-bold hover:translate-x-20"
                to="/login"
              >
                Login
              </Link>
            </h2>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// import { Form, Formik } from "formik";
// import React, { useState } from "react";
// import * as Yup from "yup";
// // import RegisterInput from "../inputs/registerInput";
// import { PulseLoader } from "react-spinners";
// import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
// import { Link, useNavigate } from "react-router-dom";
// import { register_user } from "../../api/authApi";
// import { AuthInput } from "../../components/inputs/AuthInput";
// // import { register_user } from "../../firebase_api/AuthApi";

// export const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const userInfo = {
//     username: "",
//     email: "",
//     password: "",
//   };

//   const [register, setRegister] = useState(userInfo);
//   const navigate = useNavigate();
//   const { username, email, password } = register;

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setRegister({ ...register, [name]: value });
//   };
//   const registerValidation = Yup.object({
//     username: Yup.string().required("What first name is required"),
//     email: Yup.string().email().required(),
//     password: Yup.string().required().min(6),
//   });
//   const submitRegister = async () => {
//     try {
//       setLoading(true);
//       console.log(register);
//       // await register_user(userData);
//       setLoading(false);
//       // navigate("/");
//     } catch (error) {
//       if (error.message === "Firebase: Error (auth/email-already-in-use).");
//       setError("Sorry, this email is already in taken!");
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="">
//       <div className="register">
//         <div className=" flex flex-col items-center">
//           <span className="text-3xl font-bold text-teal-800">
//             Sign Up For Free
//           </span>
//           <span>It is very quick and easy</span>
//         </div>
//         <Formik
//           // initialValues={{
//           //   username,
//           //   email,
//           //   password,
//           // }}
//           enableReinitialize
//           validationSchema={registerValidation}
//           onSubmit={submitRegister}
//         >
//           {(_) => (
//             <Form className="">
//               <div className="reg_line">
//                 <AuthInput
//                   type="text"
//                   name="username"
//                   placeholder="User name"
//                   onChange={handleOnChange}
//                   value={username}
//                   // className="w-full"
//                 />
//               </div>
//               <div className="reg_line">
//                 <AuthInput
//                   type="email"
//                   name="email"
//                   placeholder="Mobile number or Email Address"
//                   onChange={handleOnChange}
//                   value={email}
//                 />
//               </div>
//               <div className="relative">
//                 <AuthInput
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   placeholder="New Password"
//                   onChange={handleOnChange}
//                   value={password}
//                   // className="w-full"
//                 />
//                 <div
//                   className="absolute bottom-4 right-4 cursor-pointer"
//                   onClick={() => setShowPassword((prev) => !prev)}
//                 >
//                   {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
//                 </div>
//               </div>

//               {/* <div className="reg_infos">
//                 By clicking Sign Up, you agree to our{" "}
//                 <span>Terms, Data Policy &nbsp;</span> and
//                 <span>Cookie Policy.</span> You may receive SMS notifications
//                 from un and opt out at any time.
//               </div> */}
//               <div className="reg_btn_wrapper">
//                 <button
//                   type="submit"
//                   className="blue_btn open_signup"
//                   disabled={loading}
//                 >
//                   {loading ? " Signing you Up" : "Sign Up"}
//                   {loading && <PulseLoader color="white" />}
//                 </button>
//               </div>

//               {error && (
//                 <h6 className="text-center font-semibold text-red-700">
//                   {error}
//                 </h6>
//               )}
//               <p className="text-center">
//                 Already have an account?{" "}
//                 <Link to="/login" className="font-semibold text-blue-900">
//                   Sign in
//                 </Link>
//               </p>
//             </Form>
//           )}
//         </Formik>
//       </div>
//       {/* register */}
//     </div> /*blur*/
//   );
// };

// // export default RegisterForm;
