window.onload = inicio;

var contador = 1;
var girar = 1;

function inicio() {
  let incrementarB = (document.querySelector("#b-incrementar").onclick =
    incrementar);
  let decrementarB = (document.querySelector("#b-decrementar").onclick =
    decrementar);
  let fetchB = (document.querySelector("#b-search").onclick =
    fetchpokedex_name);
  let container_stats = document.getElementById("container_stats");
  let container_statsName = document.getElementById("container_statsName");
  let container_abilitiesData = document.getElementById(
    "container_abilitiesData"
  );
  let container_movesData = document.getElementById("container_movesData");
  let container_front = document.getElementById("container_front");
  let container_back = document.getElementById("container_back");
  let container_error = document.getElementById("error");
  let container_imagenes = document.getElementById("container_imagenes");
  let container_card = (document.getElementById("card").onclick = girar_card);
  let pokeName = document.getElementById("pokeName");

  imagenes();
  girar_card();
}

let incrementButton = (document.querySelector("#b-incrementar").onclick =
  incrementar);

function incrementar() {
  contador = contador + 6;
  console.log(contador);
  if (contador > 892) {
    contador = 1;
    imagenes();
  } else {
    imagenes();
  }
}

function decrementar() {
  contador = contador - 6;
  console.log(contador);

  if (contador < 1) {
    contador = 900 - 5;
    imagenes();
  } else {
    imagenes();
  }
}

function imagenes() {
  container_imagenes.innerHTML = "";
  for (let contar = contador; contar < contador + 6; contar++) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${contar}.png`;
    const aPoke = document.createElement("span");
    const imgPoke = document.createElement("img");
    if (contar > 898) {
      imgPoke.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/0.png`;
    } else {
      imgPoke.src = url;
    }
    imgPoke.dataset.contar = contar;
    imgPoke.addEventListener("click", function (event) {
      console.log("click");
      console.log(event); /*data del evento*/
      console.log(event.target); /*data del elemento que recibe el evento*/
      console.log(event.target.dataset.contar);
      fetchpokedex_img(event.target.dataset.contar);
    });

    aPoke.appendChild(imgPoke);
    container_imagenes.appendChild(aPoke);
    console.log(aPoke.value);
  }
}

function fetchpokedex_img(id) {
  console.log("valor del id");
  console.log(id);
  let pokeInput = id;
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  const peticion = fetch(url);
  peticion
    .then((res) => {
      if (res.status != "200") {
        console.log(url);
      } else {
        return res.json();
      }
    })
    .then((data_name) => {
      console.log(data_name);

      let pokeUrlName = data_name.name; //obtener el nombre
      console.log(pokeUrlName);

      let pokeUrlImg = data_name.sprites.front_default; //obtener imagen
      console.log(pokeUrlImg);

      let pokeDId = data_name.id; //obtener id
      console.log(pokeDId);

      let pokeDAbilities = data_name.abilities.map((a) => a.ability.name); //obtener abilidades
      console.log(pokeDAbilities);

      let pokeDMoves = data_name.moves.map((m) => m.move.name); //obtener movimientos
      console.log(pokeDMoves);

      let pokeUrlImgB = data_name.sprites.back_default; //obtener imagen
      console.log(pokeUrlImgB);

      let pokeDStats = data_name.stats.map(
        (s) => s.base_stat //obtener stats
      );
      console.log(pokeDStats);

      let pokeDStatsName = data_name.stats.map(
        (s) => s.stat.name //obtener el nombe del stat
      );
      console.log(pokeDStatsName);

      pokeDName(pokeUrlName);
      pokeImage(pokeUrlImg);
      pokeId(pokeDId);
      pokeAbilities(pokeDAbilities);
      pokeMoves(pokeDMoves);
      pokeStats(pokeDStats);
      pokeStatsName(pokeDStatsName);
      pokeImageB(pokeUrlImgB);
      data_Abilities(pokeDAbilities);
      data_Moves(pokeDMoves);
    });
}

