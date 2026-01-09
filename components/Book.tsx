import React from 'react';
import Section from './Section';
import { BOOK_INFO } from '../constants';
import { ExternalLink, Quote } from 'lucide-react';

const Book: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header Banner */}
      <div className="bg-primary-900 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <span className="text-accent-gold tracking-widest uppercase text-sm font-bold mb-3 block">Essay</span>
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">{BOOK_INFO.title}</h1>
        </div>
      </div>

      <Section>
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          {/* Book Cover Visualization */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div className="relative w-64 md:w-80 shadow-2xl rounded-r-lg transform rotate-1 hover:rotate-0 transition-transform duration-500">
               <img 
                 src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791175980303.jpg" 
                 alt="모두가 빨간 튤립일 필요는 없다 표지" 
                 className="w-full h-auto rounded-r-lg" 
               />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-2/3">
            <div className="mb-10">
              <Quote className="text-primary-200 mb-4 transform rotate-180" size={48} />
              <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-light whitespace-pre-line border-l-4 border-accent-gold pl-6">
                {BOOK_INFO.description}
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-xl mb-10">
              <h3 className="text-xl font-bold text-primary-900 mb-4">이 책이 전하는 메시지</h3>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                  남들의 기준이 아닌 나만의 색깔로 살아가는 삶
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                  좌절을 힘으로 바꾸고 상처를 사명으로 승화
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-accent-gold rounded-full mr-3"></span>
                  진정한 자아 발견과 치유의 여정
                </li>
              </ul>
            </div>

            <a 
              href={BOOK_INFO.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-stone-900 text-white font-bold text-lg rounded-lg hover:bg-stone-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              교보문고에서 구매하기
              <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Book;