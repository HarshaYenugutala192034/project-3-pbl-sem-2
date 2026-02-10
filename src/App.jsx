import React from "react";
import "./App.css";

const timetable = [
  { day: "Sunday", time: "9:00 – 10:00", subject: "Mathematics" },
  { day: "Sunday", time: "10:00 – 11:00", subject: "Physics" },
  { day: "Monday", time: "9:00 – 10:00", subject: "Chemistry" },
  { day: "Monday", time: "10:00 – 11:00", subject: "English" },
  { day: "Tuesday", time: "9:00 – 10:00", subject: "Computer Science" },
  { day: "Tuesday", time: "10:00 – 11:00", subject: "Biology" },
];

function App() {
  return (
    <div className="app-container">
      <h1>Royal Time Table</h1>

      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Subject</th>
          </tr>
        </thead>

        <tbody>
          {timetable.map((item, index) => (
            <tr key={index}>
              <td>{item.day}</td>
              <td>{item.time}</td>
              <td>
                <span className="badge">{item.subject}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        © 2026 Royal Timetable
      </div>
    </div>
  );
}

export default App;
