export type Locale = 'zh' | 'en'
export type ProductKey = 'dataAcquisition' | 'openInteraction'

export interface SpecGroup {
  label: string
  span: number
}

export interface SpecColumn {
  name: string
  image: string
}

export interface SpecRow {
  label: string
  values?: string[]
  merged?: string
  accent?: boolean
}

export interface SpecTable {
  caption: string
  modelLabel: string
  imageLabel: string
  groups?: SpecGroup[]
  columns: SpecColumn[]
  rows: SpecRow[]
}

export interface HomeSeries {
  id: 'data-acquisition' | 'open-interaction'
  index: string
  title: string
  description: string
  features: string[]
  applicationTitle: string
  applications: string[]
  ctas: string[]
  href: string
  scene: string
}

export interface HomeContent {
  meta: { title: string; description: string }
  navigation: Array<{ label: string; hash: string }>
  languageLabel: string
  languageShort: string
  hero: {
    eyebrow: string
    title: string | [string, string]
    description: string
    stats: Array<{ value: string; label: string }>
  }
  series: HomeSeries[]
  advantages: {
    index: string
    title: string
    items: Array<{ title: string; bullets: string[] }>
    proof: string
  }
  contact: {
    index: string
    title: string
    businessLabel: string
    addressLabel: string
    wechatLabel: string
    emails: string[]
    phones: string[]
    address: string
    wechat: string
    copyright: string
  }
}

export interface ProductContent {
  meta: { title: string; description: string }
  pageTitle: string
  familyTitle: string
  indexLabel: string
  overviewLabel: string
  tableLabel: string
  docsLabel: string
  backLabel: string
  languageLabel: string
  languageShort: string
  lead: string
  features: string[]
  secondaryTitle: string
  secondaryItems: string[]
  table: SpecTable
  interfaceDocsTitle: string
  interfaceDocsNote: string
  interfaceDocsLink: string
}

export const paths: Record<Locale, Record<ProductKey, string>> = {
  en: {
    dataAcquisition: '/data-acquisition-band/',
    openInteraction: '/open-interaction-band/',
  },
  zh: {
    dataAcquisition: '/zh/data-acquisition-band/',
    openInteraction: '/zh/open-interaction-band/',
  },
}

export const homePaths: Record<Locale, string> = {
  en: '/en/',
  zh: '/',
}

const homeSeriesZh: HomeSeries[] = [
  {
    id: 'data-acquisition',
    index: '01 / DATA ACQUISITION',
    title: '数采腕带系列',
    description: '高通道、高采样率、低噪声、柔性设计——专为大规模数据采集与模型训练打造',
    features: [
      '18通道 & 24bit 高分辨率 & 2kHz 采样率',
      '高精度 6 轴 IMU 运动感知',
      '全柔性设计表带，宽度仅 25mm、厚度仅 3mm，圆润电极',
      '开源生态，开放第三方数据接口与 SDK',
      '标配 Windows 波形绘制软件：支持 18 通道 EMG 与 6 通道 IMU 实时波形绘制、数据保存（MAT/CSV 等格式）',
    ],
    applicationTitle: '应用场景',
    applications: ['具身智能与遥操作', '手部发力意图识别', '手势识别', '康复算法研发'],
    ctas: ['参数选型', '接口文档', '购买'],
    href: paths.zh.dataAcquisition,
    scene: 'data-acquisition',
  },
  {
    id: 'open-interaction',
    index: '02 / OPEN INTERACTION',
    title: '开源交互腕带系列',
    description: '基于自研神经传感芯片与高效边缘端计算的手部意图识别——让自然手势交互触手可及',
    features: [
      '6通道超高密度 EMG 采集 + 高精度 6 轴 IMU 融合',
      '延迟低至毫秒级，轻松实现捏合、指尖微动等自然手势识别',
      '免手势校准与训练，全人群泛化',
      '全柔性设计表带，宽度仅 25mm、厚度仅 3mm，圆润电极',
      '低功耗蓝牙（BLE）HID 通用无线协议，无缝接入手机、电脑、智能终端、智能眼镜、虚拟现实设备',
      '兼容 Windows、安卓、iOS 等主流平台',
      '开源生态，开放第三方数据接口与 SDK，输出力度与姿态数据，可用于二次开发与个性化映射',
    ],
    applicationTitle: '交互方向',
    applications: ['鼠标映射', '触屏映射', '键盘映射', '原始数据开发'],
    ctas: ['参数选型', '接口文档', '购买'],
    href: paths.zh.openInteraction,
    scene: 'open-interaction',
  },
]

