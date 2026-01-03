const QUESTIONS = [
  { id: 'E1', text: '在多人场合，我通常会自然地主动开启话题。', dimension: 'E', reverse: false },
  { id: 'E2', text: '我更偏好“边做边想”，而不是反复推敲后才行动。', dimension: 'E', reverse: false },
  { id: 'E3', text: '当团队需要人出面协调时，我往往愿意承担。', dimension: 'E', reverse: false },
  { id: 'E4', text: '空闲时，我更倾向安排与人互动的活动，而不是独处。', dimension: 'E', reverse: false },
  { id: 'E5', text: '在不熟悉的环境里，我也能较快进入状态并与人建立联系。', dimension: 'E', reverse: false },
  { id: 'E6', text: '我习惯把想法当场说出来，而不是先在心里反复整理。', dimension: 'E', reverse: false },
  { id: 'E7', text: '我很少在公开场合表达观点。（反向）', dimension: 'E', reverse: true },
  { id: 'E8', text: '我更喜欢长时间独自完成工作，不希望被打扰。（反向）', dimension: 'E', reverse: true },
  { id: 'E9', text: '临时有聚会或活动邀请，我通常愿意参加。', dimension: 'E', reverse: false },
  { id: 'E10', text: '与陌生人交流时，我很少感到尴尬或拘束。', dimension: 'E', reverse: false },
  { id: 'E11', text: '我在社交后通常精力更充沛。', dimension: 'E', reverse: false },
  { id: 'E12', text: '我更倾向于观察别人说什么做什么，自己尽量不成为焦点。（反向）', dimension: 'E', reverse: true },
  { id: 'N1', text: '遇到突发变动时，我会明显紧张一段时间才恢复。', dimension: 'N', reverse: false },
  { id: 'N2', text: '我会反复回想已经发生的尴尬或失误。', dimension: 'N', reverse: false },
  { id: 'N3', text: '在压力大时，我更容易出现睡眠、食欲或身体不适的波动。', dimension: 'N', reverse: false },
  { id: 'N4', text: '我对他人的语气、表情变化较敏感，容易联想到负面含义。', dimension: 'N', reverse: false },
  { id: 'N5', text: '即便事情已经解决，我也可能仍然担心它会再次出问题。', dimension: 'N', reverse: false },
  { id: 'N6', text: '我在等待结果（如审批、体检、考试、面试）时会坐立不安。', dimension: 'N', reverse: false },
  { id: 'N7', text: '我很少因为小事心烦或情绪波动。（反向）', dimension: 'N', reverse: true },
  { id: 'N8', text: '我通常能很快从不愉快中走出来。（反向）', dimension: 'N', reverse: true },
  { id: 'N9', text: '当任务堆积时，我会明显变得急躁或焦虑。', dimension: 'N', reverse: false },
  { id: 'N10', text: '我会担心自己在别人眼中的表现不够好。', dimension: 'N', reverse: false },
  { id: 'N11', text: '我有时会无缘由地感到烦躁或低落。', dimension: 'N', reverse: false },
  { id: 'N12', text: '即使被批评，我也很少往心里去。（反向）', dimension: 'N', reverse: true },
  { id: 'P1', text: '需要做决定时，我更看重结果与效率，而不是他人的感受。', dimension: 'P', reverse: false },
  { id: 'P2', text: '当别人明显软弱或纠结时，我可能会觉得不耐烦。', dimension: 'P', reverse: false },
  { id: 'P3', text: '为了达成目标，我能接受更强硬的谈判方式。', dimension: 'P', reverse: false },
  { id: 'P4', text: '我不太在意“大家是否喜欢我”，更在意“事情是否做成”。', dimension: 'P', reverse: false },
  { id: 'P5', text: '我更愿意遵循自己的一套规则，而不是按惯例行事。', dimension: 'P', reverse: false },
  { id: 'P6', text: '我有时会因为一时冲动说出比较尖锐的话。', dimension: 'P', reverse: false },
  { id: 'P7', text: '看到别人受委屈或受伤，我通常会很难受并想帮忙。（反向）', dimension: 'P', reverse: true },
  { id: 'P8', text: '我通常会主动避免与人发生正面冲突。（反向）', dimension: 'P', reverse: true },
  { id: 'P9', text: '如果我认为对方不专业或不讲理，我会直接指出甚至当场反驳。', dimension: 'P', reverse: false },
  { id: 'P10', text: '我能把竞争当成常态，并且愿意“赢”。', dimension: 'P', reverse: false },
  { id: 'P11', text: '当规则妨碍效率时，我倾向于寻找“更快的路径”。', dimension: 'P', reverse: false },
  { id: 'P12', text: '我更倾向于迁就别人，以免破坏关系。（反向）', dimension: 'P', reverse: true },
  { id: 'L1', text: '我从未对任何人产生过不满情绪。', dimension: 'L', reverse: false },
  { id: 'L2', text: '我从不说出任何可能伤害他人的话。', dimension: 'L', reverse: false },
  { id: 'L3', text: '我始终能做到按计划完成每一件事，从不拖延。', dimension: 'L', reverse: false },
  { id: 'L4', text: '我从未在任何场合做过让自己后悔的小事。', dimension: 'L', reverse: false },
  { id: 'L5', text: '即使非常疲惫或不舒服，我也从不对他人表现出不耐烦。', dimension: 'L', reverse: false },
  { id: 'L6', text: '我从来不会在心里评判别人。', dimension: 'L', reverse: false },
  { id: 'L7', text: '我在任何情况下都能保持完美的礼貌与克制。', dimension: 'L', reverse: false },
  { id: 'L8', text: '我从未因情绪而影响到自己的工作或学习效率。', dimension: 'L', reverse: false },
  { id: 'L9', text: '我从不找借口或推卸责任。', dimension: 'L', reverse: false },
  { id: 'L10', text: '我从未在任何事情上夸大过自己的表现。', dimension: 'L', reverse: false },
  { id: 'L11', text: '我从未在任何时候说过“善意的谎言”。', dimension: 'L', reverse: false },
  { id: 'L12', text: '我在所有关系中都从不与人发生摩擦。', dimension: 'L', reverse: false },
];

