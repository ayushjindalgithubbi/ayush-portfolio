import React from "react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="bg-gray-100 text-gray-900 font-sans">
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Ayush Jindal</h1>
        <p className="text-xl mb-6">B.Tech CSE Student | Aspiring Data Analyst</p>
        <Button className="bg-white text-indigo-600 text-lg px-6 py-3 rounded-full shadow-lg">
          <a href="/Ayush_Jindal_Resume.pdf" download>
            Download Resume
          </a>
        </Button>
      </section>
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg">
          I am a Computer Science student at the University of Lucknow with hands-on
          experience in data analysis, dashboard design, and full-stack development. I
          aim to apply my technical and analytical skills in real-world business and tech
          challenges.
        </p>
      </section>
      <section className="py-16 px-8 bg-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <ul className="space-y-4">
          <li><strong>SentiGenix</strong>: Sentiment analysis app using React, Python, and OpenRouter API.</li>
          <li><strong>HR Dashboard</strong>: Built with Tableau and Figma, focusing on employee insights.</li>
          <li><strong>Customer & Sales Dashboard</strong>: Visualized trends using Tableau and Excel.</li>
          <li><strong>SQL Data Warehouse</strong>: Designed Bronze-Silver-Gold layered structure in MySQL.</li>
        </ul>
      </section>
      <section className="py-16 px-8 bg-gray-50 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Internships</h2>
        <ul className="space-y-4">
          <li><strong>Accenture (Forage)</strong>: Virtual Data Analyst Intern — Cleaned and analyzed data, built Tableau dashboards.</li>
          <li><strong>Tata (Forage)</strong>: Virtual Business Analyst — Created data stories and visualization solutions.</li>
        </ul>
      </section>
      <section className="py-16 px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills & Certifications</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-lg">
          <div>Python, C++</div>
          <div>JavaScript, HTML/CSS</div>
          <div>MySQL, Tableau, Excel</div>
          <div>Figma, React</div>
          <div>Data Warehousing</div>
          <div>AI & NLP (API usage)</div>
        </div>
        <p className="mt-6 text-md">
          Certified by IIM Bangalore (Data Science, Generative AI), IIRS Dehradun, and more.
        </p>
      </section>
      <section className="py-16 px-8 bg-indigo-600 text-white max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p>Email: <a href="mailto:jindalayush05@gmail.com" className="underline">jindalayush05@gmail.com</a></p>
        <p>Phone: +91-9389732966</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/ayushjindal030" target="_blank" className="underline">ayushjindal030</a></p>
        <p>GitHub: <a href="https://github.com/ayushjindalgithubbi" target="_blank" className="underline">ayushjindalgithubbi</a></p>
      </section>
    </div>
  );
}
