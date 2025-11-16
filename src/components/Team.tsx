import { Button } from "@/components/ui/button";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";

const Team = () => {
  return (
    <section id="team" className="py-20 px-6 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <img 
              src={teamMember1} 
              alt="Team member" 
              className="w-full h-auto rounded-sm"
            />
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Staff mentorship and results go a long way together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our team of experienced professionals is dedicated to helping you 
                achieve your marketing goals through innovative strategies and 
                personalized support.
              </p>
              <Button 
                variant="outline" 
                className="mt-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold"
              >
                Read More
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-3">
                Staff mentorship and results go a long way together
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in building strong relationships with our clients and 
                delivering measurable results that drive business growth.
              </p>
              <Button 
                variant="outline" 
                className="mt-6 border-2 border-foreground text-foreground hover:bg-foreground hover:text-background font-semibold"
              >
                Read More
              </Button>
            </div>
            <img 
              src={teamMember2} 
              alt="Team member" 
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
