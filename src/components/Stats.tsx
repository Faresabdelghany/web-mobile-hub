import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 2000, suffix: "+", label: "Company" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 800, suffix: "+", label: "Hours of Digital" },
  { value: 150, suffix: "M+", label: "In Tracked Revenue" },
];

const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const duration = 2000;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section id="stats" className="py-20 px-6 bg-foreground text-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm md:text-base opacity-80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
