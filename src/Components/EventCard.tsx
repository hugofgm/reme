import "./eventcard.css";
import imgTeste from "../Assets/teste.jpg";
import { DocumentData } from "@firebase/firestore";
import { CountDown } from "./CountDown";
import { Link } from "react-router-dom";

interface PropsEventCard {
  data: DocumentData;
}

export const EventCard = ({ data }: PropsEventCard) => {
  const date = new Date(data.date);
  const dateOfEvent = date.getTime();

  return (
    <Link to={data.id} className="eventLink">
      <div className="card">
        <div className="col1">
          <p className="day par">{date.getDate()}</p>
          <p className="month par">{date.getMonth() + 1}</p>
          <p className="year par">{date.getFullYear()}</p>

          {dateOfEvent - new Date().getTime() >= 1 && <CountDown date={date} />}
        </div>
        <div className="col2">
          <img className="cardImg" src={imgTeste} />
        </div>
        <div className="col3">
          <p className="title">{data.title}</p>
          <p className="title">{data.subtitle}</p>
        </div>
      </div>
    </Link>
  );
};
