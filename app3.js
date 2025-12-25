const QUESTIONS = [
  { id: 1, dimension: 'D', text: '我能够在压力下迅速做出决策。' },
  { id: 2, dimension: 'D', text: '别人认为我有明显的目标感和方向感。' },
  { id: 3, dimension: 'D', text: '我不喜欢别人干涉我的决策。' },
  { id: 4, dimension: 'D', text: '我宁愿自己独立决策，也不愿反复征求意见。' },
  { id: 5, dimension: 'D', text: '为了达成目标，我可以接受一定的冲突与对抗。' },
  { id: 6, dimension: 'D', text: '比起过程，我更看重结果。' },
  { id: 7, dimension: 'D', text: '我倾向于主导讨论，而不是跟随节奏。' },
  { id: 8, dimension: 'D', text: '当事情进展缓慢时，我会明显着急。' },
  { id: 9, dimension: 'I', text: '我喜欢在团队中表达观点并获得关注。' },
  { id: 10, dimension: 'I', text: '陌生人对我来说并不难以接近。' },
  { id: 11, dimension: 'I', text: '我更容易从情绪中获得动力，而不是数据。' },
  { id: 12, dimension: 'I', text: '我常被认为富有表现力和感染力。' },
  { id: 13, dimension: 'I', text: '我能够快速激励他人进入状态。' },
  { id: 14, dimension: 'I', text: '我习惯即兴发挥而非严格准备。' },
  { id: 15, dimension: 'I', text: '与其按流程，我更喜欢创意性的方式。' },
  { id: 16, dimension: 'I', text: '我不喜欢枯燥重复的工作模式。' },
  { id: 17, dimension: 'S', text: '我偏好稳定、持续的工作节奏。' },
  { id: 18, dimension: 'S', text: '我会在发言前先评估他人感受。' },
  { id: 19, dimension: 'S', text: '比起争胜，我更希望大家相处融洽。' },
  { id: 20, dimension: 'S', text: '我对频繁变化的环境比较抗拒。' },
  { id: 21, dimension: 'S', text: '别人喜欢找我倾诉或寻求支持。' },
  { id: 22, dimension: 'S', text: '我不太愿意过早否定他人的意见。' },
  { id: 23, dimension: 'S', text: '我更倾向于“把事做稳”，而不是“做得最快”。' },
  { id: 24, dimension: 'S', text: '做决定前我倾向反复权衡利弊。' },
  { id: 25, dimension: 'C', text: '我喜欢基于事实与数据的判断方式。' },
  { id: 26, dimension: 'C', text: '我对工作中的细节问题非常敏感。' },
  { id: 27, dimension: 'C', text: '不确定的变量越多，我就越谨慎。' },
  { id: 28, dimension: 'C', text: '流程规范是保证质量的必要手段。' },
  { id: 29, dimension: 'C', text: '我不喜欢未经论证就贸然推进计划。' },
  { id: 30, dimension: 'C', text: '错误或低质量的交付让我非常焦虑。' },
  { id: 31, dimension: 'C', text: '我在工作前会先设计体系和框架。' },
  { id: 32, dimension: 'C', text: '没有明确的信息时，我倾向于暂缓行动。' },
];

const SCALE_OPTIONS = [
  { value: 1, label: '1 分 · 非常不符合' },
  { value: 2, label: '2 分 · 不太符合' },
  { value: 3, label: '3 分 · 中性/一般' },
  { value: 4, label: '4 分 · 比较符合' },
  { value: 5, label: '5 分 · 非常符合' },
];

const DIMENSION_META = {
  D: {
    name: '老虎 Tiger',
    alias: '力量型/主导型',
    summary: ['目标导向、节奏快、决断力强、愿意承担压力与责任', '快速推进、解决冲突、结果驱动，但需注意情绪和节奏管理'],
  },
  I: {
    name: '孔雀 Peacock',
    alias: '表现型/影响型',
    summary: ['外向、社交、感染力强、激励氛围', '擅长沟通与创意，但规划与持续度需要关注'],
  },
  S: {
    name: '考拉 Koala',
    alias: '稳定型/支持型',
    summary: ['和谐、包容、稳健执行、韧性强', '擅长协作与支持，但需练习冲突回应与决断速度'],
  },
  C: {
    name: '猫头鹰 Owl',
    alias: '谨慎型/分析型',
    summary: ['数据敏感、重细节、风险控制、体系化', '保障质量与逻辑，但要防止完美主义和拖延'],
  },
  CH: {
    name: '变色龙 Chameleon',
    alias: '多向适配',
    summary: ['多维平衡、角色灵活、环境适配度高', '可切换风格但需明确优先级，避免摇摆不定'],
  },
  BCH: {
    name: '平衡型变色龙',
    alias: '集中于中位区间',
    summary: ['四维均衡且保持中间档位', '擅长协调整合，需要主动设定主导策略与边界'],
  },
};

