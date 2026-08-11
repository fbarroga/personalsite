function show_photo(pFileName, pTitle, pCaption) {
  // Open window
  const photoWin = window.open(
    "", 
    "photo", 
    "width=550,height=500,status=no,scrollbars=yes,resizable=yes,screenX=20,screenY=40,left=20,top=40"
  );

  if (!photoWin) {
    alert("Popup blocked! Please allow popups for this site.");
    return;
  }

  // Construct Document HTML safely
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${pTitle}</title>
        <style>
          body { background-color: #000000; color: #ffffff; text-align: center; font-family: arial, helvetica, sans-serif; margin: 20px; }
          img { max-width: 100%; height: auto; display: block; margin: 0 auto 15px auto; }
          a { color: #0000ff; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <img src="${pFileName}" alt="${pCaption}">
        <p><b>${pCaption}</b></p>
        <p><a href="javascript:window.close()">Close Window</a></p>
      </body>
    </html>
  `;

  photoWin.document.open();
  photoWin.document.write(htmlContent);
  photoWin.document.close();
  photoWin.focus();
}
