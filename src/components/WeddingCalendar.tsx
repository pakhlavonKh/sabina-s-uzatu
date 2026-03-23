const WEDDING_DAY = 11;
import goldernCircle from "../assets/golden_circle.png";

const WeddingCalendar = () => {
  // June 2026 starts on Monday (weekday index 1)
  const daysInMonth = 30;
  const startDay = 1; // Monday = 1 (0=Sun). June 1, 2026 is Monday
  const weekDays = ["Дс", "Сс", "Ср", "Бс", "Жм", "Сн", "Жс"];

  // Build grid: offset for starting day (Mon=0 in Mon-first grid)
  const blanks = Array.from({ length: 0 }, () => null); // June 1 2026 is Monday, so 0 blanks
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const cells = [...blanks, ...days];

  return (
    <div className="inline-block">
      <div className="text-center mb-4">
        <p className="font-serif text-2xl text-primary-foreground">Маусым</p>
        <p className="text-xs text-accent tracking-widest font-sans">2026</p>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center">
        {weekDays.map((d) => (
          <div
            key={d}
            className="text-[10px] uppercase tracking-wider text-primary-foreground/40 font-sans pb-2"
          >
            {d}
          </div>
        ))}
        {cells.map((day, i) => (
          <div
            key={i}
            className="relative flex items-center justify-center w-9 h-9 md:w-11 md:h-11"
          >
            {day === WEDDING_DAY ? (
              <>
                {/* Rotating circle around the date */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={goldernCircle}
                    alt=""
                    className="absolute w-12 h-12 object-contain pointer-events-none select-none animate-spin"
                    style={{ animationDuration: "6s" }}
                  />
                </div>
                <span className="relative z-10 font-serif text-lg text-accent font-semibold">
                  {day}
                </span>
              </>
            ) : day ? (
              <span className="font-serif text-sm text-primary-foreground/70">
                {day}
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingCalendar;
