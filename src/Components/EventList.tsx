/* import { collection, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";
import "./eventlist.css";
import { EventCard } from "./EventCard";

export const EventList = () => {
  const firestore = useFirestore();
  const eventsCollection = collection(firestore, "events");
  const eventsQuery = query(eventsCollection);
  const { status, data: events } = useFirestoreCollectionData(eventsQuery, {
    idField: "id",
  });

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <div className="body">
      <div className="container">
        {events.map((event) => (
          <div className="card" key={event.id}>
            {event.artist}
          </div>
        ))}
        <EventCard />
      </div>
    </div>
  );
};

*/
import { collection, query } from "firebase/firestore";
import { useFirestore, useFirestoreCollectionData } from "reactfire";

import "./eventlist.css";
import { EventCard } from "./EventCard";

export const EventList = () => {
  const firestore = useFirestore();
  const eventsCollection = collection(firestore, "events");
  const eventsQuery = query(eventsCollection);
  const { status, data: events } = useFirestoreCollectionData(eventsQuery, {
    idField: "id",
  });

  if (status === "loading") {
    return <span>loading...</span>;
  }

  return (
    <div className="body">
      <div className="container">
        {events.map((event) => (
          <EventCard key={event.id} data={event} />
        ))}
      </div>
    </div>
  );
};
