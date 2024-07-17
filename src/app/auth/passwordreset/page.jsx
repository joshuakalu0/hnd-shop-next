import Link from "next/link";

export default function PasswordReset() {
  return (
    <main className="mb-24 mt-12">
      <div className="container mx-auto px-4">
        {/* Section: Login form */}
        <section className="">
          <div className="flex justify-center">
            <div className="xl:w-1/3 md:w-1/2">
              <div className="card rounded-lg shadow-lg">
                <div className="card-body p-6">
                  <h3 className="text-center text-2xl font-semibold">
                    Create A New Password
                  </h3>
                  <br />

                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="pills-login"
                      role="tabpanel"
                      aria-labelledby="tab-login"
                    >
                      <form>
                        <div className="mb-4">
                          <label className="form-label" htmlFor="loginPassword">
                            Password
                          </label>
                          <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                            className="form-control border border-gray-300 p-2 w-full"
                          />
                        </div>
                        <div className="mb-4">
                          <label className="form-label" htmlFor="loginPassword">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            id="confirm-password"
                            placeholder="Confirm Password"
                            required
                            className="form-control border border-gray-300 p-2 w-full"
                          />
                        </div>
                        {/* Password Check */}
                        {/* <p className='font-semibold text-red-500'>
                                                    {password2 !== password ? 'Passwords do not match' : ''}
                                                </p> */}

                        <button
                          className="btn btn-primary w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          type="submit"
                          disabled={"isLoading"}
                        >
                          <span className="mr-2">Create Password</span>
                          <i className="fas fa-user-plus" />
                        </button>
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
  );
}