const homeSeriesEn: HomeSeries[] = [
  {
    id: 'data-acquisition',
    index: '01 / DATA ACQUISITION',
    title: 'Data Acquisition Bands',
    description: 'High channel count, high sampling rate, low noise and flexible construction—built for dataset-scale capture and model training.',
    features: [
      '18 channels, 24-bit resolution and sampling rates up to 2 kHz',
      'High-precision 6-axis IMU motion sensing',
      'Fully flexible 25 mm-wide, 3 mm-thick strap with rounded electrodes',
      'Open ecosystem with third-party data interfaces and SDK access',
      'Windows waveform software for live 18-channel EMG and 6-axis IMU plotting, with MAT/CSV export',
    ],
    applicationTitle: 'Applications',
    applications: ['Embodied AI and teleoperation', 'Hand-force intent recognition', 'Gesture recognition', 'Rehabilitation algorithms'],
    ctas: ['Specifications', 'API Documentation', 'Purchase'],
    href: paths.en.dataAcquisition,
    scene: 'data-acquisition',
  },
  {
    id: 'open-interaction',
    index: '02 / OPEN INTERACTION',
    title: 'Open Interaction Bands',
    description: 'Hand-intent recognition powered by our neural-sensing silicon and efficient edge computing—making natural gesture interaction immediately accessible.',
    features: [
      '6-channel high-density EMG capture fused with a high-precision 6-axis IMU',
      'Millisecond-level latency for pinch and fingertip micro-motion recognition',
      'No gesture calibration or training, with population-wide generalization',
      'Fully flexible 25 mm-wide, 3 mm-thick strap with rounded electrodes',
      'Low-power Bluetooth HID for phones, computers, smart terminals, smart glasses and VR devices',
      'Compatible with Windows, Android and iOS',
      'Open data interfaces and SDKs for force, pose, secondary development and custom mappings',
    ],
    applicationTitle: 'Interaction Modes',
    applications: ['Mouse mapping', 'Touch mapping', 'Keyboard mapping', 'Raw-data development'],
    ctas: ['Specifications', 'API Documentation', 'Purchase'],
    href: paths.en.openInteraction,
    scene: 'open-interaction',
  },
]

