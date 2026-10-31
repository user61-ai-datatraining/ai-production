export interface SceneItem {
  id: string;
  role: '客户' | '员工' | '管理层' | '供应商';
  task: string;
  description: string;
  icon: string;
  kpi: string;
  status: 'active' | 'pending' | 'completed';
}

export interface ProcessStep {
  id: string;
  name: string;
  description: string;
  duration: string;
  owner: string;
  inputs: string[];
  outputs: string[];
  automation: number; // percentage
}

export interface DataMetric {
  id: string;
  name: string;
  value: string;
  unit: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
  category: 'production' | 'quality' | 'delivery' | 'cost';
}

export interface TechComponent {
  id: string;
  name: string;
  type: 'platform' | 'tool' | 'infrastructure' | 'integration';
  description: string;
  layer: string;
  status: 'active' | 'maintenance' | 'planned';
}

export const sceneData: SceneItem[] = [
  {
    id: 's1',
    role: '客户',
    task: '定制化机器人选型与配置',
    description: '客户通过数字化平台根据生产需求选择机器人型号、配置参数，实时查看交付进度',
    icon: 'fa-solid fa-robot',
    kpi: '订单转化率 92%',
    status: 'active'
  },
  {
    id: 's2',
    role: '客户',
    task: '远程监控与运维服务',
    description: '客户通过数字孪生界面实时监控已部署机器人的运行状态，远程诊断故障',
    icon: 'fa-solid fa-desktop',
    kpi: '客户满意度 96%',
    status: 'active'
  },
  {
    id: 's3',
    role: '员工',
    task: '智能排产与工单执行',
    description: '生产员工通过MES系统接收智能排产指令，执行装配、测试、质检等工单任务',
    icon: 'fa-solid fa-clipboard-list',
    kpi: '工单完成率 98%',
    status: 'active'
  },
  {
    id: 's4',
    role: '员工',
    task: 'AR辅助装配与培训',
    description: '一线员工使用AR眼镜获取装配指引，新员工通过虚拟培训快速上岗',
    icon: 'fa-solid fa-vr-cardboard',
    kpi: '培训效率提升 60%',
    status: 'active'
  },
  {
    id: 's5',
    role: '管理层',
    task: '经营驾驶舱决策分析',
    description: '管理层通过BI驾驶舱实时查看产量、质量、成本、交付等关键经营指标',
    icon: 'fa-solid fa-chart-line',
    kpi: '决策响应时间 <2h',
    status: 'active'
  },
  {
    id: 's6',
    role: '管理层',
    task: '供应链风险预警',
    description: '通过数据模型预测供应链中断风险，提前制定备选方案',
    icon: 'fa-solid fa-shield-halved',
    kpi: '风险识别率 85%',
    status: 'pending'
  },
  {
    id: 's7',
    role: '供应商',
    task: '协同设计与来料管理',
    description: '供应商通过协同平台参与联合设计，实时同步来料进度与质量数据',
    icon: 'fa-solid fa-handshake',
    kpi: '来料合格率 99.2%',
    status: 'active'
  },
  {
    id: 's8',
    role: '供应商',
    task: 'VMI库存自动补货',
    description: '基于消耗预测的供应商管理库存，系统自动触发补货订单',
    icon: 'fa-solid fa-boxes-stacked',
    kpi: '库存周转率 12次/年',
    status: 'completed'
  }
];

export const processData: ProcessStep[] = [
  {
    id: 'p1',
    name: '需求感知',
    description: '客户需求自动采集、解析与转化为产品配置',
    duration: '2h',
    owner: '市场部/IT',
    inputs: ['客户询盘', '市场数据', '历史订单'],
    outputs: ['需求规格书', 'BOM初稿'],
    automation: 75
  },
  {
    id: 'p2',
    name: '协同设计',
    description: '基于模块化平台的快速设计与仿真验证',
    duration: '3天',
    owner: '研发部',
    inputs: ['需求规格书', '模块库', '仿真模型'],
    outputs: ['3D模型', 'BOM清单', '工艺路线'],
    automation: 60
  },
  {
    id: 'p3',
    name: '智能排产',
    description: 'APS系统基于约束条件自动生成最优生产计划',
    duration: '0.5h',
    owner: '计划部',
    inputs: ['订单池', '产能数据', '物料库存'],
    outputs: ['生产工单', '物料需求计划'],
    automation: 90
  },
  {
    id: 'p4',
    name: '柔性制造',
    description: '产线自动切换、机器人协同作业、实时质量监控',
    duration: '5天',
    owner: '生产部',
    inputs: ['生产工单', '物料配送', '工艺参数'],
    outputs: ['成品/半成品', '质量数据', '设备状态'],
    automation: 85
  },
  {
    id: 'p5',
    name: '智能检测',
    description: 'AI视觉检测 + 功能测试 + 老化试验全流程质量把控',
    duration: '1天',
    owner: '质量部',
    inputs: ['半成品', '检测标准', '测试程序'],
    outputs: ['质检报告', '合格品', '不良品分析'],
    automation: 95
  },
  {
    id: 'p6',
    name: '交付与服务',
    description: '智能物流调度、安装调试、远程运维全生命周期服务',
    duration: '持续',
    owner: '交付部/售后',
    inputs: ['合格品', '安装方案', '客户现场数据'],
    outputs: ['运行数据', '服务工单', '客户反馈'],
    automation: 70
  }
];

