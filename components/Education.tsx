import { FaGraduationCap } from "react-icons/fa";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <h2 className="text-3xl font-bold text-center mb-10">My Education</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Master's Degree */}
        <div className="relative p-6 rounded-lg border shadow bg-white dark:bg-gray-800">
          <div className="absolute -top-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-md">
            <FaGraduationCap className="text-xl" />
          </div>
          <h3 className="text-xl font-semibold">Arizona State University</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Master of Science, Information Technology</p>
          <p className="text-sm">Arizona, USA</p>
          <p className="text-sm">Aug 2023 – May 2025</p>
          <p className="text-sm font-medium">GPA: 3.83 / 4.00</p>
          <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          Specialized in modern data technologies and cloud computing through coursework in Big Data Analytics, Advanced Database Management, and Cloud Architecture. Gained hands-on experience in Natural Language Processing, Data Visualization, and designing scalable Information Systems.
          </p>
        </div>

        {/* Bachelor's Degree */}
        <div className="relative p-6 rounded-lg border shadow bg-white dark:bg-gray-800">
          <div className="absolute -top-4 -left-4 bg-purple-600 text-white p-3 rounded-full shadow-md">
            <FaGraduationCap className="text-xl" />
          </div>
          <h3 className="text-xl font-semibold">Jawaharlal Nehru Technology University</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Bachelor of Technology, Computer Science</p>
          <p className="text-sm">Telangana, India</p>
          <p className="text-sm">Jul 2018 – May 2022</p>
          <p className="text-sm font-medium">GPA: 3.52 / 4.00</p>
          <p className="text-base mt-2 text-gray-700 dark:text-gray-300">
          Built a solid foundation in software development through core subjects like Data Structures, Algorithms, and Object-Oriented Programming. Gained practical experience in Machine Learning, AI, and full-stack Web Development.
          </p>
        </div>
      </div>
    </section>
  );
}
