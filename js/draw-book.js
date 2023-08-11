import books from "./booklist.js";

const drawBook = () => {
  const contentItems = document.querySelector(".content-items");
  const liEle = document.createElement("li");

  books.forEach((book) => {
    liEle.innerHTML = `
        <div class="book">
          <div class="img-box">
            <img src="./images/${book.photo}" />
          </div>
          <div class="desc">
            <p class="subject">제목: ${book.subject}</p>
            <p class="author">작가: ${book.author}</p>
            <p class="publisher">출판사: ${book.publisher}</p>
            <p class="date">출판일: ${book.date}</p>
            <p class="price">가격: ${book.price}</p>
            <p class="summary">소개: ${book.summary}</p>
          </div>
          <div class="buttons">
            <button>수정</button>
            <button>삭제</button>
          </div>
        </div>
    `;

    contentItems.appendChild = liEle;
  });
};

export default drawBook;
