const player1 = {
  name: 'SCORPION',
  hp: 70,
  img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
  weapon: ['kunai', 'ninjato', 'sword'],
  attack: function () {
    console.log(this.name + 'Fight...');
  }
};

const player2 = {
  name: 'SUB-ZERO',
  hp: 30,
  img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
  weapon: ['sword', 'hammer', 'tanto'],
  attack: function () {
    console.log(this.name + 'Fight...');
  }
};

function createPlayer(playerClass, playerName, hp) {
  const player = document.createElement('div');
  player.classList.add(playerClass);

  const progressbar = document.createElement('div');
  progressbar.classList.add('progressbar');

  const life = document.createElement('div');
  life.classList.add('life');
  life.style.width = playerName.hp + '%';

  const name = document.createElement('div');
  name.classList.add('name');
  name.innerText = playerName.name;

  const character = document.createElement('div');
  character.classList.add('character');

  const img = document.createElement('img');
  img.src = playerName.img;

  player.appendChild(progressbar);
  player.appendChild(character);
  progressbar.appendChild(life);
  progressbar.appendChild(name);
  character.appendChild(img);

  const arenas = document.querySelector('.arenas');
  arenas.appendChild(player);
};

createPlayer('player1', player1);
createPlayer('player2', player2);