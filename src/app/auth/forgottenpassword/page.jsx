import Link from "next/link";

export default function ForgottenPassword() {
  return (
    <section>
      <main className="mb-24 mt-12 m-auto">
        <div className="container mx-auto my-auto px-4">
          {/* Section: Login form */}
          <section className="">
            <div className="flex justify-center">
              <div className="xl:w-1/3 md:w-1/2">
                <div className="card rounded-lg shadow-lg">
                  <div className="card-body p-6">
                    <h3 className="text-center text-2xl font-semibold">
                      Forgotten Password
                    </h3>
                    <br />

                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pills-login"
                        role="tabpanel"
                        aria-labelledby="tab-login"
                      >
                        <div className="w-full flex justify-center items-center pb-5">
                          <p>
                            Enter the email user to create you account to reset
                            password
                          </p>
                        </div>
                        <form>
                          {/* Email input */}
                          <div className="mb-4">
                            <label className="form-label" htmlFor="Full Name">
                              Email Address
                            </label>
                            <input
                              type="text"
                              id="username"
                              name="username"
                              className="form-control border border-gray-300 p-2 w-full"
                            />
                          </div>

                          <button
                            className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            type="submit"
                          >
                            <span className="mr-2">
                              Send password reset code{" "}
                            </span>
                            <i className="fas fa-sign-in-alt" />
                          </button>

                          <div className="text-center">
                            <p className="mt-4">
                              Remembered your password?
                              <Link
                                href="/register"
                                className="text-blue-500 hover:underline"
                              >
                                Login
                              </Link>
                            </p>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
