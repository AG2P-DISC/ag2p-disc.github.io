import React, { useEffect } from 'react';
import { 
  PlayCircleIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ArrowTopRightOnSquareIcon,
  ChartBarIcon,
  BeakerIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
  InformationCircleIcon,
  UserGroupIcon,
  CalendarIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';
import Layout from '../components/Layout';

interface VideoResource {
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  category: string;
}

interface Course {
  title: string;
  provider: string;
  description: string;
  link: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
}

interface LearningTool {
  name: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  category: string;
}

interface OutreachEvent {
  title: string;
  date: string;
  type: 'Workshop' | 'Webinar' | 'Conference' | 'Training';
  description: string;
  registration?: string;
}

const VideoCard: React.FC<VideoResource> = ({ title, description, thumbnailUrl, videoUrl, duration, category }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="aspect-w-16 aspect-h-9 rounded-t-lg overflow-hidden bg-gray-100">
      {thumbnailUrl ? (
        <img src={thumbnailUrl} alt={title} className="object-cover" />
      ) : (
        <div className="flex items-center justify-center">
          <PlayCircleIcon className="h-16 w-16 text-gray-400" />
        </div>
      )}
    </div>
    <div className="p-4">
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <span className="text-sm text-gray-500">{duration}</span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
          {category}
        </span>
        <a 
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Watch Video
          <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </div>
);

const CourseCard: React.FC<Course> = ({ title, provider, description, link, level, topics }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{provider}</p>
      </div>
      <span className={`
        inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
        ${level === 'Beginner' ? 'bg-green-100 text-green-800' : ''}
        ${level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : ''}
        ${level === 'Advanced' ? 'bg-red-100 text-red-800' : ''}
      `}>
        {level}
      </span>
    </div>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
    <div className="mt-4">
      <div className="flex flex-wrap gap-2">
        {topics.map((topic, index) => (
          <span 
            key={index}
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
    <div className="mt-4">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
      >
        Go to Course
        <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
      </a>
    </div>
  </div>
);

const ToolCard: React.FC<LearningTool> = ({ name, description, link, icon, category }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {category}
          </span>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            Access Tool
            <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const EventCard: React.FC<OutreachEvent> = ({ title, date, type, description, registration }) => (
  <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6">
    <div className="flex items-start justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <div className="flex items-center gap-2 mt-1">
          <CalendarIcon className="h-4 w-4 text-gray-500" />
          <p className="text-sm text-gray-600">{date}</p>
        </div>
      </div>
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
        {type}
      </span>
    </div>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
    {registration && (
      <div className="mt-4">
        <a
          href={registration}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Register Now
          <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
        </a>
      </div>
    )}
  </div>
);

const Education: React.FC = () => {
  useEffect(() => {
    document.title = 'Education & Outreach | AG2P-DISC';
  }, []);

  const videos: VideoResource[] = [
    {
      title: "Introduction to Statistical Analysis",
      description: "Learn the fundamentals of statistical analysis in agricultural research, including hypothesis testing and experimental design.",
      thumbnailUrl: "",
      videoUrl: "#",
      duration: "15:30",
      category: "Statistics"
    },
    {
      title: "Understanding Genomic Selection",
      description: "A comprehensive overview of genomic selection principles and their application in plant and animal breeding.",
      thumbnailUrl: "",
      videoUrl: "#",
      duration: "20:45",
      category: "Genomics"
    },
    // Add more videos as needed
  ];

  const courses: Course[] = [
    {
      title: "Statistical Methods in Agriculture",
      provider: "Coursera",
      description: "Learn essential statistical methods used in agricultural research and data analysis.",
      link: "https://coursera.org/example",
      level: "Intermediate",
      topics: ["Statistics", "R Programming", "Data Analysis"]
    },
    {
      title: "Fundamentals of Plant Breeding",
      provider: "edX",
      description: "Understanding the principles of plant breeding and genetic improvement.",
      link: "https://edx.org/example",
      level: "Beginner",
      topics: ["Plant Science", "Genetics", "Breeding"]
    },
    // Add more courses as needed
  ];

  const tools: LearningTool[] = [
    {
      name: "R Statistics Tutorial",
      description: "Interactive tutorials for learning R programming with focus on agricultural data analysis.",
      link: "#",
      icon: <ChartBarIcon className="h-6 w-6 text-blue-600" />,
      category: "Data Analysis"
    },
    {
      name: "Genomics Workbench",
      description: "Web-based platform for learning genomic data analysis and visualization.",
      link: "#",
      icon: <BeakerIcon className="h-6 w-6 text-blue-600" />,
      category: "Genomics"
    },
    {
      name: "Breeding Simulation",
      description: "Interactive tool for simulating breeding programs and selection strategies.",
      link: "#",
      icon: <ComputerDesktopIcon className="h-6 w-6 text-blue-600" />,
      category: "Breeding"
    },
    {
      name: "Statistical Concepts Guide",
      description: "Comprehensive guide to statistical concepts in agricultural research.",
      link: "#",
      icon: <DocumentTextIcon className="h-6 w-6 text-blue-600" />,
      category: "Statistics"
    }
  ];

  const upcomingEvents: OutreachEvent[] = [
    {
      title: "Genomic Data Analysis Workshop",
      date: "September 2024",
      type: "Workshop",
      description: "Hands-on workshop covering practical aspects of genomic data analysis in agricultural research.",
      registration: "#"
    },
    {
      title: "Community Training: R for Agricultural Data Science",
      date: "October 2024",
      type: "Training",
      description: "Learn to use R programming for agricultural data analysis with real-world examples.",
      registration: "#"
    }
  ];

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Development Notice */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-12">
          <div className="flex">
            <div className="flex-shrink-0">
              <InformationCircleIcon className="h-5 w-5 text-blue-400" aria-hidden="true" />
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Education & Outreach Portal - Coming Soon
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p>
                  This page currently displays a template structure of our upcoming educational and outreach programs. 
                  We are actively developing content and planning community engagement activities in collaboration 
                  with academic and industry experts.
                </p>
                <p className="mt-2">
                  If you would like to contribute or participate in our outreach activities, 
                  please contact us at{' '}
                  <a 
                    href="mailto:education@ag2p-disc.org" 
                    className="font-medium underline hover:text-blue-600"
                  >
                    education@ag2p-disc.org
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Education & Outreach Program
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering the agricultural genomics community through educational resources, 
            training programs, and collaborative outreach activities.
          </p>
        </div>

        {/* Expected Timeline Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Program Development Timeline</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm font-medium text-green-800">1</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Phase 1: Foundation & Community Building</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Launch of core educational materials and initial community workshops.
                  Expected: Q3 2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm font-medium text-green-800">2</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Phase 2: Advanced Content & Training</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Expansion of advanced topics and establishment of regular training programs.
                  Expected: Q4 2024
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-sm font-medium text-green-800">3</span>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-900">Phase 3: Community-Driven Growth</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Implementation of community-contributed content and global outreach initiatives.
                  Expected: Q1 2025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <CalendarIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={index} {...event} />
            ))}
          </div>
        </section>

        {/* Video Tutorials Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <PlayCircleIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Video Tutorials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <VideoCard key={index} {...video} />
            ))}
          </div>
        </section>

        {/* Online Courses Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <AcademicCapIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Online Courses</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={index} {...course} />
            ))}
          </div>
        </section>

        {/* Learning Tools Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-8">
            <BookOpenIcon className="h-8 w-8 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900">Learning Tools</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <ToolCard key={index} {...tool} />
            ))}
          </div>
        </section>

        {/* Community Engagement Section */}
        <section className="mb-16">
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="flex items-center gap-2 mb-6">
              <UserGroupIcon className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">Community Engagement</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6">
                <GlobeAltIcon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Network</h3>
                <p className="text-sm text-gray-600">
                  Connect with researchers and practitioners worldwide through our community platform.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <AcademicCapIcon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Training Programs</h3>
                <p className="text-sm text-gray-600">
                  Participate in hands-on training sessions and skill development workshops.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6">
                <UserGroupIcon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Projects</h3>
                <p className="text-sm text-gray-600">
                  Engage in community-driven research projects and knowledge sharing initiatives.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Involved Section */}
        <section>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Involved</h2>
            <p className="text-gray-600 mb-6">
              We welcome contributions from experts in agricultural genomics, statistics, 
              and data science. Help us build a comprehensive educational resource for the community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Creation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Share your expertise by contributing educational materials, tutorials, or case studies.
                </p>
                <a 
                  href="mailto:education@ag2p-disc.org?subject=Content%20Contribution"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Contact Education Team
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="bg-white rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Topic Suggestions</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Suggest topics or specific areas that would benefit the agricultural genomics community.
                </p>
                <a 
                  href="mailto:education@ag2p-disc.org?subject=Topic%20Suggestion"
                  className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
                >
                  Submit Suggestion
                  <ArrowTopRightOnSquareIcon className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Education; 