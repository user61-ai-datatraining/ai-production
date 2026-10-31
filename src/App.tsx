import { useState } from 'react';
import { sceneData, processData, dataMetrics, techData, layerColors } from './data/layers';
import SceneLayer from './components/SceneLayer';
import ProcessLayer from './components/ProcessLayer';
import DataLayer from './components/DataLayer';
import TechLayer from './components/TechLayer';
import LayerNav from './components/LayerNav';
import Header from './components/Header';
import FlowDiagram from './components/FlowDiagram';

type LayerType = 'scene' | 'process' | 'data' | 'tech';

export default function App() {
  const [activeLayer, setActiveLayer] = useState<LayerType>('scene');
  const [showFlow, setShowFlow] = useState(false);

  const renderLayer = () => {
    switch (activeLayer) {
      case 'scene':
        return <SceneLayer data={sceneData} />;
      case 'process':
        return <ProcessLayer data={processData} />;
      case 'data':
        return <DataLayer data={dataMetrics} />;
      case 'tech':
        return <TechLayer data={techData} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      
      {/* Layer Navigation */}
      <LayerNav 
        activeLayer={activeLayer} 
        setActiveLayer={setActiveLayer} 
        showFlow={showFlow}
        setShowFlow={setShowFlow}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {showFlow ? (
          <FlowDiagram />
        ) : (
          <div className="animate-fade-in-up">
            {/* Layer Description */}
            <div className="mb-8 glass-effect rounded-2xl p-6">
              <LayerDescription layer={activeLayer} />
            </div>
            
            {/* Layer Content */}
            {renderLayer()}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        <p>机器人工厂数字化经营模拟 · 四层架构体系</p>
        <p className="mt-1">场景层 → 流程层 → 数据层 → 技术层 · 端到端价值流</p>
      </footer>
    </div>
  );
}

function LayerDescription({ layer }: { layer: LayerType }) {
  const descriptions = {
    scene: {
      title: '🎯 场景层 — 客户与员工要完成什么任务？',
      subtitle: '从用户视角出发，识别所有业务场景与核心任务',
      detail: '场景层是数字化经营的起点。它回答"谁在什么情境下需要完成什么任务"。通过梳理客户旅程和员工工作流，明确每个场景的痛点与期望，为后续流程优化和数据驱动提供方向。',
      color: layerColors.scene
    },
    process: {
      title: '🔄 流程层 — 价值如何端到端流动？',
      subtitle: '从订单到交付，描绘价值创造的完整链路',
      detail: '流程层将场景层的需求转化为可执行的业务流程。它关注端到端的价值流动，识别每个环节的输入、输出、责任人和自动化程度，消除断点与浪费，实现流程的精益化与智能化。',
      color: layerColors.process
    },
    data: {
      title: '📊 数据层 — 用什么事实驱动判断？',
      subtitle: '用数据说话，建立事实驱动的决策体系',
      detail: '数据层是数字化经营的核心引擎。它采集、治理、分析全链路数据，将业务事实转化为可量化的指标体系。通过实时数据看板、预测模型和智能预警，让每一个决策都有据可依。',
      color: layerColors.data
    },
    tech: {
      title: '⚙️ 技术层 — 哪些平台与工具提供支撑？',
      subtitle: '构建数字化底座，赋能业务创新',
      detail: '技术层是四层架构的基石。它提供平台、工具和基础设施，支撑上层业务场景的落地。从IoT设备联网到AI智能分析，从云边协同到低代码开发，技术层确保数字化能力的可扩展与可持续。',
      color: layerColors.tech
    }
  };

  const desc = descriptions[layer];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2" style={{ color: desc.color.primary }}>
        {desc.title}
      </h2>
      <p className="text-slate-300 text-lg mb-3">{desc.subtitle}</p>
      <p className="text-slate-400 leading-relaxed">{desc.detail}</p>
    </div>
  );
}
