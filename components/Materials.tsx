import React from 'react';
import Section from './Section';
import { MATERIAL_ITEMS } from '../constants';
import { FileText, Download, ExternalLink, File, Image } from 'lucide-react';

const Materials: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen">
      <Section bgColor="light">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {MATERIAL_ITEMS.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg flex-shrink-0 ${
                    item.fileType === 'pdf' ? 'bg-red-50 text-red-600' : 
                    item.fileType === 'image' ? 'bg-emerald-50 text-emerald-600' :
                    'bg-blue-50 text-blue-600'
                  }`}>
                    {item.fileType === 'pdf' ? <FileText size={24} /> : 
                     item.fileType === 'image' ? <Image size={24} /> :
                     <File size={24} />}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-stone-900 mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-stone-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-auto">
                  <a 
                    href={item.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center space-x-2 px-6 py-3 rounded-full font-medium transition-colors w-full md:w-auto ${
                      item.fileType === 'pdf' 
                        ? 'bg-primary-600 text-white hover:bg-primary-700' 
                        : item.fileType === 'image'
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                        : 'bg-stone-800 text-white hover:bg-stone-900'
                    }`}
                  >
                    {item.fileType === 'pdf' ? (
                      <>
                        <Download size={18} />
                        <span>PDF 다운로드</span>
                      </>
                    ) : item.fileType === 'image' ? (
                      <>
                        <Download size={18} />
                        <span>이미지 다운로드</span>
                      </>
                    ) : (
                      <>
                        <ExternalLink size={18} />
                        <span>자료 보기</span>
                      </>
                    )}
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 p-8 bg-stone-100 rounded-2xl text-center">
            <h3 className="text-lg font-bold text-stone-800 mb-2">추가 자료 문의</h3>
            <p className="text-stone-600 text-sm mb-6">
              리스트에 없는 자료나 별도의 협의가 필요한 경우 연락 주시기 바랍니다.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:cello105@hanmail.net" 
                className="text-primary-700 font-medium hover:underline"
              >
                cello105@hanmail.net
              </a>
              <span className="hidden sm:inline text-stone-300">|</span>
              <a 
                href="https://open.kakao.com/o/sFzCX66" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-stone-800 font-medium hover:underline"
              >
                카카오톡 문의하기
              </a>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Materials;
