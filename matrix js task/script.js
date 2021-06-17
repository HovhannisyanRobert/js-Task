// chech array length
function checkInputNumber() {
    let num = +prompt("Enter numbers");
    if (isNaN(num) || !Number.isInteger(num) || num > 10) {
      alert("Wrong input number");
      return checkInputNumber();
    }
  
    return num;
  }
  
  const n = checkInputNumber();
  const m = checkInputNumber();
  const p = checkInputNumber();
  
  
  // Random number
  function randomNumber() {
    let number = Math.trunc(Math.random() * 100);
    if (Math.random () * 10 < 5) {
      return (-number);
    }
    return number;
  }
  
  // // create matrix 
  function matrix(n, m) {
    const arrMatrix = [];
    for (let i = 0; i < n; i++) {
      const arrElement = [];
      for (let j = 0; j < m; j++) {
        arrElement.push(randomNumber());
      }
      arrMatrix.push(arrElement);
    }
    return arrMatrix;
  }
  
  // Create Array
  function arrFunc(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(randomNumber());
    }
    return arr;
  }
  
  // const a = arrFunc(n);
  // console.log(a);
  
  // const b = (matrix(n, m));
  // // console.log(b);
  
  // tasks 38 page 120
  // let sum = 0;
  // let index = 0;
  
  // for (let i = 0; i < b.length; i++) {
  //     for( let j = 0; j < b[i].length; j++) {
  //         if (b[i][j] > 0) {
  //             sum += b[i][j];
  //             index ++;
  //         }
  //     }
  // }
  
  // // console.log(sum);
  // // console.log(index);
  // const positiveMidNumber = sum / index;
  // console.log(positiveMidNumber);
  
  
  // // tasks 39 page 120
  // let minElement = 0;
  
  // for (let i = 0; i < b.length; i++) {
  //     for( let j = 0; j < b[i].length; j++) {
  //         if (b[i][j] < minElement) {
  //             minElement = b[i][j];
  //         }
  //     }
  // }
  
  // console.log(minElement);
  
  // // tasks 40 page 121
  // function checkNumberPosition() {
  //     let num = +prompt("Enter number position");
  //     if (isNaN(num) || !Number.isInteger(num) || num >= m) {
  //       alert("Wrong input number");
  //       return checkNumberPosition();
  //     }
    
  //     return num;
  //   }
    
  // const k = checkNumberPosition();
  
  // const c = (matrix(n, m));
  // console.log(c);
  
  // for(let i = 0; i < c.length; i++){
  //   for(let j = i + 1; j < c.length; j++){
  //       if(c[j][k] > c[i][k]){
  //           let z = c[j][k];
  //           c[j][k] = c[i][k];
  //           c[i][k] = z;
  //       }
  //   }
  // }
  // console.log(c);
  
  // task 41 page 123
  
  // const s = (matrix(n, m));
  // console.log(s);
  
  // let min = 0;
  // for (let i = 0; i < s.length; i++) {
  //   let min = s[0][i]
  //   for (let j = 0; j < s[i].length; j++) {
  //     if (s[j][i] < min) {
  //       min = s[j][i];
  //     }
  //   }
  //   console.log(`min = ${min}`);
  // }
  
  
  // task 42 page 124
  
  // const s = (matrix(n, m));
  // console.log(s);
  // arrPositive = [];
  // for (let i = 0; i < s.length; i++) {
  //     let positive = 0
  //     for (let j = 0; j < s[i].length; j++) {
  //       if (s[i][j] >= 0 && s[i][j] !== (-0)) {
  //         positive++;
  //       }
  //     }
  //     arrPositive.push(positive);
  //   }
  
  //   console.log(arrPositive);
  
  
  
  // // task 43 page 124
  
  // const c = (matrix(n, m));
  
  // // console.log(c);
  // let sum = 0 ;
  
  // for (let i = 0; i < c.length; i++) {
  //   sum = 0
  //   let min = c[i][0];
  //   for (let j = 1; j < c[i].length; j++) {
  //     if(min >  c[i][j]) {
  //       sum += min;
  //       sum += c[i][j];
  //       min = c[i][j];
  //     }
  //   }
  //   console.log(sum);
  // }
  
  // // task 44 page 126
  
  // function matrix(n, m) {
  //   const arrRow = [];
  //   const arr = [];
  //   for (let i = 0; i < n; i++) {
  //     arrRow.push(Math.floor(Math.random() * 10));
  //   }
  //   arr.push(arrRow);
  //   for (let i = 1; i < m; i++) {
  //     const row = [];
  //     for (let j = 0; j < n; j++) {
  //       row.push(Math.pow(arrRow[j], i+1))
  //     }
  //     arr[i] = (row);
  //   }
  
  //   return arr;
  // }
  
  // const b = matrix(n, m);
  // console.log(b);
  
  // task 45 page 129
  
  // const b = matrix(n, m);
  // // console.log(b);
  // const a = arrFunc(n);
  // // console.log(a);
  
  // for (let i = 0; i < n; i++) {
  //   let sum = 0;
  //   for (let j = 0; j < n; j++) {
  //     sum += a[i] * b[i][j]
  //   }
  //   console.log(sum);
  // }
  
  // // task 46 page 129
  
  // const a = matrix(n, m);
  // console.log(a);
  // const b = matrix(m, p);
  // console.log(b);
  // const c = [];
  
  // for (let i = 0; i < n; i++) {
  //   const singleArr = [];
  //   for (let j = 0; j < m; j++) {
  //       singleArr.push(a[i][j] * b[j][i]);
  //   }  
  //     if (singleArr.length !== b[i].length) {
  //       for (let k = singleArr.length; k < p; k++) {
  //         singleArr.push(b[i][k]);
  //     }
  //   }
  //   c.push(singleArr);
  // }
  // console.log(c);
  
  // task 47 page 131
  
  // const b = matrix(n, n);
  // let sum = 0;
  
  // for (let i = 1; i < n; i++) {
  //   let oddSum = 0;
  //   for (let j = 0; j < i; j++) {
  //     if ((i + j) % 2 !== 0) {
  //       oddSum += Math.pow((b[i][j], 2));
  //     }
  //     oddSum = Math.sqrt(oddSum / j);
  //     // console.log(oddSum);
  //   }
  //   sum += oddSum;
  // }
  
  // console.log(sum);
  
  // task 48 page 133
  
  // const b = matrix(n, n);
  
  // for (let i = n-1; i < 0; i--) {
  //   let min = 0;
  //   for (let j = b[i].length-1; j <= i; j--) {
  //     if (b[i][j] % 2 === 0) {
  //       if (min > b[i][j]) {
  //         min = b[i][j];
  //       } else if (b[i][j] > min){
  //         min = b[i][j];
  //       }
  //     }
  //   }
  //   console.log(min);
  // }
  
  // task 49 page 135
  
  // const general = [];
  // let alien = [];
  // const arr = matrix(n, n);
  // const a = [];
  // // console.log(arr);
  // for (let i = 0; i < arr.length; i++) {
  //   for(let j = 0; j <arr[i].length; j++) {
  //     if(i + j === arr.length-1) {
  //       alien.push(arr[i][j]);
  //     }
  //     if (i === j) {
  //       general.push(arr[i][j]);
  //     }
  //   }
  // }
  
  // for (let k = 0; k < glxavor.length; k++) {
  //   general[k] > alien[k] ? a.push(general[k]) : a.push(alien[k]);
  // }  
  // console.log(a);
  
  // task 50 page 137
  
  // const c = matrix(n, n);
  
  // for (let i = 0; i < n; i++) {
  //   for (let j = n - 1; j > 0; j++) {
  
  //   }
  // }