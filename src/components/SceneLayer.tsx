import { SceneItem } from '../data/layers';
import { layerColors } from '../data/layers';

interface Props {
  data: SceneItem[];
}

const roleColors: Record<string, string> = {
  '客户': '#3B82F6',
  '员工': '#10B981',
  '管理层': '#8B5CF6',
  '供应商': '#F59E0B',
};

export default function SceneLayer({ data }: Props) {
  const roles = ['客户', '员工', '管理层', '供应商'];

  return (
    <div className="space-y-8">
      {/* Role Filter Legend */}
      <div className="flex flex-wrap gap-4">
        {roles.map(role => (
          <div key={role} className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full" style={{ background: roleColors[role] }}></span>
            <span className="text-sm text-slate-400">{role}</span>
          </div>
        ))}
      </div>

      {/* Scene Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="layer-card glass-effect rounded-xl p-5 animate-fade-in-up"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: `${roleColors[item.role]}20`, color: roleColors[item.role] }}
              >
                <i className={`${item.icon} text-lg`}></i>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: `${roleColors[item.role]}20`, color: roleColors[item.role] }}
                  >
                    {item.role}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${
                    item.status === 'active' ? 'bg-green-400' :
                    item.status === 'pending' ? 'bg-yellow-400' : 'bg-slate-500'
                  }`}></span>
                </div>
                <h3 className="text-white font-semibold text-base mb-1">{item.task}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-3">{item.description}</p>
                <div className="flex items-center gap-2 text-xs">
                  <i className="fa-solid fa-chart-simple text-slate-500"></i>
                  <span className="text-slate-300 font-medium">{item.kpi}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {roles.map(role => {
          const count = data.filter(d => d.role === role).length;
          return (
            <div key={role} className="glass-effect rounded-xl p-4 text-center">
              <div className="text-2xl font-bold" style={{ color: roleColors[role] }}>{count}</div>
              <div className="text-xs text-slate-400 mt-1">{role}场景</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
