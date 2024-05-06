document.getElementById('downloadBtn').addEventListener('click', function() {
    var fileUrl = 
    'https://drive.google.com/file/d/17avmFWUM65gmBtIdSetPoKvRgsi6YcY8/view?usp=drive_link'; // Replace this with the URL where your CV file is hosted
    var fileName = 'Ayasha Akter Mow Resume(1).pdf'; // Replace this with the desired file name
  
    downloadFile(fileUrl, fileName);
  });
  
  function downloadFile(url, filename) {
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }