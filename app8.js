const QUESTIONS = [
  {
    id: 1,
    code: 'Q1',
    group: '行动与决策（A / D）',
    text: '临时被安排一项重要任务时，你通常会：',
    options: [
      { key: 'A', label: '立刻开始，边做边改', weights: { A: 2, D: 1 } },
      { key: 'B', label: '简单想一下就开始', weights: { A: 1, D: 1 } },
      { key: 'C', label: '先列清单再动手', weights: { C: 1 } },
      { key: 'D', label: '等条件完全明确再开始', weights: { C: 2, A: -1 } },
    ],
  },
  {
    id: 2,
    code: 'Q2',
    group: '行动与决策（A / D）',
    text: '面对一个高收益但不确定的机会，你更可能：',
    options: [
      { key: 'A', label: '直接尝试', weights: { D: 2, A: 1 } },
      { key: 'B', label: '快速评估后决定', weights: { D: 1, A: 1 } },
      { key: 'C', label: '反复比较利弊', weights: { D: -1, C: 1 } },
      { key: 'D', label: '大概率放弃', weights: { D: -2, C: 1 } },
    ],
  },
  {
    id: 3,
    code: 'Q3',
    group: '行动与决策（A / D）',
    text: '周末突然空出一天，你更倾向：',
    options: [
      { key: 'A', label: '立刻决定去做点新鲜的事', weights: { A: 2, D: 1 } },
      { key: 'B', label: '约人临时安排', weights: { A: 1, E: 1 } },
      { key: 'C', label: '做早就计划好的事', weights: { C: 1, A: -1 } },
      { key: 'D', label: '休息，不特意安排', weights: { C: 1, D: -1 } },
    ],
  },
  {
    id: 4,
    code: 'Q4',
    group: '行动与决策（A / D）',
    text: '工作中遇到瓶颈时，你通常：',
    options: [
      { key: 'A', label: '换个方式继续推进', weights: { A: 1, D: 1 } },
      { key: 'B', label: '找人讨论后行动', weights: { A: 1, E: 1 } },
      { key: 'C', label: '停下来重新分析', weights: { C: 1, D: -1 } },
      { key: 'D', label: '暂缓，等时机更合适', weights: { C: 1, D: -1 } },
    ],
  },
  {
    id: 5,
    code: 'Q5',
    group: '情绪与冲突（B / E）',
    text: '与他人意见冲突时，你更可能：',
    options: [
      { key: 'A', label: '当场说明立场', weights: { B: 2, E: -1 } },
      { key: 'B', label: '表达感受再讨论', weights: { B: 1, E: 1 } },
      { key: 'C', label: '先听完再回应', weights: { E: 2, B: -1 } },
      { key: 'D', label: '暂时不表态', weights: { B: -1, E: 1 } },
    ],
  },
  {
    id: 6,
    code: 'Q6',
    group: '情绪与冲突（B / E）',
    text: '情绪低落时，你通常会：',
    options: [
      { key: 'A', label: '找人陪着', weights: { E: 1, B: 1 } },
      { key: 'B', label: '主动倾诉', weights: { B: 2 } },
      { key: 'C', label: '自己消化', weights: { B: -1, E: -1 } },
      { key: 'D', label: '转移注意力', weights: { B: -1, E: 1 } },
    ],
  },
  {
    id: 7,
    code: 'Q7',
    group: '情绪与冲突（B / E）',
    text: '被误解时，你更常见的做法是：',
    options: [
      { key: 'A', label: '立刻澄清', weights: { B: 2, E: -1 } },
      { key: 'B', label: '解释原因', weights: { B: 1, E: 1 } },
      { key: 'C', label: '视情况再说', weights: { E: 1 } },
      { key: 'D', label: '不解释', weights: { B: -2, E: -1 } },
    ],
  },
  {
    id: 8,
    code: 'Q8',
    group: '情绪与冲突（B / E）',
    text: '在群体中，你更自然地：',
    options: [
      { key: 'A', label: '主动带节奏', weights: { B: 2, E: -1 } },
      { key: 'B', label: '推动讨论', weights: { B: 1, E: 1 } },
      { key: 'C', label: '听多于说', weights: { B: -1, E: 1 } },
      { key: 'D', label: '观察整体氛围', weights: { B: -1, E: 2 } },
    ],
  },
  {
    id: 9,
    code: 'Q9',
    group: '规则与秩序（C）',
    text: '对既定流程，你更可能：',
    options: [
      { key: 'A', label: '经常调整', weights: { D: 1, C: -1 } },
      { key: 'B', label: '灵活使用', weights: { C: 1, D: 1 } },
      { key: 'C', label: '大多数遵循', weights: { C: 1 } },
      { key: 'D', label: '严格执行', weights: { C: 2, D: -1 } },
    ],
  },
  {
    id: 10,
    code: 'Q10',
    group: '规则与秩序（C）',
    text: '面对明确规定，你通常：',
    options: [
      { key: 'A', label: '先看是否有更优解', weights: { D: 1, C: -1 } },
      { key: 'B', label: '看情况处理', weights: { D: 1, C: 1 } },
      { key: 'C', label: '原则上遵守', weights: { C: 1 } },
      { key: 'D', label: '尽量不偏离', weights: { C: 2, D: -1 } },
    ],
  },
  {
    id: 11,
    code: 'Q11',
    group: '规则与秩序（C）',
    text: '工作环境中，你更喜欢：',
    options: [
      { key: 'A', label: '高自由度', weights: { D: 1, C: -1 } },
      { key: 'B', label: '半结构化', weights: { C: 1, D: 1 } },
      { key: 'C', label: '清晰流程', weights: { C: 2, D: -1 } },
      { key: 'D', label: '高稳定性', weights: { C: 2, D: -2 } },
    ],
  },
  {
    id: 12,
    code: 'Q12',
    group: '规则与秩序（C）',
    text: '做事时，你更看重：',
    options: [
      { key: 'A', label: '结果是否有效', weights: { A: 1, D: 1 } },
      { key: 'B', label: '过程是否顺畅', weights: { C: 1 } },
      { key: 'C', label: '是否符合标准', weights: { C: 2 } },
      { key: 'D', label: '是否长期可控', weights: { C: 1, D: -1 } },
    ],
  },
  {
    id: 13,
    code: 'Q13',
    group: '关系与边界（E）',
    text: '团队合作中，你更关注：',
    options: [
      { key: 'A', label: '自己的节奏', weights: { E: -2, A: 1 } },
      { key: 'B', label: '整体推进', weights: { E: 1, B: 1 } },
      { key: 'C', label: '各自分工', weights: { C: 1, E: -1 } },
      { key: 'D', label: '他人感受', weights: { E: 2, B: 1 } },
    ],
  },
  {
    id: 14,
    code: 'Q14',
    group: '关系与边界（E）',
    text: '做决定时，你更容易受谁影响：',
    options: [
      { key: 'A', label: '自己的判断', weights: { E: -2, F: 1 } },
      { key: 'B', label: '重要他人', weights: { E: 2 } },
      { key: 'C', label: '多方意见', weights: { E: 2, F: -1 } },
      { key: 'D', label: '环境因素', weights: { E: -1, D: 1 } },
    ],
  },
  {
    id: 15,
    code: 'Q15',
    group: '关系与边界（E）',
    text: '当朋友有困难时，你通常：',
    options: [
      { key: 'A', label: '给解决方案', weights: { F: 1, E: -1 } },
      { key: 'B', label: '一边安慰一边建议', weights: { E: 1, F: 1 } },
      { key: 'C', label: '听完再说', weights: { E: 1 } },
      { key: 'D', label: '陪伴支持', weights: { E: 2, B: 1 } },
    ],
  },
  {
    id: 16,
    code: 'Q16',
    group: '关系与边界（E）',
    text: '关系中，你更看重：',
    options: [
      { key: 'A', label: '空间', weights: { E: -2 } },
      { key: 'B', label: '互动', weights: { E: 1, B: 1 } },
      { key: 'C', label: '稳定', weights: { C: 1, E: 1 } },
      { key: 'D', label: '情感连接', weights: { E: 2 } },
    ],
  },
  {
    id: 17,
    code: 'Q17',
    group: '思维方式（F）',
    text: '面对新观点，你通常：',
    options: [
      { key: 'A', label: '凭直觉判断', weights: { F: -2 } },
      { key: 'B', label: '看是否有共鸣', weights: { F: -1, B: 1 } },
      { key: 'C', label: '看逻辑是否成立', weights: { F: 1 } },
      { key: 'D', label: '看是否经得起验证', weights: { F: 2 } },
    ],
  },
  {
    id: 18,
    code: 'Q18',
    group: '思维方式（F）',
    text: '做选择时，你更信任：',
    options: [
      { key: 'A', label: '第一感觉', weights: { F: -2 } },
      { key: 'B', label: '当下情绪', weights: { F: -1, B: 1 } },
      { key: 'C', label: '数据事实', weights: { F: 2 } },
      { key: 'D', label: '经验积累', weights: { F: 1, C: 1 } },
    ],
  },
  {
    id: 19,
    code: 'Q19',
    group: '思维方式（F）',
    text: '面对艺术作品，你更关注：',
    options: [
      { key: 'A', label: '感觉', weights: { F: -1 } },
      { key: 'B', label: '情绪', weights: { B: 1, F: -1 } },
      { key: 'C', label: '结构', weights: { F: 1 } },
      { key: 'D', label: '意义', weights: { F: 2 } },
    ],
  },
  {
    id: 20,
    code: 'Q20',
    group: '思维方式（F）',
    text: '学习新事物时，你更习惯：',
    options: [
      { key: 'A', label: '直接上手', weights: { A: 1, F: -1 } },
      { key: 'B', label: '边学边试', weights: { A: 1, D: 1 } },
      { key: 'C', label: '系统理解', weights: { F: 2 } },
      { key: 'D', label: '先看全局', weights: { F: 1, D: 1 } },
    ],
  },
  {
    id: 21,
    code: 'Q21',
    group: '综合校准（混合）',
    text: '你更讨厌哪种状态：',
    options: [
      { key: 'A', label: '被限制', weights: { A: 1, D: 1 } },
      { key: 'B', label: '被忽视', weights: { E: 2, B: 1 } },
      { key: 'C', label: '混乱', weights: { C: 2 } },
      { key: 'D', label: '不确定', weights: { D: -2, F: 1 } },
    ],
  },
  {
    id: 22,
    code: 'Q22',
    group: '综合校准（混合）',
    text: '你更容易被哪种事情吸引：',
    options: [
      { key: 'A', label: '挑战', weights: { A: 2, D: 2 } },
      { key: 'B', label: '人', weights: { E: 2, B: 1 } },
      { key: 'C', label: '秩序', weights: { C: 2 } },
      { key: 'D', label: '可能性', weights: { D: 2, F: 1 } },
    ],
  },
  {
    id: 23,
    code: 'Q23',
    group: '综合校准（混合）',
    text: '当计划被打乱时，你更可能：',
    options: [
      { key: 'A', label: '顺势改变', weights: { D: 2, A: 1 } },
      { key: 'B', label: '调整方案', weights: { C: 1, D: 1 } },
      { key: 'C', label: '拉回正轨', weights: { C: 2 } },
      { key: 'D', label: '暂停重来', weights: { C: 1, D: -1 } },
    ],
  },
  {
    id: 24,
    code: 'Q24',
    group: '综合校准（混合）',
    text: '如果必须二选一，你更偏向：',
    options: [
      { key: 'A', label: '自由', weights: { D: 2, A: 1 } },
      { key: 'B', label: '关系', weights: { E: 2, B: 1 } },
      { key: 'C', label: '稳定', weights: { C: 2, D: -1 } },
      { key: 'D', label: '理想', weights: { F: 2, D: 1 } },
    ],
  },
];

