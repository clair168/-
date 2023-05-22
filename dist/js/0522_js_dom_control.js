let uid = document.querySelector('#uid')
let doing = document.querySelector('#doing')

doing.addEventListener('click', () => {
    uid.style.color = 'red';
    uid.style.fontSize = '100px';
    uid.style.backgroundColor = '#dedede';

});