export const homeContent: Record<Locale, HomeContent> = {
  zh: {
    meta: {
      title: '唯理 Waveletech｜肌电神经腕带',
      description: '唯理专业级肌电神经腕带产品系列，为数据采集、智能交互与康复算法提供高质量 EMG 与 IMU 数据。',
    },
    navigation: [
      { label: '数采腕带', hash: '#data-acquisition' },
      { label: '交互腕带', hash: '#open-interaction' },
      { label: '核心优势', hash: '#advantages' },
      { label: '联系我们', hash: '#contact' },
    ],
    languageLabel: 'Switch to English',
    languageShort: 'EN',
    hero: {
      eyebrow: 'WAVELETECH / NEURAL INTERFACE',
      title: ['让手部每一个动作意图，', '都成为可计算的数据'],
      description: '唯理新一代专业级肌电神经腕带产品系列，以多通道高质量肌电与神经信号采集为基础，结合 IMU 运动感知、开放式数据接口，帮助研究人员更加高效地获取真实、连续、可分析的肌电数据。无论是具身智能遥操作与数据训练、手功能康复算法研发，还是下一代人机交互，唯理腕带产品都能为您提供稳定、精准、高效的硬核支撑。',
      stats: [
        { value: '60+', label: '大学及研究机构' },
        { value: '100+', label: '企业' },
      ],
    },
    series: homeSeriesZh,
    advantages: {
      index: '03 / ADVANTAGES',
      title: '核心优势',
      items: [
        {
          title: '垂直一体化的底层技术能力',
          bullets: ['拥有自研肌电传感芯片。', '从底层芯片、电路设计、产品设计到算法，拥有极高的技术一致性保障。'],
        },
        {
          title: '舒适性与高性能的极致统一',
          bullets: ['全柔性表带结构设计，圆润贴合电极，无需打磨皮肤或使用大量导电膏即可获得高信噪比信号。', '针对微弱肌电信号（μV 级别）特别优化，内置高阶硬件滤波器，抑制工频干扰与人体运动伪影。'],
        },
        {
          title: '完全开放的开源生态',
          bullets: ['拒绝“黑盒”，提供原始数据导出、全面的 SDK 接口以及丰富的示例代码（Python / MATLAB / C++），大幅缩短二次开发与科研周期。'],
        },
        {
          title: '他们都在用唯理肌电腕带产品',
          bullets: [],
        },
      ],
      proof: '50+ 顶尖高校及科研机构、100+ 企业',
    },
    contact: {
      index: '04 / CONTACT',
      title: '联系我们',
      businessLabel: '商务合作',
      addressLabel: '公司地址',
      wechatLabel: '微信公众号',
      emails: ['wuzhifeng@waveletech.com', 'wangyu1@waveletech.com'],
      phones: ['13121989350', '15650783629'],
      address: '北京市海淀区学研大厦B座104 / 苏州吴江区科技创业园1号楼4层 / 深圳高新南七道19号',
      wechat: 'Waveletech唯理',
      copyright: 'Copyright © 2019-2025 苏州唯理创新科技有限公司 All rights',
    },
  },
  en: {
    meta: {
      title: 'Waveletech | EMG Neural Bands',
      description: 'Professional EMG neural bands for data acquisition, intelligent interaction and rehabilitation research.',
    },
    navigation: [
      { label: 'Data Bands', hash: '#data-acquisition' },
      { label: 'Interaction Bands', hash: '#open-interaction' },
      { label: 'Advantages', hash: '#advantages' },
      { label: 'Contact', hash: '#contact' },
    ],
    languageLabel: '切换为中文',
    languageShort: '中文',
    hero: {
      eyebrow: 'WAVELETECH / NEURAL INTERFACE',
      title: 'Make every hand movement intent computable.',
      description: 'Waveletech’s new generation of professional EMG neural bands combines high-quality multichannel biosignal acquisition, IMU motion sensing and open data interfaces. Researchers can capture continuous, authentic and analysis-ready muscle data more efficiently—for embodied-AI teleoperation and training, hand-function rehabilitation algorithms, and the next generation of human–computer interaction.',
      stats: [
        { value: '60+', label: 'universities and research institutes' },
        { value: '100+', label: 'enterprise users' },
      ],
    },
    series: homeSeriesEn,
    advantages: {
      index: '03 / ADVANTAGES',
      title: 'Core Advantages',
      items: [
        {
          title: 'Vertically integrated core technology',
          bullets: ['Proprietary EMG sensing silicon.', 'A consistent technology stack spanning silicon, circuit design, product engineering and algorithms.'],
        },
        {
          title: 'Comfort and performance without compromise',
          bullets: ['A fully flexible strap and rounded conformal electrodes deliver high-SNR signals without skin abrasion or excessive conductive gel.', 'The analog chain is optimized for microvolt-level EMG, with advanced hardware filtering for mains interference and motion artifacts.'],
        },
        {
          title: 'A completely open development ecosystem',
          bullets: ['No black box: raw-data export, comprehensive SDKs and examples for Python, MATLAB and C++ shorten research and secondary-development cycles.'],
        },
        {
          title: 'Trusted by researchers and product teams',
          bullets: [],
        },
      ],
      proof: '50+ leading universities and research institutes · 100+ enterprises',
    },
    contact: {
      index: '04 / CONTACT',
      title: 'Contact',
      businessLabel: 'Business enquiries',
      addressLabel: 'Offices',
      wechatLabel: 'WeChat official account',
      emails: ['wuzhifeng@waveletech.com', 'wangyu1@waveletech.com'],
      phones: ['13121989350', '15650783629'],
      address: 'Room 104, Block B, Xueyan Building, Haidian, Beijing / Building 1, Science & Technology Innovation Park, Wujiang, Suzhou / No. 19, Gaoxin South 7th Road, Shenzhen',
      wechat: 'Waveletech唯理',
      copyright: 'Copyright © 2019-2025 Suzhou Weili Innovation Technology Co., Ltd. All rights',
    },
  },
}

