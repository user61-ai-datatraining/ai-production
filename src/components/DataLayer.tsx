import { useState } from 'react';
import { DataMetric } from '../data/layers';
import { layerColors } from '../data/layers';

interface Props {
  data: DataMetric[];
}

const categoryLabels: Record<string, string> = {
  production: '生产效率',
  quality: '质量管理',
  delivery: '交付能力',
  cost: '成本控制',
};

const categoryIcons: Record<string, string> = {
  production: 'fa-solid fa-industry',
  quality: 'fa-solid fa-certificate',
  delivery: 'fa-solid fa-truck-fast',
  cost: 'fa-solid fa-coins',
};

const categoryColors: Record<string, string> = {
  production: '#3B82F6',
  quality: '#10B981',
  delivery: '#8B5CF6',
  cost: '#F59E0B',
};

export default function DataLayer({ data }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const color = layerColors.data;

  const filteredData = selectedCategory === 'all'
    ? data
    : data.filter(d => d.category === selectedCategory);

  const categories = ['all', 'production', 'quality', 'delivery', 'cost'];

  return (
    <div className="space-y-6">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
              selectedCategory === cat
                ? 'text-white shadow-lg'
                : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50'
            }`}
            style={selectedCategory === cat ? {
              background: cat === 'all' ? color.primary : categoryColors[cat],
              boxShadow: `0 4px 15px ${cat === 'all' ? color.primary : categoryColors[cat]}30`
            } : {}}
          >
            {cat === 'all' ? '📊 全部指标' : `${categoryLabels[cat]}`}
          </button>
        ))}
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((metric, index) => (
          <div
            key={metric.id}
            className="layer-card glass-effect rounded-xl p-5 animate-fade-in-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <i className={`${categoryIcons[metric.category]} text-sm`} style={{ color: categoryColors[metric.category] }}></i>
                <span className="text-xs text-slate-500">{categoryLabels[metric.category]}</span>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                metric.trend === 'up' ? 'bg-green-500/10 text-green-400' :
                metric.trend === 'down' ? 'bg-blue-500/10 text-blue-400' :
                'bg-slate-500/10 text-slate-400'
              }`}>
                <i className={`fa-solid fa-arrow-${metric.trend === 'up' ? 'up' : metric.trend === 'down' ? 'down' : 'right'} mr-1`}></i>
                {metric.change}
              </span>
            </div>

            <div className="mb-1">
              <span className="text-2xl font-bold text-white animate-count-up">{metric.value}</span>
              <span className="text-sm text-slate-400 ml-1">{metric.unit}</span>
            </div>
            <p className="text-sm text-slate-400">{metric.name}</p>

            {/* Mini sparkline visualization */}
            <div className="mt-3 flex items-end gap-0.5 h-6">
              {Array.from({ length: 12 }).map((_, i) => {
                const height = 30 + Math.random() * 70;
                return (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-500"
                    style={{
                      height: `${height}%`,
                      background: `${categoryColors[metric.category]}${20 + i * 6}`,
                      animationDelay: `${i * 50}ms`
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Data Architecture Summary */}
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">
          <i className="fa-solid fa-layer-group mr-2" style={{ color: color.primary }}></i>
          数据驱动决策体系
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold" style={{ color: categoryColors.production }}>12</div>
            <div className="text-sm text-slate-400 mt-1">核心KPI指标</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold" style={{ color: categoryColors.quality }}>4</div>
            <div className="text-sm text-slate-400 mt-1">指标维度</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold" style={{ color: categoryColors.delivery }}>实时</div>
            <div className="text-sm text-slate-400 mt-1">数据采集频率</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold" style={{ color: categoryColors.cost }}>AI</div>
            <div className="text-sm text-slate-400 mt-1">预测分析驱动</div>
          </div>
        </div>
      </div>
    </div>
  );
}