const SCALE_OPTIONS = [
  { value: 1, label: '1 = 从不符合' },
  { value: 2, label: '2 = 很少符合' },
  { value: 3, label: '3 = 有时符合' },
  { value: 4, label: '4 = 经常符合' },
  { value: 5, label: '5 = 几乎总是符合' },
];

const DIMENSION_DETAILS = {
  E: {
    name: '外向（E）',
    high: '外向/高唤醒需求：推动协作、拓展资源、适合对外沟通与协调。',
    low: '内向/低外显社交需求：更擅长深度专注与独立思考，社交消耗明显。',
  },
  N: {
    name: '神经质（N）',
    high: '情绪敏感/压力反应强：风险敏感度高，需注意过度担忧与恢复慢。',
    low: '情绪稳定/复原快：抗压稳健，需防低估他人情绪或风险信号。',
  },
  P: {
    name: '精神质/坚硬性（P）',
    high: '更强硬、竞争导向：执行力与谈判力强，需关注人际摩擦与反馈。',
    low: '温和、共情高：利于关系维护与支持协作，需练习边界与果断。',
  },
  L: {
    name: '掩饰/社会赞许（L）',
    high: '高分代表可能存在“理想化作答/社会赞许”倾向，解释需谨慎。',
    low: '较低通常代表坦诚或不在意社会期待，极低亦需结合一致性校验。',
  },
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
    { dimensions: { E: 0, N: 0, P: 0, L: 0 }, total: 0 }
  );
}

function getBand(score) {
  if (score <= 28) return { label: '低', color: 'text-rose-600 bg-rose-50 border-rose-200' };
  if (score <= 44) return { label: '中', color: 'text-amber-700 bg-amber-50 border-amber-200' };
  return { label: '高', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
}

function getLValidity(score) {
  if (score >= 48) {
    return {
      tone: 'bg-amber-50 border-amber-200 text-amber-900',
      title: 'L ≥ 48：高度怀疑“过度美化/迎合”，结果仅供参考',
      desc: '建议提示受测者：适度放松、确保匿名与用途透明，并可结合一致性校验或复测确认。',
    };
  }
  if (score >= 40) {
    return {
      tone: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      title: '40 ≤ L < 48：轻-中度偏高，解读时对极端分保持谨慎',
      desc: '建议在报告中加“谨慎解释”标识，可提示结合访谈、行为数据或复测。',
    };
  }
  return {
    tone: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    title: 'L < 40：作答有效性一般可接受',
    desc: '仍可检查反向题一致性或选项集中度，确保作答质量稳定。',
  };
}

function createProgressBar(current, total) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full';

  const row = document.createElement('div');
  row.className = 'flex justify-between text-sm text-slate-600 mb-2';

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
  title.textContent = '艾森克人格模型（EPQ）四维评估';

  const intro = document.createElement('p');
  intro.className = 'text-slate-600 leading-relaxed mb-5';
  intro.textContent = '覆盖外向（E）、神经质（N）、精神质/坚硬性（P）、掩饰/社会赞许（L）四个维度，共 48 题五点量表。题目采用行为频率/场景化表述并混合正反向，测评前请阅读说明。';

  const rules = document.createElement('div');
  rules.className = 'grid md:grid-cols-2 gap-4 mb-6';

  const left = document.createElement('div');
  left.className = 'p-4 rounded-xl border border-indigo-100 bg-indigo-50/70';
  left.innerHTML = `
    <p class="font-semibold text-indigo-900 mb-2">作答说明</p>
    <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
      <li>回顾近 6–12 个月的真实状态，无对错。</li>
      <li>量表：1=从不符合，5=几乎总是符合。</li>
      <li>反向题将自动计分，无需手动换算。</li>
      <li>题目不标注维度，避免作答偏差；结果页再呈现维度与解释。</li>
    </ul>`;

  const right = document.createElement('div');
  right.className = 'p-4 rounded-xl border border-amber-100 bg-amber-50/80';
  right.innerHTML = `
    <p class="font-semibold text-amber-900 mb-2">计分与解释</p>
    <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
      <li>反向分 = 6 - 原始分；每维 12 题，范围 12–60，可同时计算平均分（/12）。</li>
      <li>量程分段：12–28=低，29–44=中，45–60=高（无常模时的临时解释）。</li>
      <li>L 用于有效性：L≥48 高度怀疑社会赞许；40≤L&lt;48 谨慎解释；L&lt;40 通常可接受。</li>
      <li>建议结合一致性校验（反向题冲突、单一选项比例过高）。</li>
    </ul>`;

  rules.appendChild(left);
  rules.appendChild(right);

  const start = document.createElement('button');
  start.className = 'w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-200 transition-all duration-300';
  start.textContent = '开始测评';
  start.addEventListener('click', () => {
    state.view = 'quiz';
    render();
  });

  card.appendChild(title);
  card.appendChild(intro);
  card.appendChild(rules);
  card.appendChild(start);
  main.appendChild(card);
}

