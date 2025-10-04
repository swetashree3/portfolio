import { Globe } from "lucide-react";

const cpProfiles = [
  {
    name: "LeetCode",
    description: "Solving DSA problems and participating in weekly contests.",
    url: "https://leetcode.com/u/malswetashree/",
    logo: "/lcc.png", // Place this in public/logos/
  },
  {
    name: "GeeksforGeeks",
    description: "Practice coding problems and learn new algorithms.",
    url: "",
    logo: "/gfg.png",
  },
  {
    name: "CodeChef",
    description: "Competitive programming contests and problem solving.",
    url: "",//"https://www.codechef.com/users/sourav_n06",
    logo: "/cf.png",
  },
];

export const CPProfilesSection = () => {
  return (
    <section id="cp-profiles" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Competitive <span className="text-primary">Programming</span> Profiles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cpProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card p-6 rounded-lg shadow-xs card-hover flex flex-col items-center text-center transition-transform hover:scale-105"
            >
              {profile.logo ? (
                <img
                  src={profile.logo}
                  alt={profile.name}
                  className="w-16 h-16 object-contain mb-4"
                />
              ) : (
                <div className="p-4 rounded-full bg-primary/10 mb-4">
                  <Globe className="h-8 w-8 text-primary" />
                </div>
              )}
              <h3 className="font-semibold text-lg mb-2">{profile.name}</h3>
              <p className="text-muted-foreground text-sm">{profile.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
