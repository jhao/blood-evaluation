const QUESTIONS = [
  { id: 'A1', text: '我能从别人语气的细微变化中察觉其情绪。', dimension: 'A', reverse: false },
  { id: 'A2', text: '我能通过面部表情快速判断对方是否在紧张、尴尬或不耐烦。', dimension: 'A', reverse: false },
  { id: 'A3', text: '我能准确说出自己此刻的情绪（例如焦虑、委屈、愤怒、兴奋），而不只是“好/不好”。', dimension: 'A', reverse: false },
  { id: 'A4', text: '我能意识到自己情绪变化的触发点（人、事、话或环境）。', dimension: 'A', reverse: false },
  { id: 'A5', text: '我能从团队氛围中感受到“大家是否在担心某事”。', dimension: 'A', reverse: false },
  { id: 'A6', text: '我能分辨“生气”背后是失望、害怕还是被忽视。', dimension: 'A', reverse: false },
  { id: 'A7', text: '我经常在情绪已经爆发后才意识到自己不舒服。（R）', dimension: 'A', reverse: true },
  { id: 'A8', text: '我容易误解别人的情绪信号（把中立当敌意或把不满当玩笑）。（R）', dimension: 'A', reverse: true },
  { id: 'A9', text: '我能注意到自己身体反应与情绪的关联（心跳、呼吸、肩颈紧等）。', dimension: 'A', reverse: false },
  { id: 'A10', text: '我能在沟通中捕捉到“说的内容”和“真实感受”之间的差异。', dimension: 'A', reverse: false },
  { id: 'B1', text: '我能利用轻微紧张感提升专注，而不是被它拖垮。', dimension: 'B', reverse: false },
  { id: 'B2', text: '我在需要创意时会主动切换到更放松/愉悦的状态。', dimension: 'B', reverse: false },
  { id: 'B3', text: '我会用情绪作为信息：它提醒我“此事对我重要”。', dimension: 'B', reverse: false },
  { id: 'B4', text: '我能在压力下保持优先级判断，而不是被情绪带着乱做决定。', dimension: 'B', reverse: false },
  { id: 'B5', text: '我能用适度兴奋推动自己开始困难任务。', dimension: 'B', reverse: false },
  { id: 'B6', text: '我能把挫败感转化为复盘与改进的动力。', dimension: 'B', reverse: false },
  { id: 'B7', text: '我常因情绪波动而难以思考问题本身。（R）', dimension: 'B', reverse: true },
  { id: 'B8', text: '我的心情好坏几乎决定了我的效率高低。（R）', dimension: 'B', reverse: true },
  { id: 'B9', text: '我能在谈判/沟通前把自己调整到更有利的状态（平稳、坚定、开放）。', dimension: 'B', reverse: false },
  { id: 'B10', text: '我能在冲突场景中先抓住“要解决的问题”，而不是只盯着情绪对错。', dimension: 'B', reverse: false },
  { id: 'C1', text: '我能解释某种情绪是如何从小事逐步升级的。', dimension: 'C', reverse: false },
  { id: 'C2', text: '我理解同一种行为背后可能对应不同情绪（防御、害怕、羞耻、愤怒）。', dimension: 'C', reverse: false },
  { id: 'C3', text: '我能预判某个决定对团队士气可能带来的情绪反应。', dimension: 'C', reverse: false },
  { id: 'C4', text: '我能分辨“内疚”和“羞耻”的不同，并据此调整应对方式。', dimension: 'C', reverse: false },
  { id: 'C5', text: '我能理解别人为什么在我看来“不合理”却仍然会有那样的情绪。', dimension: 'C', reverse: false },
  { id: 'C6', text: '我能把复杂情绪拆分（例如“既期待又害怕”“又生气又舍不得”）。', dimension: 'C', reverse: false },
  { id: 'C7', text: '我经常搞不清自己为什么会有某种情绪。（R）', dimension: 'C', reverse: true },
  { id: 'C8', text: '我很难理解别人情绪背后的逻辑。（R）', dimension: 'C', reverse: true },
  { id: 'C9', text: '我能识别“被触发”的模式：类似事件会引发类似情绪。', dimension: 'C', reverse: false },
  { id: 'C10', text: '我能看懂情绪对人际关系的长期影响（积压、回避、信任下降等）。', dimension: 'C', reverse: false },
  { id: 'D1', text: '我能在情绪上来时暂停一下再回应，而不是立刻反击。', dimension: 'D', reverse: false },
  { id: 'D2', text: '我有稳定可用的情绪调节方法（呼吸、运动、写作、复盘、求助等）。', dimension: 'D', reverse: false },
  { id: 'D3', text: '我能在不压抑情绪的前提下，把表达方式变得更建设性。', dimension: 'D', reverse: false },
  { id: 'D4', text: '我能在冲突中既维护边界又尽量不伤害关系。', dimension: 'D', reverse: false },
  { id: 'D5', text: '我能在关系紧张时主动修复（澄清、道歉、共识、补救）。', dimension: 'D', reverse: false },
  { id: 'D6', text: '我能在他人情绪激动时先安抚再讨论事实。', dimension: 'D', reverse: false },
  { id: 'D7', text: '我经常把情绪憋着不说，最后一次性爆发。（R）', dimension: 'D', reverse: true },
  { id: 'D8', text: '我会用讽刺、冷处理或回避来“处理”冲突。（R）', dimension: 'D', reverse: true },
  { id: 'D9', text: '我能在压力大时维持睡眠/饮食/作息的基本稳定。', dimension: 'D', reverse: false },
  { id: 'D10', text: '我能在被误解时仍保持清晰表达，而不是情绪化升级。', dimension: 'D', reverse: false },
];

