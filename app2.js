const QUIZ_QUESTIONS = [
  {
    id: 1,
    text: 'Q1. 平时大便的情况属于哪种？',
    options: [
      { text: 'A. 基本不拉肚子｜5分', score: 5 },
      { text: 'B. 偶尔拉肚子，平时还好｜4分', score: 4 },
      { text: 'C. 吃水果、酸奶会拉肚子｜3分', score: 3 },
      { text: 'D. 吃油、辣、冰的会拉肚子｜3分', score: 3 },
      { text: 'E. 偶尔便秘｜3分', score: 3 },
      { text: 'F. 长期便秘、排便困难｜2分', score: 2 },
    ],
  },
  {
    id: 2,
    text: 'Q2. 看镜子，自己的舌苔属于哪一种？',
    imagePlaceholders: true,
    options: [
      { text: 'A. 舌苔边缘没有齿痕｜5分', score: 5 },
      { text: 'B. 舌头边上有轻微齿痕｜3分', score: 3 },
      { text: 'C. 舌头边缘齿痕明显｜1分', score: 1 },
    ],
  },
  {
    id: 3,
    text: 'Q3. 平时感觉自己的精力怎么样？',
    options: [
      { text: 'A. 不累、精神挺好｜5分', score: 5 },
      { text: 'B. 简单运动后（上楼）会累｜4分', score: 4 },
      { text: 'C. 吃饭或说话会觉得累，有气上不来｜2分', score: 2 },
      { text: 'D. 什么都没做也累，打不起精神｜1分', score: 1 },
    ],
  },
  {
    id: 4,
    text: 'Q4. 有吃早餐的习惯吗？',
    options: [
      { text: 'A. 每天9点前吃早餐｜10分', score: 10 },
      { text: 'B. 吃早餐，但常超过9点｜8分', score: 8 },
      { text: 'C. 偶尔吃早餐，频率和时间不固定｜6分', score: 6 },
    ],
  },
  {
    id: 5,
    text: 'Q5. 自己觉得有口臭吗？',
    options: [
      { text: 'A. 没有口臭｜10分', score: 10 },
      { text: 'B. 平时没感觉，也没关注｜8分', score: 8 },
      { text: 'C. 只有睡醒时有口臭｜5分', score: 5 },
      { text: 'D. 日常说话也会闻到异味｜3分', score: 3 },
    ],
  },
  {
    id: 6,
    text: 'Q6. 什么情况下会胃疼？',
    options: [
      { text: 'A. 不胃疼｜10分', score: 10 },
      { text: 'B. 吃油、辣、冷会胃疼｜7分', score: 7 },
      { text: 'C. 不吃饭会胃疼｜5分', score: 5 },
      { text: 'D. 偶尔胃疼｜5分', score: 5 },
      { text: 'E. 总觉得胃不舒服，无明确原因｜3分', score: 3 },
    ],
  },
  {
    id: 7,
    text: 'Q7. 饮食有什么爱好？',
    options: [
      { text: 'A. 以上都没有，饮食清淡｜15分', score: 15 },
      { text: 'B. 喜欢吃辣｜7分', score: 7 },
      { text: 'C. 爱吃水果/零食（其一）｜7分', score: 7 },
      { text: 'D. 饭菜油盐重｜5分', score: 5 },
      { text: 'E. 爱喝酒/咖啡/饮料（其一）｜5分', score: 5 },
      { text: 'F. 以上都有，而且忍不住吃｜3分', score: 3 },
    ],
  },
  {
    id: 8,
    text: 'Q8. 吃饭是否规律？',
    options: [
      { text: 'A. 三餐按时，很规律｜10分', score: 10 },
      { text: 'B. 基本规律，忙时会错过｜6分', score: 6 },
      { text: 'C. 饿了就吃，不饿就不吃｜2分', score: 2 },
    ],
  },
  {
    id: 9,
    text: 'Q9. 平时几点睡觉？',
    options: [
      { text: 'A. 11点前睡｜10分', score: 10 },
      { text: 'B. 11点后～凌晨1点睡｜6分', score: 6 },
      { text: 'C. 凌晨1点后睡｜2分', score: 2 },
    ],
  },
  {
    id: 10,
    text: 'Q10. 平时心情怎么样？',
    options: [
      { text: 'A. 每天都开心，很少有不高兴的事情｜10分', score: 10 },
      { text: 'B. 一般，偶尔不好但能缓解｜7分', score: 7 },
      { text: 'C. 压力大，心情经常不好、烦躁｜2分', score: 2 },
    ],
  },
  {
    id: 11,
    text: 'Q11. 平时会有胀气吗？',
    options: [
      { text: 'A. 不胀气｜10分', score: 10 },
      { text: 'B. 偶尔胀气｜6分', score: 6 },
      { text: 'C. 吃完饭就胀气｜4分', score: 4 },
      { text: 'D. 胀气时伴随胃痛｜2分', score: 2 },
    ],
  },
];

