import moment from "moment";
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="clock">
      <span className="timelabel"> {moment(dateState).format("hh:mm")}</span>
      <br />
      <span className="datelabel">
        {moment(dateState).format("DD-MM-YYYY")}
      </span>
    </div>
  );
}