const SCALE_OPTIONS = [
  { value: 1, label: '1 = 非常不同意' },
  { value: 2, label: '2 = 比较不同意' },
  { value: 3, label: '3 = 不确定 / 一般' },
  { value: 4, label: '4 = 比较同意' },
  { value: 5, label: '5 = 非常同意' },
];

const DIMENSION_INFO = {
  A: { name: 'A · 情绪感知（Perceiving Emotions）', low: '容易错过非语言信号；建议练习“情绪命名+触发点记录+观察表情语气”。' },
  B: { name: 'B · 情绪运用（Using Emotions to Facilitate Thinking）', low: '情绪对效率影响大；建议建立“上场仪式”（呼吸/音乐/任务拆分）与压力下决策清单。' },
  C: { name: 'C · 情绪理解（Understanding Emotions）', low: '难拆分复杂情绪；建议用“情绪=事件解释+需求”模型复盘冲突。' },
  D: { name: 'D · 情绪管理（Managing Emotions）', low: '冲突易升级或压抑后爆发；建议学习“暂停-复述-表达需求-提出选项”的沟通脚本。' },
};

const state = {
  view: 'start',
  currentIndex: 0,
  answers: [],
};

function transformScore(question, raw) {
  if (raw == null) return 0;
  return question.reverse ? 6 - raw : raw;
}

function computeScores() {
  return QUESTIONS.reduce(
    (acc, question, index) => {
      const raw = state.answers[index];
      const score = transformScore(question, raw);
      acc.dimensions[question.dimension] += score;
      acc.total += score;
      return acc;
    },
    { dimensions: { A: 0, B: 0, C: 0, D: 0 }, total: 0 }
  );
}

function normalize(score, min, max) {
  if (score === 0) return 0;
  return Math.round(((score - min) / (max - min)) * 100);
}

function getLevel(score100) {
  if (score100 <= 39) return { label: '需要重点提升', color: 'text-rose-600 bg-rose-50 border-rose-100' };
  if (score100 <= 59) return { label: '基础水平', color: 'text-amber-600 bg-amber-50 border-amber-100' };
  if (score100 <= 79) return { label: '良好水平', color: 'text-emerald-700 bg-emerald-50 border-emerald-100' };
  return { label: '优势水平', color: 'text-indigo-700 bg-indigo-50 border-indigo-100' };
}

function createProgressBar(current, total) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full';

  const row = document.createElement('div');
  row.className = 'flex justify-between text-sm text-slate-600 mb-1';

  const label = document.createElement('span');
  label.textContent = '答题进度';

  const counter = document.createElement('span');
  counter.textContent = `第 ${current} / ${total} 题`;

  row.appendChild(label);
  row.appendChild(counter);

  const track = document.createElement('div');
  track.className = 'w-full h-2.5 bg-slate-200 rounded-full overflow-hidden';

  const bar = document.createElement('div');
  bar.className = 'h-2.5 bg-indigo-500 rounded-full transition-all duration-500 ease-out';
  bar.style.width = `${(current / total) * 100}%`;

  track.appendChild(bar);
  wrapper.appendChild(row);
  wrapper.appendChild(track);
  return wrapper;
}