const dataImages = [
  '/images/research-band.png',
  '/images/research-band.png',
  '/images/embodied-6-band.png',
  '/images/embodied-6-band.png',
  '/images/embodied-18-band.png',
  '/images/embodied-18-band.png',
]

const dataTableZh: SpecTable = {
  caption: '唯理数据采集肌电腕带选型表',
  modelLabel: '产品型号',
  imageLabel: '产品图',
  groups: [
    { label: '第一代肌电腕带 · 唯理科技', span: 2 },
    { label: '第二代肌电腕带 · 唯理科技', span: 4 },
  ],
  columns: [
    { name: '8通道蓝牙款', image: dataImages[0] },
    { name: '8通道2k有线版', image: dataImages[1] },
    { name: '6通道蓝牙款', image: dataImages[2] },
    { name: '6通道有线版', image: dataImages[3] },
    { name: '12通道蓝牙款', image: dataImages[4] },
    { name: '18通道2k有线版', image: dataImages[5] },
  ],
  rows: [
    { label: '上市时间', values: ['2025年7月', '2025年12月', '2026年7月', '2026年7月', '2026年7月', '2026年7月'] },
    { label: '主要升级', values: ['', '', '1. 相同采样速率下，信号带宽扩展一倍\n2. 更优化的结构和外观设计，12和18通道实现腕带电极的更均匀排布\n3. 12和18通道内置肌电滤波器', '同左', '同左', '同左'], accent: true },
    { label: '数据传输方式', values: ['蓝牙 BLE\n原始数据透传', '有线 Type-C\n原始数据透传', '蓝牙 BLE\n原始数据透传', '有线 Type-C\n原始数据透传', '无线\n原始数据传输或滤波后透传，内置肌电滤波器', '有线 Type-C\n原始数据传输或滤波后透传，内置肌电滤波器'] },
    { label: '肌电通道', values: ['8通道', '8通道', '6通道', '6通道', '12通道', '18通道'] },
    { label: '肌电数据', values: ['采样率 250sps\n-3dB 带宽 0–63Hz\n数据位宽 24bit', '采样率 2000sps\n信号 -3dB 带宽 0–500Hz\n数据位宽 24bit', '采样率 2000sps\n-3dB 带宽 0–1000Hz\n数据位宽 24bit', '采样率 2000sps\n-3dB 带宽 0–1000Hz\n数据位宽 24bit', '采样率 2000sps\n-3dB 带宽 0–1000Hz\n数据位宽 24bit', '采样率 2000sps\n-3dB 带宽 0–1000Hz\n数据位宽 24bit'] },
    { label: '陀螺仪', values: ['6轴陀螺仪，高精度 IMU\n采样率 104Hz', '6轴陀螺仪，高精度 IMU\n采样率 208Hz', '6轴陀螺仪，高精度 IMU\n采样率 208Hz', '6轴陀螺仪，高精度 IMU\n采样率 208Hz', '6轴陀螺仪，高精度 IMU\n采样率 208Hz', '6轴陀螺仪，高精度 IMU\n采样率 208Hz'] },
    { label: '配套软件', values: ['波形绘制 + 手势训练软件\n需另付费 499', '波形绘制 + 手势训练软件\n需另付费 499', '标配波形绘制软件', '标配波形绘制软件', '标配波形绘制软件', '标配波形绘制软件'] },
  ],
}

