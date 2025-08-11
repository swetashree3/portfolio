import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "ByteChat (Real-Time Chat & Video Calling App )",
    description: "Built with React, Node.js, MongoDB, and Stream API. Features 1-on-1 & group chat, WebRTC video calls with screen sharing, JWT auth, Zustand state, and a responsive UI using TailwindCSS + daisyUI.",
    image: "/ByteChat.png",
    tags: ["React","Node","MongoDb","Express","Stream API", "TailwindCSS", "Daisy UI"],
    demoUrl: "https://bytechat-0hbv.onrender.com/",
    githubUrl: "https://github.com/sourav-n06/ByteChat",
  },
  {
    id: 2,
    title: "Course Selling App",
    description:
      "Responsive MERN app with Firebase auth, dynamic content, Cloudinary uploads, EmailJS integration, Redux state, and a Tailwind-powered mobile-first UI.",
    image: "/csa.png",
    tags: ["React", "Redux", "FireBase", "TailwindCss", "EmailJS","Cloudinary"],
    demoUrl: "https://academic-course-main-pi.vercel.app/",
    githubUrl: "https://github.com/sourav-n06/academic-course-main",
  },
  {
    id: 3,
    title: "Food Ordering App",
    description:
      "Built with Swiggy’s live API, React, and Tailwind. Used Redux Toolkit, HOC, Lazy Loading, and Shimmer UI for performance—20% faster load time. Tested with RTL + Jest.",
    image: "/foa.png",
    tags: ["React", "Redux", "TailwindCss"],
    demoUrl: "https://drive.google.com/file/d/1RUtzZNv7tItDLPqYeoEdD4r-UqUel7Gb/view?usp=drivesdk",
    githubUrl: "https://github.com/sourav-n06/Food_Order",
  },
  {
    id: 4,
    title: "Netflix GPT",
    description:
      "Netflix GPT is a React app with a Netflix-style UI that uses GPT to recommend and search movies, built with Redux and Tailwind CSS.",
    image: "/net.png",
    tags: ["React", "Redux", "TailwindCss"],
    demoUrl: "https://6603d5426a6a086f56d4785c--heartfelt-florentine-27ee7f.netlify.app/",
    githubUrl: "https://github.com/sourav-n06/NetflixGPT",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/sourav-n06"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};