function renderQuestion(main) {
  const question = QUESTIONS[state.currentIndex];
  const card = document.createElement('div');
  card.className = 'w-full max-w-4xl bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in';

  const header = document.createElement('div');
  header.className = 'flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between mb-4';

  const title = document.createElement('p');
  title.className = 'text-lg font-semibold text-indigo-900';
  title.textContent = `第 ${state.currentIndex + 1} 题`;

  const progress = createProgressBar(state.currentIndex + 1, QUESTIONS.length);

  header.appendChild(title);
  header.appendChild(progress);
  card.appendChild(header);

  const prompt = document.createElement('h2');
  prompt.className = 'text-2xl font-bold text-slate-900 mb-4 leading-relaxed';
  prompt.textContent = question.text;
  card.appendChild(prompt);

  const note = document.createElement('p');
  note.className = 'text-sm text-slate-500 mb-4';
  note.textContent = '请按近 6–12 个月的真实体验选择 1–5 分。';
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
  remind.textContent = '部分题为反向计分，系统会自动换算';

  footer.appendChild(back);
  footer.appendChild(remind);
  card.appendChild(footer);
  main.appendChild(card);
}

function createScoreCard(dimension, raw) {
  const avg = (raw / 12).toFixed(2);
  const band = getBand(raw);
  const percent = Math.round(((raw - 12) / 48) * 100);

  const card = document.createElement('div');
  card.className = 'p-4 rounded-xl border bg-white/85 flex flex-col gap-2';

  const header = document.createElement('div');
  header.className = 'flex items-center justify-between';

  const name = document.createElement('p');
  name.className = 'font-semibold text-slate-900';
  name.textContent = DIMENSION_DETAILS[dimension].name;

  const value = document.createElement('p');
  value.className = 'text-xl font-bold text-indigo-900';
  value.textContent = `${raw} 分`;

  header.appendChild(name);
  header.appendChild(value);

  const bar = document.createElement('div');
  bar.className = 'w-full h-2.5 bg-slate-200 rounded-full overflow-hidden';

  const fill = document.createElement('div');
  fill.className = 'h-2.5 bg-indigo-500 rounded-full';
  fill.style.width = `${percent}%`;

  const meta = document.createElement('div');
  meta.className = 'flex items-center justify-between text-sm text-slate-600';
  meta.innerHTML = `<span>平均 ${avg} / 5</span><span>${percent} / 100</span>`;

  const badge = document.createElement('span');
  badge.className = `inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${band.color}`;
  badge.textContent = `${band.label} 区间（12–60）`;

  card.appendChild(header);
  card.appendChild(bar);
  card.appendChild(meta);
  card.appendChild(badge);
  return card;
}

