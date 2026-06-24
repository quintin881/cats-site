/* ===========================================================================
   CATS teaser , tiny progressive-enhancement layer.
   Everything works without JS; this only adds the favicon + a small flourish.
   =========================================================================== */
(function () {
    "use strict";

    /* Build the favicon from the brand SVG (paw-dot magenta on dark tile).
       Inlined so it works when the page is opened straight off disk. */
    var favicon =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">' +
        '<rect width="128" height="128" rx="28" fill="#121212"/>' +
        '<path d="M32 26 L58 44 Q64 42 70 44 L96 26 L91 54 Q99 67 92 82 ' +
        'Q81 102 64 103 Q47 102 36 82 Q29 67 37 54 Z" fill="#cc35d4"/>' +
        '<circle cx="52" cy="68" r="4.5" fill="#121212"/>' +
        '<circle cx="76" cy="68" r="4.5" fill="#121212"/></svg>';

    var link = document.querySelector('link[rel="icon"]') ||
        document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = "data:image/svg+xml," + encodeURIComponent(favicon);
    document.head.appendChild(link);

    /* Reveal year in footer without hardcoding it. */
    var yearEl = document.querySelector("[data-year]");
    if (yearEl) {
        yearEl.textContent = String(new Date().getFullYear());
    }
})();
