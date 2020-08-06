const string =
  `/*送你一个小可爱*/
.skin{
  background:#ffe600; /*先画出它的黄色皮肤*/
  min-height:50vh;
  position: relative;
}
/*接着它的鼻子*/
.nose {
  border: 10px solid black;
  border-color: black transparent transparent;
  border-bottom: none;
  width: 0px;
  height: 0px;
  position: relative;
  left: 50%;
  top: 145px;
  margin-left: -10px;
  z-index: 10;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  33% {
    transform: rotate(5deg);
  }
  66% {
    transform: rotate(-5deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
/*添加动感*/
.nose:hover {
  transform-origin: center bottom;
  animation: wave 300ms infinite linear;
}

.yuan {
  position: absolute;
  width: 20px;
  height: 5px;
  top: -15px;
  left: -10px;
  /* border-radius: 10px 10px 0 0; */
  border-top-left-radius: 11px 5px;
  border-top-right-radius: 11px 5px;
  background: black; /*把鼠标移到鼻子上试试*/
}
/*接下来画圆圆的卡姿兰大眼睛*/
.eye {
  border: 2px solid black;
  width: 64px;
  height: 64px;
  position: absolute;
  left: 50%;
  top: 100px;
  margin-left: -32px;
  background: #2e2e2e;
  border-radius: 50%;
}

.eye::before {
  content: "";
  display: block;
  border: 3px solid black;
  height: 30px;
  width: 30px;
  position: relative;
  background: white;
  border-radius: 50%;
  left: 4px;
  top: 2px;
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}
/*性感的嘴唇哈哈*/
.mouth {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 170px;
  left: 50%;
  margin-left: -100px;
}

.mouth .up {
  position: relative;
  top: -20px;
  z-index: 1;
}

.mouth .up .lip {
  border: 3px solid black;
  height: 30px;
  width: 100px;
  background: #ffe600;
  border-top-color: transparent;
  border-right-color: transparent;
  position: relative;
  position: absolute;
  left: 50%;
  margin-left: -50px;
}

.mouth .up .lip.left {
  border-radius: 0 0 0 50px;
  transform: rotate(-15deg) translateX(-53px);
}

.mouth .up .lip.right {
  border-radius: 0 0 50px 0;
  transform: rotate(15deg) translateX(53px);
}

.mouth .up .lip::before {
  content: "";
  display: block;
  width: 7px;
  height: 30px;
  position: absolute;
  bottom: 0;
  background: #ffe600;
}

.mouth .up .lip.left::before {
  right: -6px;
}

.mouth .up .lip.right::before {
  left: -6px;
}

.mouth .down {
  height: 180px;
  position: absolute;
  top: 5px;
  width: 100%;
  overflow: hidden;
}

.mouth .down .yuan1 {
  border: 3px solid black;
  width: 150px;
  height: 1000px;
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -75px;
  border-radius: 75px/300px;
  background: #9b000a;
  overflow: hidden;
}

.mouth .down .yuan1 .yuan2 {
  width: 200px;
  height: 300px;
  background: #e9425c;
  position: absolute;
  bottom: -155px;
  left: 50%;
  margin-left: -100px;
  border-radius: 100px;
}

.face {
  position: absolute;
  left: 50%;
  border: 3px solid black;
  width: 88px;
  height: 88px;
  top: 200px;
  margin-left: -44px;
  z-index: 3;
}

.face.left {
  transform: translateX(-180px);
  background: #ff0000;
  border-radius: 50%;
}

.face.right {
  transform: translateX(180px);
  background: #ff0000;
  border-radius: 50%;
}
/*画好啦，一只皮卡丘送给你*/
`

const player = {
  id:undefined,
  time:100,
  ui:{
    demo:document.querySelector('#demo'),
    demo2:document.querySelector('#demo2')
  },
  events:{
    '#btnPause':'pause',
    '#btnPlay':'play',
    '#btnSlow':'slow',
    '#btnNormal':'normal',
    '#btnFast':'fast'
  },
  n:1,
  init:()=>{
    player.ui.demo.innerText = string.substr(0,player.n)
    player.ui.demo2.innerHTML = string.substr(0,player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents:()=>{
    for(let key in player.events){
      if(player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  run:()=>{
    player.n +=1
    if(player.n > string.length){
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substr(0,player.n)
    player.ui.demo2.innerHTML = string.substr(0,player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play:()=>{
    player.id = setInterval(player.run,player.time)
  },
  pause:()=>{
    window.clearInterval(player.id)
},
  slow:()=>{
    player.pause()
    player.time = 300
    player.play()
  },
  normal:()=>{
    player.pause()
    player.time = 100
    player.play()
  },
  fast:()=>{
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()