import { db } from "./firebase";

export const respondRsvp = (data) => {
  db.collection('todos').add({
    ...data,
    completed: false,
    createdAt: new Date(),
  });
};