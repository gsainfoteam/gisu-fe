
// 백엔드에서 주는 시간표 블록 타입
export interface TimetableBlock {
  slotCode: string;
  courseCode: string;
  courseSectionCode: string;
  title: string;
  sectionNo: string;
  label: string;
}

interface TimeTableProps {
  blocks?: TimetableBlock[];
}

export default function TimeTable({ blocks = [] }: TimeTableProps) {
  const hours = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
    "18:00", "18:30", "19:00", "19:30", "20:00", "20:30",
    "21:00"
  ];
  
  // (A=월, B=화, C=수, D=목, E=금)
  const days = ["A", "B", "C", "D", "E"];

  return (
    <div className="w-full text-[11px] text-[#333333] font-sans">
      <table className="w-full border-collapse border border-[#cccccc] table-fixed">
        <thead>
          <tr className="bg-[#f0f0f0] text-[#222222] font-semibold h-6 border-b border-[#cccccc]">
            <th className="border border-[#cccccc] w-[60px] font-sans">Time</th>
            <th className="border border-[#cccccc] font-sans">MON</th>
            <th className="border border-[#cccccc] font-sans">TUE</th>
            <th className="border border-[#cccccc] font-sans">WED</th>
            <th className="border border-[#cccccc] font-sans">THU</th>
            <th className="border border-[#cccccc] font-sans">FRI</th>
          </tr>
        </thead>
        <tbody>
          {hours.map((time, idx) => {
            // 시간 인덱스를 01, 02... 25 형식으로 변환 (slotCode 매칭용)
            const slotNum = String(idx + 1).padStart(2, '0');

            return (
              <tr key={idx} className="h-[22px] border-b border-gray-200">
                <td className="border border-[#cccccc] bg-[#f9f9f9] text-center font-mono text-[10px] text-gray-600">
                  {time}
                </td>
                
                {days.map((dayCode) => {
                  // 현재 칸의 고유 코드 생성 (예: 'B09')
                  const currentSlotCode = `${dayCode}${slotNum}`;
                  
                  // 백엔드 데이터(blocks) 중 이 칸의 코드와 일치하는 데이터 찾기
                  const matchedBlock = blocks.find(b => b.slotCode === currentSlotCode);

                  return (
                    <td 
                      key={dayCode} 
                      className={`border border-gray-200 text-center font-bold text-[9px] ${
                        matchedBlock ? 'bg-orange-400 text-white shadow-inner' : 'bg-white'
                      }`}
                    >
                      {matchedBlock ? matchedBlock.label : ""}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}