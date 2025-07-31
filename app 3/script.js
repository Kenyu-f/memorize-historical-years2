const quizSections = {
  //古代
  ancient1: [
    { question: "邪馬台国の卑弥呼が魏に使いを送ったのは何年？", year: 239 },
    { question: "倭王武が中国の南朝に使いを送ったのは何年？", year: 478 },
    { question: "聖徳太子が政務に参加したのは何年？", year: 593 },
    { question: "聖徳太子が冠位十二階を制定したのは何年？", year: 603 },
    { question: "小野妹子を隋に送ったのは何年？", year: 607 },
    { question: "大化の改新が始まったのは何年？", year: 645 },
    { question: "壬申の乱が起こったのは何年？", year: 672 },
    { question: "唐にならって大宝律令の国をつくろうとしたのは何年？", year: 701 },
],
  ancient2: [
    { question: "平城京に遷都されたのは何年？", year: 710 },    
    { question: "鑑真が日本に到着したのは何年？", year: 754 },
    { question: "平安京に遷都されたのは何年？", year: 794 },
    { question: "平将門の乱が起こったのは何年？", year: 939 },
    { question: "白河上皇の院政が始まったのは何年？", year: 1086 },
    { question: "保元の乱が起こったのは何年？", year: 1156 },
    { question: "平治の乱が起こったのは何年？", year: 1159 },
],
  //中世
  medieval1: [
    { question: "平氏が滅亡したのは何年？", year: 1185 },
    { question: "源頼朝が守護・地頭の設置を認められたのは何年？", year: 1185 },
    { question: "鎌倉幕府が成立したのは何年？", year: 1192 },
    { question: "承久の乱が起こったのは何年？", year: 1221 },
    { question: "御成敗式目が制定された（置かれた）のは何年？", year: 1232 },
    { question: "文永の役が起こったのは何年？", year: 1274 },
    { question: "元寇が始まったのは何年？", year: 1274 },
    { question: "弘安の役が起こったのは何年？", year: 1281 },
  ],
    
  medieval2: [
    { question: "徳政令が出されたのは何年？", year: 1297 },    
    { question: "鎌倉幕府が滅びたのは何年？", year: 1333 },
    { question: "建武の新政が始まったのは何年？", year: 1334 },
    { question: "日明貿易（勘合貿易）がされたのは何年？", year: 1404 },
    { question: "応仁の乱が始まったのは何年？", year: 1467 },
    { question: "ポルトガル人が鉄砲を伝えたのは何年？", year: 1543 },
    { question: "織田信長が桶狭間の戦いで勝利したのは何年？", year: 1560 }
],

  //近世
  earlyModern1: [
    { question: "太閤検地が始まったのは何年?", year: 1582 },
    { question: "刀狩令が行われたのは何年?", year: 1588 },
    { question: "文禄の役が始まったのは何年?", year: 1592 },
    { question: "慶長の役が始まったのは何年?", year: 1597 },
    { question: "関ヶ原の戦いがあったのは何年？", year: 1600 },
    { question: "江戸幕府が成立したのは何年？", year: 1603 },
    { question: "参勤交代が制度化されたのは何年?", year: 1635 },

  ],
    
  earlyModern2: [
    { question: "島原の乱が起こったのは何年？", year: 1637 },
    { question: "鎖国の体制が固まったのは何年?", year: 1641 },    
    { question: "生類憐みの令が徳川綱吉によって出されたのは何年?", year: 1685 },
    { question: "享保の改革が始まったのは何年？", year: 1716 },
    { question: "田沼意次が老中に就任したのは何年？", year: 1772 },
    { question: "天保の改革が始まったのは何年？", year: 1841 },
    { question: "大政奉還、王政復古の大号令があったのは何年?", year: 1867 },
    { question: "寛政の改革が松平定信によって始められたのは何年?", year:1787},
  ],
  //近代
  modern1: [
    { question: "明治維新が始まったのは何年？", year: 1868 },
    { question: "学制が公布されたのは何年?", year: 1872 },   
    { question: "徴兵令、地租改正が行われたのは何年?", year: 1873 },
    { question: "廃藩置県が起こったのは何年?", year: 1871 },
    { question: "日朝修好条規が結ばれたのは何年?", year: 1876 },
    { question: "国会開設の勅諭が出されたのは何年?", year: 1881 },
    { question: "大日本帝国憲法が発布されたのは何年?", year: 1889 },
    { question: "民撰議院設立の建白書が提出されたのは何年?", year: 1874 },

  ],
  
  modern2: [
    { question: "日清戦争が始まったのは何年？", year: 1894 },
    { question: "下関条約が結ばれたのは何年?", year: 1895 },
    { question: "三国干渉が行われたのは何年?", year: 1895 },
    { question: "ポーツマス条約が結ばれたのは何年?", year: 1905 },
    { question: "関税自主権を回復したのは何年?", year: 1911 },
    { question: "第一次護憲運動が起こったのは何年?", year: 1912 },
    { question: "第一次世界大戦が始まったのは何年？", year: 1914 },
  ],
  
  modern3: [
    { question: "中国に二十一か条の要求を出したのは何年?", year: 1915 },
    { question: "米騒動、シベリア出兵が起こったのは何年?", year: 1918 },
    { question: "原敬の政党内閣の時代が始まったのは何年?", year: 1918 },
    { question: "全国水平社が結成されたのは何年?", year: 1922 },
    { question: "関東大震災が起こったのは何年?", year: 1923 },
    { question: "第二次護憲運動が起こったのは何年?", year: 1924 },
    { question: "治安維持法、普通選挙法公布が行われたのは何年?", year: 1925 },
    { question: "満州事変が起こったのは何年?", year: 1931 },


],
  
  modern4: [
    { question: "五・一五事件が起こったのは何年?", year: 1932 },
    { question: "国際連盟を脱退したのは何年?", year: 1933 },
    { question: "二・二六事件が起こったのは何年?", year: 1936 },
    { question: "日中戦争が起こったのは何年?", year: 1937 },
    { question: "第二次世界大戦が始まったのは何年？", year: 1939 },
    { question: "太平洋戦争が始まったのは何年？", year: 1941 },
    { question: "日ソ中立条約が結ばれたのは何年?", year: 1941 },
    { question: "ポツダム宣言を受諾し、降伏したのは何年?", year: 1945 }
],
  //現代
  contemporary1: [
    { question: "財閥解体が行われたのは何年?", year: 1945 },
    { question: "日本国憲法が公布されたのは何年?", year: 1946 },
    { question: "日本国憲法が施行されたのは何年？", year: 1947 },
    { question: "サンフランシスコ平和条約が結ばれたのは何年？", year: 1951 },
    { question: "日米安全保障条約が結ばれたのは何年？", year: 1951 },
    { question: "自衛隊が設置されたのは何年?", year: 1954 },
    { question: "日ソ共同宣言が結ばれたのは何年?", year: 1956 },
    { question: "日韓基本条約が結ばれたのは何年?", year: 1965 },
    { question: "東京オリンピックが開催されたのは何年？", year: 1964 }
],
  contemporary2: [
    { question: "公害対策基本法が制定されたのは何年?", year: 1967 },
    { question: "日中共同声明が出されたのは何年?", year: 1972 },
    { question: "石油危機が起こったのは何年?", year: 1973 },
    { question: "日中平和友好条約が結ばれたのは何年?", year: 1978 },
    { question: "バブル経済が崩壊したのは何年?", year: 1991 },
    { question: "阪神・淡路大震災が発生したのは何年？", year: 1995 },
    { question: "男女平等参画社会基本法が制定されたのは何年?", year: 1999 },
    { question: "東日本大震災が発生したのは何年？", year: 2011 },
    { question: "平成が終わり令和が始まったのは何年？", year: 2019 }
]

};

