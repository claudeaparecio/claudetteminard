// RSVP TODO:
// - name
// - total guest (kauban)
// - can attend

import { useState } from "react";

const RSVP = () => {
  const [willAttend, setWillAttend] = useState("");
  const [guestCount, setGuestCount] = useState(0)

  return (
    <div className="flex flex-col min-h-screen items-center px-[100px] phone:px-[10px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-light text-center mt-[200px] text-yellowAccent text-8xl tracking-[10px]">
        RSVP
      </p>
      <div>
        <p className="mt-[10px] font-light text-center md:text-[20px] sm:[14px] phone:text-[14px]">
          Please respond with your ability to attend before the 20th of August
        </p>
      </div>
      <form className="w-full md:w-1/2 phone:w-full md:px-auto phone:px-2 my-10">
        <h3 class="mb-4 font-cursive text-[45px] text-center text-greenAccent">
          Are you going to attend?
        </h3>
        <ul class="w-full ">
          <li class="w-full border-b border-gray-200 rounded-t-lg">
            <div class="flex items-center ps-3">
              <input
                id="list-radio-id"
                type="radio"
                value="yes"
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
                onClick={(e) => setWillAttend(e.target.value)}
              />
              <label
                for="list-radio-id"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                Yes, of course!
              </label>
            </div>
          </li>
          <li class="w-full ">
            <div class="flex items-center ps-3">
              <input
                id="list-radio-military"
                type="radio"
                value="no"
                name="list-radio"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                onClick={(e) => setWillAttend(e.target.value)}
              />
              <label
                for="list-radio-military"
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900">
                Sorry I can't make it.
              </label>
            </div>
          </li>
        </ul>
        <div class="flex-col flex items-center my-2">
          <div className="w-full">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900">
              Full Name
            </label>
            <input
              type="text"
              id="first_name"
              class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700"
              placeholder="Ex. Juan Dela Cruz"
              required
            />
          </div>
        </div>
        {willAttend === "yes" && (
          <div class="w-full flex flex-col my-2">
            <label
              for="quantity-input"
              class="block mb-2 text-sm font-medium text-gray-900">
              How many people will come with you?
            </label>
            <div class="relative flex items-center w-2/5">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                onClick={() => guestCount > 0 && setGuestCount((prev) => prev - 1)}
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                <svg
                  class="w-3 h-3 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                id="quantity-input"
                value={guestCount}
                data-input-counter
                aria-describedby="helper-text-explanation"
                class="bg-gray-50 border-x-0 border-gray-300 h-11 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5"
                placeholder="999"
                required
              />
              <button
                type="button"
                id="increment-button"
                onClick={() => setGuestCount((prev) => prev + 1)}
                
                data-input-counter-increment="quantity-input"
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none">
                <svg
                  class="w-3 h-3 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
            
          </div>
        )}
        <button className="bg-greenAccent w-full my-5 p-2">
          <text className="text-white">Submit</text>
        </button>
      </form>
    </div>
  );
};

export default RSVP;
