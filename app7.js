const QUESTIONS = [
  { id: 1, text: '过去两周，我很难对日常小事产生愉快感', domain: 'A', reverse: false },
  { id: 2, text: '即便遇到好消息，情绪也难以被带动起来', domain: 'A', reverse: false },
  { id: 3, text: '我对原本喜欢的活动缺乏期待感', domain: 'A', reverse: false },
  { id: 4, text: '我更容易感到空、麻木或“没感觉”', domain: 'A', reverse: false },
  { id: 5, text: '我对自己的评价明显变差', domain: 'B', reverse: false },
  { id: 6, text: '我会反复回想“自己哪里做错了”并难以停止', domain: 'B', reverse: false },
  { id: 7, text: '我常认为未来不会变好', domain: 'B', reverse: false },
  { id: 8, text: '我觉得自己对别人是一种负担', domain: 'B', reverse: false },
  { id: 9, text: '我对自己的优点很难产生认可', domain: 'B', reverse: false },
  { id: 10, text: '即使没做什么也感觉很累', domain: 'C', reverse: false },
  { id: 11, text: '我做事速度比以往慢很多', domain: 'C', reverse: false },
  { id: 12, text: '我会坐立不安、难以安静下来', domain: 'C', reverse: false },
  { id: 13, text: '完成日常任务需要更大的意志力', domain: 'C', reverse: false },
  { id: 14, text: '入睡困难或夜间反复醒来', domain: 'D', reverse: false },
  { id: 15, text: '比平时更早醒，醒后难再入睡', domain: 'D', reverse: false },
  { id: 16, text: '睡得比平时更多，但仍不解乏', domain: 'D', reverse: false },
  { id: 17, text: '作息紊乱（白天嗜睡/夜间清醒）', domain: 'D', reverse: false },
  { id: 18, text: '食欲明显下降或对食物失去兴趣', domain: 'E', reverse: false },
  { id: 19, text: '反而更容易用进食来“缓解情绪”', domain: 'E', reverse: false },
  { id: 20, text: '体重或食量变化已被自己或他人注意到', domain: 'E', reverse: false },
  { id: 21, text: '身体不适增多（如胸闷、胃口差、疼痛）但检查无明显解释', domain: 'E', reverse: false },
  { id: 22, text: '我阅读/开会/学习时很难集中注意', domain: 'F', reverse: false },
  { id: 23, text: '做决定变得困难，即使是小事', domain: 'F', reverse: false },
  { id: 24, text: '我会忘事、丢三落四，影响效率', domain: 'F', reverse: false },
  { id: 25, text: '我减少与他人的交流或刻意回避社交', domain: 'G', reverse: false },
  { id: 26, text: '我在工作/学习/家务上的完成度明显下降', domain: 'G', reverse: false },
  { id: 27, text: '我对“维持关系/履行责任”缺乏动力', domain: 'G', reverse: false },
  { id: 28, text: '我更倾向独处，且不想解释原因', domain: 'G', reverse: false },
  { id: 29, text: '我更容易烦躁或对小事发火', domain: 'H', reverse: false },
  { id: 30, text: '情绪更敏感，容易被触发（委屈/愤怒/崩溃）', domain: 'H', reverse: false },
  { id: 31, text: '我反复想到“如果不醒来也可以”', domain: 'I', reverse: false },
  { id: 32, text: '我出现过伤害自己的念头（不论是否有计划）', domain: 'I', reverse: false },
  { id: 33, text: '我曾认真设想过结束生命的方式/准备', domain: 'I', reverse: false },
  { id: 34, text: '我出现过自伤行为或冲动（抓挠、撞击、割伤等）', domain: 'I', reverse: false },
  { id: 35, text: '我仍能对某些事情产生真实的兴趣或愉快感（反向题）', domain: 'J', reverse: true },
  { id: 36, text: '我仍能保持相对稳定的精力来处理日常事务（反向题）', domain: 'J', reverse: true },
];

const SCALE_OPTIONS = [
  { value: 0, label: '0：从未/几乎没有' },
  { value: 1, label: '1：偶尔（1–3天）' },
  { value: 2, label: '2：经常（4–7天）' },
  { value: 3, label: '3：几乎每天（≥8天）' },
];

