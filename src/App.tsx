import { getFirestore } from "firebase/firestore";
import { FirestoreProvider, useFirebaseApp } from "reactfire";
import "./App.css";
import { CreateEvent } from "./Components/CreateEvent";
import { EventList } from "./Components/EventList";
import { Event } from "./Components/Event";
import { Nav } from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import back1 from "./Assets/back1.png";

function App() {
  return (
    <FirestoreProvider sdk={getFirestore(useFirebaseApp())}>
      <Nav />
      <Routes>
        <Route path="/events">
          <Route index element={<EventList />} />
          <Route path=":id" element={<Event />} />
        </Route>
        <Route path="/create_event" element={<CreateEvent />} />
      </Routes>
      <img className="background" src={back1} />
    </FirestoreProvider>
  );
}

export default App;
