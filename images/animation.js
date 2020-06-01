window.onload = function() {
    let myObject1 = document.getElementById('Pie_Charts').contentDocument;
    let cls1 = myObject1.getElementsByClassName('cls-1');
    let cls2 = myObject1.getElementsByClassName('cls-2');
    let cls3 = myObject1.getElementsByClassName('cls-3');
    let cls4 = myObject1.getElementsByClassName('cls-4');
    let cls6 = myObject1.getElementsByClassName('cls-6');

    function scaleImg(){
        TweenMax.to(cls1,cls2,cls3,cls4,cls6, 2, {           
                scale:1.5                 
            });
    }
}