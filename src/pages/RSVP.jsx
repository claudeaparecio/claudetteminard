// RSVP TODO:
// - name
// - total guest (kauban)
// - can attend

const RSVP = () => {

  return (
    <div className="flex flex-col min-h-screen items-center px-[100px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-light text-center mt-[200px] text-yellowAccent text-8xl tracking-[10px]">
        RSVP
      </p>
      <div>
      <p className="font-light text-center md:text-[20px] sm:[14px] phone:text-[14px] tracking-[5px]">
        Please respond with your ability to attend before the 20th of August
      </p>
      <input name="name" placeholder="Name" />
      <input name="email" />
    </div>
    </div>
  );
}

export default RSVP;
