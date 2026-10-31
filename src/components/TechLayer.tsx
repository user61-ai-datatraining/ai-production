import { useState } from 'react';
import { TechComponent } from '../data/layers';
import { layerColors } from '../data/layers';

interface Props {
  data: TechComponent[];
}

const typeLabels: Record<string, string> = {
  platform: '平台',
  tool: '工具',
  infrastructure: '基础设施',
  integration: '集成',
};

const typeIcons: Record<string, string> = {
  platform: 'fa-solid fa-server',
  tool: 'fa-solid fa-wrench',
  infrastructure: 'fa-solid fa-network-wired',
  integration: 'fa-solid fa-plug',
};

const typeColors: Record<string, string> = {
  platform: '#3B82F6',
  tool: '#10B981',
  infrastructure: '#8B5CF6',
  integration: '#F59E0B',
};

export default function TechLayer({ data }: Props) {
  const [selectedType, setSelectedType] = useState<string>('all');
  const color = layerColors.tech;

  const filteredData = selectedType === 'all'
    ? data
    : data.filter(d => d.type === selectedType);

  const types = ['all', 'platform', 'tool', 'infrastructure', 'integration'];

  return (
    <div className="space-y-6">
      {/* Type Filter */}
      <div className="flex flex-wrap gap-2">
        {types.map(type => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedType === type
                ? 'text-white shadow-lg'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
            }`}
            style={selectedType === type ? {
              background: type === 'all' ? color.primary : typeColors[type],
              boxShadow: `0 4px 15px ${type === 'all' ? color.primary : typeColors[type]}30`
            } : {}}
          >
            {type === 'all' ? '⚙️ 全部组件' : typeLabels[type]}
          </button>
        ))}
      </div>

      {/* Tech Architecture Visualization */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <div
            key={item.id}
            className="layer-card glass-effect rounded-xl p-5 animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${typeColors[item.type]}20` }}
              >
                <i className={`${typeIcons[item.type]} text-sm`} style={{ color: typeColors[item.type] }}></i>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                  <span className={`w-2 h-2 rounded-full ${
                    item.status === 'active' ? 'bg-green-400' :
                    item.status === 'maintenance' ? 'bg-yellow-400' : 'bg-blue-400'
                  }`}></span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-2">{item.description}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ background: `${typeColors[item.type]}15`, color: typeColors[item.type] }}>
                    {typeLabels[item.type]}
                  </span>
                  <span className="text-xs text-slate-500">
                    <i className="fa-solid fa-layer-group mr-1"></i>
                    {item.layer}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Stack */}
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">
          <i className="fa-solid fa-cubes-stacked mr-2" style={{ color: color.primary }}></i>
          技术架构分层
        </h3>
        <div className="space-y-3">
          {/* Application Layer */}
          <div className="rounded-lg p-4 border border-blue-500/30 bg-blue-500/5">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-display text-blue-400"></i>
              <span className="text-sm font-semibold text-blue-300">应用层</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['BI驾驶舱', 'MES看板', 'PLM协同', '移动端APP'].map(app => (
                <span key={app} className="text-xs px-2 py-1 rounded bg-blue-500/10 text-blue-300">{app}</span>
              ))}
            </div>
          </div>

          {/* Platform Layer */}
          <div className="rounded-lg p-4 border border-green-500/30 bg-green-500/5">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-server text-green-400"></i>
              <span className="text-sm font-semibold text-green-300">平台层</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['IoT平台', 'AI引擎', '数字孪生', '低代码平台', 'RPA'].map(app => (
                <span key={app} className="text-xs px-2 py-1 rounded bg-green-500/10 text-green-300">{app}</span>
              ))}
            </div>
          </div>

          {/* Data Layer */}
          <div className="rounded-lg p-4 border border-purple-500/30 bg-purple-500/5">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-database text-purple-400"></i>
              <span className="text-sm font-semibold text-purple-300">数据层</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['数据湖', '时序数据库', '数据治理', '主数据管理', 'API网关'].map(app => (
                <span key={app} className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-300">{app}</span>
              ))}
            </div>
          </div>

          {/* Infrastructure Layer */}
          <div className="rounded-lg p-4 border border-amber-500/30 bg-amber-500/5">
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-network-wired text-amber-400"></i>
              <span className="text-sm font-semibold text-amber-300">基础设施层</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {['5G专网', '工业以太网', '边缘计算', '混合云', '安全体系'].map(app => (
                <span key={app} className="text-xs px-2 py-1 rounded bg-amber-500/10 text-amber-300">{app}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
