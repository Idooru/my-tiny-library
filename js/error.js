export const error = (errorCase) => {
  const redirectUrl = "../error.html?error-content-message";
  let contentMessage;
  let buttonMessage;

  switch (errorCase) {
    case "over flow length":
      contentMessage = encodeURIComponent(
        "책 제목의 길이가 25글자를 넘지 않게 해주세요!"
      );
      buttonMessage = encodeURIComponent("수정");

      window.location.href = `${redirectUrl}=${contentMessage}&button-message=${buttonMessage}`;
    case "not found name":
      contentMessage = encodeURIComponent("해당 책 제목은 존재하지 않습니다!");
      buttonMessage = encodeURIComponent("수정");

      window.location.href = `${redirectUrl}=${contentMessage}&button-message=${buttonMessage}`;
  }
};
