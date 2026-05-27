import Sidebar from './Sidebar';
import CourseTable from './CourseTable';
import TimeTable from './TimeTable';

interface MainPageProps {
  onBackToInfo: () => void;
}

export default function MainPage({ onBackToInfo }: MainPageProps) {
  return (
    <div className="w-[2880px] h-[1196px] bg-[#f4f4f4] font-sans antialiased text-[11px] text-[#333333] flex flex-col p-2 overflow-hidden select-none">
      
      {/* 1. 상단 타이틀 */}
      <div className="mb-2 shrink-0">
        <h1 className="text-[12px] font-bold text-[#111111] flex items-center gap-1">
          <span className="text-red-600 text-[9px]">■</span> 수업 &gt; 수강신청처리(학생) [UlsTlsnStudtAplyE]
        </h1>
        <p className="text-red-600 mt-1.5 text-[11px] font-normal leading-tight font-sans">
          ※ If less than '9 credits(graduate student)' or '11 credits(undergraduate student)' have been earned during this semester, scholarship will not be given for the next semester (But this rule is not effective for the last semester before graduation)
        </p>
      </div>

      {/* 2. Course No/Title 검색 */}
      <div className="flex items-center gap-2 mb-2 p-1.5 bg-[#f0f0f0] border border-[#cccccc] shrink-0">
        <button 
          onClick={onBackToInfo} 
          className="px-2.5 py-0.5 border border-[#ababab] bg-gradient-to-b from-white to-[#e6e6e6] hover:to-[#dadada] font-bold text-[#111111] rounded-none shadow-sm active:scale-95"
        >
          Home
        </button>
        <div className="h-4 w-[1px] bg-gray-400 mx-1" />
        <div className="flex items-center gap-2">
          <label className="font-bold text-[#222222]">Course No/Title</label>
          <input type="text" className="border border-[#cccccc] bg-white px-1.5 py-0.5 w-[200px] h-[21px] font-sans text-[11px] rounded-none focus:outline-none" />
          <button className="px-3 py-0.5 border border-[#ababab] bg-white font-bold rounded-none shadow-sm hover:bg-gray-50 flex items-center gap-1.5 text-gray-700">
             Search
          </button>
        </div>
      </div>

      {/* 3. 본문 3단 분할 */}
      <div className="flex-1 flex gap-2 overflow-hidden w-full items-stretch min-h-0">
        

        <aside className="w-[320px] bg-white border border-[#cccccc] overflow-y-auto shrink-0 p-2 pt-1">
          <Sidebar />
        </aside>

        {/* 중앙 CourseTable */}
        <main className="flex-1 bg-white border border-[#cccccc] overflow-y-auto min-w-[1200px] flex flex-col">
          <div className="bg-gradient-to-r from-[#f0f0f0] to-white p-2 font-bold border-b border-[#cccccc] flex justify-between items-center shrink-0">
            <span>▶ Information on course [총 201 건]</span>
          </div>
          <div className="p-1 flex-1">
            <CourseTable />
          </div>
        </main>

        {/* 우측 TimeTable */}
        <aside className="w-[450px] bg-white border border-[#cccccc] flex flex-col shrink-0 overflow-y-auto">
          <div className="bg-white text-black p-1.5 font-bold text-[11px] shrink-0 border-b border-[#ababab]">
            <span>▶ Timetable</span>
          </div>
          <div className="p-1 flex-1">
            <TimeTable />
          </div>
        </aside>

      </div>
    </div>
  );
}