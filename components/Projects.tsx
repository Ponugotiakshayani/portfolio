'use client';
import Image from 'next/image';

const projects = [
  {
    title: 'Task Management Dashboard',
    description: 'Task Management Dashboard is a productivity tool that helps teams organize, assign, and track tasks in real time. It reduces workflow delays by providing a centralized view of ongoing projects, deadlines, and responsibilities. The dashboard promotes better collaboration and accountability, ensuring that tasks are completed accurately and on time.',
    technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    image: '/images/Task.png',
  },
  {
    title: 'Fake News Detection',
    description: 'AI Fake News Detection is a machine learning application designed to identify and classify fake news articles with high accuracy. It uses natural language processing techniques to analyze textual data and helps combat misinformation by providing reliable content verification.',
    technologies: ['Python', 'Scikit-learn', 'Flask', 'TF-IDF', 'Regression'],
    image: '/images/Fake news.png',
  },
  {
    title: 'Image Segmentation',
    description: 'The Image Segmentation project focuses on pixel-level classification of images using a U-Net deep learning model. It was designed to improve object detection and scene understanding, achieving high accuracy in segmenting complex visual data such as road lanes and urban environments.',
    technologies: ['Python', 'U-Net', 'TensorFlow', 'Keras', 'OpenCV'],
    image: '/images/Image segmentation.png',
  },
  {
    title: 'Real-Time Chat App',
    description: 'Secure Chat Platform is a real-time messaging system that enables encrypted communication with persistent sessions for over 200 users. It enhances user security through JWT-based access control and two-factor authentication (2FA), ensuring only authorized users can access the platform.',
    technologies: ['Django', 'WebSockets', 'Redis','JWT', 'HTML/CSS'],
    image: '/images/SecureChat.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