const ANIMAL_DESCRIPTIONS = {
  D: {
    title: '老虎 · 支配型',
    intro: '这一类人如同老虎一般强势、有力量，特点鲜明且外露，能“打仗”，但掌控欲强。',
    cues: [
      '习惯说祈使句，喜欢下指令，表达直接，总想快速进入“说正事”的环节。',
      '关注他在集体活动中的表现。比如点菜时，果断拿起菜单主导的，多半是老虎型人。',
      '老虎型人的目标感极强，总是当机立断，因此很容易被识别出来。',
    ],
  },
  I: {
    title: '孔雀 · 表达型',
    intro: '孔雀的形象非常适合表现型的人：努力“开屏”、展现自己，高度在意感受。',
    cues: [
      '沟通时“自来熟”，与任何陌生人都能快速熟络，常见于对外联络类岗位。',
      '非常愿意和别人发生肢体接触，把“关系维护”放在第一位，不自觉取悦对方。',
      '沟通过程中希望对方喜欢自己，情绪感染力强。',
    ],
  },
  C: {
    title: '猫头鹰 · 精确型',
    intro: '这一类人处事周全，讲求事实依据，同时给人“聊天兴致不高”的感觉。',
    cues: [
      '集体活动中表态慢，但并非走神，而是在细心观察、核对信息。',
      '偏好数据和逻辑，讲话谨慎克制，注重结论的可靠性。',
    ],
  },
  S: {
    title: '考拉 · 关心型',
    intro: '这一类人的特点是缓慢、温和、友好，展露出毫无攻击性的善意。',
    cues: [
      '不会主动拉近关系，但持续以温柔的方式回应，给人安全感。',
      '口头禅常是“随便、我都行、听你们的”，不争不抢，不愿得罪人。',
      '相较孔雀的主动友好，考拉更偏向被动、稳定的陪伴。',
    ],
  },
};

const state = {
  view: 'start',
  currentIndex: 0,
  answers: [],
  uploadPreview: null,
};

const root = document.getElementById('root');

function computeScores() {
  return QUESTIONS.reduce((acc, question, index) => {
    const value = state.answers[index] ?? 0;
    acc[question.dimension] += value;
    return acc;
  }, { D: 0, I: 0, S: 0, C: 0 });
}

function formatPercent(score) {
  const percent = Math.round(((score - 8) / 32) * 100);
  return `${Math.max(0, Math.min(100, percent))}%`;
}

function analyzeProfile(scores) {
  const entries = Object.entries(scores);
  const balanced = entries.every(([, v]) => v >= 24 && v <= 32);
  const sorted = entries.sort((a, b) => b[1] - a[1]);
  const top = sorted[0];
  const second = sorted[1];
  const third = sorted[2];

  if (balanced) {
    return { code: 'BCH', label: DIMENSION_META.BCH.name, detail: DIMENSION_META.BCH };
  }

  if (sorted[0][1] - third[1] <= 4) {
    return { code: 'CH', label: DIMENSION_META.CH.name, detail: DIMENSION_META.CH };
  }

  if (top[1] - second[1] <= 4) {
    const dualCode = `${top[0]}${second[0]}`;
    return {
      code: dualCode,
      label: `${DIMENSION_META[top[0]].name} + ${DIMENSION_META[second[0]].name}`,
      detail: {
        name: '双向综合型',
        alias: dualCode,
        summary: [
          `${DIMENSION_META[top[0]].name} 与 ${DIMENSION_META[second[0]].name} 特质并存，得分接近（差值 ≤ 4）。`,
          '可根据场景切换表达方式，建议明确主导情境与边界。',
        ],
      },
      dominant: top[0],
      secondary: second[0],
    };
  }

  return { code: top[0], label: DIMENSION_META[top[0]].name, detail: DIMENSION_META[top[0]] };
}