const dataTableEn: SpecTable = {
  caption: 'Waveletech data-acquisition EMG band selection table',
  modelLabel: 'Product model',
  imageLabel: 'Product image',
  groups: [
    { label: 'First-generation EMG bands · Waveletech', span: 2 },
    { label: 'Second-generation EMG bands · Waveletech', span: 4 },
  ],
  columns: [
    { name: '8-channel Bluetooth', image: dataImages[0] },
    { name: '8-channel 2k wired', image: dataImages[1] },
    { name: '6-channel Bluetooth', image: dataImages[2] },
    { name: '6-channel wired', image: dataImages[3] },
    { name: '12-channel Bluetooth', image: dataImages[4] },
    { name: '18-channel 2k wired', image: dataImages[5] },
  ],
  rows: [
    { label: 'Availability', values: ['Jul 2025', 'Dec 2025', 'Jul 2026', 'Jul 2026', 'Jul 2026', 'Jul 2026'] },
    { label: 'Primary upgrades', values: ['', '', '1. Doubled signal bandwidth at the same sample rate\n2. Improved mechanical and industrial design, with more even electrode spacing on 12- and 18-channel models\n3. Integrated EMG filters on 12- and 18-channel models', 'Same as left', 'Same as left', 'Same as left'], accent: true },
    { label: 'Transport', values: ['Bluetooth BLE\nRaw-data passthrough', 'Wired Type-C\nRaw-data passthrough', 'Bluetooth BLE\nRaw-data passthrough', 'Wired Type-C\nRaw-data passthrough', 'Wireless\nRaw or filtered passthrough with integrated EMG filter', 'Wired Type-C\nRaw or filtered passthrough with integrated EMG filter'] },
    { label: 'EMG channels', values: ['8 channels', '8 channels', '6 channels', '6 channels', '12 channels', '18 channels'] },
    { label: 'EMG data', values: ['250 sps\n−3 dB bandwidth 0–63 Hz\n24-bit data', '2000 sps\n−3 dB bandwidth 0–500 Hz\n24-bit data', '2000 sps\n−3 dB bandwidth 0–1000 Hz\n24-bit data', '2000 sps\n−3 dB bandwidth 0–1000 Hz\n24-bit data', '2000 sps\n−3 dB bandwidth 0–1000 Hz\n24-bit data', '2000 sps\n−3 dB bandwidth 0–1000 Hz\n24-bit data'] },
    { label: 'IMU', values: ['6-axis high-precision IMU\n104 Hz', '6-axis high-precision IMU\n208 Hz', '6-axis high-precision IMU\n208 Hz', '6-axis high-precision IMU\n208 Hz', '6-axis high-precision IMU\n208 Hz', '6-axis high-precision IMU\n208 Hz'] },
    { label: 'Companion software', values: ['Waveform + gesture-training software\nAdditional 499', 'Waveform + gesture-training software\nAdditional 499', 'Waveform software included', 'Waveform software included', 'Waveform software included', 'Waveform software included'] },
  ],
}

const interactionImage = '/images/open-interaction-band.png'

