import React from 'react';

function Projects() {
  return (
    <section id="projects" className="bg-white py-20 px-6 font-body">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold text-primary mb-6">
          Featured Project
        </h2>
        <div className="bg-light rounded-lg shadow-lg p-6 md:flex items-center gap-6" data-aos="fade-up">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src="/assets/sportifyinsider.png"
              alt="SportifyInsider Screenshot"
              className="rounded shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-primary mb-2">
              SportifyInsider
            </h3>
            <p className="text-accent mb-4">
              A full-stack sports blog built with React, Node.js, MongoDB, and Ethereum login. It features live tracking, a CMS backend, blog APIs, and secure user profiles with MetaMask integration.
            </p>
            <div className="flex gap-4">
              <a
                href="https://sportifyinsider.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-4 py-2 rounded-full hover:bg-accent transition"
              >
                View Live
              </a>
              <a
                href="https://github.com/GitHubKing23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:text-accent"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects; // ✅ Explicit default export
