const gridimageThree = document.querySelector('.itemThree');
const gridimageFive = document.querySelector('.itemFive');
const gridimageSeven = document.querySelector('.itemSeven');
const gridNavButtons = document.querySelectorAll('.grid-navButton');


//item three in the gallery grid (landing-page)
gridimageThree.addEventListener('mouseover', function(){
    //make the btn drop down
    gridNavButtons[0].style.height = '100%';

     //when leaving the img/button it goes back to 25% height
    gridimageThree.addEventListener('mouseout', function(){
        gridNavButtons[0].style.height = '25%';
    });
});

//item Five in the gallery grid (landing-page)
gridimageFive.addEventListener('mouseover', function(){
    //make the btn drop down
   gridNavButtons[1].style.height = '100%';

    //when leaving the img/button it goes back to 25% height
   gridimageFive.addEventListener('mouseout', function(){
       gridNavButtons[1].style.height = '25%';
   });
});

//item  seven in the gallery grid (landing-page)
gridimageSeven.addEventListener('mouseover', function(){
    //make the btn drop down
    gridNavButtons[2].style.height = '100%';

    //when leaving the img/button it goes back to 25% height
    gridimageSeven.addEventListener('mouseout', function(){
        gridNavButtons[2].style.height = '25%';
    });
});