function createProgressBar(current, total) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full';

  const labelRow = document.createElement('div');
  labelRow.className = 'flex justify-between items-center mb-1 text-sm text-stone-600';

  const title = document.createElement('span');
  title.className = 'font-medium';
  title.textContent = '答题进度';

  const counter = document.createElement('span');
  counter.textContent = `第 ${current} / ${total} 题`;

  labelRow.appendChild(title);
  labelRow.appendChild(counter);

  const track = document.createElement('div');
  track.className = 'w-full bg-gray-200 rounded-full h-2.5';

  const progress = document.createElement('div');
  progress.className = 'bg-amber-500 h-2.5 rounded-full transition-all duration-500 ease-out';
  progress.style.width = `${(current / total) * 100}%`;

  track.appendChild(progress);
  wrapper.appendChild(labelRow);
  wrapper.appendChild(track);

  return wrapper;
}

function renderStart(main) {
  const card = document.createElement('div');
  card.className = 'w-full max-w-3xl bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg animate-fade-in';

  const title = document.createElement('h1');
  title.className = 'text-3xl sm:text-4xl font-bold text-amber-800 mb-3';
  title.textContent = '动物人格风格（D·I·S·C）专业版测评';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-stone-600 mb-6';
  subtitle.textContent = '32 题 · 每题 1-5 分 · 参考国际/IP 量表结构（无反向题）';

  const grid = document.createElement('div');
  grid.className = 'grid sm:grid-cols-2 gap-4 mb-6';

  const items = [
    { name: '老虎 Tiger（D）', desc: '力量型 / 主导型：决断、节奏快、结果导向' },
    { name: '孔雀 Peacock（I）', desc: '表现型 / 影响型：外向、感染力、创意表达' },
    { name: '考拉 Koala（S）', desc: '稳定型 / 支持型：和谐、包容、韧性执行' },
    { name: '猫头鹰 Owl（C）', desc: '谨慎型 / 分析型：数据、细节、流程质量' },
  ];

  items.forEach((item) => {
    const panel = document.createElement('div');
    panel.className = 'p-4 rounded-xl border border-amber-100 bg-amber-50/70 text-left';

    const heading = document.createElement('p');
    heading.className = 'font-semibold text-amber-800';
    heading.textContent = item.name;

    const desc = document.createElement('p');
    desc.className = 'text-sm text-stone-600 mt-1';
    desc.textContent = item.desc;

    panel.appendChild(heading);
    panel.appendChild(desc);
    grid.appendChild(panel);
  });

  const tips = document.createElement('div');
  tips.className = 'bg-amber-100 border-l-4 border-amber-500 p-4 rounded-r-xl text-stone-700 text-sm leading-relaxed mb-8';
  tips.innerHTML = '<strong>作答说明：</strong> 1 = 非常不符合，5 = 非常符合，请根据直觉作答；维度满分 40 分，24-32 为中位区间。结果仅供个人发展参考。';

  const startButton = document.createElement('button');
  startButton.className = 'w-full sm:w-auto bg-amber-600 text-white font-bold py-3 px-10 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300 transform hover:scale-105';
  startButton.textContent = '开始测验';
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
  tag.className = 'inline-flex items-center px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-sm font-semibold';
  tag.textContent = `${question.dimension} · ${DIMENSION_META[question.dimension].name}`;

  header.appendChild(tag);
  header.appendChild(createProgressBar(state.currentIndex + 1, QUESTIONS.length));
  card.appendChild(header);

  const prompt = document.createElement('h2');
  prompt.className = 'text-2xl font-bold text-stone-900 mb-6 leading-relaxed';
  prompt.textContent = `${question.id}. ${question.text}`;
  card.appendChild(prompt);

  const optionList = document.createElement('div');
  optionList.className = 'grid sm:grid-cols-2 gap-3';

  SCALE_OPTIONS.forEach((option) => {
    const button = document.createElement('button');
    const isSelected = state.answers[state.currentIndex] === option.value;
    button.className = `text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-amber-200 ${
      isSelected
        ? 'border-amber-500 bg-amber-50 text-amber-900 shadow-inner'
        : 'border-transparent bg-stone-50 hover:border-amber-300 hover:bg-amber-50'
    }`;

    const label = document.createElement('p');
    label.className = 'font-semibold';
    label.textContent = option.label;

    button.appendChild(label);
    button.addEventListener('click', () => {
      state.answers[state.currentIndex] = option.value;
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
  footer.className = 'flex justify-between items-center mt-8 text-sm text-stone-500';

  const backButton = document.createElement('button');
  backButton.className = 'inline-flex items-center gap-2 text-stone-600 hover:text-stone-900 font-medium';
  backButton.textContent = '← 上一题';
  backButton.disabled = state.currentIndex === 0;
  backButton.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      render();
    }
  });

  const skipInfo = document.createElement('span');
  skipInfo.textContent = '每题 1-5 分，建议直觉作答';

  footer.appendChild(backButton);
  footer.appendChild(skipInfo);
  card.appendChild(footer);

  main.appendChild(card);
}

function createScoreRow(label, score, percent) {
  const row = document.createElement('div');
  row.className = 'p-4 rounded-xl border border-amber-100 bg-amber-50/60';

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between mb-2';

  const title = document.createElement('p');
  title.className = 'font-semibold text-stone-800';
  title.textContent = label;

  const value = document.createElement('p');
  value.className = 'text-xl font-bold text-amber-700';
  value.textContent = `${score} 分 (${percent})`;

  header.appendChild(title);
  header.appendChild(value);

  const track = document.createElement('div');
  track.className = 'w-full bg-gray-200 rounded-full h-2.5';

  const progress = document.createElement('div');
  progress.className = 'bg-amber-500 h-2.5 rounded-full';
  progress.style.width = percent;

  track.appendChild(progress);

  row.appendChild(header);
  row.appendChild(track);

  return row;
}

function renderResult(main) {
  const scores = computeScores();
  const analysis = analyzeProfile(scores);
  const detail = analysis.detail;

  const card = document.createElement('div');
  card.className = 'w-full max-w-4xl bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in-up';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl font-bold text-amber-900 mb-2';
  heading.textContent = '动物人格风格报告';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-sm text-stone-500 mb-6';
  subtitle.textContent = '结果仅供个人发展参考，非心理诊断';

  const hero = document.createElement('div');
  hero.className = 'p-6 rounded-xl bg-amber-50 border border-amber-100 mb-6';

  const badge = document.createElement('p');
  badge.className = 'text-sm uppercase tracking-wide text-amber-700 font-semibold mb-1';
  badge.textContent = analysis.label;

  const title = document.createElement('h3');
  title.className = 'text-2xl font-bold text-amber-900 mb-2';
  title.textContent = `${detail.name}（${detail.alias}）`;

  const summary = document.createElement('ul');
  summary.className = 'list-disc list-inside text-stone-700 space-y-1';
  detail.summary.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    summary.appendChild(li);
  });

  hero.appendChild(badge);
  hero.appendChild(title);
  hero.appendChild(summary);

  const scoreGrid = document.createElement('div');
  scoreGrid.className = 'grid md:grid-cols-2 gap-4 mb-6';
  scoreGrid.appendChild(createScoreRow('D · 老虎 Tiger', scores.D, formatPercent(scores.D)));
  scoreGrid.appendChild(createScoreRow('I · 孔雀 Peacock', scores.I, formatPercent(scores.I)));
  scoreGrid.appendChild(createScoreRow('S · 考拉 Koala', scores.S, formatPercent(scores.S)));
  scoreGrid.appendChild(createScoreRow('C · 猫头鹰 Owl', scores.C, formatPercent(scores.C)));

  const tipBox = document.createElement('div');
  tipBox.className = 'p-5 rounded-xl bg-stone-50 border border-stone-200 text-stone-700 text-sm leading-relaxed mb-6';
  tipBox.textContent = '判定逻辑：主类型为最高分维度；次高分若与主类型差值 ≤ 4，则为双向综合型；如前三维差值均 ≤ 4 则判定为变色龙型；四维均在 24–32 之间则为平衡型变色龙。百分比分 = (得分-8)/32 × 100。';

  const actions = document.createElement('div');
  actions.className = 'flex flex-wrap gap-3 items-center';

  const restart = document.createElement('button');
  restart.className = 'bg-gray-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300';
  restart.textContent = '重新测验';
  restart.addEventListener('click', () => {
    state.view = 'start';
    state.currentIndex = 0;
    state.answers = [];
    render();
  });

  const save = document.createElement('div');
  save.className = 'flex items-center gap-2 text-stone-600 text-sm';
  save.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18A2.25 2.25 0 004.5 20.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"/><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z"/></svg> 截屏保存本页，方便后续复盘。';

  actions.appendChild(restart);
  actions.appendChild(save);

  card.appendChild(heading);
  card.appendChild(subtitle);
  card.appendChild(hero);
  card.appendChild(scoreGrid);
  card.appendChild(tipBox);
  card.appendChild(renderAnimalDescriptions());
  card.appendChild(renderUploadSection());
  card.appendChild(actions);

  main.appendChild(card);
}

