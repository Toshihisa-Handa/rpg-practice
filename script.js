document.write('<img id="rico" src="rico.png">')

//りこオブジェクト
let rico = new Object();
rico.x = 0;
rico.y = 0;
rico.move = 0;

//押されたキーを入れておく
let pressed_key = '';

//キーオブジェクト
let key = new Object();
key.up = false;
key.down = false;
key.right = false;
key.left = false;


function main(){

    //キーボードを押した時
    addEventListener("keydown", keydownfunc); //第３引数がtrueだとlisenerは呼び出しが１回になる
    //キーボードを離した時
    addEventListener("keyup", keyupfunc);

    //rico.moveが0の時、移動する準備をする
    if(rico.move ===0){
        if(key.left ===true){
            rico.move =32
            pressed_key ='left'
        }
        if(key.up ===true){
            rico.move =32
            pressed_key ='up'
        }
        if(key.right ===true){
            rico.move =32
            pressed_key ='right'
        }
        if(key.down ===true){
            rico.move =32
            pressed_key ='down'
        }
    }

   //rico.moveが0より大きい時、移動する
   if(rico.move >0){
       rico.move -= 4;
       if ( pressed_key === 'left' ) rico.x -= 4;
       if ( pressed_key === 'up' ) rico.y -= 4;
       if ( pressed_key === 'right' ) rico.x += 4;
       if ( pressed_key === 'down' ) rico.y += 4;   }


    document.getElementById('rico').style.top = rico.y + "px";
    document.getElementById('rico').style.left = rico.x + "px";

    requestAnimationFrame(main);
}
requestAnimationFrame(main);


//ボタンを押した時実行
function keydownfunc(event){
    let key_code = event.keyCode
    if(key_code ===37) key.left = true;
    if(key_code ===38) key.up = true;
    if(key_code ===39) key.right = true;
    if(key_code ===40) key.down = true;
   }
   

//ボタンを離した時実行
function keyupfunc(event){
    let key_code = event.keyCode
    if(key_code ===37) key.left = false;
    if(key_code ===38) key.up = false;
    if(key_code ===39) key.right = false;
    if(key_code ===40) key.down = false;
}



// let rico = new Object();
// //name
// rico.name ='りこ'
// //country
// rico.country = '日本'
// //like
// rico.like = '錦戸くん'
// //dislike
// rico.dislike = 'おばけ'
// //langage
// rico.language = 'javascript'

// alert(rico.name)
// alert(rico.country)
// alert(rico.like)
// alert(rico.dislike)
// alert(rico.language)