const CORE_IDS = new Set([1, 2, 3, 4, 7, 8]);
const FUNCTION_IDS = new Set([25, 26, 27, 28]);
const RISK_IDS = new Set([31, 32, 33, 34]);
const CONSISTENCY_PAIRS = [
  { first: 1, second: 35 },
  { first: 10, second: 36 },
  { first: 25, second: 28 },
  { first: 22, second: 24 },
  { first: 7, second: 31 },
];

const QUESTION_INDEX = new Map(QUESTIONS.map((q, index) => [q.id, index]));

const state = {
  view: 'start',
  currentIndex: 0,
  answers: Array(QUESTIONS.length).fill(null),
};

function transformScore(question, raw) {
  if (raw == null) return 0;
  return question.reverse ? 3 - raw : raw;
}

function calcScores() {
  return QUESTIONS.reduce(
    (acc, question, index) => {
      const raw = state.answers[index];
      const score = transformScore(question, raw);
      acc.total += score;
      if (CORE_IDS.has(question.id)) acc.core += score;
      if (FUNCTION_IDS.has(question.id)) acc.functionDamage += score;
      if (RISK_IDS.has(question.id)) acc.risk += score;
      return acc;
    },
    { total: 0, core: 0, functionDamage: 0, risk: 0 }
  );
}

function calcConsistencyIndex() {
  return CONSISTENCY_PAIRS.reduce((count, pair) => {
    const aIndex = QUESTION_INDEX.get(pair.first);
    const bIndex = QUESTION_INDEX.get(pair.second);
    const aScore = transformScore(QUESTIONS[aIndex], state.answers[aIndex]);
    const bScore = transformScore(QUESTIONS[bIndex], state.answers[bIndex]);
    return Math.abs(aScore - bScore) >= 2 ? count + 1 : count;
  }, 0);
}

function detectUniformity() {
  const buckets = state.answers.reduce((acc, value) => {
    if (value == null) return acc;
    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});

  const maxBucket = Math.max(...Object.values(buckets));
  const bucketValue = Object.entries(buckets).find(([, count]) => count === maxBucket);
  if (maxBucket >= 30 && bucketValue) {
    return { value: Number(bucketValue[0]), count: maxBucket };
  }
  return null;
}

function detectRiskFlags() {
  const results = [];
  QUESTIONS.forEach((question, index) => {
    const value = state.answers[index];
    if (value == null) return;
    if (question.id === 33 && value >= 1) {
      results.push({ id: question.id, level: value, reason: 'Q33 ≥ 1：认真设想方式/准备' });
    } else if (question.id === 34 && value >= 1) {
      results.push({ id: question.id, level: value, reason: 'Q34 ≥ 1：出现过自伤行为或冲动' });
    } else if (RISK_IDS.has(question.id) && value >= 2) {
      results.push({ id: question.id, level: value, reason: '风险题 ≥ 2：经常/几乎每天' });
    }
  });
  return results;
}

function getSeverity(total) {
  if (total <= 19) return { label: '无/极轻度风险', color: 'bg-emerald-50 border-emerald-200 text-emerald-800' };
  if (total <= 39) return { label: '轻度风险', color: 'bg-amber-50 border-amber-200 text-amber-800' };
  if (total <= 59) return { label: '中度风险', color: 'bg-orange-50 border-orange-200 text-orange-800' };
  return { label: '重度高风险', color: 'bg-rose-50 border-rose-200 text-rose-800' };
}

