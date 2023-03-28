import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GiPadlock } from "react-icons/gi";
import { RiAccountCircleFill } from "react-icons/ri";

function Login({ userId }) {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    admission_number: "",
    password: "",
  });

  function handleLogin(event) {
    event.preventDefault();
    fetch("/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ login }),
    })
    .then((res) => res.json())
    .then((data) => console.log(data));
    // setLogin({
    //   admission_number: "",
    //   password: "",
    // });
  }

//   function validateUser(user) {
//     if (user.password === login.password) {
//       userId(user.id);
//       setTimeout(() => navigate("/"), 2000);
//     } else {
//       Swal.fire({
//         title: "Error during validation",
//         icon: "error",
//         timer: 2000,
//       });
//     }
//   }
  return (
    <section className="bg-gray-400">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Log into your account
            </h1>
            <form onSubmit={handleLogin} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your Admission Number
                </label>
                <div className="flex flex-row items-center">
                  <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                    <RiAccountCircleFill />
                  </div>
                  <input
                    type="text"
                    name="admission_number"
                    id="admission_number"
                    value={login.admission_number}
                    onChange={(event) =>
                      setLogin((prevState) => ({
                        ...prevState,
                        admission_number: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="I163/4066/2019"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <div className="flex flex-row items-center">
                  <div className="py-2.5 mr-1 px-3 border border-black rounded-lg">
                    <GiPadlock />
                  </div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={login.password}
                    onChange={(event) =>
                      setLogin((prevState) => ({
                        ...prevState,
                        password: event.target.value,
                      }))
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-500 font-bold text-gray-800 p-2 rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;