let quizData = 0;
let currentQuestion = 0;
let score = 0;

function generateQuizData(events) {
  return events.map((event) => {
    const correctAnswer = `${event.year}年`;
    const options = generateOptions(event.year);
    return { question: event.question, correctAnswer, options };
  });
}

function generateOptions(year) {
  const options = new Set([year]);
  while (options.size < 4) {
    const offset = Math.floor(Math.random() * 100) - 50;
    options.add(year + offset);
  }
  return shuffleArray([...options].map((y) => `${y}年`));
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function startQuiz(section) {
  if (!quizSections[section]) return;
  quizData = shuffleArray(generateQuizData(quizSections[section]));
  currentQuestion = 0;
  score = 0;
  document.getElementById("quizMenu").style.display = "none";
  document.getElementById("returnButton").style.display = "inline-block";
  loadQuiz();
}

function loadQuiz() {
  const questionData = quizData[currentQuestion];
  document.getElementById("question").textContent = questionData.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  questionData.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(option);
    optionsContainer.appendChild(button);
  });
}

function checkAnswer(answer) {
  const questionData = quizData[currentQuestion];
  if (answer === questionData.correctAnswer) {
    score++;
    alert("正解！");
  } else {
    alert(`不正解！正しい答えは「${questionData.correctAnswer}」です。`);
  }
  currentQuestion++;
  currentQuestion < quizData.length ? loadQuiz() : showScore();
}

function showScore() {
  document.getElementById("question").textContent = "クイズ終了！";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = `あなたのスコア：${score} / ${quizData.length}`;
  document.getElementById("returnButton").style.display = "inline-block";
}

function returnToMenu() {
  quizData = [];
  currentQuestion = 0;
  score = 0;

  document.getElementById("question").textContent = "";
  document.getElementById("options").innerHTML = "";
  document.getElementById("score").textContent = "";

  document.getElementById("quizMenu").style.display = "block";
  document.getElementById("returnButton").style.display = "none";
}
