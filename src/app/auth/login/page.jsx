"use client";
import { apiInstance } from "@/components/config/axios";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState({});
  async function onSubmit(event) {
    event.preventDefault();
    // if (isLoading == false) return false;
    seterror({});
    const formData = new FormData(event.target);
    setisLoading(true);
    try {
      const response = await apiInstance.post("auth/login/", formData);
      const { data } = response;

      console.log(data, "data");
    } catch (error) {
      if (error?.response?.status == 400) {
        seterror({
          type: "field",
          field: Object.keys(error.response.data).toString(),
          detail:
            error.response.data[
              Object.keys(error.response.data).toString()
            ].toString(),
        });
      }
      if (error?.response?.status == 401) {
        seterror({
          type: "user",
          detail: "Email/Password field is invalid",
        });
      }
    } finally {
      setisLoading(false);
    }
  }

  return (
    <section className="min-h-screen flex justify-center items-center">
      <main className="m-auto h-full flex-grow">
        {/* Section: Login form */}

        <div className="m-auto sm:w-[70%] xl:w-1/3 md:w-1/2">
          <div className="card rounded-lg shadow-lg">
            <div className="card-body p-6">
              <h3 className="text-center text-2xl font-semibold">Login</h3>
              <br />
              {error.type == "user" && (
                <small className="w-full flex justify-center items-center text-red-500 italic text-base">
                  {error.detail}
                </small>
              )}

              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-login"
                  role="tabpanel"
                  aria-labelledby="tab-login"
                >
                  <form onSubmit={onSubmit}>
                    {/* Email input */}
                    <div className="mb-4">
                      <label className="form-label" htmlFor="Email">
                        Email Address
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control border border-gray-300 p-2 w-full"
                        required={true.toString()}
                      />
                      {error.type == "field" && error.field == "email" && (
                        <small className="w-full flex  items-center text-red-500 italic text-sm">
                          {error.detail}
                        </small>
                      )}
                    </div>

                    <div className="mb-4">
                      <label className="form-label" htmlFor="loginPassword">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        className="form-control border border-gray-300 p-2 w-full"
                        required={true.toString()}
                      />
                      {error.type == "field" && error.field == "password" && (
                        <small className="w-full flex  items-center text-red-500 italic text-sm">
                          {error.detail}
                        </small>
                      )}
                    </div>

                    <button
                      className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      type="submit"
                      disabled={isLoading}
                    >
                      <span className="mr-2">
                        {isLoading ? "Loading..." : "Sign In"}
                      </span>
                      <i className="fas fa-sign-in-alt" />
                    </button>

                    <div className="text-center">
                      <p className="mt-4">
                        Don{"'"}t have an account?
                        <Link
                          href="/register"
                          className="text-blue-500 hover:underline"
                        >
                          Register
                        </Link>
                      </p>
                      <p className="mt-0">
                        <Link
                          href="/forgot-password/"
                          className="text-red-500 hover:underline"
                        >
                          Forgot Password?
                        </Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
