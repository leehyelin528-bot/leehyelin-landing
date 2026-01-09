import React from 'react';
import Section from './Section';
import { 
  PROFILE_TEXT, 
  EDUCATION, 
  CAREER, 
  LECTURE_AREAS, 
  LECTURE_PROGRAMS, 
  MAJOR_CONTENTS,
  ROLE_TITLE,
  SITE_NAME
} from '../constants';
import { BookOpen, GraduationCap, Award, Mic, Music, Star, Briefcase } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section - Split Layout */}
      <div className="flex flex-col md:flex-row w-full min-h-[calc(100vh-80px)] md:h-[85vh]">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full relative overflow-hidden bg-stone-200">
          <img 
            src="https://lh3.google.com/u/0/d/1OndsMUjgHmS4pIHhmObSd9f2LawkMr2H=w1920-h878-iv1?auditContext=prefetch" 
            alt="Hyerin Lee Hero" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Right Side: Text */}
        <div className="w-full md:w-1/2 bg-stone-900 flex items-center justify-center px-6 py-12 md:p-16">
          <div className="text-center animate-fade-in-up max-w-xl">
            <h2 className="text-lg md:text-xl text-accent-gold font-medium mb-6 tracking-[0.2em] uppercase">
              {ROLE_TITLE}
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-tight">
              {SITE_NAME}
            </h1>
            <div className="w-20 h-1 bg-accent-gold mx-auto mb-8 opacity-60"></div>
            <p className="text-stone-300 text-lg md:text-xl font-light leading-relaxed">
              감미로운 첼로 선율과 진심 어린 스토리텔링으로<br className="hidden lg:block"/>
              삶의 위로와 영감을 전합니다.
            </p>
          </div>
        </div>
      </div>

      {/* Profile Intro */}
      <Section title="소개" subtitle="About Me">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-5/12 aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
             <img 
               src="https://lh3.google.com/u/0/d/1l4zMQCOPel_H0bd1Fvf4ueBFPkQsNlZ7=w1920-h878-iv2?auditContext=prefetch" 
               alt="Hyerin Lee Profile" 
               className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
             />
          </div>
          <div className="w-full md:w-7/12">
            <div className="prose prose-lg text-stone-600 leading-8 whitespace-pre-line font-light">
              {PROFILE_TEXT}
            </div>
            
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h3 className="flex items-center text-xl font-serif font-bold text-primary-800 mb-4">
                  <GraduationCap className="mr-3 text-primary-600" size={24} />
                  학력
                </h3>
                <ul className="space-y-2">
                  {EDUCATION.map((edu, idx) => (
                    <li key={idx} className="text-sm text-stone-700 flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-gold flex-shrink-0"></span>
                      {edu.title}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
                <h3 className="flex items-center text-xl font-serif font-bold text-primary-800 mb-4">
                  <Briefcase className="mr-3 text-primary-600" size={24} />
                  주요 활동 및 역할
                </h3>
                <ul className="space-y-2">
                  {CAREER.map((job, idx) => (
                    <li key={idx} className="text-sm text-stone-700 flex items-start">
                      <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-accent-gold flex-shrink-0"></span>
                      {job.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Lecture & Education */}
      <Section title="강연 및 교육 활동" subtitle="Education & Lectures" bgColor="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {LECTURE_AREAS.map((area, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex items-center">
              <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4 flex-shrink-0">
                <Mic size={20} />
              </div>
              <p className="font-medium text-stone-700">{area}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-serif font-bold text-center mb-10 text-primary-800">
          강연 프로그램 소개
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LECTURE_PROGRAMS.map((program, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
              <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600"></div>
              <div className="p-8 flex-grow">
                <div className="mb-4">
                  {idx === 0 && <Music className="text-accent-gold mb-3" size={32} />}
                  {idx === 1 && <Star className="text-accent-yellow mb-3" size={32} />}
                  {idx === 2 && <BookOpen className="text-primary-500 mb-3" size={32} />}
                  <h4 className="text-xl font-bold text-gray-900 mb-1">{program.title}</h4>
                  <p className="text-sm text-primary-600 font-medium mb-4">{program.subtitle}</p>
                </div>
                <ul className="space-y-3">
                  {program.items.map((item, i) => (
                    <li key={i} className="text-sm text-stone-600 flex items-start">
                      <span className="mr-2 text-primary-400">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Major Content */}
      <Section title="주요 콘텐츠" subtitle="Contents">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MAJOR_CONTENTS.map((content, idx) => (
            <div key={idx} className="group relative bg-white border border-stone-200 rounded-lg p-6 hover:bg-primary-50 transition-colors duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award size={48} />
              </div>
              <h4 className="font-bold text-lg text-stone-800 mb-2 group-hover:text-primary-800">
                {idx === 3 ? 'Essay' : `Story ${idx + 1}`}
              </h4>
              <p className="text-stone-600 font-medium">
                {content}
              </p>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Call to Action for Book */}
      <div className="bg-stone-900 text-white py-20 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-serif mb-6">모두가 빨간 튤립일 필요는 없다</h2>
        <p className="text-stone-400 mb-8 max-w-2xl mx-auto">
          노란 튤립으로도 충분히, 그리고 멋지게 살 수 있다는 메시지를 전하는 책.<br/>
          진짜 나로 피어난 첼리스트의 변화의 여정을 만나보세요.
        </p>
        <a 
          href="#/book" 
          className="inline-block px-8 py-3 bg-accent-gold text-stone-900 font-bold rounded-full hover:bg-yellow-400 transition-colors duration-300"
        >
          책 자세히 보기
        </a>
      </div>
    </div>
  );
};

export default Home;