function renderStart(main) {
  const card = document.createElement('div');
  card.className = 'w-full max-w-5xl bg-white/90 backdrop-blur p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in text-slate-800';

  const title = document.createElement('h1');
  title.className = 'text-3xl sm:text-4xl font-bold text-indigo-900 mb-3';
  title.textContent = '情商（EI）测评问卷 · 专业版';

  const intro = document.createElement('p');
  intro.className = 'text-slate-600 leading-relaxed mb-6';
  intro.textContent = '基于能力模型（A）、Bar-On 混合模型（B）、Goleman 胜任力模型（C+D）的综合测评，40 题五点量表，涵盖感知、运用、理解、管理四大维度。';

  const sections = [
    {
      heading: 'A. 能力模型（Ability Model）——学术界“核心定义”的源头',
      body:
        'Mayer & Salovey 提出 EI 是一种可被描述为“心理能力”的构念，并形成经典的四分支模型：1) 感知情绪 2) 运用情绪促进思考 3) 理解情绪 4) 管理情绪。若追求最严谨的能力测验，此模型更接近 MSCEIT。',
    },
    {
      heading: 'B. Bar-On 情绪-社会能力模型（Mixed Model）——组织与人才测评常用',
      body: 'Bar-On 将 EI 视为情绪与社会能力的组合，包含内在能力、人际能力、压力管理、适应性、总体情绪/心境等维度，并由 EQ-i 体系工具化。',
    },
    {
      heading: 'C. Goleman 胜任力模型（Competency Model）——管理与领导力语境最常用',
      body: 'Goleman 在组织管理领域普及 EI，常用自我觉察、自我管理、社会觉察（同理）、关系管理（社交技能）等结构，用于领导力与绩效语境。',
    },
    {
      heading: 'D. 测量工具共识：自评 vs 能力测验',
      body: 'EI 测量可为自评量表、能力测验、特质 EI 等。自评分量表易规模化但受主观偏差影响；能力测验更接近“能力”，但开发与实施更复杂。',
    },
  ];

  const grid = document.createElement('div');
  grid.className = 'grid md:grid-cols-2 gap-4 mb-6';

  sections.forEach((section) => {
    const block = document.createElement('div');
    block.className = 'p-4 rounded-xl border border-indigo-100 bg-indigo-50/60';

    const h = document.createElement('h3');
    h.className = 'font-semibold text-indigo-900 mb-1';
    h.textContent = section.heading;

    const p = document.createElement('p');
    p.className = 'text-sm text-slate-700 leading-relaxed';
    p.textContent = section.body;

    block.appendChild(h);
    block.appendChild(p);
    grid.appendChild(block);
  });

  const rules = document.createElement('div');
  rules.className = 'bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-xl text-sm text-slate-800 leading-relaxed mb-6';
  rules.innerHTML =
    '<strong>作答规则：</strong> 请选择过去 1–3 个月的稳定表现，1=非常不同意，5=非常同意。共 40 题，反向题将自动转换计分。';

  const scoring = document.createElement('div');
  scoring.className = 'bg-slate-900 text-white rounded-2xl p-4 sm:p-5 shadow-inner mb-6';
  scoring.innerHTML = `
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <div>
        <p class="text-lg font-semibold">评分逻辑</p>
        <p class="text-sm text-slate-200">反向题计分 = 6 - 原分；每个维度 10–50，总分 40–200；标准化 0–100：EQ_100 = (T - 40) / 160 * 100。</p>
      </div>
      <div class="text-right">
        <p class="text-sm uppercase tracking-wide text-slate-300">等级划分</p>
        <p class="font-bold">0–39 需要提升 · 40–59 基础 · 60–79 良好 · 80–100 优势</p>
      </div>
    </div>`;

  const start = document.createElement('button');
  start.className = 'w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-300';
  start.textContent = '开始测评';
  start.addEventListener('click', () => {
    state.view = 'quiz';
    render();
  });

  card.appendChild(title);
  card.appendChild(intro);
  card.appendChild(grid);
  card.appendChild(rules);
  card.appendChild(scoring);
  card.appendChild(start);
  main.appendChild(card);
}

