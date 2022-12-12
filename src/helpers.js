function generateRandomNum(firstNumb, secondNumb) {
  return Math.floor(Math.random() * (firstNumb - secondNumb) + secondNumb);
}

export default generateRandomNum;
