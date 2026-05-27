export default function Sidebar() {
  return (
    <div className="text-[11px] text-[#333333] font-serif bg-white p-1 select-none">
 
      {/* 트리 구조 시작 */}
      <div className="space-y-0.5">
        
        {/* GIST College */}
        <div className="flex items-center gap-1.5 cursor-pointer">
          <span className="w-2.5 h-2.5 flex items-center justify-center border border-gray-400 bg-white text-[10px] leading-none text-gray-600 shrink-0 font-mono">
            -
          </span>
          <span className="font-bold text-[#000000]">GIST College</span>
        </div>

        {/* 1단계 하위 (선으로 연결) */}
        <div className="ml-[5px] pl-[12px] border-l border-dotted border-gray-400 space-y-0.5">
          
          {/* School/Department (Bold) */}
          <div className="flex items-center gap-1.5 cursor-pointer py-0.5">
            <span className="w-2.5 h-2.5 flex items-center justify-center border border-gray-400 bg-white text-[10px] leading-none text-gray-600 shrink-0 font-mono">
              -
            </span>
            <span className="font-bold text-[#000000]">School/Department</span>
          </div>

          {/* 2단계 하위 */}
          <div className="ml-[5px] pl-[12px] border-l border-dotted border-gray-400 space-y-0.5">
            <div className="flex items-center gap-1.5 cursor-pointer py-0.5">
              <span className="w-2.5 h-2.5 flex items-center justify-center border border-gray-400 bg-white text-[10px] leading-none text-gray-600 shrink-0 font-mono">
                -
              </span>
              <span className="font-bold text-[#000000]">Division/Concentration</span>
            </div>


            <div className="ml-[5px] pl-[12px] border-l border-dotted border-gray-400 space-y-0.5 mt-0.5">
              
              <div className="flex items-center gap-1.5 bg-[#fff8cc] border border-[#f0e3a6] px-1 py-0.5 cursor-pointer">
                <span className="w-2.5 h-2.5 flex items-center justify-center border border-gray-400 bg-white text-[10px] leading-none text-gray-400 shrink-0 font-mono">
                  +
                </span>
                <span className="text-[#000000]">Division of Liberal Arts and Sciences</span>
              </div>


              {[
                "GIST College (Common)",
                "Mathematics Minor",
                "Energy Minor",
                "Biomedical Science and Engineering",
                "Culture Technology Minor",
                "Intelligent Robotics Minor",
                "AI Convergence Minor",
                "Electrical Engineering/Computer Sci",
                "Materials Science/Engineering",
                "Mechanical Engineering"
              ].map((item) => (
                <div key={item} className="flex items-center gap-1.5 py-0.5 cursor-pointer hover:bg-gray-50 px-1">
                  <span className="w-2.5 h-2.5 flex items-center justify-center border border-gray-400 bg-white text-[10px] leading-none text-gray-400 shrink-0 font-mono">
                    +
                  </span>
                  <span className="text-[#333333]">{item}</span>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}