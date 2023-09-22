document.addEventListener("DOMContentLoaded", function () {
    const downloadButton = document.getElementById("downloadButton");
  
    downloadButton.addEventListener("click", function () {
      const cvPath = "duhika.jpg";
  
      const link = document.createElement("a");
      link.href = cvPath;
  
      link.download = "Freya Jayawardana.jpg";
  
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  });