const TRAIT_META = {
  A: { name: '行动力 / 决断速度' },
  B: { name: '情绪表达方式' },
  C: { name: '规则与秩序偏好' },
  D: { name: '风险与变化偏好' },
  E: { name: '关系取向（自我 vs 他人）' },
  F: { name: '思维方式（理性 vs 感性）' },
};

const ZODIAC_WEIGHTS = {
  '白羊座': { A: 2, D: 2, B: 1 },
  '金牛座': { C: 2, D: -1 },
  '双子座': { B: 2, F: 1 },
  '巨蟹座': { E: 2, B: -1 },
  '狮子座': { A: 2, B: 2, E: 1 },
  '处女座': { C: 2, F: -1 },
  '天秤座': { E: 2, C: 1 },
  '天蝎座': { B: -2, D: 2 },
  '射手座': { D: 2, C: -1 },
  '摩羯座': { C: 2, A: 1 },
  '水瓶座': { F: 2, C: -1 },
  '双鱼座': { B: 2, F: -2 },
};

const ZODIAC_DESCRIPTIONS = {
  '白羊座': '行动快、决断强，面对变化更倾向直接推进。你在压力情境下更愿意先行动，再优化路径。',
  '金牛座': '重视稳定与可控性，做事节奏稳健。一旦认定方向，会持续投入并抵御外界干扰。',
  '双子座': '思维灵活、反应迅速，擅长在多种信息中切换。你更容易被交流与新鲜事物激发。',
  '巨蟹座': '关系敏感度高，重视安全感与情感连接。你往往在照顾他人与维护氛围中找到定位。',
  '狮子座': '存在感强，愿意承担责任与角色。你在群体中自然倾向引导与表达。',
  '处女座': '注重结构、细节与逻辑一致性。你更习惯通过分析与优化来掌控局面。',
  '天秤座': '重视平衡与关系质量，善于协调不同立场。你在决策中会反复权衡影响。',
  '天蝎座': '情绪内敛但感受强烈，对关键问题态度极端而专注。你更在意深度与真实。',
  '射手座': '偏好变化与可能性，抗拒过度约束。你在探索未知中获得能量。',
  '摩羯座': '目标导向强，重视长期成果。你倾向通过规划与坚持来实现价值。',
  '水瓶座': '独立思考，关注体系与创新。你更容易跳出既有框架看问题。',
  '双鱼座': '感受力强，容易被情绪与氛围影响。你在共情与想象中构建意义。',
};

const state = {
  view: 'start',
  currentIndex: 0,
  answers: Array(QUESTIONS.length).fill(null),
};

function computeTraits() {
  return QUESTIONS.reduce(
    (acc, question, index) => {
      const choice = state.answers[index];
      if (!choice) return acc;
      const option = question.options.find((item) => item.key === choice);
      if (!option) return acc;
      Object.entries(option.weights).forEach(([trait, value]) => {
        acc[trait] += value;
      });
      return acc;
    },
    { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 }
  );
}

function computeZodiacScores(traits) {
  const scores = {};
  Object.entries(ZODIAC_WEIGHTS).forEach(([zodiac, weights]) => {
    let score = 0;
    Object.entries(weights).forEach(([trait, weight]) => {
      score += (traits[trait] || 0) * weight;
    });
    scores[zodiac] = score;
  });
  return scores;
}

function createProgress(current, total) {
  const percent = Math.floor((current / total) * 100);
  return `
    <div class="w-full">
      <div class="flex justify-between text-sm text-slate-600 mb-2">
        <span>答题进度</span>
        <span>第 ${current} / ${total} 题</span>
      </div>
      <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
        <div class="h-2.5 bg-indigo-500 rounded-full transition-all duration-500 ease-out" style="width:${percent}%"></div>
      </div>
    </div>
  `;
}

function renderStart(root) {
  root.innerHTML = `
    <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-violet-50">
      <div class="max-w-5xl mx-auto px-4 py-10 lg:py-14">
        <div class="bg-white/90 backdrop-blur shadow-xl rounded-2xl p-6 sm:p-10 border border-slate-100 animate-fade-in">
          <p class="text-xs font-semibold text-indigo-600 uppercase tracking-[0.2em] mb-3">行为化问卷 · 24 题</p>
          <h1 class="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">性格推断星座</h1>
          <p class="text-slate-600 leading-relaxed mb-6">
            通过 24 个行为选择题，计算 6 个性格维度（A–F），再匹配星座权重矩阵，输出主星座与次星座推断。题目仅呈现行为描述，不出现性格形容词，降低作答暗示。
          </p>
          <div class="grid md:grid-cols-2 gap-4 mb-6">
            <div class="p-4 rounded-xl border border-indigo-100 bg-indigo-50/70 text-slate-700 text-sm space-y-2">
              <p class="font-semibold text-indigo-900">作答提示</p>
              <ul class="list-disc list-inside space-y-1">
                <li>每题 4 选 1，依据真实、直觉的选择作答。</li>
                <li>不出现「外向/理性」等标签，全部为具体行为或偏好。</li>
                <li>完成后展示性格维度得分、星座排序与解读。</li>
              </ul>
            </div>
            <div class="p-4 rounded-xl border border-amber-100 bg-amber-50/80 text-slate-700 text-sm space-y-2">
              <p class="font-semibold text-amber-900">内部计分逻辑（简要）</p>
              <ul class="list-disc list-inside space-y-1">
                <li>每个选项作用于 1–2 个维度，权重 -2 ~ +2。</li>
                <li>6 维度累计 → 套用星座矩阵 → 生成得分排序。</li>
                <li>给出主星座、次星座与维度雷达/条形提示。</li>
              </ul>
            </div>
          </div>
          <div class="flex flex-wrap gap-3">
            <button id="start-btn" class="px-5 py-3 rounded-xl bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition">
              开始答题
            </button>
            <div class="text-sm text-slate-500 flex items-center gap-2">
              <span class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
              预计耗时 3–5 分钟
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const startBtn = document.getElementById('start-btn');
  startBtn.addEventListener('click', () => {
    state.view = 'quiz';
    state.currentIndex = 0;
    render();
  });
}

function renderQuiz(root) {
  const question = QUESTIONS[state.currentIndex];
  const total = QUESTIONS.length;
  const selected = state.answers[state.currentIndex];

  root.innerHTML = `
    <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-violet-50">
      <div class="max-w-5xl mx-auto px-4 py-8 lg:py-12">
        <div class="bg-white/90 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-4 sm:p-6 lg:p-8 animate-fade-in">
          ${createProgress(state.currentIndex + 1, total)}
          <div class="mt-6 mb-2 flex items-center gap-2 text-sm text-indigo-700 font-semibold">
            <span class="px-2 py-1 rounded-full bg-indigo-50 border border-indigo-100">${question.group}</span>
            <span class="text-slate-500">题目 ${question.code}</span>
          </div>
          <h2 class="text-2xl font-bold text-slate-900 mb-4 leading-snug">${question.text}</h2>
          <div class="grid gap-3">
            ${question.options
              .map((option) => {
                const isActive = selected === option.key;
                const base =
                  'w-full text-left px-4 py-3 rounded-xl border transition focus:outline-none';
                const active =
                  'bg-indigo-50 border-indigo-200 text-indigo-900 shadow-sm';
                const normal =
                  'bg-white border-slate-200 text-slate-800 hover:border-indigo-200 hover:bg-indigo-50/60';
                return `
                  <button
                    class="${base} ${isActive ? active : normal}"
                    data-option="${option.key}"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-sm font-semibold text-indigo-700 mt-0.5">${option.key}</span>
                      <span class="leading-relaxed">${option.label}</span>
                    </div>
                  </button>
                `;
              })
              .join('')}
          </div>
          <div class="mt-6 flex justify-between items-center">
            <button
              id="prev-btn"
              class="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
              ${state.currentIndex === 0 ? 'disabled' : ''}
            >
              上一题
            </button>
            <div class="flex items-center gap-3">
              <span class="text-sm text-slate-500">剩余 ${total - state.currentIndex - 1} 题</span>
              <button
                id="next-btn"
                class="px-5 py-2.5 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
              >
                ${state.currentIndex === total - 1 ? '提交并查看结果' : '下一题'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  root.querySelectorAll('[data-option]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.answers[state.currentIndex] = btn.getAttribute('data-option');
      renderQuiz(root);
    });
  });

  const prev = document.getElementById('prev-btn');
  if (prev) {
    prev.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        state.currentIndex -= 1;
        render();
      }
    });
  }

  const next = document.getElementById('next-btn');
  next.addEventListener('click', () => {
    if (!state.answers[state.currentIndex]) {
      alert('请选择一个选项再继续。');
      return;
    }

    if (state.currentIndex === total - 1) {
      const unfinished = state.answers.findIndex((ans) => !ans);
      if (unfinished !== -1) {
        state.currentIndex = unfinished;
        render();
        return;
      }
      state.view = 'result';
      render();
    } else {
      state.currentIndex += 1;
      render();
    }
  });
}

