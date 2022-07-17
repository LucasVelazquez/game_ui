let p1Life = document.querySelector("#player1 > div:nth-child(2) > span");
let p1LifeBar = document.querySelector("#player1 > div:nth-child(3) > progress");

let p2Life = document.querySelector("#player2 > div:nth-child(2) > span");
let p2LifeBar = document.querySelector("#player2 > div:nth-child(3) > progress");

let player1 = {
  health: 10,
  maxHealth: 10,
};

let player2 = {
  health: 10,
  maxHealth: 10,
};

function load() {
  p1Life.textContent = player1.health;
  p1LifeBar.value = player1.health;
  p1LifeBar.max = player1.maxHealth;

  p2Life.textContent = player2.health;
  p2LifeBar.value = player2.health;
  p2LifeBar.max = player2.maxHealth;
}

function takeDamage(player) {
  if (player === 1) {
    let damage = document.querySelector("#player1 > div:nth-child(4) > input[type=number]").value;
    player1.health -= damage;
    updateLife(1);
  } else {
    let damage = document.querySelector("#player2 > div:nth-child(4) > input[type=number]").value;
    player2.health -= damage;
    updateLife(2);
  }
}

function drinkPotion(player) {
  if (player === 1) {
    player1.health = Math.min(player1.health + 4, player1.maxHealth);
    updateLife(1);
  } else {
    player2.health = Math.min(player2.health + 4, player2.maxHealth);
    updateLife(2);
  }
}

function addMoreLife(player) {
  if (player === 1) {
    player1.maxHealth += 5;
    p1LifeBar.max = player1.maxHealth;
    player1.health = player1.maxHealth;
    updateLife(1);
  } else {
    player2.maxHealth += 5;
    p1LifeBar.max = player1.maxHealth;
    player2.health = player2.maxHealth;
    updateLife(2);
  }
}

function removeMaxLife(player) {
  if (player === 1) {
    player1.maxHealth -= 5;
    p1LifeBar.max = player1.maxHealth;
    player1.health = player1.maxHealth;
    updateLife(1);
  } else {
    player2.maxHealth -= 5;
    p1LifeBar.max = player1.maxHealth;
    player2.health = player2.maxHealth;
    updateLife(2);
  }
}

function updateLife(player) {
  if (player === 1) {
    p1Life.textContent = player1.health;
    p1LifeBar.value = player1.health;
  } else {
    p2Life.textContent = player2.health;
    p2LifeBar.value = player2.health;
  }
}
window.addEventListener("load", load);