const RESULT_LEVELS = [
  {
    min: 80,
    max: 100,
    title: '🟢 80–100 分：活力满满',
    desc: '恭喜你，你的脾胃很健康。即使平时有点小不舒服，也能很快的自我调节过来。要注意熬夜、不按时吃饭、吃重口味的食物都会损伤脾胃。要在日常生活里坚持好习惯，爱护自己的脾胃，继续保持哦~',
    tone: {
      text: 'text-emerald-600',
      panelBg: 'bg-emerald-50',
      panelText: 'text-emerald-800',
    },
  },
  {
    min: 50,
    max: 79,
    title: '🟡 50–79 分：脾有小损，胃有小伤',
    desc: '你的脾气和胃气都有轻度的损伤。在日常生活里，要更注意呵护脾胃。现在的状态像在分界的中点，努力一点，把脾胃调养到正常并不难，但继续放任不健康的习惯，这些小毛病会越来越频繁地冒出来，需要花更长的时间才能恢复。',
    tone: {
      text: 'text-amber-600',
      panelBg: 'bg-amber-50',
      panelText: 'text-amber-800',
    },
  },
  {
    min: 20,
    max: 49,
    title: '🟠 20–49 分：脾胃同伤，气血两虚',
    desc: '你不仅脾虚，胃也处于受损状态，需要好好修复。脾胃是气血、元气的源泉，受损就会影响身体“根本”。各种不舒服反反复复，平常活动就累，想吃好吃的又怕胃痛或拉肚子，心情也不佳。但这些信号说明脾胃还有能量，需要你做出改变，帮助它们恢复。',
    tone: {
      text: 'text-orange-600',
      panelBg: 'bg-orange-50',
      panelText: 'text-orange-800',
    },
  },
  {
    min: 0,
    max: 19,
    title: '🔴 0–19 分：你的脾胃，急需拯救',
    desc: '脾胃损伤已经必须重视。脾胃长期不足，全身像漏气的气球，不仅吃补不进去，气血也往外跑。脸色黄黄，看起来憔悴丧，容易生病，吃完东西上吐下泻、胃疼、口气总是出现。再不及时止损，就会一步一步走向枯萎、衰老。',
    tone: {
      text: 'text-rose-600',
      panelBg: 'bg-rose-50',
      panelText: 'text-rose-800',
    },
  },
];

const state = {
  quizState: 'start',
  currentQuestionIndex: 0,
  answers: [],
};

const root = document.getElementById('root');

function getTotalScore() {
  return state.answers.reduce((acc, value) => acc + value, 0);
}

