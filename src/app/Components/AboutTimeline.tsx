"use client"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useState } from "react";
import Image from 'next/image';


interface TimelineEvent {
  date: string;
  title: string;
  subtitle: string;
  GPA?: string;
  Achievements?: string[];
  icon: JSX.Element;
  iconImage?: string;
  Transcripts?: Boolean
  transcriptURL: string;
}

interface AboutTimelineProps {
  events: TimelineEvent[];
}


const AboutTimeline: React.FC<AboutTimelineProps> = ({ events }) => {
  const [selectedTranscript, setSelectedTranscript] = useState<string | null>(null);

  const handleViewTranscript = (transcriptURL: string) => {
    setSelectedTranscript(transcriptURL); // Set the transcript URL to display
  };

  const handleCloseTranscript = () => {
    setSelectedTranscript(null); // Close the transcript
  };

  return (
    <>
      <VerticalTimeline lineColor={"#dbd6d6"}>
        {events.map((event, index) => (
          <VerticalTimelineElement
            contentArrowStyle={{ borderRight: "7px solid #dbd6d6" }}
            contentStyle={{ background: "rgba(210, 215, 219, 0.32)" }}
            key={index}
            date={event.date}
            icon={
              event.iconImage ? (
                <Image
                  src={event.iconImage}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (
                event.icon // fallback to icon if no image is provided
              )
            }
            iconStyle={{ background: "#B684F7", color: "#fff" }} // Customize icon colors
          >
            <h3 className="text-lg font-bold text-purple-800 mb-2">
              {event.title}
            </h3>
            <h4 className="text-md font-semibold">{event.subtitle}</h4>
            <p>{event.GPA}</p>
            {event.Achievements && (
              <ul className="list-disc list-inside ml-5 space-y-1 mt-2">
                {event.Achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            )}
            {event.Transcripts && event.transcriptURL && (
              <button
                onClick={() => handleViewTranscript(event.transcriptURL)}
                className="mt-4 px-4 py-2 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-600 hover:text-white transition"
              >
                View Transcripts
              </button>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

      {selectedTranscript && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Transcript</h2>
            <iframe
              src={selectedTranscript}
              className="w-full h-96 border-0"
              title="Transcript"
            ></iframe>
            <button
              onClick={handleCloseTranscript}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutTimeline;

