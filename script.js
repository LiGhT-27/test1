const nextBtn = document.querySelector('.nextbtn');
const prevBtn = document.querySelector('.prevbtn');
const container = document.querySelector('.images');

var counter=1;

nextBtn.addEventListener('click',next);
prevBtn.addEventListener('click',prev);

function next()
{
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'})
    if(counter === 5)
    {
        counter=0;
    }
    counter++;
   // console.log(counter);
    container.style.backgroundImage=`url(img/Img-${counter}.jpg`
}
function prev()
{
    container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000, fill:'forwards'})
    if(counter === 1)
    {
        counter=6;
    }
    counter--;
   // console.log(counter);
    container.style.backgroundImage=`url(img/Img-${counter}.jpg`
}