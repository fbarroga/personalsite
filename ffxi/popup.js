function show_photo(pFileName, pTitle, pCaption) {
  // Specify window parameters
  const photoWin = window.open(
    "", 
    "photo", 
    "width=550,height=500,status,scrollbars,resizable,screenX=20,screenY=40,left=20,top=40"
  );

  // Write content to window
  photoWin.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>${pTitle}</title>
        <style>
          body { background-color: #000000; color: #ffffff; text-align: center; font-family: arial, helvetica, sans-serif; }
          a { color: #0000ff; text-decoration: none; }
          a:visited { color: #008b8b; }
        </style>
      </head>
      <body>
        <img src="${pFileName}"><p>
        <b>${pCaption}</b><br><br>
        <a href="javascript:window.close()">Close Window</a>
      </body>
    </html>
  `);
  photoWin.document.close();

  // Focus the new window
  if (photoWin) photoWin.focus();
}
