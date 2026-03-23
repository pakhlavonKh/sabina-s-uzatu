import CountdownTimer from "@/components/CountdownTimer";
import RsvpForm from "@/components/RsvpForm";
import WeddingCalendar from "@/components/WeddingCalendar";
import ornament from "@/assets/ornament.webp";
import brideHero from "@/assets/bride-hero.webp";
import botanicalBg from "@/assets/botanical-bg.webp";
import laceDivider from "@/assets/lace-divider.webp";
import ornamentFrame from "@/assets/ornament-frame.webp";
import heart from "@/assets/heart.webp";
import heartFooter from "@/assets/heart_footer.webp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-primary text-primary-foreground overflow-hidden">
        {/* Botanical background */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "300px",
          }}
        />

        <div className="relative z-10 text-center px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-accent mb-6 font-sans">
            Ұзату тойына шақыру
          </p>
          <h1 className="font-script text-7xl md:text-9xl mb-4 text-accent">
            Сабина
          </h1>
          <img
            src={heart}
            alt=""
            className="w-48 md:w-64 mx-auto opacity-60 my-6"
          />
          <p className="font-serif text-xl md:text-2xl font-light tracking-wide">
            11 маусым 2026 жыл
          </p>
          <p className="text-sm mt-2 text-primary-foreground/60 font-sans">
            Сағат 13:00
          </p>
        </div>
      </section>

      {/* Lace divider */}
      <div className="relative h-12 md:h-16 bg-secondary overflow-hidden">
        <img
          src={laceDivider}
          alt=""
          className="absolute inset-x-0 top-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Bride Photo */}
      <section className="relative py-16 md:py-24 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "250px",
          }}
        />
        <div className="relative z-10 max-w-sm md:max-w-md mx-auto px-6">
          <div className="relative">
            <div className="absolute -inset-3 border border-accent/30" />
            <img
              src={brideHero}
              alt="Сабина"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Lace divider */}
      <div className="relative h-12 md:h-16 bg-primary overflow-hidden">
        <img
          src={laceDivider}
          alt=""
          className="absolute inset-x-0 bottom-0 w-full h-full object-cover opacity-30 rotate-180"
        />
      </div>

      {/* Invitation Text */}
      <section className="relative py-20  md:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "300px",
          }}
        />
        {/* Ornament frame behind text */}
        <img
          src={ornamentFrame}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-xl max-w-lg opacity-10 pointer-events-none"
        />

        <div
          className="relative z-10 max-w-[80%] lg:max-w-lg mx-auto p-6 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4 font-sans">
            Қадірлі қонақтар
          </p>
          <p className="font-serif text-lg md:text-xl leading-relaxed">
            Той иелері{" "}
            <span className="text-accent font-semibold">
              Жанболат — Айнагүл
            </span>
          </p>
          <p className="font-serif text-m md:text-xl leading-relaxed">
            Құрметті ағайын-туыс, құда-жекжат, дос-жаран! Сіздерді аяулы қызымыз{" "}
            <span className="font-script text-lg text-accent">Сабинаның</span>{" "}
            ұзату тойына арналған ақ дастарханымыздың қадірлі қонағы болуға
            шақырамыз.
          </p>
          <p className="font-serif text-m md:text-xl mt-2 leading-relaxed">
            Қуанышымызды бірге бөлісіп, ақ баталарыңызды беруге келіңіздер!
          </p>
        </div>
      </section>

      {/* Calendar + Countdown */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground border-t border-primary-foreground/10 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "300px",
          }}
        />
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-10 font-sans">
            Тойға дейін қалды
          </p>
          <CountdownTimer />
          <div className="mt-14">
            <WeddingCalendar />
          </div>
        </div>
      </section>

      {/* Lace divider */}
      <div className="relative h-12 md:h-16 bg-secondary overflow-hidden">
        <img
          src={laceDivider}
          alt=""
          className="absolute inset-x-0 top-0 w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Venue */}
      <section className="relative py-20 md:py-28 bg-secondary overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "250px",
          }}
        />
        {/* Frame ornament */}
        <img
          src={ornamentFrame}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-md opacity-[0.08] pointer-events-none"
        />

        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-sans">
            Тойхана
          </p>
          <h2 className="font-script text-5xl md:text-6xl text-foreground mb-4">
            Vogue
          </h2>
          <p className="font-serif text-lg text-muted-foreground mb-2">
            Қарағанды қаласы
          </p>
          <p className="text-sm text-muted-foreground mb-8 font-sans">
            11 маусым 2026 · Сағат 13:00
          </p>
          <a
            href="https://2gis.kz/karaganda/geo/70000001020299483"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-foreground/30 px-8 py-3 text-xs uppercase tracking-widest text-foreground hover:bg-foreground hover:text-background transition-colors font-sans"
          >
            Картадан көру
          </a>
        </div>
      </section>

      {/* Lace divider */}
      <div className="relative h-12 md:h-16 bg-primary overflow-hidden">
        <img
          src={laceDivider}
          alt=""
          className="absolute inset-x-0 bottom-0 w-full h-full object-cover opacity-30 rotate-180"
        />
      </div>

      {/* RSVP */}
      <section className="relative py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "300px",
          }}
        />
        <img
          src={ornamentFrame}
          alt=""
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-xl max-w-md opacity-10 pointer-events-none"
        />

        <div className="relative z-10 max-w-[80%] lg:max-w-lg mx-auto p-6 text-center">
          <div className="text-center mb-2">
            <p className="text-xs uppercase tracking-[0.3em] text-accent mb-2 font-sans">
              Анкета
            </p>
            <h2 className="font-serif text-xl md:text-4xl">
              Қатысуыңызды растаңыз
            </h2>
          </div>
          <RsvpForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 bg-green-deep text-primary-foreground/60 text-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url(${botanicalBg})`,
            backgroundSize: "200px",
          }}
        />
        <div className="relative z-10">
          <img
            src={heartFooter}
            alt=""
            className="w-24 mx-auto opacity-30 mb-4"
          />
          <p className="font-script text-3xl text-accent mb-2">Сабина</p>
          <p className="text-xs uppercase tracking-widest font-sans">
            11.06.2026
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
