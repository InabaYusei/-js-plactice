const servants = ['犬', '猿', '雉'];

// function appendServants(newcomer) {
//     servants.push(newcomer);  // ← 受け取った変数を使って書ける
  
//     console.log('現在の家来は：');
//     for (const servant of servants) {
//       console.log(servant);
//     }
//     console.log(`の総勢 ${servants.length} 名です。`);
//   }



// appendServants('鬼');
// appendServants('桃');
// appendServants('爺');



function swapServants(newcomer) {
    servants.push(newcomer);
    servants.shift();  // 先頭要素を削除
  
    console.log('現在の家来は：');
    for (const servant of servants) {
      console.log(servant);
    }
    console.log(`の総勢 ${servants.length} 名です。`);
  }

  swapServants('鬼');
  console.log('犬さん、これまでありがとう！');
  
  swapServants('桃');
  console.log('猿さん、これまでありがとう！');

{
    // 配列を戻り値とする関数
function getArray() {
    return ['A', 'B', 'C'];  // 配列を返す
  }
  const array = getArray();
  console.log(array[1]); // → B
  
  // オブジェクトを戻り値とする関数
  function getObject() {
    return {a: 'A', b: 'B', c: 'C'};  // オブジェクトを返す
  }
  const obj = getObject();
  console.log(obj.a); // → A
}


{
    function getArray() {
        return ['A', 'B', 'C'];
      }
      
      const [a, b, c] = getArray();
      
      console.log(a); // → A
      console.log(b); // → B
      console.log(c); // → C
}

{
    function getObject() {
        return {a: 'A', b: 'B', c: 'C'};
      }
      
      // プロパティaとcの値だけ受け取る
      const { a: a_value, c: c_value } = getObject();
      
      console.log(a_value); // → A
      console.log(c_value); // → C
}

{
    const array = [1, 2, 3];
    const newArray = array.map((el) => el + '号');
    const log = console.log(newArray);
}

{
    const array = [3, 4, 5];
    const newArray = array.map((el) => el == 3 ? el + 'rd' : el + 'th');
    const log = console.log(newArray);
}


{
// 関数文
function sayHello(who) {
    return `Hello ${who}!!`;
  }
}
 
{// function関数式
  const sayHello = function(who) {
    return `Hello ${who}!!`;
  };
}


{
const obj = {
    name: 'OJK',
    sayHello: function () { // 関数式
      console.log('Hello World!!');
    },
  };
  
  obj.sayHello();  // → Hello World!!
}
{
  const obj = {
    name: 'OJK',
    sayHello() {
      console.log('Hello World!!');
    },
  };
}



{
    const obj = {
        name: 'OJK',
        sayHello() {
          // 同じオブジェクト内のプロパティが使える
          console.log(`Hello ${this.name}!!`);
        },
        sayHelloTwice() {
          this.sayHello(); // 同じオブジェクト内のメソッドが使える
          this.sayHello();
        }
      };
      
      obj.sayHello(); // → Hello OJK!!
      
      obj.name = '桃太郎';
      obj.sayHelloTwice(); // → Hello 桃太郎!! Hello 桃太郎!!
}

