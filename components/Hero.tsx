import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-[#E0D7FF] flex flex-col items-center pt-24 pb-20 px-6 overflow-hidden relative">
      {/* Header Typography */}
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        <h1 className="flex flex-col items-center leading-[0.85] tracking-tighter uppercase font-black">
          <span className="text-6xl md:text-[140px] text-black">SEREN</span>
          <span className="text-6xl md:text-[140px] text-outline">COMPANY</span>
        </h1>
        
        {/* Introduction Line */}
        <div className="mt-8 mb-12 animate-fadeIn">
          <p className="text-lg md:text-2xl font-normal tracking-tight text-black/80 text-center leading-relaxed">
            <span className="font-black text-black/90">세렌</span>은 AI를 도구가 아닌 <span className="font-black text-black/90">구조 설계의 언어</span>로 사용하는 브랜드입니다.<br />
            <span className="font-black text-black/90">아이디어</span>를 떠올리는 데서 멈추지 않고,<br />
            <span className="font-black text-black/90">실행 가능한 시스템</span>으로 만들고 <span className="font-black text-black/90">지속 가능한 사업 구조</span>하는로 연결합니다.<br />
            <br />
            혼자서도<span className="font-semibold text-black/90">브랜드</span>를 만들 수 있는 시대<br />
            <span className="font-black text-[#1040DD]">세렌</span>은 그 방법을  <span className="font-black text-black/90">직접 설계</span>하고  <span className="font-black text-black/90">실험</span>합니다.
          </p>
        </div>
      </div>

      <div className="w-full max-w-4xl relative flex flex-col items-center">
        {/* Founder Portrait Only */}
        <div className="w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden flex items-center justify-center relative z-0">
          <img 
            src="https://raw.githubusercontent.com/krtea5599/SEREN-Portfolio/91d191264acf69070659dafe564266d495643ead/%EC%9D%B4%EC%A0%95%ED%95%9C%20%ED%94%84%EB%A1%9C%ED%95%84.jpg" 
            alt="주식회사 세렌" 
            className="w-full h-full object-contain object-top animate-fadeIn"
          />               
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.99); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;