function createProgress(current, total) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full';

  const row = document.createElement('div');
  row.className = 'flex justify-between text-sm text-slate-600 mb-2';
  row.innerHTML = `<span>答题进度</span><span>第 ${current} / ${total} 题</span>`;

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
  title.textContent = 'DRS-36 抑郁筛查与严重程度量表（含一致性校验）';

  const intro = document.createElement('p');
  intro.className = 'text-slate-600 leading-relaxed mb-5';
  intro.textContent = '基于抑郁核心症状、功能损害与风险信号三个层面设计的 36 题自评问卷。题目采用行为/体验化描述，答题阶段不显示分类标签以降低作答偏差。';

  const grid = document.createElement('div');
  grid.className = 'grid md:grid-cols-2 gap-4 mb-6';

  const instructions = document.createElement('div');
  instructions.className = 'p-4 rounded-xl border border-indigo-100 bg-indigo-50/70';
  instructions.innerHTML = `
    <p class="font-semibold text-indigo-900 mb-2">作答说明（过去两周）</p>
    <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
      <li>时间窗：回顾过去两周的真实体验。</li>
      <li>计分：0 从未/几乎没有；1 偶尔；2 经常；3 几乎每天。</li>
      <li>题目不标注分类，完成后再呈现分量表结果。</li>
      <li>35、36 为反向题，系统自动换算分值。</li>
    </ul>`;

  const scoring = document.createElement('div');
  scoring.className = 'p-4 rounded-xl border border-amber-100 bg-amber-50/80';
  scoring.innerHTML = `
    <p class="font-semibold text-amber-900 mb-2">计分与严重程度</p>
    <ul class="text-sm text-slate-700 space-y-2 list-disc list-inside">
      <li>总分 0–108；35、36 反向计分（0↔3，1↔2）。</li>
      <li>严重程度参考：0–19 无/极轻；20–39 轻度；40–59 中度；≥60 重度高风险。</li>
      <li>核心分：1–4 + 7、8；功能损害分：25–28；风险分：31–34（单列）。</li>
      <li>一致性指数（CI）基于成对题分差校验，辅助判断作答可信度。</li>
    </ul>`;

  grid.appendChild(instructions);
  grid.appendChild(scoring);

  const meta = document.createElement('div');
  meta.className = 'p-4 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-600 space-y-2 mb-6';
  meta.innerHTML = `
    <p class="font-semibold text-slate-800">风险处置提醒</p>
    <ul class="list-disc list-inside space-y-1">
      <li>Q31–34 任一题 ≥ 2，或 Q33/Q34 ≥ 1 即触发高危提醒。</li>
      <li>CI ≥ 3 或选项高度集中（≥30 题同一分值）建议复测/访谈确认。</li>
      <li>若存在即时危险，请联系当地紧急服务或危机热线。</li>
    </ul>`;

  const btn = document.createElement('button');
  btn.className = 'w-full sm:w-auto px-6 py-3 bg-indigo-600 text-white rounded-xl shadow-lg hover:bg-indigo-700 transition font-semibold';
  btn.textContent = '开始答题';
  btn.onclick = () => {
    state.view = 'quiz';
    state.currentIndex = 0;
    state.answers = Array(QUESTIONS.length).fill(null);
    render();
  };

  card.appendChild(title);
  card.appendChild(intro);
  card.appendChild(grid);
  card.appendChild(meta);
  card.appendChild(btn);
  main.appendChild(card);
}

function renderQuestion(main) {
  const current = QUESTIONS[state.currentIndex];
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full max-w-5xl bg-white/90 backdrop-blur p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in text-slate-800 space-y-6';

  wrapper.appendChild(createProgress(state.currentIndex + 1, QUESTIONS.length));

  const header = document.createElement('div');
  header.className = 'space-y-1';
  header.innerHTML = `
    <p class="text-sm text-slate-500">答题时仅展示题干，不显示分类标签</p>
    <h2 class="text-2xl font-semibold text-indigo-900">Q${current.id}. ${current.text}</h2>
  `;
  wrapper.appendChild(header);

  const options = document.createElement('div');
  options.className = 'grid sm:grid-cols-2 gap-3';

  SCALE_OPTIONS.forEach((option) => {
    const button = document.createElement('button');
    const selected = state.answers[state.currentIndex] === option.value;
    button.className = `
      w-full text-left border rounded-xl p-4 transition shadow-sm
      ${selected ? 'border-indigo-500 bg-indigo-50 text-indigo-900 shadow-md' : 'border-slate-200 hover:border-indigo-200 bg-white'}
    `;
    button.innerHTML = `<p class="font-semibold">${option.label}</p>`;
    button.onclick = () => {
      state.answers[state.currentIndex] = option.value;
      render();
    };
    options.appendChild(button);
  });

  wrapper.appendChild(options);

  const actions = document.createElement('div');
  actions.className = 'flex flex-col sm:flex-row gap-3 justify-between pt-2';

  const hint = document.createElement('p');
  hint.className = 'text-sm text-slate-500';
  hint.textContent = '建议如实回顾近两周状态，选项集中或过快作答会降低可信度。';

  const btnRow = document.createElement('div');
  btnRow.className = 'flex gap-3';

  const prevBtn = document.createElement('button');
  prevBtn.className = 'px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 disabled:opacity-50';
  prevBtn.textContent = '上一题';
  prevBtn.disabled = state.currentIndex === 0;
  prevBtn.onclick = () => {
    state.currentIndex = Math.max(0, state.currentIndex - 1);
    render();
  };

  const nextBtn = document.createElement('button');
  nextBtn.className = 'px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60 shadow';
  const isLast = state.currentIndex === QUESTIONS.length - 1;
  nextBtn.textContent = isLast ? '提交并查看结果' : '下一题';
  nextBtn.disabled = state.answers[state.currentIndex] == null;
  nextBtn.onclick = () => {
    if (isLast) {
      const pending = state.answers.findIndex((value) => value == null);
      if (pending !== -1) {
        alert(`还有题目未作答：第 ${pending + 1} 题`);
        return;
      }
      state.view = 'result';
    } else {
      state.currentIndex = Math.min(QUESTIONS.length - 1, state.currentIndex + 1);
    }
    render();
  };

  btnRow.appendChild(prevBtn);
  btnRow.appendChild(nextBtn);
  actions.appendChild(hint);
  actions.appendChild(btnRow);
  wrapper.appendChild(actions);

  main.appendChild(wrapper);
}

