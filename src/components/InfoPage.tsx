interface InfoPageProps {
  onNavigateToRegistration: () => void;
}

export default function InfoPage({ onNavigateToRegistration }: InfoPageProps) {
  return (
    <div className="w-[2880px] h-[1196px] bg-[#3a3d40] font-sans antialiased text-[11px] text-[#333333] flex flex-col overflow-auto select-none">
      
      <div className="h-[46px] bg-gradient-to-b from-[#2c2f32] to-[#1e2022] border-b border-[#111111] flex justify-between items-center px-4 w-full shrink-0">
        <div className="flex items-center gap-3">
          
          <div className="flex items-center">

            <div className="flex items-baseline leading-none">
              <span className="text-[#e31b23] text-[30px] font-black tracking-tighter">G</span>
              <span className="text-white text-[30px] font-black tracking-tighter">IST</span>
            </div>

            <div className="w-[1px] h-[25px] bg-gray-400 mx-2"></div>


            <div className="flex flex-col ml-0.5">
              <div className="text-white text-[15px] font-bold tracking-tight">
                ZEUS System
              </div>
              <div className="text-gray-400 text-[10px] font-mono">
                New Dream, Great GIST
              </div>
            </div>
          </div>

          {/* 사용자 정보 테두리 박스 */}
          <input 
            type="text" 
            readOnly 
            value="박동희(기초교육학부-재학)" 
            className="w-[140px] h-[22px] bg-white text-[#333333] text-[11px] px-1.5 border border-[#7f9db9] rounded-sm font-medium focus:outline-none ml-2"
          />
        </div>

        <div className="flex items-center gap-3 text-white">
          <button className="bg-[#4a4e52] border border-[#2b2d30] hover:bg-[#5a5e63] text-white px-2 py-0.5 text-[11px] font-medium flex items-center gap-1 shadow-inner">
            🔒 LOGOUT <span className="text-white font-mono">02:59:54</span>
          </button>
          <span className="text-[#ff3b30] cursor-pointer hover:text-red-400 font-bold text-sm">🔄</span>
          <div className="flex items-center gap-2 text-[11px] text-gray-300 pl-1 border-l border-gray-600">
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="lang" defaultChecked className="w-3 h-3 accent-red-600" /> ENG
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input type="radio" name="lang" className="w-3 h-3 accent-red-600" /> KOR
            </label>
          </div>
        </div>
      </div>

      {/* 내부 콘텐츠 영역 */}
      <div className="flex-1 bg-white p-3 overflow-y-auto">
        {/* 페이지 타이틀 */}
        <div className="flex items-center text-[#222222] font-bold text-[12px] mb-2 border-b border-[#b3b3b3] pb-1">
          <span className="text-red-600 mr-1 text-[10px]">■</span> 수업 &gt; 수강신청안내페이지[UlsTlsnAplyInfoQ]
        </div>

        {/* 상단 탭 메뉴 섹션 */}
        <div className="border border-[#cccccc] bg-[#f9f9f9] p-1.5 mb-2.5 flex justify-between items-center">
          <div className="flex items-center gap-1 font-bold text-[#111111]">
            <span className="text-[9px] text-gray-700">▶</span> List of Registered Courses
            <span className="text-gray-500 font-normal ml-1">
              [총 <span className="text-[#e31b23] font-bold">9</span> 건]
            </span>
            
            <button 
              onClick={onNavigateToRegistration}
              className="ml-4 px-3 py-0.5 bg-gradient-to-b from-white to-[#e6e6e6] border border-[#ababab] hover:to-[#dadada] font-bold text-[#111111] shadow-sm active:bg-gray-200 rounded-none"
            >
              Registration ▶
            </button>
            <button className="px-3 py-0.5 bg-white border border-[#cccccc] text-gray-600 font-normal rounded-none">Your Registration Information</button>
            <button className="px-3 py-0.5 bg-white border border-[#cccccc] text-gray-600 font-normal rounded-none">Courses</button>
            <button className="px-3 py-0.5 bg-white border border-[#cccccc] text-gray-600 font-normal rounded-none">Credits</button>
          </div>
          <div className="text-[#e31b23] text-[10px] font-mono">
            ※ Course Type: M(Mandatory), E(Elective) R(Research)
          </div>
        </div>

        {/* 수강 목록 테이블 */}
        <div className="overflow-x-auto mb-4 border-t-2 border-[#e31b23]">
          <table className="w-full text-center border-collapse border border-[#cccccc]">
            <thead>
              <tr className="bg-[#f0f0f0] text-[#222222] font-semibold border-b border-[#cccccc] h-6">
                <th className="border border-[#cccccc] w-[40px]">NO</th>
                <th className="border border-[#cccccc] w-[100px]">Syllabus</th>
                <th className="border border-[#cccccc]">Title</th>
                <th className="border border-[#cccccc] w-[60px]">Type</th>
                <th className="border border-[#cccccc] w-[240px]">Timetable</th>
                <th className="border border-[#cccccc] w-[140px]">Instructor</th>
                <th className="border border-[#cccccc] w-[80px]">Grade</th>
                <th className="border border-[#cccccc] w-[100px]">Advisor</th>
                <th className="border border-[#cccccc] w-[60px]">Credit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="h-7 hover:bg-gray-50 text-[11px] bg-[#fffde6]">
                <td className="border border-[#cccccc]">1</td>
                <td className="border border-[#cccccc] text-indigo-600 underline cursor-pointer">PS2102-01</td>
                <td className="border border-[#cccccc] text-left px-2 font-medium">Electromagnetism & Recitation I</td>
                <td className="border border-[#cccccc]">E</td>
                <td className="border border-[#cccccc] text-left px-1 text-[10px] bg-[#fffdf0] leading-tight">MON 13:00~14:30<br/>TUE 19:00~20:00<br/>WED 13:00~14:30</td>
                <td className="border border-[#cccccc]">Bang, Woosuk</td>
                <td className="border border-[#cccccc]">Letter</td>
                <td className="border border-[#cccccc]"></td>
                <td className="border border-[#cccccc] font-bold">3</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 졸업요건 바 */}
        <div className="bg-[#f9f9f9] border border-[#cccccc] p-1 mb-2 font-bold flex items-center gap-2">
          <span>▶ Check the requirements for graduation</span>
          <span className="text-[#e31b23] font-mono text-[10px]">▶ ※The Service will be provided soon</span>
        </div>
      </div>
    </div>
  );
}