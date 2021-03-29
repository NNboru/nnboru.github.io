let url = 'https://nnboru.github.io'
if(navigator.share){
    myapp.insertAdjacentHTML('beforeEnd',`<a onclick='sharemyapp()'><img src='files/share.png'/></a>`)
    //myapp.insertAdjacentHTML('beforeEnd',`<a href='whatsapp://send?text=${url}'><img src='files/share.png'/></a>`)
}
function sharemyapp(){
    navigator.share({
        title:'pop pic maker',
        message:'Try it now!\nCreate live wallpaper from your pics, modify its animation and pop it!',
        url:'https://play.google.com/store/apps/details?id=com.rohan_rawat_nn_pop_pic_maker'
    })
}
// heada3.onclick=()=>popup.showModal();
// cross.onclick=()=>popup.close();

heada1.onclick=()=>{
    let tmp = document.getElementById('main-content');
    tmp.scrollIntoView({behavior:'smooth'});
    // window.scrollTo({top:tmp.offsetTop, behavior:'smooth'});
}
heada2.onclick=()=>{
    projectdiv.scrollIntoView({behavior:'smooth'});
}
heada3.onclick=()=>{
    contactdiv.scrollIntoView({behavior:'smooth'});
}
headbar.onclick=()=> menubut.click();

let menustate=0;
menubut.onclick=()=>{
    if(menustate==0){
        headbar.classList.add('head-show');
        menustate=1;
    }
    else{
        menustate=0;
        headbar.classList.remove('head-show');
    }
}

function updateA(atag, elem){
    let {top,bottom} = elem.getBoundingClientRect(), h=window.innerHeight;
    let val, num=10;
    if(top>h || bottom<0) val=0;
    else if(top>0 && top<h)
        val=(1-top/h)*num;
    else if(bottom>h) val=num;
    else val=bottom/h*num;

    let text, c='#bf3a';
    text=val==0?'none':
        `${val}px ${val}px ${val}px ${c}, ${val}px -${val}px ${val}px ${c}, 
        -${val}px -${val}px ${val}px ${c}, -${val}px ${val}px ${val}px ${c}, 0 0 ${val}px ${c}`
    atag.style['text-shadow']=text;
}

function updateHead() {
    updateA(heada1, document.getElementById('main-content').firstElementChild.nextElementSibling);
    updateA(heada2, projectdiv);
    updateA(heada3, contactdiv);
    requestAnimationFrame(updateHead);
}
requestAnimationFrame(updateHead);