export const dataMetrics: DataMetric[] = [
  { id: 'd1', name: 'OEE设备综合效率', value: '87.3', unit: '%', trend: 'up', change: '+2.1%', category: 'production' },
  { id: 'd2', name: '日产量', value: '142', unit: '台', trend: 'up', change: '+8台', category: 'production' },
  { id: 'd3', name: '一次合格率', value: '98.6', unit: '%', trend: 'up', change: '+0.3%', category: 'quality' },
  { id: 'd4', name: '客户投诉率', value: '0.12', unit: '%', trend: 'down', change: '-0.05%', category: 'quality' },
  { id: 'd5', name: '订单准时交付率', value: '96.8', unit: '%', trend: 'up', change: '+1.2%', category: 'delivery' },
  { id: 'd6', name: '平均交付周期', value: '12.5', unit: '天', trend: 'down', change: '-1.5天', category: 'delivery' },
  { id: 'd7', name: '单台制造成本', value: '¥8.2万', unit: '', trend: 'down', change: '-¥0.3万', category: 'cost' },
  { id: 'd8', name: '能耗效率', value: '92.1', unit: '%', trend: 'up', change: '+3.2%', category: 'cost' },
  { id: 'd9', name: '库存周转天数', value: '18', unit: '天', trend: 'down', change: '-3天', category: 'cost' },
  { id: 'd10', name: '设备故障停机时间', value: '2.3', unit: 'h/月', trend: 'down', change: '-1.2h', category: 'production' },
  { id: 'd11', name: '人均产值', value: '¥45.6万', unit: '/年', trend: 'up', change: '+¥3.2万', category: 'production' },
  { id: 'd12', name: '数字化工序覆盖率', value: '94', unit: '%', trend: 'up', change: '+5%', category: 'quality' },
];

export const techData: TechComponent[] = [
  { id: 't1', name: '工业互联网平台 (IoT)', type: 'platform', description: '设备连接、数据采集、边缘计算，支撑全厂设备联网', layer: '基础设施', status: 'active' },
  { id: 't2', name: 'MES制造执行系统', type: 'platform', description: '工单管理、生产追溯、质量管控、设备管理', layer: '制造运营', status: 'active' },
  { id: 't3', name: 'ERP企业资源计划', type: 'platform', description: '财务、采购、销售、库存一体化管理', layer: '企业管理', status: 'active' },
  { id: 't4', name: 'PLM产品生命周期管理', type: 'platform', description: '产品设计、BOM管理、变更管理、文档协同', layer: '研发设计', status: 'active' },
  { id: 't5', name: 'APS高级排产系统', type: 'tool', description: '基于约束优化的智能排产与调度', layer: '计划调度', status: 'active' },
  { id: 't6', name: 'AI视觉检测系统', type: 'tool', description: '深度学习驱动的缺陷检测与分类', layer: '质量控制', status: 'active' },
  { id: 't7', name: '数字孪生平台', type: 'tool', description: '产线/产品的虚拟映射与仿真优化', layer: '仿真优化', status: 'active' },
  { id: 't8', name: 'BI数据分析平台', type: 'tool', description: '经营指标可视化、预测分析、决策支持', layer: '数据分析', status: 'active' },
  { id: 't9', name: '5G专网', type: 'infrastructure', description: '低延迟高带宽网络，支撑AGV、AR、实时控制', layer: '网络通信', status: 'active' },
  { id: 't10', name: '云边协同架构', type: 'infrastructure', description: '云端训练+边缘推理的AI部署模式', layer: '计算架构', status: 'active' },
  { id: 't11', name: '低代码开发平台', type: 'integration', description: '快速构建业务应用，连接各系统数据', layer: '应用集成', status: 'active' },
  { id: 't12', name: 'RPA流程自动化', type: 'integration', description: '跨系统流程自动执行，减少人工操作', layer: '流程自动化', status: 'planned' },
];

export const layerColors = {
  scene: { primary: '#3B82F6', bg: 'rgba(59, 130, 246, 0.1)', border: 'rgba(59, 130, 246, 0.3)' },
  process: { primary: '#10B981', bg: 'rgba(16, 185, 129, 0.1)', border: 'rgba(16, 185, 129, 0.3)' },
  data: { primary: '#8B5CF6', bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)' },
  tech: { primary: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)', border: 'rgba(245, 158, 11, 0.3)' },
};
