import React from "react";

/**
 * Lightweight YouTube embed.
 * Renders a thumbnail first; loads the real player only on click.
 * Usage in MDX:
 *   import LiteYouTube from "../../src/components/LiteYouTube";
 *   <LiteYouTube id="39o0uYPo4jU" title="Why SEO-Friendly Coding Matters" />
 */
export default function LiteYouTube({ id, title = "YouTube video" }) {
  const thumb = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  const url = `https://www.youtube.com/embed/${id}?autoplay=1`;

  function play(e) {
    const wrapper = e.currentTarget;
    const iframe = document.createElement("iframe");
    iframe.src = url;
    iframe.title = title;
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.style.border = 0;
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    wrapper.replaceWith(iframe);
  }

  return (
    <button
      onClick={play}
      aria-label={title}
      className="relative w-full overflow-hidden rounded-xl"
      style={{
        aspectRatio: "16 / 9",
        background: `#000 url(${thumb}) center/cover no-repeat`,
        cursor: "pointer"
      }}
    >
      <span className="absolute inset-0 grid place-items-center">
        <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium">
          ▶ Play
        </span>
      </span>
    </button>
  );
}
