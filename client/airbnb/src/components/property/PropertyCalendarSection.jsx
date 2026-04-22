import "./../../styles/property.css";

const mayDays = [
  "", "", "", "1", "2", "3", "4",
  "5", "6", "7", "8", "9", "10", "11",
  "12", "13", "14", "15", "16", "17", "18",
  "19", "20", "21", "22", "23", "24", "25",
  "26", "27", "28", "29", "30", "31", "",
];

const juneDays = [
  "", "", "", "", "", "", "1",
  "2", "3", "4", "5", "6", "7", "8",
  "9", "10", "11", "12", "13", "14", "15",
  "16", "17", "18", "19", "20", "21", "22",
  "23", "24", "25", "26", "27", "28", "29",
  "30", "", "", "", "", "", "",
];

const weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

function CalendarMonth({ title, days, selectedStart, selectedEnd }) {
  return (
    <div className="property-calendar-month">
      <h3 className="property-calendar-month__title">{title}</h3>

      <div className="property-calendar-weekdays">
        {weekDays.map((day) => (
          <span key={day} className="property-calendar-weekday">
            {day}
          </span>
        ))}
      </div>

      <div className="property-calendar-grid">
        {days.map((day, index) => {
          const isEmpty = day === "";
          const isStart = day === selectedStart;
          const isEnd = day === selectedEnd;

          return (
            <button
              key={`${title}-${index}`}
              type="button"
              className={`property-calendar-day
                ${isEmpty ? "property-calendar-day--empty" : ""}
                ${isStart ? "property-calendar-day--start" : ""}
                ${isEnd ? "property-calendar-day--end" : ""}
              `}
              disabled={isEmpty}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function PropertyCalendarSection() {
  return (
    <section className="property-calendar-section">
      <div className="property-calendar-section__header">
        <h2 className="property-calendar-section__title">
          5 nights in Port Angeles
        </h2>
        <p className="property-calendar-section__subtitle">
          May 12, 2024 - May 17, 2024
        </p>
      </div>

      <div className="property-calendar-wrapper">
        <div className="property-calendar-months">
          <CalendarMonth
            title="May 2024"
            days={mayDays}
            selectedStart="12"
            selectedEnd="17"
          />

          <CalendarMonth
            title="June 2024"
            days={juneDays}
            selectedStart=""
            selectedEnd=""
          />
        </div>

        <div className="property-calendar-footer">
          <button type="button" className="property-calendar-footer__icon">
            🗓
          </button>

          <button type="button" className="property-calendar-clear">
            Clear dates
          </button>
        </div>
      </div>
    </section>
  );
}