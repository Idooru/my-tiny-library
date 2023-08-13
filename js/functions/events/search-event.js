export const searchEvent = () => {
  const inputBoxEle = document.querySelector(".input-box");
  const searchFormEle = document.querySelector("#search-form");

  searchFormEle.addEventListener("submit", (event) => {
    event.preventDefault();

    const redirectUrl = "../search.html?search-item";
    const searchItem = encodeURIComponent(inputBoxEle.value);
    const queryStringUrl = `${redirectUrl}=${searchItem}`;

    window.location.href = queryStringUrl;
  });
};
