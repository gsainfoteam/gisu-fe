// 백엔드에서 받아올 과목 데이터 타입 정의
export interface CourseType {
  sectionId: number;
  courseId: number;
  courseCode: string;
  courseSectionCode: string;
  title: string;
  type: string;
  credit: number;
  sectionNo: string;
  instructor: string;
  maxCapacity: number;
  currentSeats: number;
  remainingSeats: number;
  timetableText: string;
  timeSlots: string[];
}

interface CourseTableProps {
  courses: CourseType[];
  onAdd: (sectionId: number) => void; // 부모로부터 Add 함수를 전달받음
}

export default function CourseTable({ courses, onAdd }: CourseTableProps) {
  return (
    <div className="w-full overflow-x-auto text-[11px] text-[#333333]">
      <table className="w-full text-center border-collapse border border-[#cccccc]">
        <thead>
          <tr className="bg-[#f0f0f0] text-[#222222] font-semibold h-6 border-b border-[#cccccc]">
            <th className="border border-[#cccccc] px-1 w-[80px] font-sans">Syllabus</th>
            <th className="border border-[#cccccc] px-1 w-[40px] font-sans">Video</th>
            <th className="border border-[#cccccc] px-2 text-left font-sans">Title</th>
            <th className="border border-[#cccccc] px-1 w-[40px] font-sans">Type</th>
            <th className="border border-[#cccccc] px-1 w-[50px] font-sans">Type3</th>
            <th className="border border-[#cccccc] px-2 text-left w-[150px] font-sans">Timetable</th>
            <th className="border border-[#cccccc] px-1 w-[120px] font-sans">Instructor</th>
            <th className="border border-[#cccccc] px-1 w-[50px] font-sans">Grade</th>
            <th className="border border-[#cccccc] px-1 w-[40px] font-sans">Size</th>
            <th className="border border-[#cccccc] px-1 w-[40px] font-sans">Seats</th>
            <th className="border border-[#cccccc] px-1 w-[40px] font-sans">Credit</th>
            <th className="border border-[#cccccc] px-1 w-[45px] font-sans">Add</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.sectionId} className="h-6 border-b border-[#cccccc] hover:bg-gray-50 bg-white">
              <td className="border border-[#cccccc] text-indigo-600 underline cursor-pointer font-mono font-medium">{course.courseSectionCode}</td>
              <td className="border border-[#cccccc]"></td>
              <td className="border border-[#cccccc] text-left px-2 font-medium">{course.title}</td>
              <td className="border border-[#cccccc] font-mono">{course.type}</td>
              <td className="border border-[#cccccc]"></td>
              <td className="border border-[#cccccc] text-left px-2 text-[10px] font-mono leading-none pt-0.5">{course.timetableText}</td>
              <td className="border border-[#cccccc] font-medium">{course.instructor}</td>
              <td className="border border-[#cccccc] text-gray-600">Letter</td>
              <td className="border border-[#cccccc] font-mono">{course.maxCapacity}</td>
              <td className="border border-[#cccccc] font-mono">{course.remainingSeats}</td>
              <td className="border border-[#cccccc] font-mono font-bold">{course.credit}</td>
              <td className="border border-[#cccccc] p-0.5">
                <button 
                  onClick={() => onAdd(course.sectionId)}
                  className="w-full h-[18px] bg-[#f2f2f2] border border-[#ababab] text-[10px] text-[#333333] hover:bg-gray-200 font-medium active:bg-gray-300 rounded-none"
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
          {/* 데이터가 없을 때 표시할 빈 행 */}
          {courses.length === 0 && (
            <tr className="h-10 bg-white">
              <td colSpan={12} className="text-gray-400">조회된 과목이 없습니다.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}