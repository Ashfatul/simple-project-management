import { Outlet } from "react-router-dom";

export default function Auth() {
   return (
      <div>
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
            <Outlet />
         </div>
      </div>
   );
}
