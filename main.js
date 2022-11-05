function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />     
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}" />
    </li>
  `
}


let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
       <div class="card" style="animation-delay: ${delay}s;">
          <h2>${date} <span>${day}</span></h2>
          <ul>
            ${games}
          </ul>
          
      </div>
  ` 
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "16:00", "serbia") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard("28/11", "segunda", createGame("brazil", "13:00", "switzerland")) +
  createCard("02/12", "sexta", createGame("camaroon", "16:00", "brazil"))