function createProgressBar(current, total) {
  const wrapper = document.createElement('div');
  wrapper.className = 'w-full';

  const labelRow = document.createElement('div');
  labelRow.className = 'flex justify-between items-center mb-1 text-sm text-stone-600';

  const title = document.createElement('span');
  title.className = 'font-medium';
  title.textContent = '进度';

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

function renderStartScreen(main) {
  const card = document.createElement('div');
  card.className = 'w-full max-w-2xl text-center bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg animate-fade-in';

  const title = document.createElement('h1');
  title.className = 'text-3xl sm:text-4xl font-bold text-amber-800 mb-4';
  title.textContent = '脾胃健康自评问卷';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-stone-600 mb-2';
  subtitle.textContent = '请根据自己日常情况选择最符合的选项，并记录分数。';

  const tips = document.createElement('p');
  tips.className = 'text-sm text-stone-500 mb-8';
  tips.textContent = '本问卷共 11 题，总分 100 分，结果仅供参考。';

  const info = document.createElement('div');
  info.className = 'bg-amber-50 border-l-4 border-amber-500 text-amber-900 p-4 rounded-r-lg mb-8 text-left';

  const infoTitle = document.createElement('p');
  infoTitle.className = 'font-semibold';
  infoTitle.textContent = '答题提示';

  const infoDesc = document.createElement('p');
  infoDesc.className = 'text-sm leading-relaxed';
  infoDesc.textContent = '每题从 A-F 选一项，分数越高表示脾胃状态越好。完成后系统会自动计算总分并给出分值评价。';

  info.appendChild(infoTitle);
  info.appendChild(infoDesc);

  const startButton = document.createElement('button');
  startButton.className = 'w-full sm:w-auto bg-amber-600 text-white font-bold py-3 px-12 rounded-full hover:bg-amber-700 focus:outline-none focus:ring-4 focus:ring-amber-300 transition-all duration-300 transform hover:scale-105';
  startButton.textContent = '开始答题';
  startButton.addEventListener('click', () => {
    state.quizState = 'running';
    render();
  });

  card.appendChild(title);
  card.appendChild(subtitle);
  card.appendChild(tips);
  card.appendChild(info);
  card.appendChild(startButton);

  main.appendChild(card);
}

function renderQuestion(main) {
  const question = QUIZ_QUESTIONS[state.currentQuestionIndex];

  const card = document.createElement('div');
  card.className = 'w-full max-w-2xl bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg transition-all duration-300 animate-fade-in';

  const prompt = document.createElement('h2');
  prompt.className = 'text-xl sm:text-2xl font-bold text-stone-800 mb-6 leading-relaxed';
  prompt.textContent = question.text;

  card.appendChild(prompt);

  if (question.imagePlaceholders) {
    const placeholders = document.createElement('div');
    placeholders.className = 'grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6';

    for (let i = 1; i <= 3; i += 1) {
      const box = document.createElement('div');
      box.className = 'aspect-[4/3] rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 flex items-center justify-center text-amber-700 font-medium';
      box.textContent = `参考图 ${i}`;
      placeholders.appendChild(box);
    }

    card.appendChild(placeholders);
  }

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'space-y-4';

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'w-full text-left p-4 bg-amber-50 rounded-lg border-2 border-transparent hover:border-amber-500 hover:bg-amber-100 focus:outline-none focus:ring-4 focus:ring-amber-200 transition-all duration-200 group';

    const label = document.createElement('span');
    label.className = 'text-stone-700 group-hover:text-amber-800 font-medium';
    label.textContent = option.text;

    button.appendChild(label);
    button.addEventListener('click', () => {
      state.answers.push(option.score);
      if (state.currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.quizState = 'finished';
      }
      render();
    });

    optionsContainer.appendChild(button);
  });

  card.appendChild(optionsContainer);

  if (state.currentQuestionIndex > 0) {
    const backWrapper = document.createElement('div');
    backWrapper.className = 'mt-8 text-center';

    const backButton = document.createElement('button');
    backButton.className = 'text-sm text-stone-500 hover:text-stone-800 font-medium transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300';
    backButton.textContent = '返回上一题';
    backButton.addEventListener('click', () => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        state.answers.pop();
        render();
      }
    });

    backWrapper.appendChild(backButton);
    card.appendChild(backWrapper);
  }

  main.appendChild(card);
}

