<!-- hide this script from old browsers

// This script opens a new browser window and writes
// HTML to display an image with a title and caption

function show_photo(pFileName, pTitle, pCaption) {

// specify window parameters
  photoWin = window.open( "", "photo", "width=550,height=600,status,scrollbars,resizable,screenX=20,screenY=40,left=20,top=40");

// wrote content to window
  photoWin.document.write('<html><head><title>' + pTitle + '</title></head>');
  photoWin.document.write('<BODY BGCOLOR=#000000 TEXT=#FFFFFF LINK=#0000FF VLINK=#008B8B>');
  photoWin.document.write('<center>');
  photoWin.document.write('<img src="' + pFileName + '" width=512 height=382><br><br>');
  photoWin.document.write('<font face="arial,helvetica,sans-serif">');
  photoWin.document.write('<table border=0 cellpadding=2 width=512><tr><td><p align=left>' + pCaption + '</p></td></tr></table><br><br>');
  photoWin.document.write('<a href="javascript:window.close()" style="text-decoration: none;">Close Window</a>');
  photoWin.document.write('</font></center></body></html>');
  photoWin.document.close();

// If we are on NetScape, we can bring the window to the front
if (navigator.appName.substring(0,8) == "Netscape") photoWin.focus();

}
// done hiding from old browsers -->
}