const interactionTableZh: SpecTable = {
  caption: '唯理开源神经交互腕带选型表',
  modelLabel: '产品型号',
  imageLabel: '产品图',
  columns: [
    { name: '开源交互腕带-M1 v0.8', image: interactionImage },
    { name: '开源交互腕带-T1 v0.8', image: interactionImage },
    { name: '开源交互腕带-K1 v0.8', image: interactionImage },
    { name: '开源交互腕带-D1 v0.8', image: interactionImage },
  ],
  rows: [
    { label: '产品描述', values: ['一款具备端侧手势识别能力的肌电神经腕带，无需手势训练和校准，佩戴后即可使用。识别到的手势结果通过蓝牙 HID 协议发送。', '一款具备端侧手势识别能力的肌电神经腕带，无需手势训练和校准，佩戴后即可使用。识别到的手势结果通过蓝牙 HID 协议发送。', '一款具备端侧手势识别能力的肌电神经腕带，无需手势训练和校准，佩戴后即可使用。识别到的手势结果通过蓝牙 HID 协议发送。', '一款数据透传的肌电神经腕带，可以通过蓝牙传输肌电原始数据，用于手势数据采集和手势识别训练。'] },
    { label: '硬件参数', values: ['6通道 EMG 肌电\n6轴 IMU', '6通道 EMG 肌电\n6轴 IMU', '6通道 EMG 肌电\n6轴 IMU', '6通道 EMG 肌电\n6轴 IMU'] },
    { label: '功能定义', values: ['映射为鼠标模式\n具备端侧手势计算功能；基础手势包含两指尖单击、双击、指尖捏住与捏住拖动', '映射为触屏模式\n具备端侧手势计算功能；基础手势包含两指尖点击、双击与指尖捏住拖动', '映射为键盘模式\n具备端侧手势计算功能；支持指尖单击、双击、捏住拖动及关节触发', '数据透传模式\n不具备端侧计算能力'], accent: true },
    { label: '灵敏度', values: ['5档调节', '5档调节', '5档调节', '—'] },
    { label: '选型比较', merged: 'M1 和 T1 手势少，但响应快、灵敏度高，具有光标，熟练后交互体验接近鼠标和触屏；M1 更贴近鼠标，适合 Windows，T1 更贴近触屏，适合 iOS 与安卓。\nK1 手势多于 M1、特异性更高，但响应速度较低，使用感受接近键盘，适合简单页面功能映射。\nD1 不具备端侧计算，仅做数据透传，适合有开发能力的客户在 App 端自行开发手势识别模型。', accent: true },
    { label: '数据传输方式', values: ['BLE 蓝牙无线传输\nHID 协议', 'BLE 蓝牙无线传输\nHID 协议', 'BLE 蓝牙无线传输\nHID 协议', 'BLE 蓝牙无线传输\n自定义协议'] },
    { label: '数据传输内容', values: ['鼠标模式对应的 HID 包；包含姿态及力度特征的自定义包', '触屏模式对应的 HID 包；包含姿态及力度特征的自定义包', '键盘模式对应的 HID 包；包含姿态及力度特征的自定义包', '2kHz 采样率肌电数据；6轴陀螺仪数据'] },
    { label: '蓝牙可连接的目标设备类型', values: ['Windows 系统硬件', '手机、平板等 iOS、安卓系统硬件', '支持蓝牙 HID 协议的智能硬件，如手机、平板、智能眼镜；兼容 iOS、安卓、Windows', '支持自定义数据协议的手机、平板、智能眼镜等；兼容 iOS、安卓、Windows'] },
    { label: '肌电采集', values: ['采用唯理自研 Galvani 肌电神经传感和计算芯片', '采用唯理自研 Galvani 肌电神经传感和计算芯片', '采用唯理自研 Galvani 肌电神经传感和计算芯片', '采用唯理自研 Galvani 肌电神经传感和计算芯片'] },
  ],
}

const interactionTableEn: SpecTable = {
  caption: 'Waveletech open neural-interaction band selection table',
  modelLabel: 'Product model',
  imageLabel: 'Product image',
  columns: [
    { name: 'Open Interaction Band M1 v0.8', image: interactionImage },
    { name: 'Open Interaction Band T1 v0.8', image: interactionImage },
    { name: 'Open Interaction Band K1 v0.8', image: interactionImage },
    { name: 'Open Interaction Band D1 v0.8', image: interactionImage },
  ],
  rows: [
    { label: 'Description', values: ['An EMG neural band with on-device gesture recognition. It requires no gesture training or calibration and works immediately after fitting. Recognized gestures are transmitted through Bluetooth HID.', 'An EMG neural band with on-device gesture recognition. It requires no gesture training or calibration and works immediately after fitting. Recognized gestures are transmitted through Bluetooth HID.', 'An EMG neural band with on-device gesture recognition. It requires no gesture training or calibration and works immediately after fitting. Recognized gestures are transmitted through Bluetooth HID.', 'A raw-data EMG neural band that streams original muscle signals over Bluetooth for gesture-data collection and model training.'] },
    { label: 'Hardware', values: ['6-channel EMG\n6-axis IMU', '6-channel EMG\n6-axis IMU', '6-channel EMG\n6-axis IMU', '6-channel EMG\n6-axis IMU'] },
    { label: 'Function', values: ['Mouse mapping\nOn-device gesture compute with fingertip click, double-click, pinch and pinch-drag primitives', 'Touch mapping\nOn-device gesture compute with fingertip tap, double-tap and pinch-drag primitives', 'Keyboard mapping\nOn-device gesture compute with click, double-click, pinch-drag and joint-trigger primitives', 'Data passthrough\nNo on-device gesture compute'], accent: true },
    { label: 'Sensitivity', values: ['5 levels', '5 levels', '5 levels', '—'] },
    { label: 'Selection guide', merged: 'M1 and T1 use fewer gestures but respond quickly and provide high sensitivity with cursor control. M1 feels closer to a mouse and suits Windows; T1 feels closer to touch and suits iOS and Android.\nK1 provides more, more distinctive gestures than M1, with a lower response speed and keyboard-like mapping for simple page functions.\nD1 performs no edge inference. It is a passthrough device for customers building their own gesture-recognition model in an app.', accent: true },
    { label: 'Transport', values: ['BLE wireless\nHID', 'BLE wireless\nHID', 'BLE wireless\nHID', 'BLE wireless\nCustom protocol'] },
    { label: 'Transmitted data', values: ['Mouse-mode HID reports plus a custom packet containing pose and force features', 'Touch-mode HID reports plus a custom packet containing pose and force features', 'Keyboard-mode HID reports plus a custom packet containing pose and force features', '2 kHz EMG data plus 6-axis IMU data'] },
    { label: 'Target devices', values: ['Windows hardware', 'iOS and Android phones and tablets', 'Bluetooth HID devices including phones, tablets and smart glasses; iOS, Android and Windows', 'Phones, tablets and smart glasses supporting the custom data protocol; iOS, Android and Windows'] },
    { label: 'EMG acquisition', values: ['Waveletech Galvani neural-sensing and compute silicon', 'Waveletech Galvani neural-sensing and compute silicon', 'Waveletech Galvani neural-sensing and compute silicon', 'Waveletech Galvani neural-sensing and compute silicon'] },
  ],
}

