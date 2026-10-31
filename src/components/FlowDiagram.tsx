import { layerColors } from '../data/layers';

export default function FlowDiagram() {
  const layers = [
    {
      key: 'scene',
      label: '场景层',
      subtitle: '任务与角色',
      color: layerColors.scene,
      items: ['定制化选型', '远程运维', '智能排产', 'AR辅助', '经营决策', '风险预警', '协同设计', '自动补货'],
      question: '完成什么任务？'
    },
    {
      key: 'process',
      label: '流程层',
      subtitle: '端到端价值流',
      color: layerColors.process,
      items: ['需求感知', '协同设计', '智能排产', '柔性制造', '智能检测', '交付服务'],
      question: '价值如何流动？'
    },
    {
      key: 'data',
      label: '数据层',
      subtitle: '事实驱动判断',
      color: layerColors.data,
      items: ['OEE效率', '合格率', '交付率', '成本分析', '预测模型', '实时预警'],
      question: '什么驱动判断？'
    },
    {
      key: 'tech',
      label: '技术层',
      subtitle: '平台与工具',
      color: layerColors.tech,
      items: ['IoT平台', 'MES系统', 'AI引擎', '数字孪生', '5G网络', '云边协同'],
      question: '什么提供支撑？'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">四层架构全链路视图</h2>
        <p className="text-slate-400">从场景到技术，展示数字化经营的完整架构关系</p>
      </div>

      {/* Layer Stack */}
      <div className="space-y-4">
        {layers.map((layer, layerIndex) => (
          <div key={layer.key} className="animate-fade-in-up" style={{ animationDelay: `${layerIndex * 150}ms` }}>
            {/* Layer Header */}
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: `${layer.color.primary}20`, border: `1px solid ${layer.color.border}` }}
              >
                <span className="text-sm font-bold" style={{ color: layer.color.primary }}>{layerIndex + 1}</span>
              </div>
              <div>
                <h3 className="font-bold text-white">{layer.label}</h3>
                <p className="text-xs text-slate-500">{layer.question}</p>
              </div>
            </div>

            {/* Layer Content */}
            <div
              className="rounded-xl p-5 border"
              style={{ background: layer.color.bg, borderColor: layer.color.border }}
            >
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item, itemIndex) => (
                  <div
                    key={item}
                    className="px-3 py-2 rounded-lg text-sm font-medium animate-slide-in"
                    style={{
                      background: `${layer.color.primary}15`,
                      color: layer.color.primary,
                      border: `1px solid ${layer.color.primary}30`,
                      animationDelay: `${itemIndex * 50}ms`
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Connection Arrow */}
            {layerIndex < 3 && (
              <div className="flex justify-center py-2">
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-4 bg-gradient-to-b from-slate-600 to-slate-700"></div>
                  <i className="fa-solid fa-chevron-down text-slate-500 text-xs"></i>
                  <div className="text-xs text-slate-600 mt-1">
                    {layerIndex === 0 && '场景驱动流程'}
                    {layerIndex === 1 && '流程产生数据'}
                    {layerIndex === 2 && '数据需要技术'}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Relationship Description */}
      <div className="glass-effect rounded-xl p-6 mt-8">
        <h3 className="text-lg font-bold text-white mb-4">
          <i className="fa-solid fa-link mr-2 text-blue-400"></i>
          四层关系说明
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-blue-400 text-sm">→</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-blue-300">场景 → 流程</p>
              <p className="text-xs text-slate-400 mt-1">场景层的任务需求定义了流程层需要编排的业务活动。每个场景对应一个或多个端到端流程。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-green-400 text-sm">→</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-300">流程 → 数据</p>
              <p className="text-xs text-slate-400 mt-1">流程执行过程中产生大量数据。数据层采集、治理这些数据，形成驱动决策的事实基础。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-purple-400 text-sm">→</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-300">数据 → 技术</p>
              <p className="text-xs text-slate-400 mt-1">数据的采集、存储、分析需要技术层提供平台与工具支撑。技术能力决定数据价值释放的上限。</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <span className="text-amber-400 text-sm">↺</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-amber-300">技术 → 场景（闭环）</p>
              <p className="text-xs text-slate-400 mt-1">技术赋能创造新的场景可能性。AI、数字孪生等技术催生智能化新场景，形成持续改进的闭环。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
