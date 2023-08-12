export const error = (errorCase) => {
  switch (errorCase) {
    case "over flow length":
      const redirectUrl = "../error.html?error-content-message";
      const contentMessage = encodeURIComponent(
        "책 제목의 길이가 25글자를 넘지 않게 해주세요!"
      );
      const buttonMessage = encodeURIComponent("수정");

      window.location.href = `${redirectUrl}=${contentMessage}&button-message=${buttonMessage}`;
    case "not found name":
      errorContentEle.innerText = "첵 재목이 존재하지 않습니다!";
  }
};
