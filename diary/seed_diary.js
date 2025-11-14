(() => {
  const 감정들 = ["행복해요", "슬퍼요", "놀랐어요", "화나요", "기타"];

  const 제목템플릿 = [
    "오늘의 일기",
    "작은 행복",
    "마음 기록",
    "특별한 순간",
    "조용한 하루",
    "소소한 기쁨",
    "비 오는 날 생각",
    "커피 한 잔",
    "산책 기록",
    "꿈을 향해",
  ];

  const 내용템플릿 = [
    "오늘 느낀 감정을 짧게 남겨본다.",
    "하루를 돌아보며 마음을 정리했다.",
    "기억하고 싶은 순간을 기록했다.",
    "새로운 도전을 시작한 하루였다.",
    "사소한 일에도 감사함을 느낀 날이었다.",
    "조금은 힘들었지만 의미 있는 시간이 되었다.",
    "좋은 사람들과 함께 보내서 즐거웠다.",
    "앞으로의 계획을 세워 보았다.",
    "자연을 보며 마음이 편안해졌다.",
    "스스로에게 응원의 말을 건넸다.",
  ];

  const createDateString = (offset) => {
    const today = new Date();
    today.setDate(today.getDate() - offset);
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}.${month}.${day}`;
  };

  const 일기카드들 = Array.from({ length: 100 }, (_, index) => {
    const 감정 = 감정들[index % 감정들.length];
    const 제목 = `${제목템플릿[index % 제목템플릿.length]} #${index + 1}`;
    const 내용 = `${내용템플릿[index % 내용템플릿.length]} (${index + 1})`;
    const 날짜 = createDateString(index);
    return { 기분: 감정, 제목, 내용, 날짜 };
  });

  localStorage.setItem("일기카드들", JSON.stringify(일기카드들));
  console.log("일기카드들 100개가 localStorage에 저장되었습니다.");
})();