function renderQuestion(main) {
  const question = QUESTIONS[state.currentIndex];
  const card = document.createElement('div');
  card.className = 'w-full max-w-4xl bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in';

  const header = document.createElement('div');
  header.className = 'flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4';

  const tag = document.createElement('span');
  tag.className = 'inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-800 text-sm font-semibold';
  tag.textContent = `${question.dimension} 维度 · ${DIMENSION_INFO[question.dimension].name}`;

  const progress = createProgressBar(state.currentIndex + 1, QUESTIONS.length);

  header.appendChild(tag);
  header.appendChild(progress);
  card.appendChild(header);

  const prompt = document.createElement('h2');
  prompt.className = 'text-2xl font-bold text-slate-900 mb-4 leading-relaxed';
  prompt.textContent = `${question.id}. ${question.text}`;
  card.appendChild(prompt);

  const note = document.createElement('p');
  note.className = 'text-sm text-slate-500 mb-4';
  note.textContent = '1=非常不同意 · 5=非常同意';
  card.appendChild(note);

  const options = document.createElement('div');
  options.className = 'grid sm:grid-cols-2 gap-3';

  SCALE_OPTIONS.forEach((item) => {
    const button = document.createElement('button');
    const isSelected = state.answers[state.currentIndex] === item.value;
    button.className = `text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-200 ${{
      true: 'border-indigo-500 bg-indigo-50 text-indigo-900 shadow-inner',
      false: 'border-transparent bg-slate-50 hover:border-indigo-300 hover:bg-indigo-50',
    }[isSelected]}`;

    const label = document.createElement('p');
    label.className = 'font-semibold';
    label.textContent = item.label;

    button.appendChild(label);
    button.addEventListener('click', () => {
      state.answers[state.currentIndex] = item.value;
      if (state.currentIndex < QUESTIONS.length - 1) {
        state.currentIndex += 1;
      } else {
        state.view = 'result';
      }
      render();
    });

    options.appendChild(button);
  });

  card.appendChild(options);

  const footer = document.createElement('div');
  footer.className = 'flex justify-between items-center mt-6 text-sm text-slate-500';

  const back = document.createElement('button');
  back.className = 'inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium';
  back.textContent = '← 上一题';
  back.disabled = state.currentIndex === 0;
  back.addEventListener('click', () => {
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      render();
    }
  });

  const remind = document.createElement('span');
  remind.textContent = question.reverse ? '本题为反向计分题（自动换算）' : '请选择最符合近 1–3 个月的表现';

  footer.appendChild(back);
  footer.appendChild(remind);
  card.appendChild(footer);
  main.appendChild(card);
}

function createScoreCard(label, raw, max = 50) {
  const score100 = normalize(raw, 10, max);
  const level = getLevel(score100);

  const card = document.createElement('div');
  card.className = 'p-4 rounded-xl border bg-white/80';

  const row = document.createElement('div');
  row.className = 'flex items-center justify-between mb-2';

  const name = document.createElement('p');
  name.className = 'font-semibold text-slate-800';
  name.textContent = label;

  const value = document.createElement('p');
  value.className = 'text-xl font-bold text-indigo-800';
  value.textContent = `${raw} 分`;

  row.appendChild(name);
  row.appendChild(value);

  const bar = document.createElement('div');
  bar.className = 'w-full bg-slate-200 rounded-full h-2.5 mb-2 overflow-hidden';

  const fill = document.createElement('div');
  fill.className = 'bg-indigo-500 h-2.5 rounded-full';
  fill.style.width = `${score100}%`;

  bar.appendChild(fill);

  const footer = document.createElement('div');
  footer.className = `inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${level.color}`;
  footer.textContent = `${level.label} · ${score100} / 100`;

  card.appendChild(row);
  card.appendChild(bar);
  card.appendChild(footer);
  return card;
}

