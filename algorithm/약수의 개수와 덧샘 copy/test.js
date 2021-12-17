function createCheckDigit(...membershipId) {
  const arr = [];
  membershipId.forEach(number => {
    const array = number.split('');
    let numbers = 0;

    for (let i = 0; i < array.length; i++) {
      array[i] = +array[i];
      numbers += array[i];
    }

    if (numbers > 9) {
      const a = +String(numbers)[0];
      const b = +String(numbers)[1];
      const c = String(a + b);
      arr.push(c);
    }
  });
  for (let i = 0; i < arr.length; i++) {
    arr[i];
  }
  return number;
}

createCheckDigit("55555", "2134");