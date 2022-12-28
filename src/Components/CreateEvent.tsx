import { useState } from "react";
import { InputModule, InputValueType } from "./InputModule";
import { InputDateModule } from "./InputDateModule";
import { collection, doc, addDoc } from "firebase/firestore";
import {
  useFirestore,
  useFirestoreCollection,
  useFirestoreCollectionData,
} from "reactfire";

interface Form {
  artist: string;
  date: any;
  title: string;
  subtitle: string;
  description: string;
  ticketinfo: string;
}

export const CreateEvent = () => {
  const formObj = {
    artist: "",
    date: "",
    title: "",
    subtitle: "",
    description: "",
    ticketinfo: "",
  };

  const [form, setForm] = useState<Form>(formObj);
  const handleChange = (item: string, value: InputValueType) => {
    setForm({ ...form, [item]: value });
  };

  const firestore = useFirestore();
  const eventsCollection = collection(firestore, "events");
  const addData = (form: any) => {
    try {
      addDoc(eventsCollection, {
        artist: form.artist,
        date: form.date,
        title: form.title,
        subtitle: form.subtitle,
        description: form.description,
        ticketinfo: form.ticketinfo,
      });

      setForm({
        artist: "",
        date: "",
        title: "",
        subtitle: "",
        description: "",
        ticketinfo: "",
      });

      return alert("Data uploaded");
    } catch {
      alert("error");
    }
  };

  return (
    <div>
      <div className="input">
        <h1 className="title">Artist</h1>
        <InputModule
          value={form.artist}
          onChange={(value) => handleChange("artist", value)}
        />
      </div>
      <div className="input">
        <h1 className="title">Date</h1>
        <InputDateModule
          value={form.date}
          onChange={(value) => handleChange("date", value)}
        />
      </div>
      <div className="input">
        <h1 className="title">Title</h1>
        <InputModule
          value={form.title}
          onChange={(value) => handleChange("title", value)}
        />
      </div>
      <div className="input">
        <h1 className="title">Subtitle</h1>
        <InputModule
          value={form.subtitle}
          onChange={(value) => handleChange("subtitle", value)}
        />
      </div>
      <div className="input">
        <h1 className="title">Description</h1>
        <InputModule
          value={form.description}
          onChange={(value) => handleChange("description", value)}
        />
      </div>
      <div className="input">
        <h1 className="title">Ticket info</h1>
        <InputModule
          value={form.ticketinfo}
          onChange={(value) => handleChange("ticketinfo", value)}
        />
      </div>
      <button onClick={() => addData(form)}>Click me!</button>
    </div>
  );
};
