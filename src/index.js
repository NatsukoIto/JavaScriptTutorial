// //* * const,let等の変数宣言*//

// var i =  'val1';
// console.log(i);

// i = 'val変数を上書き';
// console.log(i);

// var i = "var変数を再宣言"
// ;
// console.log(i);

// let i = "let変数";
// console.log(i);

// i = "let変数を上書き";
// console.log(i)

// // letは再宣言不可能 ;

// const val3 = "const変数";
// console.log(val3);

// const変数は上書き不可能

//　constで定義したオブジェクトはプロパティの変更可能
// const val4 = {
//   name: "なつこ",
//   age: 28
// };

// val4.name = "けっぴ";
// val4.address = "姪浜";
// console.log(val4);

//　constで定義した配列はプロパティの変更可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// テンプレートの文字列
// const nam = "なつこ";
// const age = 29;
// 私の名前はなつこです。年齢は29歳です。
// 従来の方法
// const message1 = "私の名前は" + nam + "です。年齢は" + age + "です。";
// console.log(message1);

// const message2 = `私の名前は${nam}です。年齢は${age}です。`;
// console.log(message2);

// アロー関数
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

// 分割代入
// const myProfile = {
//   name: "なつこ",
//   age: 29
// };
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["なつこ", 29];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

// // デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("なつこ");

// スプレッド構文 ...
// 配列の展開
// const arr = [1, 2];
// // console.log(arr);
// // console.log(...arr);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr[0], arr[1]);
// sumFunc(...arr);

// まとめる
// const arr = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

//mapやfilterを使った配列の処理
// 従来の配列処理（for文）
// 配列の中身を取り出す
const nameArr = ["田中", "山田", "伊東"];

// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// mapを使った処理
// 配列をそのまま出力
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// // map (配列の中身を１つずつ取り出す)
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// filter 条件に一致データを取り出す
// 奇数(偶数)のものだけを取り出す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   // return num % 2 === 1;
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// 自分の名前だけ「さん」をつけない。
// const newNmaeArr = nameArr.map((name) => {
//   if (name === "伊東") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNmaeArr);

// 三項演算子 条件文を一行で記載できる。
// ある条件 ? 条件がtureの時: 条件がfalseの時
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);
// const num = "1300";
// // toLocaleString（数字を金額形式の3桁区切りで表示
// console.log(num.toLocaleString());

// // 入力値が数値がどうか判定
// const formattedNum =
//   typeof num == "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています!" : "許容範囲内です。";
// };
// console.log(checkSum(50, 40));

// 論理演算子の本当の意味を知ろう
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("１か２はtrueになります。");
// }

// if (flag1 && flag2) {
//   console.log("１も２もtrueになります。");
// }

//  ||は左側がfalseなら右側を返す。
// nullだとfalseになる。
// const num = 100;
// const fee = num || "全額未設定です。";
// console.log(fee);

// &&は左側がtrueなら右側を返す。
const num2 = null;
const fee2 = num2 && "何か設定されました。";
console.log(fee2);
