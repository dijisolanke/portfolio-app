"use client";

import { useState, useEffect } from "react";
import { Github, Mail, User, X, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export default function Portfolio() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Show all projects immediately
    const allIndexes = projects.map((_, index) => index);
    setVisibleProjects(allIndexes);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openModal = (modal: string) => {
    setActiveModal(modal);
    setTimeout(() => setIsModalAnimating(true), 10);
  };
  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => setActiveModal(null), 300);
  };

  return (
    <div className="min-h-screen bg-gray-100 relative overflow-x-hidden">
      <style jsx>{`
        .neuro-text {
          text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.9),
            -2px -2px 4px rgba(0, 0, 0, 0.1);
        }
        .neuro-slit {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
          border-radius: 15px;
          transition: all 0.5s ease-out;
          position: relative;
        }
        .neuro-slit:hover {
          width: min(80vw, 800px) !important;
          overflow: visible !important;
        }
        @media (max-width: 768px) {
          .neuro-slit:hover {
            width: 90vw !important;
          }
        }
        .neuro-card {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
        }
        .neuro-inset {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff;
        }
        .neuro-inset-shallow {
          background: linear-gradient(145deg, #f0f0f0, #ffffff);
          box-shadow: inset 2px 2px 5px #d1d1d1, inset -2px -2px 5px #ffffff;
        }
        .neuro-button {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 5px 5px 10px #bebebe, -5px -5px 10px #ffffff;
        }
        .neuro-button:hover {
          box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
        }
        .neuro-button:active {
          box-shadow: inset 2px 2px 5px #bebebe, inset -2px -2px 5px #ffffff;
        }
        .neuro-icon-button {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
        }
        .neuro-icon-button:hover {
          box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff;
        }
        .neuro-icon-button:active {
          box-shadow: inset 1px 1px 3px #bebebe, inset -1px -1px 3px #ffffff;
        }
        .neuro-nav {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 10px 10px 20px #bebebe, -10px -10px 20px #ffffff;
        }
        .neuro-modal {
          background: linear-gradient(145deg, #f0f0f0, #ffffff);
          box-shadow: 20px 20px 40px #bebebe, -20px -20px 40px #ffffff;
        }
        .neuro-tag {
          background: linear-gradient(145deg, #f0f0f0, #ffffff);
          box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff;
          display: inline-block;
          white-space: nowrap;
        }
        .neuro-button-small {
          background: linear-gradient(145deg, #e6e6e6, #ffffff);
          box-shadow: 3px 3px 6px #bebebe, -3px -3px 6px #ffffff;
          padding: 8px 16px;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          transition: all 0.2s;
        }
        .neuro-button-small:hover {
          box-shadow: 2px 2px 4px #bebebe, -2px -2px 4px #ffffff;
        }
        .neuro-button-small:active {
          box-shadow: inset 1px 1px 3px #bebebe, inset -1px -1px 3px #ffffff;
        }
      `}</style>

      {/* Developer Name */}
      <header className="pt-8 md:pt-16 pb-4 md:pb-8 text-center px-4">
        <h1 className="text-3xl md:text-6xl font-light tracking-wide text-gray-800 neuro-text">
          Adediji Solanke
        </h1>
        <p className="text-base md:text-lg text-gray-600 mt-2 md:mt-4 font-light">
          Software Engineer
        </p>
      </header>

      {/* Projects Container */}
      <div
        className="relative"
        style={{ height: `${projects.length * (isMobile ? 80 : 100)}vh` }}
      >
        {projects.map((project, index) => (
          <div key={project.id} className="relative">
            {/* Project Slit - All positioned on the left */}
            <div
              data-index={index}
              className={`project-slit absolute group ${
                isMobile ? "left-[10%]" : "left-[15%]"
              } hover:!z-50 transition-all duration-1000 ease-out`}
              style={{
                top: `${10 + index * (isMobile ? 70 : 90)}vh`,
                width: isMobile ? "15%" : "5%",
                height: isMobile ? "60vh" : "70vh",
                zIndex: 10 - index,
              }}
            >
              <div className="neuro-slit h-full w-full cursor-pointer relative">
                {/* Project Preview - Only visible when not hovering */}
                <div className="absolute inset-2 rounded-lg overflow-hidden bg-white neuro-inset group-hover:opacity-0 transition-opacity duration-500">
                  <iframe
                    src={project.url}
                    className="w-full h-full border-none pointer-events-none"
                    style={{
                      transform: "scale(0.2)",
                      transformOrigin: "top left",
                      width: "500%",
                      height: "500%",
                    }}
                    title={project.title}
                  />
                </div>

                {/* Expanded Content - Only visible when hovering */}
                <div className="absolute top-0 left-0 w-full h-full bg-gray-100 neuro-card opacity-0 group-hover:opacity-100 transition-all duration-500 overflow-hidden rounded-lg">
                  <div className="h-full w-full p-6 overflow-y-auto">
                    <div
                      className="flex flex-col h-full"
                      style={{ height: "550px" }}
                    >
                      {/* Wireframe Preview */}
                      <div
                        className="relative w-full h-48 mb-8s rounded-lg overflow-hidden neuro-inset flex-shrink-0"
                        style={{ height: "400px" }}
                      >
                        <iframe
                          src={project.url}
                          className="absolute top-0 left-0 border-none pointer-events-none"
                          style={{
                            transform: "scale(0.25)",
                            transformOrigin: "top left",
                            width: "400%",
                            height: "400%",
                          }}
                          title={project.title}
                        />
                      </div>
                      {/* Project Details */}
                      <div className="space-y-3 flex-1 text-center">
                        <h3 className="text-xl font-medium text-gray-800 ">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="neuro-inset-shallow p-3 rounded-lg">
                          <h4 className="text-xs font-medium text-gray-700 mb-2">
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-1 justify-center">
                            {project.techStack.map((tech, i) => (
                              <span
                                key={i}
                                className="inline-block text-xs px-8 py-4 bg-gray-100 rounded-full neuro-tag"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Title - Hidden on mobile, visible on desktop */}
            {!isMobile && (
              <>
                <div
                  className="absolute left-0 right-0 text-center text-xl font-light text-gray-600"
                  style={{
                    top: `${10 + index * 90 + 35}vh`,
                    transform: "translateY(-50%)",
                  }}
                >
                  <div className="text-center">
                    <div className="mb-4">{project.title}</div>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neuro-button-small inline-flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900 transition-colors mt-4"
                      onClick={(e) => e.stopPropagation()}
                      style={{ marginTop: "10px" }}
                    >
                      <ExternalLink size={14} />
                      View Live
                    </a>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Floating Navigation */}
      <nav className="fixed bottom-4 md:bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2 p-2 neuro-nav rounded-full">
          <button
            onClick={() => openModal("contact")}
            className="neuro-icon-button p-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Mail size={16} className="text-gray-700" />
          </button>
          <button
            onClick={() => openModal("skills")}
            className="neuro-icon-button p-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <User size={16} className="text-gray-700" />
          </button>
          <button
            onClick={() => openModal("github")}
            className="neuro-icon-button p-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Github size={16} className="text-gray-700" />
          </button>
        </div>
      </nav>

      {/* Modal Overlay */}
      {activeModal && (
        <div
          className={`fixed inset-0 bg-gray-600 z-50 flex items-center justify-center p-4 md:p-8 transition-all duration-300 ease-out ${
            isModalAnimating ? "bg-opacity-20" : "bg-opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`neuro-modal max-w-2xl w-full max-h-[85vh] md:max-h-[70vh] overflow-y-auto p-6 md:p-8 rounded-2xl bg-gray-100 relative transition-all duration-300 ease-out transform ${
              isModalAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 neuro-icon-button p-2 rounded-full"
            >
              <X size={20} className="text-gray-700" />
            </button>

            {activeModal === "contact" && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">
                  Get In Touch
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="neuro-inset-shallow p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1 md:mb-2">
                      Email
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      diji.solanke@yahoo.com
                    </p>
                  </div>
                  <div className="neuro-inset-shallow p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1 md:mb-2">
                      LinkedIn
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      https://www.linkedin.com/in/diji-solanke/
                    </p>
                  </div>
                  <div className="neuro-inset-shallow p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-1 md:mb-2">
                      Location
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      Newcastle, UK
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "skills" && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">
                  Skills & Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="neuro-inset-shallow p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2 md:mb-3">
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Framer Motion",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="neuro-tag px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="neuro-inset-shallow p-3 md:p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2 md:mb-3">
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Python",
                        "PostgreSQL",
                        "MongoDB",
                        "AWS",
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="neuro-tag px-2 md:px-3 py-1 text-xs md:text-sm rounded-full bg-gray-100"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModal === "github" && (
              <div className="space-y-4 md:space-y-6">
                <h2 className="text-xl md:text-2xl font-light text-gray-800 mb-4 md:mb-6">
                  GitHub Profile
                </h2>
                <div className="neuro-inset-shallow p-4 md:p-6 rounded-lg text-center">
                  <Github
                    size={40}
                    className="mx-auto mb-3 md:mb-4 text-gray-700 md:w-12 md:h-12"
                  />
                  <h3 className="font-medium text-gray-800 mb-1 md:mb-2">
                    @dijisolanke
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                    Check out my latest projects and contributions
                  </p>
                  <a
                    href="https://github.com/dijisolanke"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neuro-button inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-200 text-sm md:text-base"
                  >
                    <ExternalLink size={14} className="md:w-4 md:h-4" />
                    Visit GitHub
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
