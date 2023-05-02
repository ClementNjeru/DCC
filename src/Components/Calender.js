import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const tileClassName = ({ date, view }) => {
    if (view === 'month' && date.getDate() === 23 && date.getMonth() === 7) {
      return 'important-date';
    }
  };

  return (
    <div className="App1">
      <h1 className='title'>Calendar with Important Dates</h1>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        tileClassName={tileClassName}
      />
      <h2>Upcoming Important Dates</h2>
      <ul>
        <li>August 23: Conference</li>
        <li>September 30: My Birthday</li>
        <li>October 20: Mashujaa Day</li>
      </ul>
    </div>
  );
}

export default App;