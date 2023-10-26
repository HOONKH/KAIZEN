let a = "woWowoWowoo";
let searcho = "o";

for (i = 0; i < a.length; i++) {
  if (a[i] === searcho) {
    console.log(`${i + 1}번째에 ${searcho}가 있습니다.`);
  }
}
