document.getElementById('addPara').addEventListener('click',function(){ 
      const player = document.createElement('p');
    player.classList.add('player');
    player.innerHTML = `lorem nai, onek vul ache thik howe jabe in sha Allah, may Allah help me to do this job...`;
    document.getElementById('checkup').appendChild(player);
})