export type LongformLocale = 'zh' | 'en';

export type LongformSectionId =
	| 'system'
	| 'variants'
	| 'signal'
	| 'motion'
	| 'mechanics'
	| 'pipeline'
	| 'protocols';

export interface LongformBlock {
	readonly index: string;
	readonly titleKey: string;
	readonly bodyKey: string;
}

export interface LongformSection {
	readonly id: LongformSectionId;
	readonly blocks: readonly LongformBlock[];
}

export const longformSections = [
	{
		id: 'system',
		blocks: [
			{
				index: '01.1',
				titleKey: 'longform.system.01.title',
				bodyKey: 'longform.system.01.body',
			},
			{
				index: '01.2',
				titleKey: 'longform.system.02.title',
				bodyKey: 'longform.system.02.body',
			},
			{
				index: '01.3',
				titleKey: 'longform.system.03.title',
				bodyKey: 'longform.system.03.body',
			},
			{
				index: '01.4',
				titleKey: 'longform.system.04.title',
				bodyKey: 'longform.system.04.body',
			},
		],
	},
	{
		id: 'variants',
		blocks: [
			{
				index: '02.1',
				titleKey: 'longform.variants.01.title',
				bodyKey: 'longform.variants.01.body',
			},
			{
				index: '02.2',
				titleKey: 'longform.variants.02.title',
				bodyKey: 'longform.variants.02.body',
			},
			{
				index: '02.3',
				titleKey: 'longform.variants.03.title',
				bodyKey: 'longform.variants.03.body',
			},
			{
				index: '02.4',
				titleKey: 'longform.variants.04.title',
				bodyKey: 'longform.variants.04.body',
			},
		],
	},
	{
		id: 'signal',
		blocks: [
			{
				index: '03.1',
				titleKey: 'longform.signal.01.title',
				bodyKey: 'longform.signal.01.body',
			},
			{
				index: '03.2',
				titleKey: 'longform.signal.02.title',
				bodyKey: 'longform.signal.02.body',
			},
			{
				index: '03.3',
				titleKey: 'longform.signal.03.title',
				bodyKey: 'longform.signal.03.body',
			},
			{
				index: '03.4',
				titleKey: 'longform.signal.04.title',
				bodyKey: 'longform.signal.04.body',
			},
		],
	},
	{
		id: 'motion',
		blocks: [
			{
				index: '04.1',
				titleKey: 'longform.motion.01.title',
				bodyKey: 'longform.motion.01.body',
			},
			{
				index: '04.2',
				titleKey: 'longform.motion.02.title',
				bodyKey: 'longform.motion.02.body',
			},
			{
				index: '04.3',
				titleKey: 'longform.motion.03.title',
				bodyKey: 'longform.motion.03.body',
			},
			{
				index: '04.4',
				titleKey: 'longform.motion.04.title',
				bodyKey: 'longform.motion.04.body',
			},
		],
	},
	{
		id: 'mechanics',
		blocks: [
			{
				index: '05.1',
				titleKey: 'longform.mechanics.01.title',
				bodyKey: 'longform.mechanics.01.body',
			},
			{
				index: '05.2',
				titleKey: 'longform.mechanics.02.title',
				bodyKey: 'longform.mechanics.02.body',
			},
			{
				index: '05.3',
				titleKey: 'longform.mechanics.03.title',
				bodyKey: 'longform.mechanics.03.body',
			},
			{
				index: '05.4',
				titleKey: 'longform.mechanics.04.title',
				bodyKey: 'longform.mechanics.04.body',
			},
		],
	},
	{
		id: 'pipeline',
		blocks: [
			{
				index: '06.1',
				titleKey: 'longform.pipeline.01.title',
				bodyKey: 'longform.pipeline.01.body',
			},
			{
				index: '06.2',
				titleKey: 'longform.pipeline.02.title',
				bodyKey: 'longform.pipeline.02.body',
			},
			{
				index: '06.3',
				titleKey: 'longform.pipeline.03.title',
				bodyKey: 'longform.pipeline.03.body',
			},
			{
				index: '06.4',
				titleKey: 'longform.pipeline.04.title',
				bodyKey: 'longform.pipeline.04.body',
			},
		],
	},
	{
		id: 'protocols',
		blocks: [
			{
				index: '07.1',
				titleKey: 'longform.protocols.01.title',
				bodyKey: 'longform.protocols.01.body',
			},
			{
				index: '07.2',
				titleKey: 'longform.protocols.02.title',
				bodyKey: 'longform.protocols.02.body',
			},
			{
				index: '07.3',
				titleKey: 'longform.protocols.03.title',
				bodyKey: 'longform.protocols.03.body',
			},
			{
				index: '07.4',
				titleKey: 'longform.protocols.04.title',
				bodyKey: 'longform.protocols.04.body',
			},
		],
	},
] as const satisfies readonly LongformSection[];

