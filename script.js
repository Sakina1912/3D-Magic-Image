const boxContainer = document.getElementById('box-container')
const magicBtn = document.getElementById('btn')

magicBtn.addEventListener('click',()=> boxContainer.classList.toggle('big'))

function createBox(){
    for(let i=0;i<4;i++){
        for(let j=0;j<4;j++){
            let box = document.createElement('div')
            box.classList.add('box')
            box.style.backgroundPosition = `${-j*125}px ${-i*125}px`
            boxContainer.appendChild(box)
        }
    }
}

createBox()