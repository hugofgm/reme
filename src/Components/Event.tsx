import { useParams } from "react-router-dom";
import { doc } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";
import "./event.css";
export const Event = () => {
  const { id } = useParams();
  const firestore = useFirestore();
  const docRef = doc(firestore, "events", String(id));
  const { status, data: event } = useFirestoreDocData(docRef);

  if (status === "loading") {
    return <div className="custom-loader"></div>;
  }
  return (
    <div>
      <h1>{event.artist}</h1>
    </div>
  );
};
