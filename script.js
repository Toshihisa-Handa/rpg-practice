document.write('<img id="rico" src="rico.png">')

//りこオブジェクト
let rico = new Object();
rico.x = 0;
rico.y = 0;

addEventListener("keydown", keydownfunc);
function keydownfunc(event){
 if(event.keyCode ===37) rico.x -= 32;
 if(event.keyCode ===38) rico.y -= 32;
 if(event.keyCode ===39) rico.x += 32;
 if(event.keyCode ===40) rico.y += 32;
 document.getElementById('rico').style.top = rico.y + "px";
 document.getElementById('rico').style.left = rico.x + "px";
}




// //オブジェクト作成令
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
