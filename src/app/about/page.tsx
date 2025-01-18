"use client"
import { useState } from 'react';
import AboutTimeline from '../Components/AboutTimeline';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa'; // Use your own icons

const academicEvents = [
  {
    date: "2019-2023",
    title: "Bachelor's in Computer Science & Engineering",
    subtitle: "SRM Institute of Science and Technology",
    GPA: "GPA: 9.62",
    Achievements: ["Secured Merit Based Scholarship for the year 2021-2023", "Secured 4th Rank in the CINTEL Department"],
    icon: < FaGraduationCap />,
    Transcripts: true,
    transcriptURL: "/transcripts/USC_Transcript.pdf",
    // iconImage: "/SRM.jpg"
  },
  {
    date: "2023-Present",
    title: "Masters in Computer Science",
    subtitle: "University of Southern California",
    GPA: "GPA: 3.83",
    Achievements: ["M.S. Honor Student", "J-1 Program Student Assistant at OIS"],
    icon: <FaGraduationCap />,
    Transcripts: true,
    transcriptURL: "/transcripts/USC_Transcript.pdf",
    // iconImage: "/USC.jpg"
  },
];

const professionalEvents = [
  {
    date: "May 2022 - Aug 2022",
    title: "Data Analyst Intern",
    subtitle: "HomeworkApp.ai",
    Achievements: ["Created and organized meta-data files for existing database to increase efficiency by 80%",
      "Utilized MongoDB and JavaScript to create dashboards on Retool to monitor the activity of over 200+ schools",
      "Categorized the affiliated schools into dormant/active classes and quantifying the attributes associated with each using clustering techniques"],
    icon: <FaBriefcase />,
    transcriptURL: "/transcripts/USC_Transcript.pdf",
  },
  {
    date: "Jan 2024 - March 2024",
    title: "Software Engineer Intern",
    subtitle: "Pasadena Digital (Owlvision)",
    Achievements: ["Developed an ELT data pipeline to generate and maintain synthetic data for various airport signs, amassing a dataset of 15,000+ samples",
      "Trained and optimized the YOLOV8 model for small object detection, achieving a 93% accuracy while maintaining real-time processing speeds exceeding 30 frames per second",
      "Translated the model to CoreML format with minimal performance loss of 3%, enabling seamless integration and utilization across Apple devices for enhanced accessibility and usability"],
    icon: <FaBriefcase />,
    transcriptURL: "/transcripts/USC_Transcript.pdf",
  },
  {
    date: "May 2024 - Aug 2024",
    title: "Software Engineer Intern",
    subtitle: "Kintsugi Global Inc",
    Achievements: ["Collaborated to develop a suite of responsive eCommerce features using React.js and Tailwind, which led to a 30% reduction in user drop-off rates and enhanced overall application performance.",
                  "Engineered a scalable backend leveraging Node.js and Express, reducing overall load time by 30% through optimized API routing and data management.",
                "Integrated Stripe API to handle payment processing and subscription management, enabling secure transactions and reducing checkout abandonment by 15% through a streamlined payment flow"],
    icon: <FaBriefcase />,
    transcriptURL: "/transcripts/USC_Transcript.pdf",
  }
];

const AboutMe = () => {
  const [activeTimeline, setActiveTimeline] = useState('academic'); // Default to academic

  const handleTimelineChange = (timeline: string) => {
    setActiveTimeline(timeline);
  };

  return (
    <>
      <h1 className='text-center mt-16 text-3xl font-semibold'>My Journey</h1>
      <div className="flex justify-center space-x-4 mt-4">
        <button 
          onClick={() => handleTimelineChange('academic')} 
          className={`px-4 py-2 rounded ${activeTimeline === 'academic' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border border-purple-600'}`}
        >
          Academic Journey
        </button>
        <button 
          onClick={() => handleTimelineChange('professional')} 
          className={`px-4 py-2 rounded ${activeTimeline === 'professional' ? 'bg-purple-600 text-white' : 'bg-white text-purple-600 border border-purple-600'}`}
        >
          Professional Journey
        </button>
      </div>
      <div className="flex justify-center items-center py-10">
        {activeTimeline === 'academic' ? (
          <AboutTimeline events={academicEvents} />
        ) : (
          <AboutTimeline events={professionalEvents} />
        )}
      </div>
    </>
  );
};

export default AboutMe;

