import React from 'react';

// =========================================================================
// 1. 왼쪽 사이드바, 학과랑 전공 토글
// =========================================================================
function Sidebar() {
  // 1) Department 메뉴 상태 (기본값: false = 닫힘)
  const [isDeptOpen, setIsDeptOpen] = React.useState(false);
  
  // 2) Division 메뉴 상태 (기본값: false = 닫힘)
  const [isDivOpen, setIsDivOpen] = React.useState(false);

  return (
    <div className="p-2 text-xs select-none">
      <div className="font-bold border-b pb-1 mb-2 text-gray-800 font-sans">⊟ GIST College</div>
      <ul className="pl-2 space-y-1 text-gray-700">
        
        {/* ① School/Department 메뉴 */}
        <li 
          className="cursor-pointer hover:bg-gray-100 p-0.5 font-semibold flex items-center gap-1 transition-colors"
          onClick={() => setIsDeptOpen(!isDeptOpen)}
        >
          <span>{isDeptOpen ? '⊟' : '⊞'}</span>
          <span>School/Department</span>
        </li>

        {/* Department 하위 메뉴 (열렸을 때만 렌더링) */}
        {isDeptOpen && (
          <ul className="pl-4 space-y-0.5 my-1 border-l border-dashed border-gray-300">
            <li className="cursor-pointer hover:bg-gray-100 px-1 py-0.5 text-gray-600">▣ Challenge and Exploration Program</li> 
           
          </ul> // 일단 도전탐색만, 추후 추가
        )}

        {/* ② Division/Concentration 메뉴 */}
        <li 
          className="cursor-pointer hover:bg-gray-100 p-0.5 font-semibold text-blue-900 flex items-center gap-1 mt-1 transition-colors"
          onClick={() => setIsDivOpen(!isDivOpen)}
        >
          <span>{isDivOpen ? '⊟' : '⊞'}</span>
          <span>Division/Concentration</span>
        </li>
        
        {/* Division 하위 메뉴 (열렸을 때만 렌더링) */}
        {isDivOpen && (
          <ul className="pl-4 space-y-0.5 my-1 border-l border-dashed border-gray-300">
            <li className="bg-yellow-100 border border-yellow-300 px-1 py-0.5 cursor-pointer font-medium text-gray-900">
              ▣ Division of Liberal Arts and Sciences
            </li>
            <li className="cursor-pointer hover:bg-gray-100 px-1 py-0.5">▣ GIST College (Common)</li>
            <li className="cursor-pointer hover:bg-gray-100 px-1 py-0.5 text-gray-500">▣ Mathematics Minor</li>
            <li className="cursor-pointer hover:bg-gray-100 px-1 py-0.5 text-gray-500">▣ Energy Minor</li>
            <li className="cursor-pointer hover:bg-gray-100 px-1 py-0.5 text-gray-500">▣ Biomedical Science and Engineering</li>
            <li className="cursor-pointer hover:bg-gray-100 px-1 py-0.5 text-gray-500">▣ Chemistry</li>
          </ul> // 예시만
        )}

      </ul>
    </div>
  );
}
// =========================================================================
// 2. 우측 시간표 컴포넌트
// =========================================================================
function TimetablePanel() {
  const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'];

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex justify-between items-center bg-gray-700 text-white px-2 py-1 text-xs font-bold">
        <span>▶ Timetable</span>
        <button className="px-2 py-0.5 border border-gray-400 bg-white text-black text-[11px] rounded hover:bg-gray-100">
          Print
        </button>
      </div>
      <div className="flex-1 overflow-auto border-t">
        <table className="w-full text-center border-collapse text-[11px]">
          <thead className="bg-gray-50 border-b sticky top-0">
            <tr className="text-gray-600">
              <th className="p-1 border-r w-12 font-normal bg-gray-100">Time</th>
              <th className="p-1 border-r font-normal">MON</th>
              <th className="p-1 border-r font-normal">TUE</th>
              <th className="p-1 border-r font-normal">WED</th>
              <th className="p-1 border-r font-normal">THU</th>
              <th className="p-1 font-normal">FRI</th>
            </tr>
          </thead>
          <tbody>
            {times.map((time) => (
              <tr key={time} className="border-b h-6 hover:bg-gray-50/50">
                <td className="border-r bg-gray-50 text-gray-400 text-center text-[10px] select-none">{time}</td>
                <td className="border-r"></td>
                <td className="border-r"></td>
                <td className="border-r"></td>
                <td className="border-r"></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// =========================================================================
// 3. 중앙 강의 정보 및 신청 내역 컴포넌트
// =========================================================================
function CourseCenterPanel() {
  // 임시 데이터 (나중에 백엔드 NestJS에서 받아올 영역)
  const dummyCourses = [
    { code: 'GS0206-01', title: 'Acoustic Guitar', type: 'M', time: 'MON 17:30~19:30', prof: 'Han Koen Siq', size: 11, seats: 11, credit: 0 },
    { code: 'GS0206-02', title: 'Acoustic Guitar', type: 'M', time: 'MON 19:00~21:00', prof: 'Han Koen Siq', size: 11, seats: 11, credit: 0 },
    { code: 'GS0208-01', title: 'Base Guitar', type: 'M', time: 'WED 19:00~21:00', prof: 'Lee, Jae Houng', size: 12, seats: 11, credit: 0 },
    { code: 'GS0209-01', title: 'Drum', type: 'M', time: 'TUE 17:30~19:30', prof: 'Bog-Geun Lee', size: 11, seats: 11, credit: 0 },
    { code: 'GS0210-01', title: 'Vocal', type: 'M', time: 'TUE 17:30~19:30', prof: 'Jang, Jin Hyung', size: 12, seats: 12, credit: 0 },
    { code: 'GS0211-01', title: 'Drawing', type: 'M', time: 'WED 17:30~19:30', prof: 'Hong, Won Seok', size: 11, seats: 11, credit: 0 },
  ];

  return (
    <div className="flex flex-col h-full gap-2 overflow-hidden">
      {/* 3-1. 개설 강의 목록 (상단 표) */}
      <div className="flex-[2] bg-white border flex flex-col overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 px-2 py-1.5 border-b text-xs">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-800">▶ Information on course</span>
            <span className="text-gray-500 text-[11px]">[총 <span className="text-red-600 font-bold">201</span>건]</span>
            <button className="px-1.5 py-0.5 border bg-white text-[11px] text-red-600 font-semibold rounded hover:bg-gray-50">
              ↻ Refresh
            </button>
          </div>
          <div className="flex items-center gap-3 text-[11px] font-medium text-gray-700">
            <span>Total Credits <span className="text-blue-600 font-bold">40</span></span>
            <span>Total GPA <span className="text-blue-600 font-bold">0.0</span></span>
            <button className="px-1.5 py-0.5 border bg-white rounded hover:bg-gray-50 text-gray-800">Transcript</button>
          </div>
        </div>
        
        <div className="flex-1 overflow-auto">
          <table className="w-full text-center border-collapse text-xs">
            <thead className="bg-gray-50 sticky top-0 border-b shadow-sm text-gray-700 font-semibold">
              <tr className="bg-gray-100/80">
                <th className="p-1.5 border-r border-gray-200">Syllabus</th>
                <th className="p-1.5 border-r border-gray-200 text-left pl-2">Title</th>
                <th className="p-1.5 border-r border-gray-200">Type</th>
                <th className="p-1.5 border-r border-gray-200">Timetable</th>
                <th className="p-1.5 border-r border-gray-200">Instructor</th>
                <th className="p-1.5 border-r border-gray-200">Size</th>
                <th className="p-1.5 border-r border-gray-200">Seats</th>
                <th className="p-1.5 border-r border-gray-200">Credit</th>
                <th className="p-1.5">Add</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {dummyCourses.map((course, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-blue-50/40 transition-colors">
                  <td className="p-1 border-r border-gray-100 text-blue-600 underline cursor-pointer font-medium text-[11px]">{course.code}</td>
                  <td className="p-1 border-r border-gray-100 text-left pl-2 font-medium">{course.title}</td>
                  <td className="p-1 border-r border-gray-100">{course.type}</td>
                  <td className="p-1 border-r border-gray-100 text-[11px] text-gray-600">{course.time}</td>
                  <td className="p-1 border-r border-gray-100">{course.prof}</td>
                  <td className="p-1 border-r border-gray-100">{course.size}</td>
                  <td className="p-1 border-r border-gray-100 font-semibold text-green-600">{course.seats}</td>
                  <td className="p-1 border-r border-gray-100">{course.credit}</td>
                  <td className="p-1">
                    <button className="px-2 py-0.5 border border-gray-300 bg-gray-50 hover:bg-gray-200 rounded text-[11px] text-gray-700 shadow-sm transition-all active:scale-95">
                      Add
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 밑에 공지 */}
      <p className="text-red-500 text-[11px] font-medium px-1 bg-red-50 py-0.5 border border-red-100 rounded">
        ※ If you click 7 times consecutively on the same subject, a popup window with security code opens and you have to enter the security code.
      </p>

      {/* 3-2. 수강 신청 완료 목록 (하단 표) */}
      <div className="flex-1 bg-white border flex flex-col overflow-hidden">
        <div className="flex justify-between items-center bg-gray-100 px-2 py-1 border-b text-xs">
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-800">▶ List of course registration</span>
            <span className="text-gray-500 text-[11px]">[총 <span className="text-red-600 font-bold">0</span>건]</span>
          </div>
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-gray-600">Courses: <span className="font-bold text-gray-900">0</span></span>
            <span className="text-gray-600 mr-2">Credits: <span className="font-bold text-gray-900">0</span></span>
            <button className="px-1.5 py-0.5 border bg-white rounded flex items-center gap-1 hover:bg-gray-50 shadow-sm">💾 Save</button>
            <button className="px-1.5 py-0.5 border bg-white rounded flex items-center gap-1 hover:bg-gray-50 shadow-sm">🖨️ Print</button>
          </div>
        </div>
        <div className="flex-1 overflow-auto">
          <table className="w-full text-center border-collapse text-xs">
            <thead className="bg-blue-600 text-white sticky top-0 text-[11px]">
              <tr>
                <th className="p-1 border-r border-blue-500 font-normal">NO</th>
                <th className="p-1 border-r border-blue-500 font-normal">Syllabus</th>
                <th className="p-1 border-r border-blue-500 font-normal">Title</th>
                <th className="p-1 border-r border-blue-500 font-normal">Type</th>
                <th className="p-1 border-r border-blue-500 font-normal">Timetable</th>
                <th className="p-1 border-r border-blue-500 font-normal">Instructor</th>
                <th className="p-1 font-normal">Drop</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={7} className="p-6 text-gray-400 text-center bg-gray-50/50">
                  신청된 수강 내역이 없습니다. 상단에서 [Add] 버튼을 눌러 신청하세요.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// =========================================================================
// 4. 메인 페이지 컴포넌트 (전체 조립)
// =========================================================================
export default function App() {
  return (
    <div className="flex flex-col h-screen p-3 text-xs bg-gray-50 min-w-[1280px] overflow-x-auto select-none antialiased">
      {/* 4-1. 상단 타이틀 및 경고문 */}
      <div className="mb-2 bg-white p-2 border border-gray-200 shadow-sm rounded">
        <h1 className="text-sm font-bold text-gray-800 flex items-center gap-2">
          <span className="text-red-600">■</span> 수업 &gt; 수강신청처리(학생) [UIsTlsnStudtAplyE]
        </h1>
        <p className="text-red-600 mt-1 text-[11px] leading-tight font-medium">
          ※ If less than '9 credits(graduate student)' or '11 credits(undergraduate student)' have been earned during this semester, scholarship will not be given for the next semester (But this rule is not effective for the last semester before graduation)
        </p>
      </div>

      {/* 4-2. 상단 컨트롤 바 (검색 필터) */}
      <div className="flex items-center gap-4 mb-3 p-2 bg-white border border-gray-200 shadow-sm rounded">
        <button className="px-3 py-1 border border-gray-300 bg-gray-50 hover:bg-gray-150 font-bold rounded shadow-sm text-gray-700 active:scale-95 transition-all">
          Home
        </button>
        <div className="flex items-center gap-2">
          <label className="font-semibold text-gray-700">Course No/Title</label>
          <input type="text" className="border border-gray-300 px-2 py-0.5 rounded w-48 focus:outline-none focus:border-blue-500" placeholder="강의명 또는 과목코드" />
          <button className="px-3 py-0.5 border border-gray-300 bg-gray-50 hover:bg-gray-100 font-semibold rounded shadow-sm flex items-center gap-1 text-gray-700 active:scale-95 transition-all">
            <span className="text-red-500 text-xs">🔍</span> Search
          </button>
        </div>
        <p className="text-gray-500 ml-auto text-[11px] font-medium">
          ※ Course Type: <span className="text-red-600">M</span>(Mandatory), <span className="text-red-600">E</span>(Elective), <span className="text-red-600">R</span>(Research)
        </p>
      </div>

      {/* 4-3. 메인 콘텐츠 3단 레이아웃 분할 */}
      <div className="flex flex-1 gap-3 overflow-hidden">
        {/* 좌측: 전공 트리 바 */}
        <aside className="w-[240px] bg-white border border-gray-200 shadow-sm rounded overflow-y-auto">
          <Sidebar />
        </aside>

        {/* 중앙: 메인 테이블 구역 */}
        <main className="flex-1 min-w-[650px]">
          <CourseCenterPanel />
        </main>

        {/* 우측: 주간 시간표 */}
        <aside className="w-[280px] bg-white border border-gray-200 shadow-sm rounded flex flex-col overflow-hidden">
          <TimetablePanel />
        </aside>
      </div>
    </div>
  );
}