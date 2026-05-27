export default function TimeTable() {
  const hours = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", 
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00"
  ];

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
          {hours.map((time, idx) => (
            <tr key={idx} className="h-[22px] border-b border-gray-200">
              <td className="border border-[#cccccc] bg-[#f9f9f9] text-center font-mono text-[10px] text-gray-600">
                {time}
              </td>
              <td className="border border-gray-200 bg-white"></td>
              <td className="border border-gray-200 bg-white"></td>
              <td className="border border-gray-200 bg-white"></td>
              <td className="border border-gray-200 bg-white"></td>
              <td className="border border-gray-200 bg-white"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}