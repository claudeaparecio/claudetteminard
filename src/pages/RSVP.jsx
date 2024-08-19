// RSVP TODO:
// - name
// - total guest (kauban)
// - can attend

const RSVP = () => {
  return (
    <div className="flex flex-col min-h-screen items-center px-[100px] phone:px-[10px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-light text-center mt-[200px] text-yellowAccent text-8xl tracking-[10px]">
        RSVP
      </p>
      <div>
        <p className="mt-[10px] font-light text-center md:text-[20px] sm:[14px] phone:text-[14px] tracking-[5px]">
          Please respond with your ability to attend before the 20th of August
        </p>
        <form>
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="first_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                id="first_name"
                class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Juan"
                required
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last name
              </label>
              <input
                type="text"
                id="last_name"
                class="text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 -700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Dela Cruz"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
