import { useCallback, useState } from "react";
import { respondRsvp } from "../api/rsvp";
import { useNavigate } from "react-router-dom";

const RSVP = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [willAttend, setWillAttend] = useState("");
  const [guestCount, setGuestCount] = useState(0);
  const [attemptedToSubmit, setAttemptedToSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formReset = () => {
    setName("");
    setWillAttend(undefined);
    setGuestCount(0);
    setAttemptedToSubmit(false);
  };

  const submit = useCallback(async () => {
    setAttemptedToSubmit(true);
    if ((willAttend === "yes" || willAttend === "no") && !!name) {
      setIsSubmitting(true);
      await respondRsvp({
        name: name ?? "",
        attending: willAttend === "yes" ? true : false,
        guests: guestCount ?? 0,
      });
      setIsSubmitting(false);
      formReset();
      navigate("/");
    }
  }, [name, willAttend, guestCount]);

  return (
    <div className="flex flex-col min-h-screen items-center px-[100px] phone:px-[10px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-light text-center mt-[200px] text-yellowAccent text-8xl tracking-[10px]">
        RSVP
      </p>
      <div>
        <p className="mt-[10px] font-light text-center md:text-[20px] sm:[14px] phone:text-[14px]">
          Please respond with your ability to attend before the 21st of August
        </p>
      </div>
      <div className="w-full md:w-1/2 phone:w-full md:px-auto phone:px-2 my-10">
        <h3 class="font-cursive text-[40px] text-center text-greenAccent">
          Are you going to attend?
        </h3>
        <h3 className="font-regular mb-[10px] text-[20px] text-center text-greenAccent">
          The Wedding of Claudette & Minard
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
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
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
                class="w-full py-3 ms-2 text-sm font-medium text-gray-900"
              >
                Sorry I can't make it.
              </label>
            </div>
          </li>
        </ul>
        {attemptedToSubmit && willAttend === "" && (
          <p className="text-red-500 text-right text-[11px]">Required</p>
        )}
        <div class="flex-col flex items-center my-2">
          <div className="w-full">
            <label
              for="first_name"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              type="text"
              id="first_name"
              class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700"
              placeholder="Ex. Juan Dela Cruz"
              required
            />
            {attemptedToSubmit && !name && (
              <p className="text-red-500 text-right text-[11px]">Required</p>
            )}
          </div>
        </div>
        {willAttend === "yes" && (
          <div class="w-full flex flex-col my-2">
            <label
              for="quantity-input"
              class="block mb-2 text-sm font-medium text-gray-900"
            >
              How many people will come with you?
            </label>
            <div class="relative flex items-center w-2/5">
              <button
                type="button"
                id="decrement-button"
                data-input-counter-decrement="quantity-input"
                onClick={() =>
                  guestCount > 0 && setGuestCount((prev) => prev - 1)
                }
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
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
                class="bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-11 focus:ring-gray-100 focus:ring-2 focus:outline-none"
              >
                <svg
                  class="w-3 h-3 text-gray-900"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
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
        <button onClick={submit} className="bg-greenAccent w-full my-5 p-2">
          <text className="text-white">Submit</text>
        </button>
      </div>
      {isSubmitting && (
        <div className="w-full h-full z-[10] absolute bg-black bg-opacity-75 flex items-center justify-center">
          <svg
            aria-hidden="true"
            class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600 my-auto"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default RSVP;
