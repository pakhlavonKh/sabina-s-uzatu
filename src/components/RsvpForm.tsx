import { useState } from "react";
import { toast } from "sonner";

const RsvpForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [attending, setAttending] = useState<"yes" | "no" | "">("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !attending) {
      toast.error("Барлық өрістерді толтырыңыз");
      return;
    }

    try {
      await fetch("https://script.google.com/macros/s/AKfycbwJlYYy-xjcIFz9t6NkfsR_snrNFJejZOuMn8pnyv9GdbQVxl213CfMh8RQ8tyklm_9wA/exec", {
        method: "POST",
        body: JSON.stringify({
          date: new Date().toISOString(),
          name,
          phone,
          attending,
        }),
      });

      setSubmitted(true);
      toast.success("Рахмет! Сіздің жауабыңыз қабылданды");
    } catch (err) {
      toast.error("Қате орын алды");
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="font-serif text-2xl text-primary-foreground">Рахмет!</p>
        <p className="mt-2 text-primary-foreground/70 text-sm">
          Сіздің жауабыңыз қабылданды
        </p>
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
          Телефон нөмері
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full bg-transparent border-b border-primary-foreground/30 py-2 text-primary-foreground placeholder:text-primary-foreground/30 focus:border-accent focus:outline-none font-serif text-lg"
          placeholder="+7________"
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
