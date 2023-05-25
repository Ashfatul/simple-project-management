import { Link } from "react-router-dom";

export default function Register() {
   return (
      <div className="login-form flex justify-center items-center flex-col w-full md:w-2/4 mb-5 md:mb-0">
         <div className="form-container w-72 bg-cyan-500 p-5 rounded-lg shadow-lg">
            <h3 className="text-center text-2xl mb-5">Register Now!</h3>
            <form>
               <input
                  type="text"
                  placeholder="Write your name ..."
                  className="w-full p-3 border-gray-200 rounded-md mb-3"
               />
               <input
                  type="email"
                  placeholder="Write your email ..."
                  className="w-full p-3 border-gray-200 rounded-md mb-3"
               />
               <input
                  type="text"
                  placeholder="link to your photo ..."
                  className="w-full p-3 border-gray-200 rounded-md mb-3"
               />
               <input
                  type="password"
                  placeholder="Write your password ..."
                  className="w-full p-3 border-gray-200 rounded-md mb-3"
               />
               <input
                  type="submit"
                  value="Register"
                  className="w-full p-3 bg-slate-600 text-white rounded-md mb-3 cursor-pointer"
               />
            </form>
            <div className="mt-5">
               <p className="text-center">
                  Already Have Account?{" "}
                  <Link to="/" className="underline text-white">
                     Login
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
}