function fetchpokedex_name() {
  let pokeInput = pokeName.value.toLowerCase();
  const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
  const peticion = fetch(url);
  peticion
    .then((res) => {
      if (res.status != "200") {
        console.log(url);
      } else {
        return res.json();
      }
    })
    .then((data_name) => {
      console.log(data_name);

      let pokeUrlName = data_name.name; //obtener el nombre
      console.log(pokeUrlName);

      let pokeUrlImg = data_name.sprites.front_default; //obtener imagen
      console.log(pokeUrlImg);

      let pokeDId = data_name.id; //obtener id
      console.log(pokeDId);

      let pokeDAbilities = data_name.abilities.map((a) => a.ability.name); //obtener abilidades
      console.log(pokeDAbilities);

      let pokeDMoves = data_name.moves.map((m) => m.move.name); //obtener movimientos
      console.log(pokeDMoves);

      let pokeUrlImgB = data_name.sprites.back_default; //obtener imagen de atras
      console.log(pokeUrlImgB);

      let pokeDStats = data_name.stats.map(
        (s) => s.base_stat //obtener stats
      );
      console.log(pokeDStats);

      let pokeDStatsName = data_name.stats.map(
        (s) => s.stat.name //obtener el nombe del stat
      );
      console.log(pokeDStatsName);

      pokeDName(pokeUrlName);
      pokeImage(pokeUrlImg);
      pokeId(pokeDId);
      pokeAbilities(pokeDAbilities);
      pokeMoves(pokeDMoves);
      pokeStats(pokeDStats);
      pokeStatsName(pokeDStatsName);
      pokeImageB(pokeUrlImgB);
      data_Abilities(pokeDAbilities);
      data_Moves(pokeDMoves);
    });
}

const pokeDName = (name) => {
  const pokeDataName = document.getElementById("p-name");
  pokeDataName.innerHTML = name.toUpperCase();
};

const pokeImage = (url) => {
  const pokeImg = document.getElementById("pokeImg");
  pokeImg.src = url;
};

const pokeId = (id) => {
  const pokeDataId = document.getElementById("p-id");
  pokeDataId.innerHTML = `ID: ${id}`;
};

const pokeAbilities = (abilities) => {
  const tpokeDataAbilities = document.getElementById("t_abilities");
  const pokeDataAbilities = document.getElementById("p-abilities");
  pokeDataAbilities.innerHTML = abilities.length;
  tpokeDataAbilities.innerHTML = "Abilities";
};

const data_Abilities = (abilities) => {
  const tpokeDAbilitiesI = document.getElementById("t_DAbilities");
  container_abilitiesData.innerHTML = "";
  tpokeDAbilitiesI.innerHTML = "Abilities";
  abilities.forEach((ability) => {
    const abilityElement = document.createElement("p");
    abilityElement.textContent = ability;
    container_abilitiesData.appendChild(abilityElement);
    console.log(ability);
  });
};

const pokeMoves = (moves) => {
  const tpokeDMoves = document.getElementById("t_moves");
  const pokeDataMoves = document.getElementById("p-moves");
  pokeDataMoves.innerHTML = moves.length;
  tpokeDMoves.innerHTML = "Moves";
};

const data_Moves = (moves) => {
  const tpokeDMovesI = document.getElementById("t_DMoves");
  container_movesData.innerHTML = "";
  tpokeDMovesI.innerHTML = "Moves";
  moves.forEach((mov) => {
    const moveElement = document.createElement("p");
    moveElement.textContent = mov;
    container_movesData.appendChild(moveElement);
    console.log(mov);
  });
};

const pokeStats = (stats) => {
  container_stats.innerHTML = "";
  stats.forEach((stat) => {
    const statsElement = document.createElement("p");
    statsElement.textContent = `${stat}%`;
    container_stats.appendChild(statsElement);
    console.log(stat);
  });
};

const pokeStatsName = (statsName) => {
  container_statsName.innerHTML = "";
  statsName.forEach((name) => {
    const statsNameElement = document.createElement("div");
    statsNameElement.textContent = name;
    container_statsName.appendChild(statsNameElement);
    console.log(name);
  });
};

const pokeImageB = (url) => {
  const pokeImgB = document.getElementById("pokeImgB");
  pokeImgB.src = url;
};

const girar_card = () => {
  if (container_front.style.display == "block") {
    container_front.style.display = "none";
    container_back.style.display = "block";
  } else {
    container_front.style.display = "block";
    container_back.style.display = "none";
  }
};
