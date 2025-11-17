const stats = [
  { number: "2000+", label: "Customers" },
  { number: "10+", label: "Years Experience" },
  { number: "800+", label: "Hours of Digital" },
  { number: "150M+", label: "In Funded Business" }
];

export default function StatsSection() {
  return (
    <div className="bg-black text-white px-6 lg:px-20 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
