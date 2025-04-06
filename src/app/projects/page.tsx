// app/projects/page.tsx
import Image from 'next/image';
import { FC } from 'react';

// Project data array
const projectData = [
  {
    title: 'VangaurdInvest',
    category: 'Web Development',
    imageUrl: '/StockApp.png', 
    githubUrl: 'https://github.com/agarwalrachit399/StockSearchApp',
  },
  {
    title: 'InspireAI',
    category: 'Web Development',
    imageUrl: '/InspireAI.png',
    githubUrl: 'https://github.com/agarwalrachit399/InspireAI',
  },
  {
    title: 'LA Crime Report',
    category: 'Data Analytics',
    imageUrl: '/CrimeAnalytics.png',
    githubUrl: 'https://github.com/agarwalrachit399/Crime-Analysis',
  },
  {
    title: 'ResumeIQ',
    category: 'Large Language Model',
    imageUrl: '/ResumeAnalyzer.png',
    githubUrl: 'https://github.com/agarwalrachit399/ResumeIQ',
  },
  {
    title: 'World GDP Outlook',
    category: 'Data Analytics',
    imageUrl: '/GDP-Dashboard.png',
    githubUrl: 'https://public.tableau.com/app/profile/rachit.agarwal3124/viz/WorldGDPOutlook2024/WorldGDPOutlook2024',
  },
  {
    title: 'Image Deblurrer',
    category: 'Computer Vision',
    imageUrl: '/ImageDeblur.png',
    githubUrl: 'https://github.com/username/project-three', 
  },
  {
    title: 'Crypto Tracker',
    category: 'Web Development',
    imageUrl: '/CryptoBoard.png',
    githubUrl: 'https://github.com/Sudo-Swapnil/crypto-dashboard', 
  },

];

// ProjectCard Component
const ProjectCard: FC<{
  title: string;
  category: string;
  imageUrl: string;
  githubUrl: string;
}> = ({ title, category, imageUrl, githubUrl }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg p-4 shadow-lg border-2 border-gray-200 bg-white">
      {/* Project Image */}
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={150}
        className="object-cover w-full h-64"
      />

      {/* Title and Category */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-600">{category}</p>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 m-2 text-white bg-primary rounded-full hover:bg-hover transition"
        >
          View Project
        </a>
      </div>
    </div>
  );
};


// Projects Page
const Projects = () => {
  return (
    <section className="container mx-auto my-16 px-6">
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-8xl text-secondary font-bold">Portfolio.</h1>
          <h2 className="text-2xl font-semibold text-gray-600 mt-2">
            Check out my latest work
          </h2>
          <p className="mt-4 text-gray-700">
            I have worked on projects ranging from Web Developement with various frameworks and architectural 
            design to machine learning application and data pipeline. My more recent work emphasizes on LLM as 
            I continue my journey of learning and self improvement.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <Image
            src="/Project.png" // Replace with your image path
            alt="Project preview"
            width={600}
            height={300}
            className="rounded-lg "
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

