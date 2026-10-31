import { layerColors } from '../data/layers';

type LayerType = 'scene' | 'process' | 'data' | 'tech';

interface Props {
  activeLayer: LayerType;
  setActiveLayer: (layer: LayerType) => void;
  showFlow: boolean;
  setShowFlow: (show: boolean) => void;
}

const layers: { key: LayerType; label: string; icon: string; question: string }[] = [
  { key: 'scene', label: '场景层', icon: 'fa-solid fa-bullseye', question: '完成什么任务？' },
  { key: 'process', label: '流程层', icon: 'fa-solid fa-diagram-project', question: '价值如何流动？' },
  { key: 'data', label: '数据层', icon: 'fa-solid fa-database', question: '什么驱动判断？' },
  { key: 'tech', label: '技术层', icon: 'fa-solid fa-microchip', question: '什么提供支撑？' },
];

export default function LayerNav({ activeLayer, setActiveLayer, showFlow, setShowFlow }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
      <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
        {/* Layer Tabs */}
        <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-3">
          {layers.map((layer, index) => {
            const color = layerColors[layer.key];
            const isActive = activeLayer === layer.key && !showFlow;
            return (
              <button
                key={layer.key}
                onClick={() => { setActiveLayer(layer.key); setShowFlow(false); }}
                className="layer-card relative rounded-xl p-4 text-left transition-all duration-300"
                style={{
                  background: isActive ? color.bg : 'rgba(30, 41, 59, 0.5)',
                  border: `1px solid ${isActive ? color.border : 'rgba(51, 65, 85, 0.5)'}`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: color.primary }}></div>
                )}
                <div className="flex items-center gap-2 mb-1">
                  <i className={`${layer.icon} text-sm`} style={{ color: isActive ? color.primary : '#94a3b8' }}></i>
                  <span className={`font-semibold text-sm ${isActive ? 'text-white' : 'text-slate-400'}`}>
                    {layer.label}
                  </span>
                </div>
                <p className={`text-xs ${isActive ? 'text-slate-300' : 'text-slate-500'}`}>
                  {layer.question}
                </p>
                {/* Connection arrow */}
                {index < 3 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                    <i className="fa-solid fa-chevron-right text-slate-600 text-xs"></i>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Flow View Toggle */}
        <button
          onClick={() => setShowFlow(!showFlow)}
          className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            showFlow
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/20'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
          }`}
        >
          <i className="fa-solid fa-arrows-left-right mr-2"></i>
          {showFlow ? '返回层级视图' : '查看全链路流程'}
        </button>
      </div>
    </div>
  );
}
