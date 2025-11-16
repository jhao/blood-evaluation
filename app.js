const QUIZ_QUESTIONS = [
  {
    id: 1,
    category: '一、看眼睛：判断气血对眼部的滋养情况',
    text: '1. 你的眼袋是否明显偏深，即使休息后也难改善？',
    options: [
      { text: '无眼袋，眼部肌肤紧致', score: 5 },
      { text: '偶尔出现轻微眼袋', score: 3 },
      { text: '眼袋深且长期存在', score: 0 },
    ],
  },
  {
    id: 2,
    category: '一、看眼睛：判断气血对眼部的滋养情况',
    text: '2. 黑眼圈是否严重，无论怎么调整作息都消不掉？',
    options: [
      { text: '无黑眼圈，眼周肤色均匀', score: 5 },
      { text: '偶尔有轻微黑眼圈', score: 3 },
      { text: '黑眼圈明显且顽固', score: 0 },
    ],
  },
  {
    id: 3,
    category: '一、看眼睛：判断气血对眼部的滋养情况',
    text: '3. 是否经常感觉眼睛干涩，或眼皮沉重、视物易累？',
    options: [
      { text: '眼睛湿润，长时间视物也无不适', score: 5 },
      { text: '偶尔干涩或眼皮沉', score: 3 },
      { text: '频繁干涩、眼皮重，视物易疲劳', score: 0 },
    ],
  },
  {
    id: 4,
    category: '一、看眼睛：判断气血对眼部的滋养情况',
    text: '4. 眼白是否有明显血丝、浑浊，或颜色偏黄？',
    options: [
      { text: '眼白清澈透亮，无血丝', score: 5 },
      { text: '偶尔有少量血丝', score: 3 },
      { text: '眼白浑浊、发黄，或血丝多', score: 0 },
    ],
  },
  {
    id: 5,
    category: '二、看面部：判断气血对肌肤的濡养与循环',
    text: '5. 面部是否有 “垮脸” 迹象，看起来比同龄人显老？',
    options: [
      { text: '面部饱满紧致，无垮脸感', score: 5 },
      { text: '偶尔感觉面部轻微松弛', score: 3 },
      { text: '面部明显下垂、显老', score: 0 },
    ],
  },
  {
    id: 6,
    category: '二、看面部：判断气血对肌肤的濡养与循环',
    text: '6. 脸上是否有斑（如黄褐斑、晒斑等），看起来 “不干净”？',
    options: [
      { text: '无斑，肤色干净', score: 5 },
      { text: '有少量淡斑', score: 3 },
      { text: '斑多且颜色深', score: 0 },
    ],
  },
  {
    id: 7,
    category: '二、看面部：判断气血对肌肤的濡养与循环',
    text: '7. 皮肤是否暗沉、肤色不均、蜡黄，或属于 “沙漠大干皮”？',
    options: [
      { text: '皮肤白皙红润、水润有光泽', score: 5 },
      { text: '偶尔暗沉或干燥', score: 3 },
      { text: '长期暗沉、蜡黄、肤色不均，或极度干燥', score: 0 },
    ],
  },
  {
    id: 8,
    category: '三、看头部：判断气血对头部与毛发的供给',
    text: '8. 是否经常头晕，或频繁出现偏头痛？',
    options: [
      { text: '从不头晕、偏头痛', score: 5 },
      { text: '偶尔头晕或头痛', score: 3 },
      { text: '经常头晕、偏头痛', score: 0 },
    ],
  },
  {
    id: 9,
    category: '三、看头部：判断气血对头部与毛发的供给',
    text: '9. 头发是否干枯、毛躁，缺乏光泽？',
    options: [
      { text: '头发柔顺有光泽，无干枯毛躁', score: 5 },
      { text: '偶尔干枯', score: 3 },
      { text: '长期干枯毛躁，无光泽', score: 0 },
    ],
  },
  {
    id: 10,
    category: '三、看头部：判断气血对头部与毛发的供给',
    text: '10. 是否存在经常掉发的情况（如梳头、洗头时掉发多）？',
    options: [
      { text: '掉发少，发量稳定', score: 5 },
      { text: '偶尔掉发稍多', score: 3 },
      { text: '频繁大量掉发', score: 0 },
    ],
  },
  {
    id: 11,
    category: '四、看睡眠：判断气血对心神的安定作用',
    text: '11. 睡眠是否很浅，容易被轻微声响或动静惊醒？',
    options: [
      { text: '睡眠深沉不易被惊醒', score: 5 },
      { text: '偶尔被惊醒', score: 3 },
      { text: '经常被惊醒，睡眠浅', score: 0 },
    ],
  },
  {
    id: 12,
    category: '四、看睡眠：判断气血对心神的安定作用',
    text: '12. 夜间是否频繁多梦，醒来后感觉没休息好？',
    options: [
      { text: '很少做梦，醒来神清气爽', score: 5 },
      { text: '偶尔多梦', score: 3 },
      { text: '每晚多梦，醒来疲惫', score: 0 },
    ],
  },
  {
    id: 13,
    category: '五、看经期（女性专属）：判断气血对经期的调节',
    text: '13. 月经量是否明显偏少（如比平时少 1/3 以上）？',
    options: [
      { text: '月经量正常', score: 5 },
      { text: '偶尔量少', score: 3 },
      { text: '长期量少', score: 0 },
    ],
  },
  {
    id: 14,
    category: '五、看经期（女性专属）：判断气血对经期的调节',
    text: '14. 月经周期是否经常推迟（如连续 3 个月以上推迟 7 天以上），且经血颜色偏淡？',
    options: [
      { text: '周期规律，经血颜色正常', score: 5 },
      { text: '偶尔推迟，经血颜色尚可', score: 3 },
      { text: '长期推迟，经血淡', score: 0 },
    ],
  },
  {
    id: 15,
    category: '五、看经期（女性专属）：判断气血对经期的调节',
    text: '15. 经期是否有绵绵的痛经感，或经血中带有血块？',
    options: [
      { text: '无痛经、无血块', score: 5 },
      { text: '偶尔轻微痛经或少量血块', score: 3 },
      { text: '经常绵绵痛经，或血块多', score: 0 },
    ],
  },
  {
    id: 16,
    category: '六、看体温：判断气血的温煦功能',
    text: '16. 是否比周围人更怕冷，对寒冷环境更敏感？',
    options: [
      { text: '不怕冷，对寒冷不敏感', score: 5 },
      { text: '偶尔怕冷', score: 3 },
      { text: '特别怕冷，对寒冷敏感', score: 0 },
    ],
  },
  {
    id: 17,
    category: '六、看体温：判断气血的温煦功能',
    text: '17. 下半身（如膝盖、小腿、双脚）是否经常冷冰冰的？',
    options: [
      { text: '下半身温暖，无冰凉感', score: 5 },
      { text: '偶尔冰凉', score: 3 },
      { text: '长期冰凉', score: 0 },
    ],
  },
  {
    id: 18,
    category: '七、综合气血状态补充题',
    text: '18. 日常是否总觉得疲劳乏力，不想活动？',
    options: [
      { text: '精力充沛，喜欢活动', score: 5 },
      { text: '偶尔疲劳', score: 3 },
      { text: '经常疲劳，懒得动', score: 0 },
    ],
  },
  {
    id: 19,
    category: '七、综合气血状态补充题',
    text: '19. 舌头伸出来观察，舌边是否有明显的齿痕？',
    options: [
      { text: '无齿痕，舌头形态正常', score: 5 },
      { text: '齿痕不明显', score: 3 },
      { text: '齿痕明显', score: 0 },
    ],
  },
  {
    id: 20,
    category: '七、综合气血状态补充题',
    text: '20. 指甲上的小月牙数量是否少于 6 个，或月牙面积很小？',
    options: [
      { text: '月牙≥6 个，面积正常', score: 5 },
      { text: '月牙 4-5 个', score: 3 },
      { text: '月牙＜4 个，或几乎没有', score: 0 },
    ],
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
  progress.className = 'bg-teal-500 h-2.5 rounded-full transition-all duration-500 ease-out';
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
  title.className = 'text-3xl sm:text-4xl font-bold text-teal-800 mb-4';
  title.textContent = '气血状态自测问卷';

  const subtitle = document.createElement('p');
  subtitle.className = 'text-stone-600 mb-2';
  subtitle.textContent = '基于「眼、面、头、眠、经、温」6 维度';

  const tips = document.createElement('p');
  tips.className = 'text-sm text-stone-500 mb-8';
  tips.textContent = '(总分 100 分，每题 5 分，60 分及格)';

  const info = document.createElement('div');
  info.className = 'bg-teal-50 border-l-4 border-teal-500 text-teal-800 p-4 rounded-r-lg mb-8 text-left';

  const infoTitle = document.createElement('p');
  infoTitle.className = 'font-semibold';
  infoTitle.textContent = '测试说明';

  const infoDesc = document.createElement('p');
  infoDesc.className = 'text-sm';
  infoDesc.textContent = '本问卷旨在帮助您初步了解自身气血状态，结果仅供参考，不能替代专业医疗诊断。';

  info.appendChild(infoTitle);
  info.appendChild(infoDesc);

  const startButton = document.createElement('button');
  startButton.className = 'w-full sm:w-auto bg-teal-600 text-white font-bold py-3 px-12 rounded-full hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 transition-all duration-300 transform hover:scale-105';
  startButton.textContent = '开始测试';
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

  const category = document.createElement('p');
  category.className = 'text-sm text-teal-700 font-semibold mb-2';
  category.textContent = question.category;

  const prompt = document.createElement('h2');
  prompt.className = 'text-xl sm:text-2xl font-bold text-stone-800 mb-8 leading-relaxed';
  prompt.textContent = question.text;

  const optionsContainer = document.createElement('div');
  optionsContainer.className = 'space-y-4';

  question.options.forEach((option) => {
    const button = document.createElement('button');
    button.className = 'w-full text-left p-4 bg-amber-50 rounded-lg border-2 border-transparent hover:border-teal-500 hover:bg-teal-50 focus:outline-none focus:ring-4 focus:ring-teal-200 transition-all duration-200 group';

    const label = document.createElement('span');
    label.className = 'text-stone-700 group-hover:text-teal-800 font-medium';
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

  card.appendChild(category);
  card.appendChild(prompt);
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
  const isPassing = totalScore >= 60;
  const scoreColor = isPassing ? 'text-teal-600' : 'text-orange-500';

  const result = {
    title: isPassing ? '气血状态良好' : '存在气血不足问题',
    description: isPassing
      ? '气血能够正常滋养身体各部位，维持生理功能稳定。建议继续保持健康的作息、饮食与生活习惯。'
      : '可能已影响到皮肤、睡眠、经期等状态。建议按 “养脾胃→补气血→通气血” 的步骤调理，如调整饮食（多吃健脾养血食材）、规律作息、适度运动（促进气血流通）等。',
  };

  const card = document.createElement('div');
  card.className = 'w-full max-w-2xl text-center bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl animate-fade-in-up';

  const heading = document.createElement('h2');
  heading.className = 'text-2xl font-bold text-stone-700 mb-2';
  heading.textContent = '您的气血状态评估报告';

  const disclaimer = document.createElement('p');
  disclaimer.className = 'text-sm text-stone-500 mb-6';
  disclaimer.textContent = '结果仅供参考，非专业医疗建议';

  const scoreWrap = document.createElement('div');
  scoreWrap.className = 'my-8';

  const scoreLabel = document.createElement('p');
  scoreLabel.className = 'text-lg text-stone-600';
  scoreLabel.textContent = '您的总分是';

  const scoreValue = document.createElement('p');
  scoreValue.className = `text-7xl font-black my-2 ${scoreColor}`;
  scoreValue.textContent = totalScore.toString();

  scoreWrap.appendChild(scoreLabel);
  scoreWrap.appendChild(scoreValue);

  const detail = document.createElement('div');
  detail.className = `p-6 rounded-lg ${isPassing ? 'bg-teal-50' : 'bg-orange-50'}`;

  const detailTitle = document.createElement('h3');
  detailTitle.className = `text-xl font-bold mb-3 ${isPassing ? 'text-teal-800' : 'text-orange-800'}`;
  detailTitle.textContent = result.title;

  const detailDesc = document.createElement('p');
  detailDesc.className = `text-sm leading-relaxed ${isPassing ? 'text-teal-700' : 'text-orange-700'}`;
  detailDesc.textContent = result.description;

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
