import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <dialog id="my_modal_3" className=" rounded-xl">
        <div className="modal-box w-[700px] h-[300px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Login</h3>
          <div className=" mb-5 mt-5">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Enter your Email"
              className=" w-80 px-3 py-1 border rounded-md  outline-none"
            />
          </div>
          <div>
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="Enter your Password"
              className=" w-80 px-3 py-1 border rounded-md  outline-none"
            />
          </div>
          {/* button */}
          <div className="flex justify-between mt-4">
            <button className=" bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
              Login
            </button>
            <p>
              Not Registered?
              <Link
                to="/signup"
                className=" underline text-blue-500 cursor-pointer"
              >
                signup
              </Link>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
