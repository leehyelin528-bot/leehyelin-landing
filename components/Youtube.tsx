import React from 'react';
import Section from './Section';
import { YOUTUBE_VIDEOS } from '../constants';
import { Youtube as YoutubeIcon, Play } from 'lucide-react';

const Youtube: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <div className="bg-white border-b border-stone-100">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <div className="inline-block p-3 bg-red-50 rounded-full mb-4">
            <YoutubeIcon className="text-red-600" size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">Performance & Lecture</h1>
          <p className="mt-4 text-stone-500">첼로 연주와 강연 영상을 감상하실 수 있습니다.</p>
        </div>
      </div>

      <Section bgColor="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {YOUTUBE_VIDEOS.map((video, idx) => (
            <div 
              key={video.id} 
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${idx === 2 ? 'lg:col-span-2 lg:w-2/3 lg:mx-auto' : ''}`}
            >
              {/* Aspect Ratio Box for Image Link */}
              <a 
                href={video.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block relative pb-[56.25%] bg-stone-900 group cursor-pointer"
              >
                <img
                  src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="absolute top-0 left-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                    <Play className="text-white ml-1" size={32} fill="currentColor" />
                  </div>
                </div>
              </a>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <YoutubeIcon className="text-red-600" size={20} />
                  <span className="text-xs font-bold text-red-600 uppercase tracking-wider">YouTube</span>
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">{video.title}</h3>
                <p className="text-stone-500 text-sm">
                  {idx < 2 ? '감미로운 첼로 선율의 연주 영상입니다.' : '인문학과 예술이 결합된 특별한 강연 영상입니다.'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Youtube;