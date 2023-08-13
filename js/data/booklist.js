import { errorEvent } from "../functions/events/error-event.js";

const bookList = [
  {
    subject: "엄마의 책갈피 인문학",
    author: "김선호",
    publisher: "상상출판",
    date: "2020년 11월 02일",
    price: 13320,
    summary:
      "베테랑 초등교사이자 초등교육 전문가 김선호가 학급과 가정에서 직접 효과를 봤던 자녀 교육에",
    photo: "book1.jpg",
  },
  {
    subject: "알록달록 마노의 일러스트 자수",
    author: "류승희(마노자수)",
    publisher: "책밥",
    date: "2020년 10월 27일",
    price: 16200,
    summary:
      "스페인어로 ‘손’을 뜻하는 ‘마노(mano)’에서 예명을 따온 이 책의 저자 ‘마노자수’",
    photo: "book2.jpg",
  },
  {
    subject: "맛있는 홍차를 집에서 즐기는 책",
    author: "야마다 사카에",
    publisher: "북커스",
    date: "2020년 10월 26일",
    price: 15300,
    summary: "없음",
    photo: "noimage.gif",
  },
  {
    subject: "타인의 속마음, 심리학자들의 명언 700",
    author: "김태현",
    publisher: "리텍콘텐츠",
    date: "2020년 11월 02일",
    price: 13950,
    summary:
      "이 책은 심리학자들의 명언을 통해 인간탐구와 타인의 속마음 파악에 대한 통찰을 제공함",
    photo: "book4.jpg",
  },
  {
    subject: "행정법총론 기출문제집",
    author: "박준철",
    publisher: "에스티유니타스",
    date: "2020년 10월 26일",
    price: 36900,
    summary:
      "14년간(2007~2020년) 필수 기출문제 수록, 단원별(강별) 구성으로 기본서",
    photo: "book5.jpg",
  },
  {
    subject: "모두의 자바",
    author: "강경미",
    publisher: "길벗",
    date: "2020년 10월 30일",
    price: 18000,
    summary:
      "자바는 어렵다? 자바나 프로그래밍을 모르더라도 혼자서 배워볼 수는 없을까?",
    photo: "book6.jpg",
  },
  {
    subject: "과학을 아우르는 스토리텔링",
    author: "랜디 올슨",
    publisher: "북스힐",
    date: "2020년 09월 25일",
    price: 14400,
    summary:
      "왜 내가 이야기만 하면 모두들 조는 것일까? 과학 연구를 재미있게 청중들에게 전달할 수 있",
    photo: "book7.jpg",
  },
  {
    subject: "드래곤볼 슈퍼. 13",
    author: "토리야마 아키라 (원작)",
    publisher: "서울미디어코믹스(DCW)",
    date: "2020년 10월 20일",
    price: 4500,
    summary:
      "★ 드디어 성사된 모로와의 재대결!! 메르스와의 수련, 그 성과는?! 지구로 쳐들어온 모",
    photo: "book8.jpg",
  },
  {
    subject: "지니어스 라이프",
    author: "맥스 루가비어",
    publisher: "니들북",
    date: "2020년 10월 20일",
    price: 15750,
    summary:
      "★ 〈뉴욕타임스〉 베스트셀러 작가 ★ 아이튠즈 건강 분야 팟캐스트 1위!",
    photo: "book9.jpg",
  },
  {
    subject: "대통령이 사라졌다. 1",
    author: "빌 클린턴",
    publisher: "베리타스",
    date: "2020년 10월 28일",
    price: 12420,
    summary: "없음",
    photo: "book10.jpg",
  },
];

bookList.forEach((book) => {
  if (book.subject.length > 25) {
    errorEvent("over flow length");
  }
});

export { bookList };
