import teamMember1 from "@/assets/team-member-1.jpg";

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={teamMember1}
              alt="Team member"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-3xl md:text-4xl font-bold">
              Staff mentorship and results go a long way together
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced professionals is dedicated to helping you
              achieve your marketing goals through innovative strategies and
              personalized support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
