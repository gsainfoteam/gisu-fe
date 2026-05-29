import { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import CourseTable, { type CourseType } from './CourseTable';
import TimeTable, { type TimetableBlock } from './TimeTable';

// 백엔드에서 수강신청 후 넘겨주는 전체 데이터 타입
interface RegisteredCourse {
  enrollmentId: number;
  sectionId: number;
  courseId: number;
  courseCode: string;
  courseSectionCode: string;
  title: string;
  type: string;
  credit: number;
  sectionNo: string;
  instructor: string;
  timetableText: string;
  timeSlots: string[];
}

interface RegistrationData {
  totalCourses: number;
  totalCredits: number;
  registeredCourses: RegisteredCourse[];
  timetableBlocks: TimetableBlock[];
}

interface MainPageProps {
  onBackToInfo: () => void;
}

export default function MainPage({ onBackToInfo }: MainPageProps) {
  // 1. 상태 관리
  const [searchCode, setSearchCode] = useState("");
  const [searchedCourses, setSearchedCourses] = useState<CourseType[]>([]);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    totalCourses: 0,
    totalCredits: 0,
    registeredCourses: [],
    timetableBlocks: []
  });

// 2. 검색 기능 API 호출
const handleSearch = async () => {
  if (!searchCode.trim()) return alert("과목 코드를 입력해주세요.");
  try {
    const res = await axios.get(`/api/courses/search?keyword=${searchCode}`);
    
    // 데이터 구조에 따른 안전한 상태 업데이트
    // 1) res.data가 바로 배열인 경우
    // 2) res.data.courses 처럼 객체 안에 배열이 있는 경우
    const data = res.data;
    if (Array.isArray(data)) {
      setSearchedCourses(data);
    } else if (data && Array.isArray(data.courses)) {
      setSearchedCourses(data.courses);
    } else {
      setSearchedCourses([]);
      console.warn("예상치 못한 데이터 구조:", data);
    }
  } catch (error) {
    console.error(error);
    alert("과목 검색에 실패했습니다.");
  }
};