function renderAnimalDescriptions() {
  const section = document.createElement('section');
  section.className = 'mb-6';

  const heading = document.createElement('div');
  heading.className = 'flex items-center justify-between flex-wrap gap-3 mb-3';

  const title = document.createElement('h4');
  title.className = 'text-xl font-bold text-amber-900';
  title.textContent = '动物画像详解';

  const hint = document.createElement('p');
  hint.className = 'text-sm text-stone-500';
  hint.textContent = '结合观察线索，帮助你理解自己与他人的行为模式。';

  heading.appendChild(title);
  heading.appendChild(hint);

  const grid = document.createElement('div');
  grid.className = 'grid md:grid-cols-2 gap-4';

  ['D', 'I', 'C', 'S'].forEach((key) => {
    const meta = DIMENSION_META[key];
    const data = ANIMAL_DESCRIPTIONS[key];

    const card = document.createElement('div');
    card.className = 'p-5 rounded-xl border border-amber-100 bg-white/80 shadow-sm h-full flex flex-col gap-2';

    const label = document.createElement('p');
    label.className = 'text-sm font-semibold text-amber-700 uppercase tracking-wide';
    label.textContent = meta.name;

    const subtitle = document.createElement('p');
    subtitle.className = 'text-lg font-bold text-stone-900';
    subtitle.textContent = data.title;

    const intro = document.createElement('p');
    intro.className = 'text-sm text-stone-700 leading-relaxed';
    intro.textContent = data.intro;

    const list = document.createElement('ul');
    list.className = 'list-disc list-inside text-sm text-stone-700 space-y-1';

    data.cues.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });

    card.appendChild(label);
    card.appendChild(subtitle);
    card.appendChild(intro);
    card.appendChild(list);
    grid.appendChild(card);
  });

  section.appendChild(heading);
  section.appendChild(grid);
  return section;
}