function renderResult(root) {
  const traits = computeTraits();
  const zodiacScores = computeZodiacScores(traits);
  const ranking = Object.entries(zodiacScores).sort((a, b) => b[1] - a[1]);
  const [primary, secondary] = ranking;
  const maxTrait = Math.max(...Object.values(traits).map((v) => Math.abs(v)), 1);

  root.innerHTML = `
    <div class="min-h-screen bg-gradient-to-b from-slate-50 via-white to-violet-50">
      <div class="max-w-6xl mx-auto px-4 py-8 lg:py-12 space-y-6">
        <div class="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-8 animate-fade-in">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <p class="text-xs font-semibold text-indigo-600 uppercase tracking-[0.2em] mb-2">星座推断结果</p>
              <h2 class="text-3xl font-bold text-slate-900">主星座：${primary ? primary[0] : '—'}</h2>
              <p class="text-slate-600 mt-2 leading-relaxed">${primary ? ZODIAC_DESCRIPTIONS[primary[0]] : '暂无结果'}</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:w-auto">
              <div class="p-4 rounded-xl border border-indigo-100 bg-indigo-50/70">
                <p class="text-xs text-indigo-700 font-semibold mb-1">主星座得分</p>
                <p class="text-2xl font-bold text-indigo-900">${primary ? primary[1] : '-'}</p>
              </div>
              <div class="p-4 rounded-xl border border-amber-100 bg-amber-50/80">
                <p class="text-xs text-amber-700 font-semibold mb-1">次星座（第二名）</p>
                <p class="text-lg font-semibold text-amber-900">${secondary ? `${secondary[0]} · ${secondary[1]}` : '—'}</p>
              </div>
            </div>
          </div>
          <div class="mt-6 grid lg:grid-cols-3 gap-4">
            <div class="lg:col-span-2 p-4 rounded-xl border border-slate-100 bg-slate-50">
              <p class="text-sm font-semibold text-slate-800 mb-3">星座排序</p>
              <div class="grid sm:grid-cols-2 gap-2">
                ${ranking
                  .map(
                    ([name, score], index) => `
                      <div class="flex items-center justify-between px-3 py-2 rounded-lg border ${index < 2 ? 'border-indigo-200 bg-indigo-50' : 'border-slate-200 bg-white'}">
                        <div class="flex items-center gap-2 text-slate-800">
                          <span class="text-xs font-semibold text-slate-500">#${index + 1}</span>
                          <span class="font-medium">${name}</span>
                        </div>
                        <span class="text-sm font-semibold text-slate-900">${score}</span>
                      </div>
                    `
                  )
                  .join('')}
              </div>
            </div>
            <div class="p-4 rounded-xl border border-emerald-100 bg-emerald-50/70">
              <p class="text-sm font-semibold text-emerald-900 mb-2">解读提示</p>
              <ul class="text-sm text-slate-700 space-y-1 list-disc list-inside">
                <li>星座得分由 6 维度线性加权，无外部数据。</li>
                <li>可关注次高分星座，理解混合特质。</li>
                <li>维度为区间变量，可用于后续画像或聚类。</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-8 animate-fade-in-up">
          <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">
            <div>
              <p class="text-xs font-semibold text-indigo-600 uppercase tracking-[0.2em] mb-1">维度刻画</p>
              <h3 class="text-2xl font-bold text-slate-900">6 个稳定性格维度</h3>
            </div>
            <button id="restart-btn" class="px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50">
              重新作答
            </button>
          </div>
          <div class="grid md:grid-cols-2 gap-3">
            ${Object.entries(traits)
              .map(([trait, value]) => {
                const percent = Math.min(100, Math.round((Math.abs(value) / maxTrait) * 100));
                const tone =
                  value > 0
                    ? 'bg-indigo-100 text-indigo-900 border-indigo-200'
                    : value < 0
                    ? 'bg-amber-100 text-amber-900 border-amber-200'
                    : 'bg-slate-100 text-slate-800 border-slate-200';
                const direction = value > 0 ? '偏正向' : value < 0 ? '偏反向' : '中性';
                return `
                  <div class="p-4 rounded-xl border ${tone}">
                    <div class="flex items-center justify-between mb-2">
                      <div class="flex items-center gap-2">
                        <span class="px-2 py-1 rounded-md bg-white/80 border border-white/60 text-xs font-semibold text-slate-700">${trait}</span>
                        <span class="font-semibold text-slate-800">${TRAIT_META[trait].name}</span>
                      </div>
                      <span class="text-sm font-semibold text-slate-700">${value}</span>
                    </div>
                    <div class="w-full h-2.5 bg-white/60 rounded-full overflow-hidden border border-white/70">
                      <div class="h-full ${value >= 0 ? 'bg-indigo-500' : 'bg-amber-500'}" style="width:${percent}%"></div>
                    </div>
                    <p class="text-xs text-slate-600 mt-2">方向：${direction} · 相对强度：${percent}%</p>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>

        <div class="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100 p-6 lg:p-8">
          <h4 class="text-lg font-semibold text-slate-900 mb-3">作答回顾</h4>
          <div class="grid md:grid-cols-2 gap-3">
            ${QUESTIONS.map((q, index) => {
              const choice = state.answers[index];
              const option = q.options.find((o) => o.key === choice);
              return `
                <div class="p-3 rounded-lg border border-slate-100 bg-slate-50">
                  <p class="text-sm text-slate-500 mb-1">${q.code} · ${q.group}</p>
                  <p class="font-semibold text-slate-900 mb-2 leading-snug">${q.text}</p>
                  <p class="text-sm text-indigo-700 font-medium">选择：${choice || '未答'} ${option ? `· ${option.label}` : ''}</p>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  const restart = document.getElementById('restart-btn');
  restart.addEventListener('click', () => {
    state.view = 'quiz';
    state.currentIndex = 0;
    state.answers = Array(QUESTIONS.length).fill(null);
    render();
  });
}

function render() {
  const root = document.getElementById('root');
  if (!root) return;
  if (state.view === 'start') {
    renderStart(root);
  } else if (state.view === 'quiz') {
    renderQuiz(root);
  } else {
    renderResult(root);
  }
}

render();
