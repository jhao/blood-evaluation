const QUESTIONS = [
  { id: 1, text: '空闲时间你通常更愿意参与社交活动而不是独处？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 2, text: '遇到问题时你更倾向于向他人倾诉与讨论？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 3, text: '你在团队中讲话轻松且容易主动提出意见？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 4, text: '长时间参加社交活动会让你感觉精力充沛？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 5, text: '你觉得大量独处会让你感觉乏味或不适？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 6, text: '你更喜欢参与活动而不是思考活动的意义？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 7, text: '认识新朋友对你来说很自然，几乎没有压力？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 8, text: '你习惯通过交谈整理自己的思路？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 9, text: '你更容易因为与人交流而获得灵感？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 10, text: '相比写字表达，你更偏好直接说出口？', A: 'E', B: 'I', dimension: 'EI' },
  { id: 11, text: '你做决定时更依赖已知经验而非假设可能？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 12, text: '你更关注“事实”而不是“意义和象征”？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 13, text: '完成任务时你更偏好清晰具体的步骤？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 14, text: '谈论一个话题时，你容易被细节吸引？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 15, text: '你更信任自己看到和听到的，而非推测？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 16, text: '你不太喜欢没有明确标准或目标的创意讨论？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 17, text: '你对未来的规划基于现实条件展开？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 18, text: '你偏好基于数据的判断而非灵感判断？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 19, text: '面对问题，你更重视找出“已知的信息”？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 20, text: '你更信任过去的做法，而非创造全新路径？', A: 'S', B: 'N', dimension: 'SN' },
  { id: 21, text: '做决定时，你更重视逻辑合理而非人际和谐？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 22, text: '讨论中，你会指出错误而不担心对方感受？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 23, text: '你处理分歧时更关注事实对错？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 24, text: '你认为“结果比过程更重要”？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 25, text: '你更擅长从问题中抽离感受分析？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 26, text: '你倾向于保持客观，不受个人情绪影响？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 27, text: '别人评价你时常说你理性或冷静？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 28, text: '与其鼓励别人，你更倾向指出改善方向？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 29, text: '你认为原则应优先于个体例外？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 30, text: '他人遇到问题时，你首先想给方案而非安慰？', A: 'T', B: 'F', dimension: 'TF' },
  { id: 31, text: '你偏爱制定计划而非随遇而安？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 32, text: '你会提前完成任务而非临近截止才提交？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 33, text: '你希望生活井然有序而不是灵活可变？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 34, text: '你倾向先做完事再考虑要不要玩？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 35, text: '你更喜欢已经确定的事而不是开放探索？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 36, text: '没有明确结论的会议让你焦虑？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 37, text: '你认为“流程”优先于“灵感”？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 38, text: '你在旅途中倾向制定详细行程？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 39, text: '你认为及时开始比完整准备更重要？', A: 'J', B: 'P', dimension: 'JP' },
  { id: 40, text: '你觉得提前规划比临近调整更高效？', A: 'J', B: 'P', dimension: 'JP' },
];

const RESULT_EXPLAIN = {
  ISTJ: '严谨稳定，注重秩序和责任，偏好明确结构与规则。',
  ISFJ: '安静友善，关注他人需求，善于承担责任与支持。',
  INFJ: '富有洞察力与理想主义，关注长期意义与价值。',
  INTJ: '战略型思考者，擅长系统规划与独立分析。',
  ISTP: '独立务实，擅长分析和快速解决问题。',
  ISFP: '温和灵活，重视个人感受和创意表达。',
  INFP: '价值驱动者，追求意义、真诚与理想。',
  INTP: '逻辑探索者，偏好理论构建与系统思考。',
  ESTP: '行动派，擅长即兴与危机处理。',
  ESFP: '活力四射，热爱体验并鼓舞他人。',
  ENFP: '灵感型热情者，追求可能性与人际联结。',
  ENTP: '辩证创新者，擅长创造并挑战既有范式。',
  ESTJ: '组织者，擅长管理资源与推动执行。',
  ESFJ: '服务者，重视关系维护与氛围协调。',
  ENFJ: '导师型领导者，鼓励他人成长与合作。',
  ENTJ: '指挥官，具战略思维与决策魄力。',
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
    { key: 'A', label: `A 选项 · 加分 ${question.A}` },
    { key: 'B', label: `B 选项 · 加分 ${question.B}` },
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