function renderUploadSection() {
  const section = document.createElement('section');
  section.className = 'mb-6 p-5 rounded-xl bg-amber-50 border border-amber-200';

  const title = document.createElement('h4');
  title.className = 'text-lg font-bold text-amber-900 mb-2';
  title.textContent = '上传你的参考图片';

  const desc = document.createElement('p');
  desc.className = 'text-sm text-stone-700 leading-relaxed mb-3';
  desc.textContent = '调研结束后，你可以上传团队或个人的图片作为结论参考，方便对照人格风格画像，进行更直观的回顾。图片仅保存在本地，不会被上传到服务器。';

  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.className = 'block w-full text-sm text-stone-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-amber-600 file:text-white hover:file:bg-amber-700 cursor-pointer';
  input.addEventListener('change', (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      state.uploadPreview = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      state.uploadPreview = reader.result;
      render();
    };
    reader.readAsDataURL(file);
  });

  section.appendChild(title);
  section.appendChild(desc);
  section.appendChild(input);

  if (state.uploadPreview) {
    const previewWrapper = document.createElement('div');
    previewWrapper.className = 'mt-4';

    const previewLabel = document.createElement('p');
    previewLabel.className = 'text-sm font-semibold text-stone-800 mb-2';
    previewLabel.textContent = '预览 · 仅你自己可见';

    const previewImage = document.createElement('img');
    previewImage.src = state.uploadPreview;
    previewImage.alt = '上传的参考图片预览';
    previewImage.className = 'w-full max-h-80 object-contain rounded-lg border border-amber-100 shadow-inner bg-white';

    previewWrapper.appendChild(previewLabel);
    previewWrapper.appendChild(previewImage);
    section.appendChild(previewWrapper);
  }

  return section;
}

function render() {
  if (!root) return;
  root.innerHTML = '';

  const page = document.createElement('div');
  page.className = 'min-h-screen bg-amber-50 text-stone-900 flex flex-col items-center p-4 sm:p-6 font-sans';

  const frame = document.createElement('div');
  frame.className = 'w-full max-w-4xl mx-auto flex flex-col flex-grow';

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
