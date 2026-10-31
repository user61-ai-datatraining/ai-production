import { useState } from 'react';
import { ProcessStep } from '../data/layers';
import { layerColors } from '../data/layers';

interface Props {
  data: ProcessStep[];
}

export default function ProcessLayer({ data }: Props) {
  const [selectedStep, setSelectedStep] = useState<string | null>(null);
  const color = layerColors.process;

  return (
    <div className="space-y-6">
      {/* Process Flow */}
      <div className="relative">
        {/* Connection Line */}
        <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-green-500/20 via-green-500/50 to-green-500/20 hidden lg:block"></div>
        
        {/* Steps */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {data.map((step, index) => (
            <div
              key={step.id}
              className="relative cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedStep(selectedStep === step.id ? null : step.id)}
            >
              {/* Step Number Circle */}
              <div
                className="w-16 h-16 rounded-full mx-auto flex items-center justify-center relative z-10 transition-all duration-300"
                style={{
                  background: selectedStep === step.id ? color.primary : `${color.primary}20`,
                  border: `2px solid ${selectedStep === step.id ? color.primary : color.border}`,
                  boxShadow: selectedStep === step.id ? `0 0 20px ${color.primary}40` : 'none'
                }}
              >
                <span className={`text-lg font-bold ${selectedStep === step.id ? 'text-white' : ''}`} style={{ color: selectedStep !== step.id ? color.primary : undefined }}>
                  {index + 1}
                </span>
              </div>
              
              {/* Step Name */}
              <div className="text-center mt-3">
                <p className={`text-sm font-semibold ${selectedStep === step.id ? 'text-white' : 'text-slate-300'}`}>
                  {step.name}
                </p>
                <p className="text-xs text-slate-500 mt-1">{step.duration}</p>
              </div>

              {/* Automation Bar */}
              <div className="mt-2 px-2">
                <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${step.automation}%`,
                      background: `linear-gradient(90deg, ${color.primary}, ${color.primary}80)`
                    }}
                  ></div>
                </div>
                <p className="text-xs text-slate-500 mt-1 text-center">自动化 {step.automation}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Step Detail */}
      {selectedStep && (
        <div className="glass-effect rounded-xl p-6 animate-slide-in">
          {data.filter(s => s.id === selectedStep).map(step => (
            <div key={step.id}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${color.primary}20` }}>
                  <span className="text-lg font-bold" style={{ color: color.primary }}>{data.indexOf(step) + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{step.name}</h3>
                  <p className="text-sm text-slate-400">{step.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Inputs */}
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">
                    <i className="fa-solid fa-arrow-right-to-bracket mr-1"></i>输入
                  </h4>
                  <ul className="space-y-1">
                    {step.inputs.map((input, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        {input}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Process Info */}
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-2">
                    <i className="fa-solid fa-gear mr-1"></i>执行信息
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-400">负责人</span>
                      <span className="text-slate-200">{step.owner}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">周期</span>
                      <span className="text-slate-200">{step.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">自动化率</span>
                      <span className="text-green-400 font-semibold">{step.automation}%</span>
                    </div>
                  </div>
                </div>

                {/* Outputs */}
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">
                    <i className="fa-solid fa-arrow-right-from-bracket mr-1"></i>输出
                  </h4>
                  <ul className="space-y-1">
                    {step.outputs.map((output, i) => (
                      <li key={i} className="text-sm text-slate-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        {output}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Value Flow Summary */}
      <div className="glass-effect rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">
          <i className="fa-solid fa-route mr-2" style={{ color: color.primary }}></i>
          端到端价值流概览
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">8.5天</div>
            <div className="text-sm text-slate-400 mt-1">平均交付周期</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">79%</div>
            <div className="text-sm text-slate-400 mt-1">平均自动化率</div>
          </div>
          <div className="text-center p-4 bg-slate-800/30 rounded-lg">
            <div className="text-3xl font-bold text-green-400">6</div>
            <div className="text-sm text-slate-400 mt-1">核心流程环节</div>
          </div>
        </div>
      </div>
    </div>
  );
}
