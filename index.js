const changeLocation = () => {
  let button = document.getElementById("no");
  let randomNum1 = Math.floor(Math.random() * 800);
  let randomNum2 = Math.floor(Math.random() * 300);
  console.log(randomNum1, randomNum2);
  button.style.transform = `translate(${randomNum1}px, ${randomNum2}px)`;
};
