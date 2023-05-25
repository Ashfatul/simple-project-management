import { Link } from "react-router-dom";

export default function Login() {
   return (
      <div className="bg-zinc-100">
         <div className="block md:flex min-h-screen container py-5">
            <div className="site-info flex justify-center items-center flex-col w-full md:w-2/4 mb-5 md:mb-0">
               <h1 className="text-3xl text-center md:text-left md:text-5xl mb-5">
                  Simple Project Management
               </h1>
               <p>
                  A simple project management website helps individuals organize
                  and track tasks, deadlines, and progress, providing a
                  centralized platform for efficient personal project management
                  and organization.
               </p>
            </div>
            <div className="login-form flex justify-center items-center flex-col w-full md:w-2/4 mb-5 md:mb-0">
               <div className="form-container w-72 bg-cyan-500 p-5 rounded-lg shadow-lg">
                  <h3 className="text-center text-2xl mb-5">Welcome Back!</h3>
                  <form>
                     <input
                        type="email"
                        placeholder="Write your email ..."
                        className="w-full p-3 border-gray-200 rounded-md mb-3"
                     />
                     <input
                        type="password"
                        placeholder="Write your password ..."
                        className="w-full p-3 border-gray-200 rounded-md mb-3"
                     />
                     <input
                        type="submit"
                        value="Log in"
                        className="w-full p-3 bg-slate-600 text-white rounded-md mb-3 cursor-pointer"
                     />
                  </form>
                  <div className="or flex items-center before:h-px before:bg-white after:h-px before:w-full after:bg-white mb-3 after:w-full text-gray-200 gap-3">
                     or
                  </div>
                  <button className="btn w-full border-2 p-3 rounded-md mb-3">
                     Login With Google
                  </button>
                  <button className="btn w-full border-2 p-3 rounded-md mb-3">
                     Login With GitHub
                  </button>
                  <button className="btn w-full border-2 p-3 rounded-md mb-3">
                     Login With Facebook
                  </button>
                  <div className="mt-5">
                     <p className="text-center">
                        Don&apos;t Have Account?{" "}
                        <Link to="/register" className="underline text-white">
                           Register
                        </Link>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
