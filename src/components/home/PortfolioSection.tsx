import { ArrowRight } from "lucide-react";

const programs = [
  {
    number: "01.",
    title: "Redesign+",
    description: "Redesign+ is an all-in-one digital marketing solution designed to increase partner sales year over year. With Redesign+ businesses enjoy strategic search engine optimization for their website, full-service pay per click advertising management, complete website hosting and design management, and bi-weekly report phone calls with a dedicated project manager to review marketing performance and to discuss additional growth opportunities."
  },
  {
    number: "02.",
    title: "SEO Program",
    description: "You know search engine optimization is an essential component in successful online operations, but that doesn't necessarily mean you know how to get from point A with an effective SEO strategy. This is why it's so important to partner with a search engine optimization company that has the knowledge, experience, and resources to amplify your online presence and help you compete."
  },
  {
    number: "03.",
    title: "PPC Program",
    description: "As an Award-Winning Digital Agency, we're starting to see a shift happen in the digital marketing world as companies are on the hunt for faster, more effective ways to position their brands for success. What does a successful brand look like? We're glad you asked!"
  },
  {
    number: "04.",
    title: "Resell SEO",
    description: "Clients demand results and data and Redesign.co's white label SEO program offers both. As a white label partner you will receive monthly SEO reports that outline search engine performance pertaining to each of your clients and both you and your client will have access to our white label SEO report software which updates daily and displays keyword rankings, website traffic metrics, search console data, and so much more. All of this is included in the cost of your marketing campaign."
  }
];

export default function PortfolioSection() {
  return (
    <div id="programs" className="bg-black text-white px-6 lg:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-bold mb-12">
          Explore Our Programs
        </h2>

        <div className="space-y-0">
          {programs.map((program, index) => (
            <div
              key={index}
              className="border-b border-gray-800 py-8 group hover:bg-gray-900/30 transition-colors px-6 -mx-6"
            >
              <div className="flex items-start justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-start gap-6 mb-4">
                    <span className="text-gray-500 text-3xl lg:text-4xl font-bold">{program.number}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold">{program.title}</h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed ml-14 lg:ml-20">
                    {program.description}
                  </p>
                </div>
                <ArrowRight className="w-6 h-6 text-white flex-shrink-0 mt-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
