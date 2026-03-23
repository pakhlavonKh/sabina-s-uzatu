import { useState, useEffect } from "react";

const TARGET_DATE = new Date("2026-06-11T13:00:00");

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = TARGET_DATE.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { value: timeLeft.days, label: "күн" },
    { value: timeLeft.hours, label: "сағат" },
    { value: timeLeft.minutes, label: "минут" },
    { value: timeLeft.seconds, label: "секунд" },
  ];

  return (
    <div className="flex justify-center gap-6 md:gap-10">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <div className="countdown-number">{String(u.value).padStart(2, "0")}</div>
          <div className="text-xs tracking-widest uppercase mt-1 text-primary-foreground/70 font-sans">
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
