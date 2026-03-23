import { useState } from "react";
import { toast } from "sonner";

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("1");
  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !attending) {
      toast.error("Барлық өрістерді толтырыңыз");
      return;
    }
    setSubmitted(true);
    toast.success("Рахмет! Сіздің жауабыңыз қабылданды");
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-primary-foreground">Рахмет!</p>
        <p className="mt-2 text-primary-foreground/70 text-sm">Сіздің жауабыңыз қабылданды</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-5">
      <div>
        <label className="block text-xs uppercase tracking-widest text-primary-foreground/70 mb-1.5">
          Аты-жөніңіз
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border-b border-primary-foreground/30 py-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none font-serif text-lg"
          placeholder="Есіміңізді жазыңыз"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest text-primary-foreground/70 mb-1.5">
          Қатысасыз ба?
        </label>
        <div className="flex gap-4">
          {[
            { val: "yes" as const, label: "Иә, келемін" },
            { val: "no" as const, label: "Келе алмаймын" },
          ].map((opt) => (
            <button
              key={opt.val}
              type="button"
              onClick={() => setAttending(opt.val)}
              className={`flex-1 py-2.5 border text-sm font-sans transition-colors ${
                attending === opt.val
                  ? "border-accent bg-accent/20 text-primary-foreground"
                  : "border-primary-foreground/20 text-primary-foreground/60 hover:border-primary-foreground/40"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {attending === "yes" && (
        <div>
          <label className="block text-xs uppercase tracking-widest text-primary-foreground/70 mb-1.5">
            Қонақ саны
          </label>
          <select
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full bg-transparent border-b border-primary-foreground/30 py-2 text-primary-foreground focus:border-accent focus:outline-none font-serif text-lg"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n} className="bg-primary text-primary-foreground">
                {n}
              </option>
            ))}
          </select>
        </div>
      )}

      <button
        type="submit"
        className="w-full py-3 border border-accent text-accent hover:bg-accent hover:text-primary transition-colors text-sm uppercase tracking-widest font-sans mt-4"
      >
        Жіберу
      </button>
    </form>
  );
};

export default RsvpForm;
