
import type { Question } from './types';

export const QUIZ_QUESTIONS: Question[] = [
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
      { text: '睡眠深沉，不易被惊醒', score: 5 },
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
