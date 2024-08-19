import { useEffect, useState } from "react";
import { db } from "../api/firebase";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Attending",
    selector: (row) => row.attending,
  },
  {
    name: "Total Guests",
    selector: (row) => row.guests,
  },
];

const Admin = () => {
  const [rsvps, setRsvps] = useState([]);
  const [attendingCount, setAttendingCount] =useState(0);
  const [headCount, setHeadCount] =useState(0);
  const [declineCount, setDeclineCount] =useState(0);


  useEffect(() => {
    const unsubscribe = db.collection("todos").onSnapshot((snapshot) => {
      const rsvpList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRsvps(rsvpList);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const data = rsvps.reduce((obj, rsvp) => {
      if (rsvp.attending) {
        obj.attendingCount += 1;
      } else {
        obj.declineCount += 1;
      }
      obj.headCount += (rsvp.guests + 1) // plus 1 is the one who responded to rsvp  
      
      return obj;
    }, {
      attendingCount: 0,
      headCount: 0,
      declineCount: 0,
    });

    setAttendingCount(data.attendingCount);
    setHeadCount(data.headCount);
    setDeclineCount(data.declineCount);
  }, [rsvps]);

  return (
    <div className="flex flex-col min-h-screen items-center px-[100px] phone:px-[10px] overflow-hidden bg-[#FFFBF4]">
      <p className="font-light text-center mt-[150px] mb-[50px] text-yellowAccent text-lg tracking-[10px]">
        RSVP Reponses
      </p>
      <div className="w-[100%] mb-[20px]">
        <div className="flex flex-row">
          <p className="font-bold text-md tracking-[5px]">Attending:</p>
          <p className="font-bold text-md tracking-[5px] text-yellowAccent">{attendingCount}</p>
        </div>
        <div className="flex flex-row">
          <p className="font-bold text-md tracking-[5px]">Total Head Count:</p>
          <p className="font-bold text-md tracking-[5px] text-yellowAccent">{headCount}</p>
        </div>
        <div className="flex flex-row">
          <p className="font-bold text-md tracking-[5px]">Declined:</p>
          <p className="font-bold text-md tracking-[5px] text-yellowAccent">{declineCount}</p>
        </div>
      </div>
      {rsvps?.length > 0 ? (
        <DataTable columns={columns} data={rsvps} />
      ) : (
        <p className="mt-[50px]">No Available Data</p>
      )}
    </div>
  );
};

export default Admin;
