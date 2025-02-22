import React from 'react';
import '../style.css';
import { Clock, MapPin } from 'lucide-react'; // Icons for time and location

function WeeklySchedule() {
  const schedule = [
    { day: 'Monday', time: '6:30 PM', description: 'Beginner Friendly Run', location: 'Hyde Park' },
    { day: 'Tuesday', time: '6:30 PM', description: 'Beginner Friendly Run', location: 'Hyde Park' },
    { day: 'Friday', time: '6:30 PM', description: 'Beginner Friendly Run', location: 'Hyde Park' },
  ];

  return (
    <section className="weekly-schedule">
      <h2 className="thq-heading-2">Weekly Schedule</h2>
      <div className="schedule-grid">
        {schedule.map((item, index) => (
          <div className="schedule-card" key={index}>
            <h3 className="schedule-day">{item.day}</h3>
            <div className="schedule-details">
              <div className="schedule-time">
                <Clock size={16} />
                <span>{item.time}</span>
              </div>
              <div className="schedule-location">
                <MapPin size={16} />
                <span>{item.location}</span>
              </div>
            </div>
            <p className="schedule-description">{item.description}</p>
            <button className="schedule-button">Join Event</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WeeklySchedule;
