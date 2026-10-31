export default function Header() {
  return (
    <header className="glass-effect border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <i className="fa-solid fa-robot text-xl text-white"></i>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                机器人工厂数字化经营模拟
              </h1>
              <p className="text-xs text-slate-400 mt-0.5">四层架构体系 · 端到端价值流</p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              系统运行中
            </div>
            <div className="text-sm text-slate-400">
              <i className="fa-solid fa-clock mr-1"></i>
              实时数据
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