function renderResults(main) {
  const totalScore = getTotalScore();
  const level = RESULT_LEVELS.find((item) => totalScore >= item.min && totalScore <= item.max) || RESULT_LEVELS[RESULT_LEVELS.length - 1];
  const tone = level.tone;

  const card = document.createElement('div');
  card.className = 'w-full max-w-2xl text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in-up';

  const heading = document.createElement('h2');
  heading.className = 'text-2xl font-bold text-stone-700 mb-2';
  heading.textContent = '脾胃健康评估结果';

  const disclaimer = document.createElement('p');
  disclaimer.className = 'text-sm text-stone-500 mb-6';
  disclaimer.textContent = '结果仅供参考，如有不适请及时就医。';

  const scoreWrap = document.createElement('div');
  scoreWrap.className = 'my-8';

  const scoreLabel = document.createElement('p');
  scoreLabel.className = 'text-lg text-stone-600';
  scoreLabel.textContent = '您的总分是';

  const scoreValue = document.createElement('p');
  scoreValue.className = `text-7xl font-black my-2 ${tone.text}`;
  scoreValue.textContent = totalScore.toString();

  scoreWrap.appendChild(scoreLabel);
  scoreWrap.appendChild(scoreValue);

  const detail = document.createElement('div');
  detail.className = `p-6 rounded-lg ${tone.panelBg} ${tone.panelText}`;

  const detailTitle = document.createElement('h3');
  detailTitle.className = 'text-xl font-bold mb-3';
  detailTitle.textContent = level.title;

  const detailDesc = document.createElement('p');
  detailDesc.className = 'text-sm leading-relaxed text-stone-700';
  detailDesc.textContent = level.desc;

  detail.appendChild(detailTitle);
  detail.appendChild(detailDesc);

  const capture = document.createElement('div');
  capture.className = 'mt-8 p-4 bg-gray-100 rounded-lg flex items-center justify-center space-x-3';

  const cameraIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  cameraIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  cameraIcon.setAttribute('viewBox', '0 0 24 24');
  cameraIcon.setAttribute('fill', 'none');
  cameraIcon.setAttribute('stroke-width', '1.5');
  cameraIcon.setAttribute('stroke', 'currentColor');
  cameraIcon.classList.add('w-6', 'h-6', 'text-gray-500');

  const cameraPaths = [
    'M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.776 48.776 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z',
    'M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z',
  ];

  cameraPaths.forEach((d) => {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('stroke-linecap', 'round');
    path.setAttribute('stroke-linejoin', 'round');
    path.setAttribute('d', d);
    cameraIcon.appendChild(path);
  });

  const captureText = document.createElement('p');
  captureText.className = 'text-gray-600 font-medium';
  captureText.textContent = '请截屏保存您的评估结果';

  capture.appendChild(cameraIcon);
  capture.appendChild(captureText);

  const restartButton = document.createElement('button');
  restartButton.className = 'mt-8 w-full sm:w-auto inline-flex items-center justify-center bg-gray-600 text-white font-bold py-3 px-8 rounded-full hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-300 transform hover:scale-105';
  restartButton.textContent = '重新测试';
  restartButton.addEventListener('click', () => {
    state.quizState = 'start';
    state.currentQuestionIndex = 0;
    state.answers = [];
    render();
  });

  card.appendChild(heading);
  card.appendChild(disclaimer);
  card.appendChild(scoreWrap);
  card.appendChild(detail);
  card.appendChild(capture);
  card.appendChild(restartButton);

  main.appendChild(card);
}

function render() {
  if (!root) return;
  root.innerHTML = '';

  const page = document.createElement('div');
  page.className = 'min-h-screen bg-amber-50 text-stone-800 flex flex-col items-center p-4 sm:p-6 font-sans';

  const frame = document.createElement('div');
  frame.className = 'w-full max-w-2xl mx-auto flex flex-col flex-grow';

  if (state.quizState === 'running') {
    const header = document.createElement('header');
    header.className = 'w-full mb-6';
    header.appendChild(createProgressBar(state.currentQuestionIndex + 1, QUIZ_QUESTIONS.length));
    frame.appendChild(header);
  }

  const main = document.createElement('main');
  main.className = 'flex-grow flex flex-col items-center justify-center w-full';

  if (state.quizState === 'start') {
    renderStartScreen(main);
  } else if (state.quizState === 'running') {
    renderQuestion(main);
  } else {
    renderResults(main);
  }

  frame.appendChild(main);
  page.appendChild(frame);
  root.appendChild(page);
}

render();
