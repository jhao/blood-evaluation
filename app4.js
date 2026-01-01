const QUESTIONS = [
  {
    id: 1,
    text: '空闲时间你通常更愿意参与社交活动而不是独处？',
    optionA: '去参加聚会或活动，从互动中获取能量。',
    optionB: '安排独处阅读或思考，用安静补充能量。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 2,
    text: '遇到问题时你更倾向于向他人倾诉与讨论？',
    optionA: '会先和身边的人聊聊，听听建议。',
    optionB: '会先自己消化整理，再决定要不要分享。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 3,
    text: '你在团队中讲话轻松且容易主动提出意见？',
    optionA: '会议里会主动开口并推动讨论前进。',
    optionB: '会先聆听大家，再在必要时补充观点。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 4,
    text: '长时间参加社交活动会让你感觉精力充沛？',
    optionA: '活动结束后仍然兴奋，想继续联系。',
    optionB: '需要独处休息才能恢复能量。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 5,
    text: '你觉得大量独处会让你感觉乏味或不适？',
    optionA: '长时间独处会坐立不安，想找人聊聊。',
    optionB: '独处时间让人舒服，有安全感。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 6,
    text: '你更喜欢参与活动而不是思考活动的意义？',
    optionA: '直接投入行动，边做边想。',
    optionB: '先观察和理解意义，再决定是否参与。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 7,
    text: '认识新朋友对你来说很自然，几乎没有压力？',
    optionA: '乐于主动介绍自己，展开对话。',
    optionB: '需要时间适应，更喜欢熟悉的圈子。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 8,
    text: '你习惯通过交谈整理自己的思路？',
    optionA: '把想法说出来能帮我理清思路。',
    optionB: '写下来或在脑中思考更有效。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 9,
    text: '你更容易因为与人交流而获得灵感？',
    optionA: '与他人碰撞时灵感涌现。',
    optionB: '独立思考时灵感更多。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 10,
    text: '相比写字表达，你更偏好直接说出口？',
    optionA: '口头表达更自然顺畅。',
    optionB: '书面表达更清晰有条理。',
    A: 'E',
    B: 'I',
    dimension: 'EI',
  },
  {
    id: 11,
    text: '你做决定时更依赖已知经验而非假设可能？',
    optionA: '依据过往案例和事实来判断。',
    optionB: '会考虑新的可能性和假设方向。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 12,
    text: '你更关注“事实”而不是“意义和象征”？',
    optionA: '关注可验证的具体信息。',
    optionB: '喜欢探讨背后的意义与象征。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 13,
    text: '完成任务时你更偏好清晰具体的步骤？',
    optionA: '需要把事情分解成具体行动。',
    optionB: '喜欢留有空间，依据感觉调整。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 14,
    text: '谈论一个话题时，你容易被细节吸引？',
    optionA: '会追问细节，确保准确无误。',
    optionB: '更关注主题的整体方向。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 15,
    text: '你更信任自己看到和听到的，而非推测？',
    optionA: '以实际观察到的为准。',
    optionB: '愿意基于直觉推演发展。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 16,
    text: '你不太喜欢没有明确标准或目标的创意讨论？',
    optionA: '缺少边界会让我不安，偏好明确目标。',
    optionB: '开放式讨论能激发想象力。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 17,
    text: '你对未来的规划基于现实条件展开？',
    optionA: '先评估资源和限制，再制定计划。',
    optionB: '会先描绘愿景，再倒推实现路径。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 18,
    text: '你偏好基于数据的判断而非灵感判断？',
    optionA: '需要数据和证据支持决定。',
    optionB: '愿意凭感觉尝试新路线。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 19,
    text: '面对问题，你更重视找出“已知的信息”？',
    optionA: '先汇总现有事实，再往下分析。',
    optionB: '先探索未知的可能性，拓宽方向。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 20,
    text: '你更信任过去的做法，而非创造全新路径？',
    optionA: '倾向复用验证过的方法。',
    optionB: '喜欢尝试全新的解决思路。',
    A: 'S',
    B: 'N',
    dimension: 'SN',
  },
  {
    id: 21,
    text: '做决定时，你更重视逻辑合理而非人际和谐？',
    optionA: '优先考虑客观逻辑和一致性。',
    optionB: '会先顾及相关人的感受和关系。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 22,
    text: '讨论中，你会指出错误而不担心对方感受？',
    optionA: '会直接指出问题，便于改进。',
    optionB: '会先照顾情绪，再提出意见。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 23,
    text: '你处理分歧时更关注事实对错？',
    optionA: '会对照标准判断对错。',
    optionB: '会先理解彼此需求，再寻找平衡。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 24,
    text: '你认为“结果比过程更重要”？',
    optionA: '关键是达到目标，过程可以灵活。',
    optionB: '过程体验和关系同样重要。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 25,
    text: '你更擅长从问题中抽离感受分析？',
    optionA: '可以轻松客观拆解问题。',
    optionB: '常会考虑情绪和感受的影响。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 26,
    text: '你倾向于保持客观，不受个人情绪影响？',
    optionA: '能把个人感受放到一边再判断。',
    optionB: '情绪会明显影响我的判断。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 27,
    text: '别人评价你时常说你理性或冷静？',
    optionA: '是的，更多被说务实理性。',
    optionB: '更多被评价为体贴温和。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 28,
    text: '与其鼓励别人，你更倾向指出改善方向？',
    optionA: '会直接提出改进建议。',
    optionB: '会先肯定，再温和提供建议。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 29,
    text: '你认为原则应优先于个体例外？',
    optionA: '规则需要一致执行。',
    optionB: '特殊情况可以灵活处理。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 30,
    text: '他人遇到问题时，你首先想给方案而非安慰？',
    optionA: '会立刻给出解决方案。',
    optionB: '会先倾听并提供支持。',
    A: 'T',
    B: 'F',
    dimension: 'TF',
  },
  {
    id: 31,
    text: '你偏爱制定计划而非随遇而安？',
    optionA: '会先把事项排好再行动。',
    optionB: '会根据当下情况灵活决定。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 32,
    text: '你会提前完成任务而非临近截止才提交？',
    optionA: '倾向提前准备，留下缓冲。',
    optionB: '接近截止时效率反而更高。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 33,
    text: '你希望生活井然有序而不是灵活可变？',
    optionA: '喜欢确定的时间表与安排。',
    optionB: '喜欢保留弹性和选择空间。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 34,
    text: '你倾向先做完事再考虑要不要玩？',
    optionA: '先完成任务再安心娱乐。',
    optionB: '可以穿插进行，保持动力。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 35,
    text: '你更喜欢已经确定的事而不是开放探索？',
    optionA: '明确的目标让我安心。',
    optionB: '开放探索让人觉得有趣。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 36,
    text: '没有明确结论的会议让你焦虑？',
    optionA: '需要结论和行动项才安心。',
    optionB: '讨论的过程本身就有价值。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 37,
    text: '你认为“流程”优先于“灵感”？',
    optionA: '遵循流程才能确保稳定。',
    optionB: '灵感来临时可以突破流程。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 38,
    text: '你在旅途中倾向制定详细行程？',
    optionA: '会细化到每个时段的安排。',
    optionB: '到当地再随心调整安排。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 39,
    text: '你认为及时开始比完整准备更重要？',
    optionA: '即便没想清也会先开动。',
    optionB: '准备充分再开始更放心。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
  {
    id: 40,
    text: '你觉得提前规划比临近调整更高效？',
    optionA: '前期规划能提高整体效率。',
    optionB: '保持弹性，随时调整更有效。',
    A: 'J',
    B: 'P',
    dimension: 'JP',
  },
];

const RESULT_EXPLAIN = {
  ISTJ: `类型：物流师 / 守规者。关键词：务实、可靠、责任感、秩序。核心特征：重视规则、制度和秩序，踏实谨慎，讲究有据可依；对承诺认真，强调把事情做完做好。典型优势：责任心与执行力强，擅长管理流程、制度、档案与数据；在危机或混乱中愿意维持秩序。潜在盲点/风险：可能过于保守、严苛，情感表达不足。工作与职业风格：偏好清晰分工与标准流程，反感说一套做一套，适合审计、财务、项目/质量/行政管理、政府机关等。人际与沟通偏好：喜欢直接明确的沟通，重视行动与结果，不喜欢临时变更计划或当众指责。压力表现与成长建议：高压下可能固执挑剔、过度控制细节；建议在规则内寻找灵活度，并用肯定和感谢表达认可。`.
    replace(/\s+/g, ' ')
    .trim(),
  ISFJ: `类型：守护者 / 照顾者。关键词：温和、细心、责任、服务他人。核心特征：关注他人需求，耐心有条理，记忆力好，尊重传统与权威。典型优势：关心团队氛围，善于营造稳定环境；对任务细致负责，适合维持组织后勤。潜在盲点/风险：容易委屈自己、回避冲突、过度在意评价。工作与职业风格：喜爱稳定明确的环境，擅长行政、客服、人力、后勤、护理、教育等支持角色。人际与沟通偏好：偏好温和尊重的沟通，对情绪敏感且忠诚。压力表现与成长建议：压力累积时或情绪爆发或身体不适；建议学会说“不”并正面表达需求。`.
    replace(/\s+/g, ' ')
    .trim(),
  INFJ: `类型：顾问 / 理想主义战略家。关键词：洞察、理想、共情、使命感。核心特征：关注意义与价值，洞察人和系统的深层动机，常带使命感。典型优势：能抽取本质、洞见趋势；具备共情与指导力，原则性强。潜在盲点/风险：易理想化、过度承担他人情绪，遇冲突可能退缩。工作与职业风格：重视价值匹配与长期影响，喜欢咨询、教育、心理、公益、战略规划等；不适合长期琐碎缺乏意义的事务。人际与沟通偏好：偏好一对一或小范围深度交流，真诚而非表面社交。压力表现与成长建议：高压下易自我怀疑或悲观；建议接受不完美，将理想拆解为小目标并保持边界。`.
    replace(/\s+/g, ' ')
    .trim(),
  INTJ: `类型：策略家 / 规划者。关键词：战略思维、系统、独立、目标导向。核心特征：从整体与长期规划，理性独立，对低效和无逻辑不耐烦。典型优势：制定战略和系统架构，迅速找出问题关键并提出结构化方案，敢做困难但正确的事。潜在盲点/风险：可能忽略情绪、标准过高、对低效社交冷漠。工作与职业风格：适合战略规划、产品架构、研发、管理等具挑战与成长空间的任务，排斥官僚低效文化。人际与沟通偏好：偏好理性简明的问题导向沟通，对有深度的话题乐于参与，尊重专业与逻辑。压力表现与成长建议：高压下或孤立或过度批判；建议练习简化表达并关注团队感受，增加协作效率。`.
    replace(/\s+/g, ' ')
    .trim(),
  ISTP: `类型：鉴赏家 / 问题解决者。关键词：冷静、动手、分析、灵活。核心特征：喜欢动手解决现场问题，突发情况下冷静快速判断，追求自由度。典型优势：善于拆解系统结构，实干且上手快，危机时优先实用解决。潜在盲点/风险：可能忽视长远规划，对重复琐碎缺乏耐心，情感表达少。工作与职业风格：适合工程技术、维修、运维、现场问题处理、数据分析、安全管理等，偏好自主空间。人际与沟通偏好：喜欢直接简单的沟通，用行动关心，不擅长长篇情绪表达。压力表现与成长建议：压力大时可能拖延或逃避；建议设定基本规划和底线，并练习用简单语言表达想法。`.
    replace(/\s+/g, ' ')
    .trim(),
  ISFP: `类型：艺术家 / 体验者。关键词：温柔、审美、灵活、当下体验。核心特征：内敛温和，重视个人感受与审美，按自己节奏生活并以行动表达关心。典型优势：对美和氛围敏感，友善尊重差异，耐心细致能打动人心。潜在盲点/风险：避免冲突，不喜欢硬性规范，易被视为好说话而被动加任务。工作与职业风格：适合设计、美术、艺术、护理、服务、教育、手工等，对环境氛围敏感。人际与沟通偏好：喜欢温暖真诚的交流，重视私人空间。压力表现与成长建议：压力大时或逃避；建议适度正面面对问题并表达想法，减少误解。`.
    replace(/\s+/g, ' ')
    .trim(),
  INFP: `类型：调停者 / 理想主义者。关键词：理想、价值、自我一致、共情。核心特征：重视内在价值与自我认同，富同理心，常在理想与现实间拉扯。典型优势：创意与想象力强，擅长写作与叙事，对不公敏感且具正义感，待人真诚。潜在盲点/风险：易陷情绪与理想主义，可能拖延或缺乏执行动力，对自我要求高。工作与职业风格：适合创意、文化、教育、公益、心理、品牌、公关等需情感洞察领域，追求与个人价值一致。人际与沟通偏好：喜真诚深度交流，对批评敏感更易接受温和尊重的反馈。压力表现与成长建议：高压下易自我否定或逃避；建议把理想拆解为小目标，区分现实约束与自我设限并逐步尝试。`.
    replace(/\s+/g, ' ')
    .trim(),
  INTP: `类型：逻辑学家 / 思辨者。关键词：逻辑、好奇、系统、分析。核心特征：热衷新概念与理论，独立思考，关注系统原理。典型优势：善于抽象建模、提出新观点，多角度分析并给出非传统方案，具创新潜力。潜在盲点/风险：行动落地不足，对琐碎重复缺耐心，沟通时可能过于理性或讽刺。工作与职业风格：适合研究、开发、算法、架构、咨询、策略分析等，需要自由度。人际与沟通偏好：喜有深度的讨论，对强迫社交或闲聊疲惫。压力表现与成长建议：压力大时或切断外界；建议为想法设定截止与执行计划，并在表达时增加情境与共情。`.
    replace(/\s+/g, ' ')
    .trim(),
  ESTP: `类型：企业家 / 行动派。关键词：行动、冒险、现场感、现实主义。核心特征：喜欢快节奏与多变化，重视当下机会和结果，反应敏捷善于应变。典型优势：危机或突发中决策迅速，擅长销售、谈判、现场协调，活力带动团队。潜在盲点/风险：可能忽视长期后果，易与权威或规则冲突，对风险评估不足。工作与职业风格：适合销售、市场、公关、现场运营、应急管理等，喜欢结果导向的考核。人际与沟通偏好：直爽幽默，偏好面对面沟通，反感冗长邮件。压力表现与成长建议：高压下或通过过度娱乐消费冒险释放；建议行动前做基本风险评估，设简短中长期目标。`.
    replace(/\s+/g, ' ')
    .trim(),
  ESFP: `类型：表演者 / 享乐主义实践者。关键词：热情、体验、互动、即兴。核心特征：喜欢人与人互动，追求当下多彩体验，实用主义不爱抽象理论。典型优势：营造轻松氛围、提升士气，关注情绪并愿意提供实际帮助，实践中学习迅速。潜在盲点/风险：长期规划与自律困难，可能忽视规则与后果，对枯燥任务失去耐心。工作与职业风格：适合销售、客服、活动策划、娱乐传媒、服务业、培训演讲等需要人际互动的场景。人际与沟通偏好：喜欢面对面交流与有趣互动，不爱严肃缺温度的沟通。压力表现与成长建议：压力大时或过度消费、刷手机逃避；建议用趣味化方式坚持目标，并留出安静思考复盘时间。`.
    replace(/\s+/g, ' ')
    .trim(),
  ENFP: `类型：倡导者 / 灵感型创意者。关键词：热情、创意、可能性、人本关怀。核心特征：对新想法与机会敏感，充满点子，关注人和关系，讨厌单调僵化。典型优势：头脑风暴与项目启动力强，善于激励团队并生动表达抽象理念。潜在盲点/风险：易三分钟热度、拖延或频繁变更方向，对人际期望高波动大。工作与职业风格：适合产品、品牌、市场、公关、创业、培训、咨询等创新岗位，需要探索空间。人际与沟通偏好：喜欢开放讨论与灵感碰撞，重视真诚情绪交流。压力表现与成长建议：高压下或情绪化、逃避责任或频繁换项目；建议聚焦少数优先创意并配合执行型伙伴，学习处理现实限制。`.
    replace(/\s+/g, ' ')
    .trim(),
  ENTP: `类型：辩论家 / 创新挑战者。关键词：好奇、辩证、颠覆、点子王。核心特征：喜欢质疑与挑战常规，热衷新模式新工具，在争辩中激发思维。典型优势：发现机会与趋势，快速理解复杂问题并提出多种方案，不惧权威。潜在盲点/风险：可能为辩论而辩论，执行与收尾不足，易分心项目多而完结少。工作与职业风格：适合创新、战略、咨询、创业、产品、业务拓展等，需较大自由度与新鲜感。人际与沟通偏好：偏爱思维碰撞型对话，不介意争论但有时忽略对方感受。压力表现与成长建议：高压下或讽刺挑衅、频繁跳槽；建议提升落地力（设里程碑、找执行伙伴），并在辩论前确认关系边界。`.
    replace(/\s+/g, ' ')
    .trim(),
  ESTJ: `类型：管理者 / 执行官。关键词：组织、秩序、效率、决断。核心特征：重视规则制度与效率，直率决断，在意成果。典型优势：组织协调力强，制定流程标准并推动落地，能在压力下扛事。潜在盲点/风险：可能一刀切忽略个体差异，沟通强势，对不确定与模糊不安。工作与职业风格：适合管理、运营、项目落地、行政、军警、公务体系等，偏好明确权责与汇报关系。人际与沟通偏好：结果导向沟通（做什么、何时完成），对拖延含糊不满。压力表现与成长建议：高压下或易怒控制欲强；建议在坚持原则同时为个体情感留弹性，并以提问替代指令提升参与感。`.
    replace(/\s+/g, ' ')
    .trim(),
  ESFJ: `类型：供应者 / 组织氛围官。关键词：热心、合作、责任、人际网络。核心特征：关注他人感受与群体氛围，重视规则与社会期望，擅长社交与组织活动。典型优势：沟通协调与组织力强，细致负责，能维护广泛人际网络。潜在盲点/风险：过度在意评价、避免冲突，可能用“大家都这么做”压制少数声音。工作与职业风格：适合行政、人力、公关、客服、教育、医护、社区服务等，团队氛围对动力影响大。人际与沟通偏好：喜欢温暖友好互动，不喜欢冷漠或过度孤立。压力表现与成长建议：高压下或过度操心情绪化；建议设立边界，直接客观表达不满而非压抑或转为八卦。`.
    replace(/\s+/g, ' ')
    .trim(),
  ENFJ: `类型：导师 / 组织推动者。关键词：同理、号召、组织、人本领导。核心特征：洞察他人潜力并助其成长，具组织号召力，敏感人际且重视目标达成。典型优势：导师气质，擅长带队与教练式领导，化解冲突并把愿景转为鼓舞语言。潜在盲点/风险：可能过度干预或压抑自我需求，高压下情绪波动。工作与职业风格：适合管理、培训、教育、心理辅导、HR、咨询、社工等，喜欢推动组织与个人发展。人际与沟通偏好：偏好开放真诚的互动，乐于被视作信任的商量对象。压力表现与成长建议：高压下或控制焦虑、自责；建议平衡帮助他人与自我照顾，接受有些场景只需陪伴空间。`.
    replace(/\s+/g, ' ')
    .trim(),
  ENTJ: `类型：指挥官 / 战略领导者。关键词：目标、决断、组织、效率。核心特征：目标感与野心强，追求规模化系统化，决断理性，重视效率与能力。典型优势：规划战略、搭建组织与资源分配，在复杂环境保持清晰，敢于突破。潜在盲点/风险：可能忽视情感与个体差异，给团队高压，对慢节奏不耐烦。工作与职业风格：适合高层管理、创业者、项目负责人、咨询合伙人等，喜欢掌控全局。人际与沟通偏好：偏好直接简明、任务目标导向的沟通，尊重能干高效者。压力表现与成长建议：高压下或独裁化、忽视反馈；建议将人纳入战略，关注可持续，并训练聆听与共情以提升长期效率。`.
    replace(/\s+/g, ' ')
    .trim(),
};

const DIMENSION_NAMES = {
  E: 'E · 外向 (Extraversion)',
  I: 'I · 内向 (Introversion)',
  S: 'S · 感觉 (Sensing)',
  N: 'N · 直觉 (iNtuition)',
  T: 'T · 思考 (Thinking)',
  F: 'F · 情感 (Feeling)',
  J: 'J · 判断 (Judging)',
  P: 'P · 知觉 (Perceiving)',
};

const state = {
  view: 'start',
  currentIndex: 0,
  answers: [],
};

function computeScores() {
  return QUESTIONS.reduce((acc, question, index) => {
    const choice = state.answers[index];
    if (choice === 'A') {
      acc[question.A] += 1;
    } else if (choice === 'B') {
      acc[question.B] += 1;
    }
    return acc;
  }, { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
}

function buildMBTI(scores) {
  const code =
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P');

  const ties = [];
  if (scores.E === scores.I) ties.push('E-I');
  if (scores.S === scores.N) ties.push('S-N');
  if (scores.T === scores.F) ties.push('T-F');
  if (scores.J === scores.P) ties.push('J-P');

  const tips = ties.length
    ? `部分维度平分（${ties.join('、')}），建议结合进一步访谈或二次提问确认。`
    : '结果基于 40 道单选题，每题 1 分，供个人发展参考。';

  return { code, description: RESULT_EXPLAIN[code], tips };
}

function createProgressBar(current, total) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full';

  const labelRow = document.createElement('div');
  labelRow.className = 'flex justify-between items-center mb-1 text-sm text-slate-600';

  const title = document.createElement('span');
  title.className = 'font-medium';
  title.textContent = '答题进度';

  const counter = document.createElement('span');
  counter.textContent = `第 ${current} / ${total} 题`;

  labelRow.appendChild(title);
  labelRow.appendChild(counter);

  const track = document.createElement('div');
  track.className = 'w-full bg-slate-200 rounded-full h-2.5';

  const progress = document.createElement('div');
  progress.className = 'bg-indigo-500 h-2.5 rounded-full transition-all duration-500 ease-out';
  progress.style.width = `${(current / total) * 100}%`;

  track.appendChild(progress);
  wrapper.appendChild(labelRow);
  wrapper.appendChild(track);
  return wrapper;
}

function renderStart(main) {
  const card = document.createElement('div');
  card.className = 'w-full max-w-4xl bg-white/90 backdrop-blur p-8 rounded-2xl shadow-lg animate-fade-in';

  const title = document.createElement('h1');
  title.className = 'text-3xl sm:text-4xl font-bold text-indigo-800 mb-3';
  title.textContent = 'MBTI 问卷调查 · 专业版';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-slate-600 mb-6';
  subtitle.textContent = '40 题 · A/B 单选 · 每题 1 分 · 依据 E/I、S/N、T/F、J/P 四大维度设计';

  const grid = document.createElement('div');
  grid.className = 'grid sm:grid-cols-2 gap-4 mb-6';

  const introBlocks = [
    { title: 'E / I 外向-内向', desc: '外向从外界互动中充电，内向从独处思考中充电。' },
    { title: 'S / N 感觉-直觉', desc: 'S 聚焦事实细节，N 聚焦可能性与抽象模式。' },
    { title: 'T / F 思考-情感', desc: 'T 重逻辑一致性，F 重人际和谐与共情。' },
    { title: 'J / P 判断-知觉', desc: 'J 偏计划结构，P 偏灵活探索，节奏感不同。' },
  ];

  introBlocks.forEach((item) => {
    const panel = document.createElement('div');
    panel.className = 'p-4 rounded-xl border border-indigo-100 bg-indigo-50/70 text-left';

    const heading = document.createElement('p');
    heading.className = 'font-semibold text-indigo-800';
    heading.textContent = item.title;

    const desc = document.createElement('p');
    desc.className = 'text-sm text-slate-600 mt-1';
    desc.textContent = item.desc;

    panel.appendChild(heading);
    panel.appendChild(desc);
    grid.appendChild(panel);
  });

  const tips = document.createElement('div');
  tips.className = 'bg-indigo-100 border-l-4 border-indigo-500 p-4 rounded-r-xl text-slate-700 text-sm leading-relaxed mb-8';
  tips.innerHTML = '<strong>作答说明：</strong> 依据直觉选择 A/B；每个维度各 10 题，共 40 题；完成后自动计算 MBTI 代码并给出解释。';

  const startButton = document.createElement('button');
  startButton.className = 'w-full sm:w-auto bg-indigo-600 text-white font-bold py-3 px-10 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition-all duration-300 transform hover:scale-105';
  startButton.textContent = '开始答题';
  startButton.addEventListener('click', () => {
    state.view = 'quiz';
    render();
  });

  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(grid);
  card.appendChild(tips);
  card.appendChild(startButton);
  main.appendChild(card);
}

function renderQuestion(main) {
  const question = QUESTIONS[state.currentIndex];
  const card = document.createElement('div');
  card.className = 'w-full max-w-3xl bg-white/90 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg animate-fade-in';

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between mb-4 flex-wrap gap-3';

  const tag = document.createElement('span');
  tag.className = 'inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold';
  tag.textContent = `${question.dimension} 维度题`;

  header.appendChild(tag);
  header.appendChild(createProgressBar(state.currentIndex + 1, QUESTIONS.length));
  card.appendChild(header);

  const prompt = document.createElement('h2');
  prompt.className = 'text-2xl font-bold text-slate-900 mb-6 leading-relaxed';
  prompt.textContent = `${question.id}. ${question.text}`;
  card.appendChild(prompt);

  const optionList = document.createElement('div');
  optionList.className = 'grid sm:grid-cols-2 gap-3';

  const options = [
    { key: 'A', label: `A. ${question.optionA}` },
    { key: 'B', label: `B. ${question.optionB}` },
  ];

  options.forEach((option) => {
    const button = document.createElement('button');
    const isSelected = state.answers[state.currentIndex] === option.key;
    button.className = `text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-200 ${
      isSelected
        ? 'border-indigo-500 bg-indigo-50 text-indigo-900 shadow-inner'
        : 'border-transparent bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50'
    }`;

    const label = document.createElement('p');
    label.className = 'font-semibold';
    label.textContent = option.label;

    button.appendChild(label);
    button.addEventListener('click', () => {
      state.answers[state.currentIndex] = option.key;
      if (state.currentIndex < QUESTIONS.length - 1) {
        state.currentIndex += 1;
      } else {
        state.view = 'result';
      }
      render();
    });

    optionList.appendChild(button);
  });

  card.appendChild(optionList);

  const footer = document.createElement('div');
  footer.className = 'flex justify-between items-center mt-8 text-sm text-slate-500';

  const backButton = document.createElement('button');
  backButton.className = 'inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium';
  backButton.textContent = '← 上一题';
  backButton.disabled = state.currentIndex === 0;
  backButton.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      render();
    }
  });

  const skipInfo = document.createElement('span');
  skipInfo.textContent = 'A/B 单选，每题 1 分';

  footer.appendChild(backButton);
  footer.appendChild(skipInfo);
  card.appendChild(footer);
  main.appendChild(card);
}

