// 시작 항목
const checkResult = document.getElementById("checkResult");

// Good Job 항목
const pass = document.getElementById("pass");
const passPopup = document.getElementById("passPopup");
const pointNum = document.getElementById("pointNum");
const totalStudyScoreNum = document.getElementById("totalStudyScore");
const readingUnit = document.getElementById("readingUnit");

// 일일목표 달성 항목
const dailyGoal = document.getElementById("dailyGoal");
const dailyGoalPopup = document.getElementById("dailyGoalPopup");

// 일일목표 어워드 항목
const dailyGoalAward = document.getElementById("dailyGoalAward");
const dailyGoalAwardPopup = document.getElementById("dailyGoalAwardPopup");

// 연속학습 달성 항목
const streak = document.getElementById("streak");
const streakPopup = document.getElementById("streakPopup");

// 연속학습 어워드 항목
const streakAward = document.getElementById("streakAward");
const streakAwardPopup = document.getElementById("streakAwardPopup");

// 새로운 프렌즈 스토리 오픈 항목
const friendsStory = document.getElementById("friendsStory");
const friendsStoryPopup = document.getElementById("friendsStoryPopup");

// 레벨 마스터 항목
const levelMaster = document.getElementById("levelMaster");
const levelMasterPopup = document.getElementById("levelMasterPopup");

// 챌린지 어워드 항목 (영어독서왕 시상)
const challengeAward = document.getElementById("challengeAward");
const challengeAwardPopup = document.getElementById("challengeAwardPopup");

// 미디어 쿼리
const mobile = matchMedia("screen and (max-width: 1023px)");
const tablet = matchMedia("(min-width: 1024px) and (max-width: 1440px)");

// 오디오 소스
const audioPass = new Audio("src/audio/study-result-pass.mp3");
const audioFail = new Audio("src/audio/study-result-fail.mp3");
const audioDailyGoal = new Audio("src/audio/daily-goal.mp3");
const audioAward = new Audio("src/audio/award.mp3");
const audioStreak = new Audio("src/audio/streak.mp3");
const audioNewFriends = new Audio("src/audio/new-friends-story.mp3");
const audioAwardChallenge = new Audio("src/audio/award-challenge.wav");

function playAudioPass() {
  audioPass.play();
}
function playAudioDailyGoal() {
  audioDailyGoal.play();
}
function playAudioAward() {
  audioAward.play();
}
function playAudioStreak() {
  audioStreak.play();
}
function playAudioNewFriends() {
  audioNewFriends.play();
}
function playAudioAwardChallenge() {
  audioAwardChallenge.play();
}

// 1단계 : 보물상자 다음
function runCheckResult(point, totalStudyScore, unitName) {
  let readingUnitImage = "pass-" + unitName;

  playAudioPass();

  pointNum.innerHTML = point;
  totalStudyScoreNum.innerHTML = totalStudyScore;
  readingUnit.className = "reading-unit " + readingUnitImage;

  checkResult.className = "d-none";
  pass.style.display = "flex";

  setTimeout(() => {
    passPopup.className =
      "result-popup d-block animate__animated animate__bounceIn";
  }, 1000);
}

// 2단계 : Good Job 다음
function runGoodJobNext() {
  playAudioDailyGoal();

  pass.style.display = "none";
  passPopup.className = "result-popup d-none";

  dailyGoal.style.display = "flex";

  setTimeout(() => {
    dailyGoalPopup.className =
      "result-popup d-block animate__animated animate__bounceIn";
  }, 500);
}

// 3단계 : 일일목표 달성 다음
function runDailyGoalNext() {
  playAudioAward();

  dailyGoal.style.display = "none";
  dailyGoalPopup.className = "result-popup d-none";

  dailyGoalAward.style.display = "flex";

  setTimeout(() => {
    dailyGoalAwardPopup.className = "result-popup d-block";
  }, 500);
}

// 4단계 : 일일목표 어워드 다음
function runDailyGoalAwardNext() {
  playAudioStreak();

  dailyGoalAward.style.display = "none";
  dailyGoalAwardPopup.className = "result-popup d-none";

  streak.style.display = "flex";

  setTimeout(() => {
    streakPopup.className =
      "result-popup d-block animate__animated animate__fadeIn";
  }, 500);
}

// 5단계 : 연속학습 달성 다음
function runStreakNext() {
  playAudioAward();

  streak.style.display = "none";
  streakPopup.className = "result-popup d-none";

  streakAward.style.display = "flex";

  setTimeout(() => {
    streakAwardPopup.className = "result-popup d-block";
  }, 500);
}

// 6단계 : 연속학습 어워드 다음
function runNewFreindsStoryNext() {
  playAudioNewFriends();

  streakAward.style.display = "none";
  streakAwardPopup.className = "result-popup d-none";

  friendsStory.style.display = "flex";

  setTimeout(() => {
    friendsStoryPopup.className =
      "result-popup d-block animate__animated animate__zoomIn";
  }, 500);
}

// 7단계 : 새로운 프렌즈 스토리 오픈 다음
function runLevelMasterNext() {
  playAudioAward();

  friendsStory.style.display = "none";
  friendsStoryPopup.className = "result-popup d-none";

  levelMaster.style.display = "flex";

  setTimeout(() => {
    levelMasterPopup.className =
      "result-popup d-block animate__animated animate__zoomIn";
  }, 500);
}

// 8단계 : 레벨 마스터 다음
function runChallengeAwardNext() {
  playAudioAwardChallenge();

  levelMaster.style.display = "none";
  levelMasterPopup.className = "result-popup d-none";

  challengeAward.style.display = "flex";

  setTimeout(() => {
    challengeAwardPopup.className =
      "result-popup d-block animate__animated animate__zoomIn";
  }, 500);
}

// 디바이스 크기에 따라 팝업 사이즈 계산
if (mobile.matches) {
  passPopup.style.scale = 0.65;
  dailyGoalPopup.style.scale = 0.75;
  dailyGoalAwardPopup.style.scale = 0.75;
  streakPopup.style.scale = 0.75;
  streakAwardPopup.style.scale = 0.75;
  friendsStoryPopup.style.scale = 0.75;
  levelMasterPopup.style.scale = 0.75;
  challengeAwardPopup.style.scale = 0.75;
}
if (tablet.matches) {
  passPopup.style.scale = 0.75;
  dailyGoalPopup.style.scale = 0.85;
  dailyGoalAwardPopup.style.scale = 0.85;
  streakPopup.style.scale = 0.85;
  streakAwardPopup.style.scale = 0.85;
  friendsStoryPopup.style.scale = 0.85;
  levelMasterPopup.style.scale = 0.85;
  challengeAwardPopup.style.scale = 0.85;
}
