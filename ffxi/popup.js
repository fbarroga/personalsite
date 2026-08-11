document.addEventListener("DOMContentLoaded", function() {
  window.show_photo = function(imageSrc, title, caption) {
    const photoWin = window.open(
      "", 
      "_blank", 
      "width=550,height=500,scrollbars=yes,resizable=yes"
    );

    if (!photoWin) {
      window.location.href = imageSrc;
      return;
    }

    photoWin.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${title}</title>
          <style>
            body { background: #000; color: #fff; text-align: center; font-family: sans-serif; margin: 20px; }
            img { max-width: 100%; height: auto; margin-bottom: 15px; }
            a { color: #00f; text-decoration: none; }
          </style>
        </head>
        <body>
          <img src="${imageSrc}" alt="${caption}"><br>
          <b>${caption}</b><br><br>
          <a href="#" onclick="window.close(); return false;">Close Window</a>
        </body>
      </html>
    `);
    photoWin.document.close();
    photoWin.focus();
  };
});