function createScoreRow(label, score) {
  const row = document.createElement('div');
  row.className = 'p-4 rounded-xl border border-indigo-100 bg-indigo-50/60';

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between mb-2';

  const title = document.createElement('p');
  title.className = 'font-semibold text-slate-800';
  title.textContent = label;

  const value = document.createElement('p');
  value.className = 'text-xl font-bold text-indigo-700';
  value.textContent = `${score} 分`;

  header.appendChild(title);
  header.appendChild(value);

  const track = document.createElement('div');
  track.className = 'w-full bg-gray-200 rounded-full h-2.5';

  const progress = document.createElement('div');
  progress.className = 'bg-indigo-500 h-2.5 rounded-full';
  progress.style.width = `${(score / 10) * 100}%`;

  track.appendChild(progress);

  row.appendChild(header);
  row.appendChild(track);
  return row;
}

function renderResult(main) {
  const scores = computeScores();
  const { code, description, tips } = buildMBTI(scores);

  const card = document.createElement('div');
  card.className = 'w-full max-w-4xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in-up';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl font-bold text-indigo-900 mb-2';
  heading.textContent = 'MBTI 结果分析';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-sm text-slate-500 mb-6';
  subtitle.textContent = '结果仅供个人发展参考，非心理诊断。';

  const hero = document.createElement('div');
  hero.className = 'p-6 rounded-xl bg-indigo-50 border border-indigo-100 mb-6';

  const badge = document.createElement('p');
  badge.className = 'text-sm uppercase tracking-wide text-indigo-700 font-semibold mb-1';
  badge.textContent = code;

  const title = document.createElement('h3');
  title.className = 'text-2xl font-bold text-indigo-900 mb-2';
  title.textContent = RESULT_EXPLAIN[code] ? `你的类型：${code}` : `类型：${code}`;

  const summary = document.createElement('p');
  summary.className = 'text-slate-700 leading-relaxed';
  summary.textContent = description || '暂无对应解释，可能需要补充问答确认。';

  const note = document.createElement('p');
  note.className = 'text-sm text-slate-600 mt-2';
  note.textContent = tips;

  hero.appendChild(badge);
  hero.appendChild(title);
  hero.appendChild(summary);
  hero.appendChild(note);

  const scoreGrid = document.createElement('div');
  scoreGrid.className = 'grid md:grid-cols-2 gap-4 mb-6';
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.E, scores.E));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.I, scores.I));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.S, scores.S));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.N, scores.N));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.T, scores.T));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.F, scores.F));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.J, scores.J));
  scoreGrid.appendChild(createScoreRow(DIMENSION_NAMES.P, scores.P));

  const table = document.createElement('div');
  table.className = 'rounded-xl border border-slate-200 overflow-hidden mb-6';

  const headerRow = document.createElement('div');
  headerRow.className = 'grid grid-cols-3 bg-slate-100 text-sm font-semibold text-slate-700';
  ['维度对', 'A 选项计分', 'B 选项计分'].forEach((text) => {
    const cell = document.createElement('div');
    cell.className = 'px-4 py-3 border-r last:border-r-0 border-slate-200';
    cell.textContent = text;
    headerRow.appendChild(cell);
  });

  table.appendChild(headerRow);

  const dimensions = [
    { pair: 'E / I', a: scores.E, b: scores.I },
    { pair: 'S / N', a: scores.S, b: scores.N },
    { pair: 'T / F', a: scores.T, b: scores.F },
    { pair: 'J / P', a: scores.J, b: scores.P },
  ];

  dimensions.forEach((rowData, idx) => {
    const row = document.createElement('div');
    row.className = `grid grid-cols-3 text-sm ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`;

    const pairCell = document.createElement('div');
    pairCell.className = 'px-4 py-3 border-r border-slate-200 font-semibold text-slate-800';
    pairCell.textContent = rowData.pair;

    const aCell = document.createElement('div');
    aCell.className = 'px-4 py-3 border-r border-slate-200 text-indigo-700 font-semibold';
    aCell.textContent = `${rowData.a} 分`;

    const bCell = document.createElement('div');
    bCell.className = 'px-4 py-3 text-indigo-700 font-semibold';
    bCell.textContent = `${rowData.b} 分`;

    row.appendChild(pairCell);
    row.appendChild(aCell);
    row.appendChild(bCell);
    table.appendChild(row);
  });

  const actions = document.createElement('div');
  actions.className = 'flex flex-wrap gap-3 items-center';

  const restart = document.createElement('button');
  restart.className = 'bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-300';
  restart.textContent = '重新测验';
  restart.addEventListener('click', () => {
    state.view = 'start';
    state.currentIndex = 0;
    state.answers = [];
    render();
  });

  const guidance = document.createElement('div');
  guidance.className = 'text-sm text-slate-600';
  guidance.textContent = '分差越大倾向越明确，分差越小说明维度更居中，可结合面谈/二次问卷确认。';

  actions.appendChild(restart);
  actions.appendChild(guidance);

  card.appendChild(heading);
  card.appendChild(subtitle);
  card.appendChild(hero);
  card.appendChild(scoreGrid);
  card.appendChild(table);
  card.appendChild(actions);
  main.appendChild(card);
}

function render() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = '';

  const page = document.createElement('div');
  page.className = 'min-h-screen bg-indigo-50 text-slate-900 flex flex-col items-center p-4 sm:p-6 font-sans';

  const frame = document.createElement('div');
  frame.className = 'w-full max-w-5xl mx-auto flex flex-col flex-grow';

  const main = document.createElement('main');
  main.className = 'flex-grow flex flex-col items-center justify-center w-full';

  if (state.view === 'start') {
    renderStart(main);
  } else if (state.view === 'quiz') {
    renderQuestion(main);
  } else {
    renderResult(main);
  }

  frame.appendChild(main);
  page.appendChild(frame);
  root.appendChild(page);
}

render();