// 3. 수강 신청(Add) 기능 API 호출
const handleAddCourse = async (sectionId: number) => {
  try {
    const res = await axios.post(`https://slip-antics-shadow.ngrok-free.dev/enrollments`, { sectionId });
    
    // 백엔드가 준 데이터 구조에 맞춰 상태 업데이트
    // 만약 res.data가 RegistrationData 타입과 정확히 일치한다면 그대로 사용
    setRegistrationData(res.data);
    alert("성공적으로 추가되었습니다.");
  } catch (error: any) {
    console.error(error);
    alert(error.response?.data?.message || "수강 신청에 실패했습니다.");
  }
};

  return (
    <div className="w-full h-screen bg-[#f4f4f4] font-sans antialiased text-[11px] text-[#333333] flex flex-col p-2 overflow-hidden select-none">
      
      {/* 1. 제목 및 안내문 */}
      <div className="mb-3 shrink-0">
        <h1 className="text-[12px] font-bold text-[#111111] flex items-center gap-1">
          <span className="text-red-600 text-[9px]">■</span> 수업 &gt; 수강신청처리(학생) [UlsTlsnStudtAplyE]
        </h1>
        <p className="text-red-600 mt-1.5 text-[11px] font-normal leading-tight font-sans">
          ※ If less than '9 credits(graduate student)' or '11 credits(undergraduate student)' have been earned during this semester, scholarship will not be given for the next semester (But this rule is not effective for the last semester before graduation)
        </p>
      </div>

      <div className="flex-1 flex gap-2 overflow-hidden w-full items-stretch min-h-0">
  
        <div className="w-[200px] flex flex-col shrink-0">
          <button 
            onClick={onBackToInfo} 
            className="px-5 h-[22px] mb-1 border border-[#ababab] bg-gradient-to-b from-[#f8f8f8] to-[#e4e4e4] hover:to-[#d0d0d0] font-bold text-black text-[11px] rounded-none shadow-sm active:scale-95 self-start"
          >
            Home
          </button>
          <aside className="flex-1 bg-white border border-[#cccccc] overflow-y-auto p-2">
            <Sidebar />
          </aside>
        </div>

        {/* ================= [중앙 열] 검색바 -> 안내바 -> 상단 코스 테이블 -> 하단 신청 목록 테이블 ================= */}
        <div className="flex-1 flex flex-col min-w-0">
          
          {/* 첫 줄 Course No/Title 검색 */}
          <div className="flex items-center h-[22px] mb-1 shrink-0 w-full">
            <div className="w-[245px] flex items-center gap-2 shrink-0">
              <label className="font-bold text-[#222222] shrink-0">Course No/Title</label>
              <input 
                type="text" 
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="border border-[#cccccc] bg-white px-1.5 py-0.5 w-[140px] h-[21px] rounded-none focus:outline-none" 
              />
            </div>
    
            <button 
              onClick={handleSearch}
              className="px-2.5 py-0.5 border border-[#ababab] bg-gradient-to-b from-white to-[#e6e6e6] font-bold rounded-none shadow-sm hover:bg-gray-50 text-gray-700 flex items-center gap-1 h-[21px] shrink-0"
            >
              <span className="w-2 h-2 bg-gray-400 inline-block"></span>Search
            </button>
          </div>
          
          {/* Information  */}
          <div className="flex items-center h-[22px] mb-1 shrink-0 w-full">
            <div className="w-[245px] flex items-center gap-1.5 font-bold text-[#111111] shrink-0 pr-2">
              ▶ Information on course
              <span className="text-[#333333] ml-auto font-normal">[총 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{searchedCourses.length} 건]</span>
            </div>
            
            <button className="px-2.5 py-0.5 border border-[#ababab] bg-gradient-to-b from-white to-[#e6e6e6] font-bold rounded-none shadow-sm hover:bg-gray-50 text-gray-700 flex items-center gap-1 h-[21px] shrink-0">
              <span className="w-2 h-2 bg-gray-400 inline-block"></span>Refresh
            </button>
            
            <div className="flex items-center gap-1 ml-4 shrink-0">
              <span className="text-gray-700 font-normal">Total Credits</span>
              <input type="text" readOnly className="w-[45px] h-[20px] border border-[#cccccc] bg-white text-center font-bold text-black focus:outline-none" value={registrationData.totalCredits} />
            </div>

            {/* Transcript 버튼 */}
            <button className="px-2 py-0.5 border border-[#cccccc] bg-white hover:bg-gray-50 font-normal text-[11px] rounded-none shadow-sm flex items-center gap-1 ml-auto h-[21px]">
              <span className="w-2 h-2 bg-gray-400 inline-block"></span>Transcript
            </button>
          </div>

          {/* [상단] 구분선 및 메인 코스 테이블 (검색 결과) - props 전달 */}
          <div className="h-[2px] w-full bg-[#cc3300] shrink-0"></div>
          <main className="flex-[1.2] bg-white border-l border-r border-b border-[#cccccc] overflow-y-auto p-1 min-h-0">
            <CourseTable courses={searchedCourses} onAdd={handleAddCourse} />
          </main>

          {/* ================= 하단 수강신청 목록 영역 ================= */}
          <div className="mt-2 flex flex-col shrink-0 font-sans text-[11px]">
            {/* 1 경고문 */}
            <p className="text-red-600 text-[11px] mb-1 font-normal leading-tight">
              If you click 7 times consecutively on the same subject, a popup window with security code opens and you have to enter the security code.
            </p>
            
            {/* 2) 신청 테이블 상단 컨트롤 헤더 바 */}
            <div className="flex items-center justify-between mb-1 h-[24px]">
              <div className="flex items-center gap-1.5 font-bold text-[#111111]">
                ▶ List of course registration
                <span className="ml-5 font-normal">[총 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{registrationData.totalCourses} 건]</span>
              </div>
              
              <div className="flex items-center gap-4 h-full">
                <div className="flex items-center gap-1">
                  <span className="text-gray-700 font-normal">Courses</span>
                  <input type="text" readOnly className="w-[45px] h-[20px] border border-[#cccccc] bg-white text-center font-bold text-black focus:outline-none" value={registrationData.totalCourses} />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-gray-700 font-normal">Credits</span>
                  <input type="text" readOnly className="w-[45px] h-[20px] border border-[#cccccc] bg-white text-center font-bold text-black focus:outline-none" value={registrationData.totalCredits} />
                </div>
                <div className="flex gap-1 h-[20px]">
                  <button className="px-3 py-0 border border-[#ababab] bg-gradient-to-b from-white to-[#e6e6e6] font-bold text-[#111111] shadow-sm flex items-center gap-1 rounded-none text-[11px]">
                     Save
                  </button>
                  <button className="px-3 py-0 border border-[#ababab] bg-gradient-to-b from-white to-[#e6e6e6] font-bold text-[#111111] shadow-sm flex items-center gap-1 rounded-none text-[11px]">
                     Print
                  </button>
                </div>
              </div>
            </div>

            {/* 3) 수강신청 목록 데이터 테이블 */}
            <div className="border-t-[2px] border-t-[#cc3300] border-l border-r border-b border-[#cccccc] bg-white overflow-hidden flex flex-col text-center">
              
              {/* 테이블 헤더 로우 */}
              <div className="bg-[#f2f2f2] border-b border-[#cccccc] h-[24px] text-[#222222] grid grid-cols-[40px_75px_1fr_50px_130px_100px_60px_60px_60px_55px] items-center text-[11px]">
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#f7f7f7] px-1">NO</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#f7f7f7] px-1">Syllabus</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#f7f7f7] px-1">Title</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#f7f7f7] px-1">Type</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#f7f7f7] px-1">Timetable</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#f7f7f7] px-1">Instructor</div>
                
                {/* 파랑이들 */}
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#3b6ecc] text-white font-bold px-1">Grade</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#3b6ecc] text-white font-bold px-1">Advisor</div>
                <div className="border-r border-[#cccccc] h-full flex items-center justify-center bg-[#3b6ecc] text-white font-bold px-1">Credit</div>
                
                <div className="h-full flex items-center justify-center bg-[#f7f7f7] px-1">Drop</div>
              </div>

              {/* 신청 데이터 렌더링 */}
              <div className="h-[95px] bg-white overflow-y-auto">
                {registrationData.registeredCourses.map((rc, idx) => (
                  <div key={rc.enrollmentId} className="border-b border-[#cccccc] h-[24px] text-[#222222] grid grid-cols-[40px_75px_1fr_50px_130px_100px_60px_60px_60px_55px] items-center text-[11px] hover:bg-gray-50">
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center">{idx + 1}</div>
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center text-indigo-600 underline cursor-pointer">{rc.courseSectionCode}</div>
                    <div className="border-r border-[#cccccc] h-full flex items-center px-2 text-left truncate">{rc.title}</div>
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center">{rc.type}</div>
                    <div className="border-r border-[#cccccc] h-full flex items-center px-1 text-[9px] leading-tight text-left">{rc.timetableText}</div>
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center truncate px-1">{rc.instructor}</div>
                    
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center"></div>
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center"></div>
                    <div className="border-r border-[#cccccc] h-full flex items-center justify-center font-bold">{rc.credit}</div>
                    
                    <div className="h-full flex items-center justify-center p-0.5">
                      <button className="w-full h-full bg-[#f2f2f2] border border-[#ababab] text-[10px] text-red-600 hover:bg-gray-200 font-bold active:bg-gray-300 rounded-none">
                        Drop
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= [우측 열] 공백 -> 타임테이블 타이틀 -> 타임테이블 ================= */}
        <div className="w-[380px] flex flex-col shrink-0">
          <div className="h-[22px] mb-1 shrink-0" />

          <div className="flex items-center justify-between h-[22px] mb-1 shrink-0">
            <span className="font-bold text-[#111111] flex items-center gap-1">
              ▶ Timetable
            </span>
            <button className="px-2 py-0.5 border border-[#cccccc] bg-white hover:bg-gray-50 font-normal text-[11px] rounded-none shadow-sm flex items-center gap-1 h-[21px]">
              <span className="w-2 h-2 bg-gray-400 inline-block"></span>Print
            </button>
          </div>

          {/* TimeTable에 blocks 데이터를 넘겨줌 */}
          <div className="h-[2px] w-full bg-[#cc3300] shrink-0"></div>
          <aside className="flex-1 bg-white border-l border-r border-b border-[#cccccc] overflow-y-auto p-1 min-h-0">
            <TimeTable blocks={registrationData.timetableBlocks} />
          </aside>
        </div>

      </div>
    </div>
  );
}