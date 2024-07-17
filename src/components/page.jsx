import Link from "next/link";

export default function Page() {
  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-200 antialiased">
      <div
        class="flex flex-col shadow-xl bg-white overflow-scroll"
        // style={{ width: "411px", height: "823px" }}
      >
        <div class="flex flex-col">
          <div class="bg-white rounded-full p-1 shadow-md border-gray-200 border items-center justify-between flex flex-row mx-5 mt-5">
            <div class="p-2 rounded-full text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>

            <div>
              <p class="text-xs text-gray-800 font-bold">Where to?</p>
              <p class="text-gray-800 text-xxsm">
                Anywhere Any week Add guests
              </p>
            </div>
            <div class="p-2 text-black rounded-full border border-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 7h-9"></path>
                <path d="M14 17H5"></path>
                <circle cx="17" cy="17" r="3"></circle>
                <circle cx="7" cy="7" r="3"></circle>
              </svg>
            </div>
          </div>
          <div class="border-b border-gray-200 flex flex-row justify-between px-5 mt-4 ">
            <div class="flex flex-col items-center border-b-2 border-black pb-2">
              <img
                class="h-7 w-7 mx-auto"
                src="https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                alt=""
              />
              <p class="text-xxsm text-black font-bold">Lakefront</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="h-7 w-7 mx-auto opacity-60"
                src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
                alt=""
              />
              <p class="text-xxsm text-gray-600">Nationals Parks</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="h-7 w-7 mx-auto opacity-60"
                src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
                alt=""
              />
              <p class="text-xxsm text-gray-600">Chalets</p>
            </div>
            <div class="flex flex-col items-center">
              <img
                class="h-7 w-7 mx-auto opacity-60"
                src="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
                alt=""
              />
              <p class="text-xxsm text-gray-600">Islands</p>
            </div>
          </div>
          <div class="mx-5 mt-5" style={{ width: "411px", height: "823px" }}>
            <img
              class="rounded-lg bg-cover"
              src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt=""
            />
            <div class="flex flex-row justify-between items-start mt-4">
              <div>
                <p class="text-sm text-gray-800 font-bold">Brienno, Italy</p>
                <p class="text-sm text-gray-800">49 kilometers away</p>
                <p class="text-sm text-gray-800">Aug 18-25</p>
                <p class="text-sm text-gray-800 mt-2">
                  {" "}
                  <strong>$2,135</strong> night
                </p>
              </div>
              <div class="flex flex-row items-center">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p class="text-sm">4,92</p>
              </div>
            </div>
          </div>
          <div class="mx-5 mt-5">
            <img
              class="rounded-lg bg-cover"
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2950&q=80"
              alt=""
            />
            <div class="flex flex-row justify-between items-start mt-4">
              <div>
                <p class="text-sm text-gray-800 font-bold">Brienno, Italy</p>
                <p class="text-sm text-gray-800">49 kilometers away</p>
                <p class="text-sm text-gray-800">Aug 18-25</p>
                <p class="text-sm text-gray-800 mt-2">
                  {" "}
                  <strong>$2,135</strong> night
                </p>
              </div>
              <div class="flex flex-row items-center">
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <p class="text-sm">4,92</p>
              </div>
            </div>
          </div>
          <div class="sticky pt-2 pb-4 bg-white bottom-0 flex flex-row justify-between px-5 border-t border-gray-300">
            <div class="flex-col flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <p class="text-xxsm font-semibold text-gray-800">Explore</p>
            </div>
            <div class="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
              </svg>
              <p class="text-xxsm font-regular">Whislists</p>
            </div>
            <div class="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16.2 3.8a2.7 2.7 0 0 0-3.81 0l-.4.38-.4-.4a2.7 2.7 0 0 0-3.82 0C6.73 4.85 6.67 6.64 8 8l4 4 4-4c1.33-1.36 1.27-3.15.2-4.2z"></path>
                <path d="M8 8c-1.36-1.33-3.15-1.27-4.2-.2a2.7 2.7 0 0 0 0 3.81l.38.4-.4.4a2.7 2.7 0 0 0 0 3.82C4.85 17.27 6.64 17.33 8 16"></path>
                <path d="M16 16c1.36 1.33 3.15 1.27 4.2.2a2.7 2.7 0 0 0 0-3.81l-.38-.4.4-.4a2.7 2.7 0 0 0 0-3.82C19.15 6.73 17.36 6.67 16 8"></path>
                <path d="M7.8 20.2a2.7 2.7 0 0 0 3.81 0l.4-.38.4.4a2.7 2.7 0 0 0 3.82 0c1.06-1.06 1.12-2.85-.21-4.21l-4-4-4 4c-1.33 1.36-1.27 3.15-.2 4.2z"></path>
                <path d="m7 17-5 5"></path>
              </svg>
              <p class="text-xxsm font-regular">Trips</p>
            </div>
            <div class="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p class="text-xxsm font-regular">Inbox</p>
            </div>
            <div class="flex-col flex items-center text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              <p class="text-xxsm font-regular">Profile</p>
            </div>
          </div>
          {/* <style>
            .text-xxsm{
                font-size: 10px;
            }
        </style> */}
        </div>
      </div>
    </div>
  );
}
