import React from 'react';

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white py-20 px-6 font-body overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Accent Divider */}
        <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">
          ⭐ Featured Project
        </h2>

        <div
          className="bg-light rounded-2xl shadow-lg p-6 md:flex items-center gap-8"
          data-aos="fade-up"
        >
          {/* Left: Image */}
          <div className="md:w-1/2 mb-6 md:mb-0" data-aos="zoom-in">
            <div className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-transform hover:scale-[1.02]">
              <img
                src="/assets/sportifyinsider.png"
                alt="SportifyInsider Screenshot"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* Right: Text */}
          <div className="md:w-1/2 text-left" data-aos="fade-left">
            <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
              SportifyInsider
            </h3>
            <p className="text-text text-base mb-5 leading-relaxed">
              A full-stack sports blog powered by React, Node.js, MongoDB, and Ethereum login. Includes CMS backend, blog APIs, dynamic tracking, and MetaMask-authenticated user profiles.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://sportifyinsider.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-5 py-2 rounded-full font-semibold text-sm hover:bg-yellow-500 transition"
              >
                🚀 View Live
              </a>
              <a
                href="https://github.com/GitHubKing23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline text-sm font-semibold hover:text-accent transition"
              >
                🛠 View Source
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Blob */}
      <div className="absolute bottom-[-80px] left-[-100px] w-[250px] h-[250px] bg-accent opacity-10 rounded-full blur-3xl z-0" />
    </section>
  );
}
