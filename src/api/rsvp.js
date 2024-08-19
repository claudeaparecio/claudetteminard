import { db } from "./firebase";

export const respondRsvp = async (data) => {
  return await db.collection('rsvps').add({
    ...data,
    createdAt: new Date(),
  });
};