function renderResult(main) {
  const { dimensions, total } = computeScores();
  const eq100 = normalize(total, 40, 200);
  const overallLevel = getLevel(eq100);

  const card = document.createElement('div');
  card.className = 'w-full max-w-5xl bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl animate-fade-in-up';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl font-bold text-indigo-900 mb-2';
  heading.textContent = '情商（EI）测评结果';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-sm text-slate-500 mb-6';
  subtitle.textContent = '结果基于 40 道自评题，供个人发展与教练辅导参考。';

  const hero = document.createElement('div');
  hero.className = 'p-5 rounded-xl bg-gradient-to-br from-indigo-50 via-white to-emerald-50 border border-indigo-100 mb-6';

  const totalLine = document.createElement('p');
  totalLine.className = 'text-2xl font-bold text-indigo-900 mb-2';
  totalLine.textContent = `标准化总分 EQ_100：${eq100} / 100`;

  const levelTag = document.createElement('span');
  levelTag.className = `inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-semibold ${overallLevel.color}`;
  levelTag.textContent = overallLevel.label;

  const raw = document.createElement('p');
  raw.className = 'text-slate-700 mt-3';
  raw.textContent = `原始总分 T = ${total}（范围 40–200），换算公式：EQ_100 = (T - 40) / 160 * 100。`;

  hero.appendChild(totalLine);
  hero.appendChild(levelTag);
  hero.appendChild(raw);

  const grid = document.createElement('div');
  grid.className = 'grid md:grid-cols-2 gap-4 mb-6';
  grid.appendChild(createScoreCard(DIMENSION_INFO.A.name, dimensions.A));
  grid.appendChild(createScoreCard(DIMENSION_INFO.B.name, dimensions.B));
  grid.appendChild(createScoreCard(DIMENSION_INFO.C.name, dimensions.C));
  grid.appendChild(createScoreCard(DIMENSION_INFO.D.name, dimensions.D));

  const tips = document.createElement('div');
  tips.className = 'space-y-3 mb-6';

  Object.entries(dimensions).forEach(([key, value]) => {
    const norm = normalize(value, 10, 50);
    const level = getLevel(norm);

    const row = document.createElement('div');
    row.className = 'p-4 rounded-xl border border-slate-200 bg-slate-50/80 flex flex-col gap-1';

    const header = document.createElement('div');
    header.className = 'flex flex-wrap items-center justify-between gap-2';

    const name = document.createElement('p');
    name.className = 'font-semibold text-slate-900';
    name.textContent = `${DIMENSION_INFO[key].name}：${value} 分（${norm}/100）`;

    const badge = document.createElement('span');
    badge.className = `inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${level.color}`;
    badge.textContent = level.label;

    const suggestion = document.createElement('p');
    suggestion.className = 'text-sm text-slate-700';
    suggestion.textContent = level.label === '需要重点提升' || level.label === '基础水平'
      ? DIMENSION_INFO[key].low
      : '保持并巩固现有策略，可在压力/冲突场景下刻意练习稳定输出。';

    header.appendChild(name);
    header.appendChild(badge);
    row.appendChild(header);
    row.appendChild(suggestion);
    tips.appendChild(row);
  });

  const actions = document.createElement('div');
  actions.className = 'flex flex-wrap gap-3 items-center';

  const restart = document.createElement('button');
  restart.className = 'bg-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-slate-900 focus:outline-none focus:ring-4 focus:ring-slate-300 transition-all duration-300';
  restart.textContent = '重新作答';
  restart.addEventListener('click', () => {
    state.view = 'start';
    state.currentIndex = 0;
    state.answers = [];
    render();
  });

  const note = document.createElement('p');
  note.className = 'text-sm text-slate-600';
  note.textContent = '维度越高代表该能力越稳定，若分差不大可结合访谈或复测确认。';

  actions.appendChild(restart);
  actions.appendChild(note);

  card.appendChild(heading);
  card.appendChild(subtitle);
  card.appendChild(hero);
  card.appendChild(grid);
  card.appendChild(tips);
  card.appendChild(actions);
  main.appendChild(card);
}

function render() {
  const root = document.getElementById('root');
  if (!root) return;
  root.innerHTML = '';

  const page = document.createElement('div');
  page.className = 'min-h-screen text-slate-900 flex flex-col items-center p-4 sm:p-6 font-sans';

  const frame = document.createElement('div');
  frame.className = 'w-full max-w-6xl mx-auto flex flex-col flex-grow';

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
