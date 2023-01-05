import moment from "moment";
import React, { useState, useEffect } from "react";

export default function Clock() {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);
  return (
    <div className="clock">
      <span className="clocklabel">
        {moment(dateState).format("DD-MM-YYYY")}
      </span>
      <br />
      <span className="clocklabel"> {moment(dateState).format("hh:mm")}</span>
    </div>
  );
}
