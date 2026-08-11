document.addEventListener("DOMContentLoaded", function() {
  // Core function to open the popup window. Exposed as window.show_photo for
  // backwards compatibility with existing inline onclicks.
  function openPhoto(imageSrc, title, caption) {
    const photoWin = window.open(
      "",
      "_blank",
      "width=750,height=600,scrollbars=yes,resizable=yes"
    );

    if (!photoWin) {
      // Popup blocked — navigate to the image URL as a fallback
      window.location.href = imageSrc;
      return;
    }

    photoWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${title || ''}</title>
          <style>
            body { background: #000; color: #fff; text-align: center; font-family: sans-serif; margin: 20px; }
            img { max-width: 100%; height: auto; margin-bottom: 15px; }
            a { color: #00f; text-decoration: none; }
          </style>
        </head>
        <body>
          <img src="${imageSrc}" alt="${caption || ''}"><br>
          <b>${caption || ''}</b><br><br>
          <a href="#" onclick="window.close(); return false;">Close Window</a>
        </body>
      </html>
    `);
    photoWin.document.close();
    photoWin.focus();
  }

  // Expose for inline handlers and other scripts
  window.show_photo = openPhoto;

  // Attach delegated click handlers to anchors with class "popup-link"
  const popupLinks = document.querySelectorAll('a.popup-link');
  popupLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // If user used modifier keys or middle-click, let the browser handle it
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      event.preventDefault();

      const href = link.getAttribute('href');
      const title = link.dataset.title || link.getAttribute('title') || '';
      const caption = link.dataset.caption || '';

      if (href) {
        openPhoto(href, title, caption);
      }
    });
  });
});
