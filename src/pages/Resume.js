import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

const Resume = () => {
  const [scale, setScale] = useState(1);
  const [darkMode, setDarkMode] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);  // 👈 added hover state

  useEffect(() => {
    const handleResize = () => {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;

      const pdfPageWidth = 595;
      const pdfPageHeight = 800;

      const availableWidth = screenWidth - 300;

      const scaleX = availableWidth / pdfPageWidth;
      const scaleY = screenHeight / pdfPageHeight;

      const finalScale = Math.min(scaleX, scaleY);

      setScale(finalScale * 0.9);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/myResume.pdf`;
    link.download = 'My_Resume.pdf';
    link.click();
  };

  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      overflow: "hidden",
      display: "flex",
      backgroundColor: darkMode ? "#111" : "#f0f0f0",
    }}>
      
      {/* Sidebar */}
      <div style={{
        width: "300px",
        backgroundColor: darkMode ? "#222" : "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
      }}>
        
        {/* 📄 Download Resume Button */}
        <button 
          onClick={downloadResume}
          onMouseEnter={() => setHoveredButton('download')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            marginBottom: "200px",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: hoveredButton === 'download' ? "#333" : "#000", // 👉 change on hover
            color: "#fff",
            border: "none",
            cursor: "pointer",
            width: "100%",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "background-color 0.3s", // 👉 smooth transition
          }}
        >
          📄 Download Resume
        </button>

        {/* 🌙 Dark Mode Toggle Button */}
        <button 
          onClick={() => setDarkMode(!darkMode)}
          onMouseEnter={() => setHoveredButton('theme')}
          onMouseLeave={() => setHoveredButton(null)}
          style={{
            marginBottom: "200px",
            padding: "10px 20px",
            borderRadius: "8px",
            backgroundColor: hoveredButton === 'theme' ? "#333" : "#000", // 👉 change on hover
            color: "#fff",
            border: "none",
            cursor: "pointer",
            width: "100%",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "background-color 0.3s", // 👉 smooth transition
          }}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      {/* Resume Display */}
      <div style={{
        flex: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}>
        <Document
          file={`${process.env.PUBLIC_URL}/myResume.pdf`}
          onLoadError={(error) => console.error('Failed to load PDF:', error)}
          loading={<div>Loading PDF...</div>}
        >
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
    </div>
  );
};

export default Resume;