function buildComboText(levels) {
  const combos = [];
  if (levels.E === '高' && levels.N === '高') combos.push('E高+N高：社交驱动强但压力反应也强，适合对外推动，但需防情绪耗竭。');
  if (levels.E === '高' && levels.N === '低') combos.push('E高+N低：典型“稳定型外向”，对外沟通与不确定环境适应性佳。');
  if (levels.E === '低' && levels.N === '高') combos.push('E低+N高：安静谨慎、易内耗，适合深度任务，需结构化减压。');
  if (levels.P === '高' && levels.N === '低') combos.push('P高+N低：强硬果断、抗压，适合攻坚与谈判，但要防人际磨损。');
  if (levels.P === '低' && levels.E === '低') combos.push('P低+E低：温和内敛，适合长期精细协作与支持型岗位，需训练拒绝与边界。');
  if (!combos.length) combos.push('维度分布相对均衡，可结合具体场景与岗位需求，灵活运用各维优势。');
  return combos;
}

function renderResult(main) {
  const { dimensions } = computeScores();
  const levels = {
    E: getBand(dimensions.E).label,
    N: getBand(dimensions.N).label,
    P: getBand(dimensions.P).label,
    L: getBand(dimensions.L).label,
  };
  const lValidity = getLValidity(dimensions.L);
  const combos = buildComboText(levels);

  const card = document.createElement('div');
  card.className = 'w-full max-w-5xl bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl animate-fade-in-up';

  const heading = document.createElement('h2');
  heading.className = 'text-3xl font-bold text-indigo-900 mb-2';
  heading.textContent = '测评结果与解读';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-sm text-slate-500 mb-6';
  subtitle.textContent = '分数范围 12–60（平均 1–5），量程分段为低/中/高；无常模时仅作临时解释，建议结合本地样本建立常模。';

  const grid = document.createElement('div');
  grid.className = 'grid md:grid-cols-2 gap-4 mb-6';
  grid.appendChild(createScoreCard('E', dimensions.E));
  grid.appendChild(createScoreCard('N', dimensions.N));
  grid.appendChild(createScoreCard('P', dimensions.P));
  grid.appendChild(createScoreCard('L', dimensions.L));

  const validity = document.createElement('div');
  validity.className = `p-4 rounded-xl border ${lValidity.tone} mb-6`;

  const vTitle = document.createElement('p');
  vTitle.className = 'font-semibold mb-1';
  vTitle.textContent = `作答有效性（L = ${dimensions.L}）`;

  const vDesc = document.createElement('p');
  vDesc.className = 'text-sm leading-relaxed';
  vDesc.innerHTML = `<strong>${lValidity.title}</strong> ${lValidity.desc}`;

  validity.appendChild(vTitle);
  validity.appendChild(vDesc);

  const insights = document.createElement('div');
  insights.className = 'space-y-3 mb-6';

  ['E', 'N', 'P'].forEach((key) => {
    const band = getBand(dimensions[key]);
    const block = document.createElement('div');
    block.className = 'p-4 rounded-xl border border-slate-200 bg-slate-50/80';

    const row = document.createElement('div');
    row.className = 'flex flex-wrap items-center justify-between gap-2';

    const name = document.createElement('p');
    name.className = 'font-semibold text-slate-900';
    name.textContent = `${DIMENSION_DETAILS[key].name}：${dimensions[key]} 分（${band.label}）`;

    const badge = document.createElement('span');
    badge.className = `inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold ${band.color}`;
    badge.textContent = band.label === '高' ? '偏高' : band.label === '低' ? '偏低' : '中等';

    const desc = document.createElement('p');
    desc.className = 'text-sm text-slate-700 mt-2';
    desc.textContent = band.label === '高' ? DIMENSION_DETAILS[key].high : band.label === '低' ? DIMENSION_DETAILS[key].low : '分数居中，表现更受情境影响，具备弹性。';

    row.appendChild(name);
    row.appendChild(badge);
    block.appendChild(row);
    block.appendChild(desc);
    insights.appendChild(block);
  });

  const comboBlock = document.createElement('div');
  comboBlock.className = 'p-4 rounded-xl border border-indigo-100 bg-indigo-50/70 mb-6';

  const comboTitle = document.createElement('p');
  comboTitle.className = 'font-semibold text-indigo-900 mb-2';
  comboTitle.textContent = '组合画像与提示';

  const comboList = document.createElement('ul');
  comboList.className = 'list-disc list-inside space-y-2 text-sm text-slate-700';
  combos.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    comboList.appendChild(li);
  });

  comboBlock.appendChild(comboTitle);
  comboBlock.appendChild(comboList);

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
  note.textContent = '若需更专业解释，可收集本地样本建立常模，或结合访谈/一致性校验进一步确认。';

  actions.appendChild(restart);
  actions.appendChild(note);

  card.appendChild(heading);
  card.appendChild(subtitle);
  card.appendChild(grid);
  card.appendChild(validity);
  card.appendChild(insights);
  card.appendChild(comboBlock);
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
