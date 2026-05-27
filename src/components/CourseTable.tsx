export default function CourseTable() {
  const courses = [
    { code: "GS0206-01", title: "Acoustic Guitar", type: "M", time: "MON 17:30~19:30", teacher: "Han Koen Siq", grade: "S/U", seats: "11", total: "11" },
    { code: "GS0206-02", title: "Acoustic Guitar", type: "M", time: "MON 19:00~21:00", teacher: "Han Koen Siq", grade: "S/U", seats: "11", total: "11" },
    { code: "GS0206-03", title: "Acoustic Guitar", type: "M", time: "TUE 19:00~21:00", teacher: "Han Koen Siq", grade: "S/U", seats: "11", total: "11" },
    { code: "GS0208-01", title: "Base Guitar", type: "W", time: "WED 19:00~21:00", teacher: "Lee, Jae Houng", grade: "S/U", seats: "12", total: "11" },
    { code: "GS0209-01", title: "Drum", type: "M", time: "TUE 17:30~19:30", teacher: "Bog-Geun Lee", grade: "S/U", seats: "11", total: "11" },
  ];

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
          {courses.map((course, index) => (
            <tr key={index} className="h-6 border-b border-[#cccccc] hover:bg-gray-50 bg-white">
              <td className="border border-[#cccccc] text-indigo-600 underline cursor-pointer font-mono font-medium">{course.code}</td>
              <td className="border border-[#cccccc]"></td>
              <td className="border border-[#cccccc] text-left px-2 font-medium">{course.title}</td>
              <td className="border border-[#cccccc] font-mono">{course.type}</td>
              <td className="border border-[#cccccc]"></td>
              <td className="border border-[#cccccc] text-left px-2 text-[10px] font-mono leading-none pt-0.5">{course.time}</td>
              <td className="border border-[#cccccc] font-medium">{course.teacher}</td>
              <td className="border border-[#cccccc] text-gray-600">{course.grade}</td>
              <td className="border border-[#cccccc] font-mono">{course.seats}</td>
              <td className="border border-[#cccccc] font-mono">{course.total}</td>
              <td className="border border-[#cccccc] font-mono font-bold">0</td>
              <td className="border border-[#cccccc] p-0.5">
                {/* 완전 각진 투박한 시스템 버튼 고증 */}
                <button className="w-full h-[18px] bg-[#f2f2f2] border border-[#ababab] text-[10px] text-[#333333] hover:bg-gray-200 font-medium active:bg-gray-300 rounded-none">
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}