export type LongformTranslationKey =
	| (typeof longformSections)[number]['blocks'][number]['titleKey']
	| (typeof longformSections)[number]['blocks'][number]['bodyKey'];

export const longformTranslations = {
	zh: {
		'longform.system.01.title': '模拟链路的边界',
		'longform.system.01.body': '电极、保护网络、低噪声前端与模数转换器共同构成一条可测量的模拟链路。系统在靠近皮肤的位置完成高阻输入和共模抑制，再把未经不可逆处理的样本交给数字域；增益、参考电位与饱和余量都写入会话元数据，使研究者能够解释每一次削顶，而不是把异常归因于模糊的佩戴问题。',
		'longform.system.02.title': '统一时钟即系统架构',
		'longform.system.02.body': '肌电、惯性测量与外部事件只有共享时间基准时才构成同一个实验。腕带以递增序列号标记采样帧，并周期性估计主机时钟偏差；连接抖动只改变数据抵达顺序，不改变数据发生顺序。机器人控制器、摄像机和任务标注可以沿同一时间轴重建，为闭环延迟分析保留微秒级因果关系。',
		'longform.system.03.title': '设备端状态机',
		'longform.system.03.body': '固件将上电、发现、接触检查、静息校准、采集和安全停止定义为显式状态，而不是一组松散命令。每次迁移均产生带时间戳的事件，并记录电池、温度、链路和通道掩码。主机意外退出后，设备仍能封闭当前数据段并保存终止原因，避免一个看似完整的文件掩盖不完整实验。',
		'longform.system.04.title': '让硬件保持可观察',
		'longform.system.04.body': '系统不会用单一健康指示灯概括所有内部状态。每个数据包携带丢帧计数、饱和标记、接触质量和供电模式，诊断流还暴露前端噪声与基线漂移。研究人员因而可以区分受试者疲劳、电极移动、无线拥塞和固件节流，并把排障依据与原始信号一起归档。',

		'longform.variants.01.title': '共享的电气契约',
		'longform.variants.01.body': '六种节点在通道数、供电和传输方式上不同，但遵守同一帧格式、参考电位策略与校准过程。低通道无线版本采集的会话可以直接进入高密度有线版本使用的工具链；上位机依据能力描述选择功能，而不是识别产品名称。硬件升级因此不会迫使数据集、标注器和机器人控制代码同时重写。',
		'longform.variants.02.title': '通道密度的选择',
		'longform.variants.02.body': '更多通道并不自动产生更好的意图识别。六至八通道适合长时佩戴、快速布置和明确肌群，十二至十八通道则为电极位移研究、空间滤波和细粒度手势提供冗余。选择应由动作词汇、受试者差异和可接受的准备时间决定，并在实验方案中预先声明，而不是在模型效果不佳后追加传感器。',
		'longform.variants.03.title': 'BLE 与 USB 的实验含义',
		'longform.variants.03.body': '无线和有线模式的差别不只是吞吐量。BLE 允许自然活动并降低线缆牵引伪迹，但必须面对调度间隔、重传和移动端功耗；USB 提供持续供电与稳定带宽，却可能改变手腕运动范围。两种模式保持相同的逻辑样本和质量字段，使传输条件本身能够成为受控变量。',
		'longform.variants.04.title': '模块化原型与校准',
		'longform.variants.04.body': '主机外壳、电极带和触觉单元可以独立替换，但每个可更换部件都携带版本标识与校准记录。装配后固件会核对通道映射、参考端和惯性轴方向，拒绝含糊配置进入采集状态。这个约束保留了快速迭代能力，同时防止实验室原型在多次维修后悄然变成无法复现的独有设备。',

		'longform.signal.01.title': '皮肤也是电路的一部分',
		'longform.signal.01.body': '表面肌电不是从肌肉直接读取的纯净数值，角质层、汗液、电极材料与接触压力共同形成时变阻抗。启动检查会施加安全的微小探测信号，并分别估计活动端和参考端质量。该结果不被当作固定校准常数，而是随会话持续采样，让佩戴变化成为可分析变量。',
		'longform.signal.02.title': '噪声预算与共模抑制',
		'longform.signal.02.body': '噪声预算从电极热噪声开始，经过输入保护、前端本底、量化误差和供电纹波，最后才考虑数字滤波。系统在实际电缆、电池与人体负载条件下报告典型值，避免用短接输入的理想数字替代整机表现。共模抑制也按频率和电极不平衡测量，以揭示工频环境中的真实余量。',
		'longform.signal.03.title': '原始帧与数据来历',
		'longform.signal.03.body': '每个原始帧包含设备时间、序列号、有效通道掩码、采样配置和质量位，数值不会脱离采集条件单独保存。会话清单同时记录固件版本、硬件修订、滤波旁路状态与量程。即使多年后算法已经更换，研究者仍能判断某段波形由哪一条链路产生，以及哪些假设可以安全重放。',
		'longform.signal.04.title': '刻意外置的预处理',
		'longform.signal.04.body': '陷波、带通、整流、包络和归一化默认在可重放的软件层完成。设备端只执行抗混叠和维持链路安全所必需的处理，并明确记录无法撤销的步骤。这样同一批原始信号既能服务传统特征工程，也能进入端到端模型，还可以在审稿或部署阶段重新评估滤波延迟。',

		'longform.motion.01.title': 'IMU 提供语境而非真值',
		'longform.motion.01.body': '六轴惯性数据能够说明手腕何时旋转、加速或受到冲击，却不能独立给出稳定的世界坐标姿态。系统保留原始加速度与角速度，并把任何融合姿态标记为派生量。研究人员可以按任务选择重力约束、机器人运动学或视觉参考，避免把特定融合器的漂移误认为受试者动作。',
		'longform.motion.02.title': '跨采样率同步',
		'longform.motion.02.body': '肌电以最高两千赫兹采样，惯性数据则运行在一百零四或二百零八赫兹，两者不会通过简单重复样本伪装成同频信号。固件在公共硬件计数器上记录各自采样瞬间，主机按时间窗关联数据。重采样发生在分析阶段，并保留原始索引，使边缘事件和延迟估计不被插值隐藏。',
		'longform.motion.03.title': '坐标系与融合窗口',
		'longform.motion.03.body': '每次佩戴都建立传感器坐标、前臂坐标和任务坐标之间的显式变换。短静息姿态用于估计重力方向，预设动作提供轴向符号检查，所有矩阵随后写入会话清单。滑动融合窗口只引用过去样本，保证在线控制不会无意使用未来信息，而离线分析可以选择对称窗口并清楚标注差异。',
		'longform.motion.04.title': '把运动伪迹变成监督信息',
		'longform.motion.04.body': '冲击、带体滑动和快速屈腕会同时改变惯性信号与电极阻抗，这些片段不应一律从数据集中删除。系统把高加速度、接触突变和模拟饱和组合成候选伪迹标签，由研究者确认后用于鲁棒训练。模型由此学习拒绝不可信输入，而不是只在经过人工清洗的平静实验中表现良好。',

		'longform.mechanics.01.title': '接触压力的分布',
		'longform.mechanics.01.body': '表带需要足够紧以稳定电极，却不能通过局部高压换取漂亮波形。柔性基底沿腕围分散拉力，电极背部的限位结构控制压缩量，扣具刻度记录实际佩戴位置。设计验证同时观察信号质量、皮肤压痕和动作范围，使电气指标不会掩盖长时间实验中的舒适性成本。',
		'longform.mechanics.02.title': '电极间距与解剖差异',
		'longform.mechanics.02.body': '固定阵列面对的是形状、脂肪厚度和肌腱路径均不同的前臂。电极间距在空间分辨率、串扰和可制造性之间折中，阵列基准线则对齐可触知的解剖标志。协议记录旋转角度与扣具位置，使跨受试者比较不仅依赖照片，也能在下一次会话中近似恢复。',
		'longform.mechanics.03.title': '可重复的佩戴过程',
		'longform.mechanics.03.body': '可重复性来自一套短而严格的流程：确认皮肤状态，定位腕骨标志，对齐阵列，逐级收紧并运行接触检查。软件保存操作员、左右手、方向和张力刻度，若通道异常则要求重新佩戴而非静默屏蔽。准备步骤被视为采集的一部分，因此可以统计它对模型漂移的贡献。',
		'longform.mechanics.04.title': '温度、汗液与维护',
		'longform.mechanics.04.body': '长时任务会让皮肤温度、湿度和材料顺应性缓慢变化，基线漂移因此具有机械与生理双重来源。会话期间记录主机温度和接触趋势，在用户休息或重新收紧后插入维护事件。可拆卸织物与电极按独立周期清洁和检查，部件寿命也写入日志，防止老化只表现为不可解释的算法退化。',

		'longform.pipeline.01.title': '会话清单先于数据',
		'longform.pipeline.01.body': '采集开始前，主机先生成不可变会话标识，并写入受试者匿名编号、设备能力、任务版本、采样配置和外部时钟来源。后续原始帧、标注、视频索引与质量报告都引用同一标识。文件即使被移动或拆分，也能凭清单重新组合，避免研究结论依赖某台工作站上的目录命名习惯。',
		'longform.pipeline.02.title': '采集前的质量门',
		'longform.pipeline.02.body': '系统只有在静息基线、接触质量、饱和余量、惯性静止度和时钟偏差同时通过阈值后才允许正式采集。阈值属于协议并被保存，而不是固件中的隐含常数。操作者可以带理由覆盖警告，但覆盖本身会成为事件，从而让后续筛选知道哪些会话是在非理想条件下完成。',
		'longform.pipeline.03.title': '丢包、重排与恢复',
		'longform.pipeline.03.body': '传输层不会用插值悄悄填补丢失的生物电样本。主机按序列号检测空洞，在缓存允许时请求重传，无法恢复时写入精确缺口和链路状态。晚到的数据可以按设备时间重排，但原始抵达时间仍被保留。在线控制因此能够采取保守降级，离线分析也能选择自己的缺失值策略。',
		'longform.pipeline.04.title': '面向复现的导出',
		'longform.pipeline.04.body': '一个完整导出包包含无损帧、事件流、设备与协议清单、质量摘要、校准结果和校验和，而不仅是一张整理后的特征表。派生数据记录生成它的代码版本与参数，并指回输入片段。团队可以在不同工具中重建同一时间线，审计任何排除规则，并确认分享过程没有改变字节内容。',

		'longform.protocols.01.title': '把漂移写进研究设计',
		'longform.protocols.01.body': '肌电分类器会随佩戴位置、时间、疲劳和个体变化而漂移，因此协议应主动安排跨日、重新佩戴和负荷阶段。训练集与测试集按会话或受试者分离，避免相邻窗口泄漏出虚假的高准确率。设备记录这些条件，但不替研究者决定分层方式；每项结论必须说明它能跨越哪一种变化。',
		'longform.protocols.02.title': '事件与标注语义',
		'longform.protocols.02.body': '开始提示、动作起点、机器人响应和任务结果是不同事件，不能压缩成一个类别标签。事件模式定义来源、时间语义、置信度和允许的修订，并保留人工与自动标注之间的关系。训练窗口因而能够围绕真实动作边界构造，闭环实验也能区分用户反应延迟、算法计算时间与执行器响应。',
		'longform.protocols.03.title': '失败模式目录',
		'longform.protocols.03.body': '协议预先列出松动电极、通道饱和、无线拥塞、时钟跳变、姿态漂移、错误佩戴和受试者中断等失败模式。每一种情况都有可观察信号、操作者动作与数据处置规则。异常不会仅被记为无效试次，而是进入结构化日志，帮助下一轮硬件设计和模型训练针对真实薄弱环节。',
		'longform.protocols.04.title': '从离线指标到部署行为',
		'longform.protocols.04.body': '模型评估除准确率外，还报告校准时间、端到端延迟、拒绝率、跨会话退化和错误触发持续时间。闭环任务必须定义信号不可信时的安全状态，并验证恢复过程不会产生突发命令。只有当原始数据、处理图和控制策略共同固定后，实验结果才能说明腕带在实际机器人系统中的行为。',
	},
	en: {
		'longform.system.01.title': 'BOUNDARIES OF THE ANALOG CHAIN',
		'longform.system.01.body': 'The electrodes, input protection, low-noise front end, and converter form one measurable analog chain. High-impedance sensing and common-mode rejection happen close to the skin before samples enter the digital domain without irreversible shaping. Gain, reference potential, and saturation margin are written into session metadata, allowing every clipped interval to be explained from recorded conditions rather than attributed to an undefined wearing problem.',
		'longform.system.02.title': 'A COMMON CLOCK IS ARCHITECTURE',
		'longform.system.02.body': 'EMG, inertial measurements, and external events belong to the same experiment only when they share a time base. The band marks frames with monotonic sequence numbers and periodically estimates host-clock offset; connection jitter can change arrival order, but never occurrence order. Robot controllers, cameras, and task annotations can therefore be reconstructed on one timeline, preserving the causal detail needed to separate human reaction, inference, transport, and actuator delay.',
		'longform.system.03.title': 'THE DEVICE-SIDE STATE MACHINE',
		'longform.system.03.body': 'Firmware represents boot, discovery, contact inspection, rest calibration, capture, and safe stop as explicit states instead of a loose command set. Every transition emits a timestamped event with battery, temperature, link, and channel-mask context. If the host disappears, the device still closes the active segment and records why it ended. A file that looks complete can no longer conceal an incomplete experiment or an ambiguous shutdown.',
		'longform.system.04.title': 'KEEPING THE HARDWARE OBSERVABLE',
		'longform.system.04.body': 'One health light cannot summarize the internal state of a research instrument. Each packet carries frame-loss counters, saturation flags, contact quality, and power mode, while a diagnostic stream exposes front-end noise and baseline movement. Researchers can distinguish participant fatigue from electrode displacement, wireless congestion, or firmware throttling. The evidence used during troubleshooting is archived beside the biological signal rather than disappearing in an operator notebook.',

		'longform.variants.01.title': 'A SHARED ELECTRICAL CONTRACT',
		'longform.variants.01.body': 'The six nodes vary in channel count, power, and transport, yet obey one frame format, reference strategy, and calibration sequence. A session recorded on a low-channel wireless unit can enter the same tools used by a high-density tethered unit. Host software selects behavior from a capability descriptor instead of a product name, so a hardware upgrade does not force simultaneous rewrites of datasets, annotation tools, and robot-control code.',
		'longform.variants.02.title': 'CHOOSING CHANNEL DENSITY',
		'longform.variants.02.body': 'More channels do not automatically create better intent recognition. Six or eight channels favor long wear, fast setup, and clearly separated muscle groups; twelve or eighteen provide redundancy for displacement studies, spatial filtering, and fine gesture vocabularies. The decision should follow the movement set, participant variability, and acceptable preparation time. It must be declared in the protocol before collection, not added after a weak model result.',
		'longform.variants.03.title': 'WHAT BLE AND USB CHANGE',
		'longform.variants.03.body': 'Wireless and tethered modes differ by more than throughput. BLE supports natural movement and removes cable-traction artifacts, but introduces scheduling intervals, retransmission, and mobile power constraints. USB supplies stable bandwidth and continuous power, while a cable may alter wrist range or task strategy. Both modes retain identical logical samples and quality fields, allowing transport conditions to be studied as controlled variables instead of silently changing the dataset.',
		'longform.variants.04.title': 'MODULAR PROTOTYPES, CONTROLLED CALIBRATION',
		'longform.variants.04.body': 'The electronics enclosure, electrode band, and haptic unit can be replaced independently, but every replaceable part carries a revision identifier and calibration record. After assembly, firmware verifies channel mapping, reference routing, and inertial-axis direction before it permits capture. This constraint preserves rapid prototype iteration while preventing a laboratory device from becoming an undocumented one-off after several repairs, substitutions, and hand-built revisions.',

		'longform.signal.01.title': 'SKIN IS PART OF THE CIRCUIT',
		'longform.signal.01.body': 'Surface EMG is not a clean number read directly from muscle. The stratum corneum, sweat, electrode material, and contact pressure form a time-varying impedance. Startup inspection applies a safe, minute probe signal and estimates quality separately for active and reference contacts. That result is not treated as a permanent calibration constant; it is sampled throughout the session so changes in fit become an analyzable variable.',
		'longform.signal.02.title': 'NOISE BUDGET AND COMMON-MODE REJECTION',
		'longform.signal.02.body': 'The noise budget begins with electrode thermal noise, passes through input protection, front-end density, quantization, and supply ripple, and only then considers digital filtering. Typical performance is reported with realistic cables, battery, and body loading rather than a shorted-input laboratory number. Common-mode rejection is also measured against frequency and electrode imbalance, exposing the margin that actually remains near mains wiring, motors, and switched power supplies.',
		'longform.signal.03.title': 'RAW FRAMES WITH PROVENANCE',
		'longform.signal.03.body': 'Every raw frame includes device time, sequence number, active-channel mask, sampling configuration, and quality bits; values are never stored without acquisition context. The session manifest also records firmware, hardware revision, filter-bypass state, and input range. Even after the analysis stack changes, a researcher can identify which physical chain produced an interval, which transformations were unavoidable, and which assumptions may still be replayed safely.',
		'longform.signal.04.title': 'PREPROCESSING STAYS REPLAYABLE',
		'longform.signal.04.body': 'Notch filtering, band-pass filtering, rectification, envelopes, and normalization are performed by default in a replayable software layer. The device applies only processing required for anti-aliasing and link safety, and records each irreversible step. The same source signal can support classical feature engineering, end-to-end learning, and later replication. Filter delay and edge behavior can be reevaluated during review or deployment instead of being embedded permanently in firmware.',

		'longform.motion.01.title': 'IMU CONTEXT IS NOT GROUND TRUTH',
		'longform.motion.01.body': 'Six-axis inertial data can reveal when the wrist rotates, accelerates, or receives an impact, but it cannot independently provide a stable world-frame pose. The system retains raw acceleration and angular rate, labeling every fused orientation as derived data. Researchers may choose gravity constraints, robot kinematics, or visual references for a task, avoiding the common error of interpreting one fusion algorithm\'s drift as participant motion.',
		'longform.motion.02.title': 'SYNCHRONIZATION ACROSS SAMPLE RATES',
		'longform.motion.02.body': 'EMG may run at two kilohertz while inertial channels run at 104 or 208 hertz; repeated values do not pretend that these sources share a rate. Firmware stamps each acquisition against a common hardware counter, and the host associates observations by time windows. Resampling occurs during analysis with original indices preserved, so interpolation cannot conceal sharp events, reorder boundaries, or create misleading precision in a latency estimate.',
		'longform.motion.03.title': 'COORDINATE FRAMES AND FUSION WINDOWS',
		'longform.motion.03.body': 'Each fitting establishes explicit transforms among sensor, forearm, and task coordinates. A short resting pose estimates gravity, a prescribed movement verifies axis signs, and all resulting matrices enter the session manifest. Sliding fusion windows reference past samples only, ensuring that online control never borrows future information. Offline analysis may use symmetric windows, but the difference remains declared and measurable instead of hidden inside a feature exporter.',
		'longform.motion.04.title': 'MOTION ARTIFACT AS SUPERVISION',
		'longform.motion.04.body': 'Impact, band slip, and rapid flexion can change inertial measurements and electrode impedance together; these intervals should not automatically disappear from a dataset. The system combines high acceleration, contact transitions, and analog saturation into candidate artifact labels for researcher review. Models can then learn to reject unreliable inputs instead of succeeding only on manually cleaned, quiet trials. Failure becomes part of the training distribution and part of the reported result.',

		'longform.mechanics.01.title': 'DISTRIBUTING CONTACT PRESSURE',
		'longform.mechanics.01.body': 'The strap must stabilize electrodes without purchasing clean waveforms through localized pressure. A flexible substrate spreads tension around the wrist, mechanical stops limit compression behind each contact, and buckle markings preserve the actual fitting position. Validation tracks signal quality, skin indentation, and range of motion together. Electrical metrics therefore cannot hide the comfort cost that appears only during a long session or repeated daily wear.',
		'longform.mechanics.02.title': 'ELECTRODE SPACING MEETS ANATOMY',
		'longform.mechanics.02.body': 'A fixed array encounters forearms that differ in contour, adipose thickness, and tendon path. Electrode pitch balances spatial resolution, crosstalk, and manufacturability, while an array datum aligns to palpable anatomical landmarks. The protocol records rotation and buckle position, giving cross-participant comparisons more than a photograph. A later session can approximately reconstruct placement and quantify the residual error instead of treating it as invisible biological variation.',
		'longform.mechanics.03.title': 'A REPEATABLE FITTING PROCEDURE',
		'longform.mechanics.03.body': 'Repeatability begins with a short, strict procedure: inspect skin, locate wrist landmarks, align the array, tighten by indexed steps, and run contact inspection. Software records operator, hand, orientation, and tension index. An abnormal channel triggers refitting rather than silent masking. Setup is treated as part of acquisition, which makes its duration, interventions, and contribution to model drift available for statistical analysis.',
		'longform.mechanics.04.title': 'HEAT, SWEAT, AND MAINTENANCE',
		'longform.mechanics.04.body': 'Long tasks gradually change skin temperature, moisture, and material compliance, giving baseline drift both mechanical and physiological causes. Module temperature and contact trends are recorded during a session, and maintenance events mark participant breaks or strap adjustment. Detachable textile and electrode parts follow separate cleaning and inspection schedules. Component age enters the log so wear cannot surface months later as unexplained algorithm degradation.',

		'longform.pipeline.01.title': 'THE MANIFEST PRECEDES THE DATA',
		'longform.pipeline.01.body': 'Before capture, the host creates an immutable session identifier and records anonymized participant ID, device capabilities, task revision, sampling profile, and external clock source. Raw frames, annotations, video indices, and quality reports all reference that identity. Files may be moved or separated and still reassemble from the manifest. A research conclusion no longer depends on directory names remembered only by one workstation or operator.',
		'longform.pipeline.02.title': 'A QUALITY GATE BEFORE CAPTURE',
		'longform.pipeline.02.body': 'Formal capture begins only after resting baseline, contact quality, saturation margin, inertial stillness, and clock offset pass their thresholds together. Thresholds belong to the protocol and are saved, not hidden as firmware constants. An operator may override a warning with a reason, but that override becomes an event. Later screening can distinguish acceptable exceptions from sessions collected under unknowable conditions.',
		'longform.pipeline.03.title': 'LOSS, REORDERING, AND RECOVERY',
		'longform.pipeline.03.body': 'The transport layer never conceals lost biological samples with interpolation. The host detects sequence gaps, requests retransmission while buffers allow, and otherwise records the exact missing range with link state. Late packets may be reordered by device time while original arrival time remains available. Online control can enter a conservative degraded state, and offline analysis can choose a missing-data policy appropriate to its own assumptions.',
		'longform.pipeline.04.title': 'EXPORT FOR REPRODUCTION',
		'longform.pipeline.04.body': 'A complete export contains lossless frames, event streams, device and protocol manifests, quality summaries, calibration output, and checksums rather than only a curated feature table. Derived artifacts identify the code revision and parameters that generated them and point back to source intervals. Teams can reconstruct one timeline in different tools, audit every exclusion rule, and verify that sharing did not alter the underlying bytes.',

		'longform.protocols.01.title': 'DESIGNING FOR DRIFT',
		'longform.protocols.01.body': 'EMG classifiers drift with placement, time, fatigue, and individual anatomy, so a protocol should schedule cross-day sessions, refitting, and workload stages deliberately. Training and test sets split by session or participant to prevent adjacent windows from leaking false accuracy. The device records relevant conditions but does not choose the scientific stratification. Every claim must state which source of variation it was actually tested to cross.',
		'longform.protocols.02.title': 'EVENT AND ANNOTATION SEMANTICS',
		'longform.protocols.02.body': 'A prompt, movement onset, robot response, and task outcome are distinct events and cannot collapse into one class label. The event schema defines source, temporal meaning, confidence, and permitted revision while preserving relationships between manual and automatic annotations. Training windows can center on genuine movement boundaries, and closed-loop studies can separate participant response, model compute time, transport, and actuator behavior.',
		'longform.protocols.03.title': 'A CATALOG OF FAILURE MODES',
		'longform.protocols.03.body': 'The protocol names loose contacts, channel saturation, radio congestion, clock discontinuity, orientation drift, reversed fitting, and participant interruption before collection begins. Each case has an observable signature, operator response, and data-disposition rule. Anomalies do not disappear into an invalid-trial counter; they enter a structured log that guides the next hardware revision and exposes realistic weaknesses for model training.',
		'longform.protocols.04.title': 'FROM OFFLINE METRICS TO DEPLOYED BEHAVIOR',
		'longform.protocols.04.body': 'Evaluation reports calibration time, end-to-end latency, rejection rate, cross-session degradation, and false-trigger duration alongside accuracy. Closed-loop tasks define a safe state for untrusted input and verify that recovery cannot emit a sudden command. Only when raw data, processing graph, and control policy are fixed together can a result describe how the band behaves inside a real robot system rather than inside an isolated classifier benchmark.',
	},
} as const satisfies Record<LongformLocale, Record<LongformTranslationKey, string>>;
