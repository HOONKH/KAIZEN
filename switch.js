let a = 9;

switch (a) {
  case a >= 1 && a <= 5:
    console.log("a가 1~ 5 사이의 숫자입니다.");
    break;
  case a >= 6 && a <= 8:
    console.log("a가 6~8사이의 숫자입니다.");
    break;
  case a === 9:
    console.log("a가 9 입니다.");
    break;
  default:
    console.log("a는 0~9 사이의 숫자가아닙니다");
}
