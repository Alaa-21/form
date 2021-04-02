
let form1 = document.getElementById('form1');
let form2 = document.getElementById('form2');
let form3 = document.getElementById('form3');
let progress = document.getElementById('progress');
let next1 = document.getElementById('next1');
let back1 = document.getElementById('back1');
let next2 = document.getElementById('next2');
let back2 = document.getElementById('back2');
let submit = document.getElementById('submit');
let success = document.getElementById('success');

next1.addEventListener('click', function(){
  form1.style.left = '-450px';
  form2.style.left = '40px';
  progress.style.width = '175px'
});

back1.addEventListener('click', function(){
  form1.style.left = '40px';
  form2.style.left = '450px'
  progress.style.width = '90px'

})

next2.addEventListener('click', function(){
  form2.style.left = '-450px';
  form3.style.left = '40px';
  progress.style.width = '265px'

});
back2.addEventListener('click', function(){
  form2.style.left = '40px';
  form3.style.left = '450px';
  progress.style.width = '175px'

});
submit.addEventListener('click', function(){
  form3.style.left = '-450px';
  success.style.left = '0px'
  progress.style.width = '360px'

});