function renderResult(main) {
  const scores = calcScores();
  const severity = getSeverity(scores.total);
  const ci = calcConsistencyIndex();
  const uniform = detectUniformity();
  const riskFlags = detectRiskFlags();

  const card = document.createElement('div');
  card.className = 'w-full max-w-6xl bg-white/95 backdrop-blur p-6 sm:p-8 rounded-2xl shadow-xl animate-fade-in text-slate-800 space-y-6';

  const header = document.createElement('div');
  header.className = 'flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between';
  header.innerHTML = `
    <div>
      <p class="text-sm text-slate-500">结果基于过去两周的自评作答</p>
      <h2 class="text-3xl font-bold text-indigo-900">DRS-36 结果</h2>
    </div>
    <span class="px-4 py-2 rounded-full border ${severity.color} text-sm font-semibold">严重程度：${severity.label}</span>
  `;

  const scoreGrid = document.createElement('div');
  scoreGrid.className = 'grid md:grid-cols-2 lg:grid-cols-4 gap-4';

  const scoreItems = [
    { title: '总分（0–108）', value: scores.total, desc: '35、36 为反向计分，分数越高代表风险越高。' },
    { title: '核心抑郁分（1–4 + 7、8）', value: scores.core, desc: '聚焦情绪低落、快感缺失、无望感、自责等核心特征。' },
    { title: '功能损害分（25–28）', value: scores.functionDamage, desc: '工作/学习/关系维持的动力与完成度受损情况。' },
    { title: '风险信号分（31–34）', value: scores.risk, desc: '独立解读的生存/自伤风险题，触发即需高危关注。' },
  ];

  scoreItems.forEach((item) => {
    const block = document.createElement('div');
    block.className = 'p-4 rounded-xl border border-slate-200 bg-slate-50';
    block.innerHTML = `
      <p class="text-sm text-slate-500">${item.title}</p>
      <p class="text-2xl font-bold text-indigo-900">${item.value}</p>
      <p class="text-xs text-slate-500 mt-1 leading-relaxed">${item.desc}</p>
    `;
    scoreGrid.appendChild(block);
  });

  const validity = document.createElement('div');
  validity.className = 'grid md:grid-cols-2 gap-4';

  const ciBlock = document.createElement('div');
  ciBlock.className = 'p-4 rounded-xl border border-slate-200 bg-white shadow-sm';
  const ciTone =
    ci >= 3
      ? 'text-rose-700 bg-rose-50 border-rose-200'
      : ci === 2
      ? 'text-amber-700 bg-amber-50 border-amber-200'
      : 'text-emerald-700 bg-emerald-50 border-emerald-200';
  const ciNote =
    ci >= 3
      ? '结果可信度显著下降，建议复测或结合访谈确认。'
      : ci === 2
      ? '存在一定矛盾，建议提示复测或进一步核实。'
      : '一致性良好，作答稳定。';

  ciBlock.innerHTML = `
    <p class="text-sm font-semibold text-slate-800 mb-2">一致性指数 CI（0–5）</p>
    <div class="flex items-center gap-3">
      <span class="px-3 py-1 rounded-full border ${ciTone} text-sm font-semibold">CI = ${ci}</span>
      <p class="text-sm text-slate-600">${ciNote}</p>
    </div>
    <p class="text-xs text-slate-500 mt-2 leading-relaxed">规则：P1 1↔35，P2 10↔36，P3 25↔28，P4 22↔24，P5 7↔31；反向题已自动换算，分差 ≥ 2 记 1 点。</p>
  `;

  const biasBlock = document.createElement('div');
  biasBlock.className = 'p-4 rounded-xl border border-slate-200 bg-white shadow-sm';
  const uniformNote = uniform
    ? `<p class="text-sm text-rose-700 font-medium">发现极端同向作答：${uniform.count} 题均为 ${uniform.value}，建议提示“认真复测”。</p>`
    : '<p class="text-sm text-emerald-700 font-medium">未发现极端同向作答（≥30 题同一分值）。</p>';
  biasBlock.innerHTML = `
    <p class="text-sm font-semibold text-slate-800 mb-2">作答偏差检查</p>
    ${uniformNote}
    <p class="text-xs text-slate-500 mt-2">如平均每题用时过短或选项高度集中，可提醒受测者重新作答并确保用途透明。</p>
  `;

  validity.appendChild(ciBlock);
  validity.appendChild(biasBlock);

  const report = document.createElement('div');
  report.className = 'p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-3';
  const severityDesc = {
    '无/极轻度风险': '整体症状负担较低，可继续关注作息、运动与情绪调节习惯。',
    '轻度风险': '出现一定程度的情绪或动力波动，建议自助调整并观察持续性。',
    '中度风险': '症状对日常功能可能已有影响，建议主动寻求专业评估或干预。',
    '重度高风险': '症状与功能受损显著，建议尽快联系专业人员，必要时就医评估。',
  };

  const riskSection = riskFlags.length
    ? `<div class="p-4 rounded-lg border border-rose-200 bg-rose-50">
        <p class="font-semibold text-rose-800">⚠️ 高危提醒（触发任一即需优先处理）</p>
        <ul class="list-disc list-inside text-sm text-rose-700 mt-2 space-y-1">
          ${riskFlags.map((flag) => `<li>Q${flag.id} = ${flag.level}（${flag.reason}）</li>`).join('')}
        </ul>
        <p class="text-xs text-rose-700 mt-2">建议立即提供专业帮助指引；若存在即时危险，请联系当地紧急服务/危机热线。</p>
      </div>`
    : `<div class="p-4 rounded-lg border border-emerald-200 bg-emerald-50">
        <p class="font-semibold text-emerald-800">未触发高危处置规则</p>
        <p class="text-sm text-emerald-700 mt-1">Q31–34 全部 < 2，且 Q33/Q34 未出现 ≥ 1 的情况。</p>
      </div>`;

  report.innerHTML = `
    <p class="text-sm font-semibold text-slate-800">报告要点</p>
    <ul class="list-disc list-inside text-sm text-slate-700 space-y-1">
      <li><span class="font-semibold">严重程度：</span>${severity.label}（${severityDesc[severity.label] || ''}）</li>
      <li><span class="font-semibold">核心特征：</span>核心分 ${scores.core}，关注快感缺失、无望感、自责等症状表现。</li>
      <li><span class="font-semibold">功能影响：</span>功能损害分 ${scores.functionDamage}，提示社交、工作/学习、关系维持的动力与完成度。</li>
      <li><span class="font-semibold">可信度：</span>CI = ${ci}；${uniform ? '存在极端同向作答倾向，建议复测。' : '未见极端同向作答。'}</li>
    </ul>
    ${riskSection}
  `;

  const buttons = document.createElement('div');
  buttons.className = 'flex flex-wrap gap-3';

  const restart = document.createElement('button');
  restart.className = 'px-4 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50';
  restart.textContent = '重新作答';
  restart.onclick = () => {
    state.view = 'quiz';
    state.currentIndex = 0;
    state.answers = Array(QUESTIONS.length).fill(null);
    render();
  };

  const back = document.createElement('button');
  back.className = 'px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow';
  back.textContent = '返回说明';
  back.onclick = () => {
    state.view = 'start';
    render();
  };

  buttons.appendChild(restart);
  buttons.appendChild(back);

  card.appendChild(header);
  card.appendChild(scoreGrid);
  card.appendChild(validity);
  card.appendChild(report);
  card.appendChild(buttons);
  main.appendChild(card);
}

function render() {
  const root = document.getElementById('root');
  root.innerHTML = '';

  const main = document.createElement('main');
  main.className = 'min-h-screen w-full flex justify-center items-start px-4 py-10 sm:py-14';

  if (state.view === 'quiz') {
    renderQuestion(main);
  } else if (state.view === 'result') {
    renderResult(main);
  } else {
    renderStart(main);
  }

  root.appendChild(main);
}

render();