const productBaseZh = {
  indexLabel: '产品索引',
  overviewLabel: '产品概览',
  tableLabel: '选型表格',
  docsLabel: '接口文档',
  backLabel: '返回首页',
  languageLabel: 'Switch to English',
  languageShort: 'EN',
}

const productBaseEn = {
  indexLabel: 'Product index',
  overviewLabel: 'Overview',
  tableLabel: 'Selection table',
  docsLabel: 'API documentation',
  backLabel: 'Back to home',
  languageLabel: '切换为中文',
  languageShort: '中文',
}

export const productContent: Record<Locale, Record<ProductKey, ProductContent>> = {
  zh: {
    dataAcquisition: {
      ...productBaseZh,
      meta: { title: '数采腕带系列｜唯理 Waveletech', description: '唯理高通道、高采样率专业肌电数据采集腕带选型与技术说明。' },
      pageTitle: '数采腕带系列',
      familyTitle: '数采腕带系列',
      lead: '高通道、高采样率、低噪声、柔性设计——专为大规模数据采集与模型训练打造',
      features: [
        '18通道超高密度 EMG 采集：覆盖前臂各组肌群电位变化，不遗漏微弱肌电细节。',
        '24bit 高分辨率 & 2kHz 采样率：拥有 1kHz 超宽信号带宽与高动态范围。',
        '高精度 6 轴 IMU 融合：208Hz 采样率，同步采集前臂肢体姿态等信息。',
        '极致人体工学全柔性设计：表带宽度仅 25mm（与 Apple Watch Ultra 同宽），厚度仅 3mm，全柔性材质配圆润电极。',
        '低延迟有线数据传输与蓝牙无线传输：通过 Type-C 或匹配接收器保证实时、无丢包传送。',
        '边充边用 & 强大供电：内置可充电锂电池并支持外部供电，满足全天候长时间连续采集。',
      ],
      secondaryTitle: '典型应用场景与开放生态',
      secondaryItems: [
        '具身智能与遥操作训练：采集手部动作，用于机器人手部动作模仿、手势解码与大模型训练。',
        '手部发力意图识别：通过微弱肌电信号捕捉肌肉微收缩与发力意图。',
        '康复算法研发：面向手功能障碍康复评估与被动/主动康复训练。',
        '标配 Windows 专业波形绘制软件，支持 18 通道 EMG 与 6 通道 IMU 实时绘制及 MAT/CSV 保存。',
        '开放第三方数据接口与 SDK，可快速集成至 Python、C++、ROS 等主流开发平台。',
      ],
      table: dataTableZh,
      interfaceDocsTitle: '接口文档',
      interfaceDocsNote: 'GitHub 接口文档地址待补充。当前入口保留为空链接。',
      interfaceDocsLink: '',
    },
    openInteraction: {
      ...productBaseZh,
      meta: { title: '开源交互腕带系列｜唯理 Waveletech', description: '唯理开源神经交互腕带 M1、T1、K1、D1 选型与技术说明。' },
      pageTitle: '开源交互腕带系列',
      familyTitle: '开源交互腕带系列',
      lead: '基于自研神经传感芯片与高效边缘端计算的手部意图识别——让自然手势交互触手可及',
      features: homeSeriesZh[1].features,
      secondaryTitle: '开放交互能力',
      secondaryItems: [
        'M1 将自然手势映射为鼠标操作，适合 Windows 与光标交互。',
        'T1 将自然手势映射为触屏操作，适合 iOS、安卓手机和平板。',
        'K1 提供更多键盘式功能映射，适合智能终端与简单页面控制。',
        'D1 输出 2kHz 原始 EMG 与 6 轴 IMU 数据，适合自行训练和部署手势模型。',
      ],
      table: interactionTableZh,
      interfaceDocsTitle: '接口文档',
      interfaceDocsNote: 'GitHub 接口文档地址待补充。当前入口保留为空链接。',
      interfaceDocsLink: '',
    },
  },
  en: {
    dataAcquisition: {
      ...productBaseEn,
      meta: { title: 'Data Acquisition Bands | Waveletech', description: 'Selection and technical reference for Waveletech high-channel, high-rate EMG data-acquisition bands.' },
      pageTitle: 'Data Acquisition Band Series',
      familyTitle: 'Data Acquisition Bands',
      lead: 'High channel count, high sampling rate, low noise and flexible construction—built for dataset-scale capture and model training.',
      features: [
        '18-channel high-density EMG covers forearm muscle groups without losing low-amplitude signal detail.',
        '24-bit resolution and sampling rates up to 2 kHz provide 1 kHz signal bandwidth and wide dynamic range.',
        'A high-precision 6-axis IMU samples at 208 Hz alongside EMG for synchronized forearm-motion context.',
        'A 25 mm-wide, 3 mm-thick fully flexible strap pairs rounded electrodes with long-session comfort.',
        'Low-latency Type-C and wireless receiver options preserve real-time, lossless data delivery.',
        'An internal rechargeable battery and external power support continuous all-day acquisition.',
      ],
      secondaryTitle: 'Applications and open ecosystem',
      secondaryItems: [
        'Embodied-AI and teleoperation training for robot-hand imitation, gesture decoding and foundation-model datasets.',
        'Hand-force intent recognition from low-amplitude muscle activation.',
        'Rehabilitation assessment and active or passive hand-function training algorithms.',
        'Windows software for live 18-channel EMG and 6-axis IMU plotting with MAT/CSV export.',
        'Open data interfaces and SDK integration for Python, C++, ROS and other mainstream environments.',
      ],
      table: dataTableEn,
      interfaceDocsTitle: 'API Documentation',
      interfaceDocsNote: 'The GitHub documentation URL will be added here. The link is intentionally empty for now.',
      interfaceDocsLink: '',
    },
    openInteraction: {
      ...productBaseEn,
      meta: { title: 'Open Interaction Bands | Waveletech', description: 'Selection and technical reference for Waveletech M1, T1, K1 and D1 open neural-interaction bands.' },
      pageTitle: 'Open Interaction Band Series',
      familyTitle: 'Open Interaction Bands',
      lead: 'Hand-intent recognition powered by our neural-sensing silicon and efficient edge computing—making natural gesture interaction immediately accessible.',
      features: homeSeriesEn[1].features,
      secondaryTitle: 'Open interaction capabilities',
      secondaryItems: [
        'M1 maps natural gestures to mouse input for Windows and cursor-driven interfaces.',
        'T1 maps gestures to touch input for iOS and Android phones and tablets.',
        'K1 provides a larger keyboard-like mapping vocabulary for terminals and simple page control.',
        'D1 streams raw 2 kHz EMG and 6-axis IMU data for custom model training and deployment.',
      ],
      table: interactionTableEn,
      interfaceDocsTitle: 'API Documentation',
      interfaceDocsNote: 'The GitHub documentation URL will be added here. The link is intentionally empty for now.',
      interfaceDocsLink: '',
    },
  },
}
