function Map(map) {
    this.map = map
    this.encounterRate = 50
}

Map.prototype.render = function (playerX, playerY) {
    for (var i = 0; i < this.map.houses.length; i++) {
        this.map.houses[i].render(playerX, playerY)
    }
    for (var i = 0; i < this.map.grass.length; i++) {
        this.map.grass[i].render(playerX, playerY)
    }
    for (var i = 0; i < this.map.obstacles.length; i++) {
        this.map.obstacles[i].render(playerX, playerY)
    }
    for (var i = 0; i < this.map.ledges.length; i++) {
        this.map.ledges[i].render(playerX, playerY)
    }
}

Map.prototype.update = function () {
}

Map.prototype.collision = function (playerX, playerY, prevPlayerX, prevPlayerY) {
    for (var i = 0; i < this.map.houses.length; i++) {
        house = this.map.houses[i]
        if (house.collision(playerX, playerY)) return [prevPlayerX, prevPlayerY]
    }
    for (var i = 0; i < this.map.obstacles.length; i++) {
        obstacle = this.map.obstacles[i]
        if (obstacle.collision(playerX, playerY)) return [prevPlayerX, prevPlayerY]
    }
    for (var i = 0; i < this.map.ledges.length; i++) {
        ledge = this.map.ledges[i]
        var pos = ledge.collision(playerX, playerY, prevPlayerX, prevPlayerY)
        if (pos[0] == prevPlayerX && pos[1] == prevPlayerY) return [prevPlayerX, prevPlayerY]
        else if (pos[0] != playerX || pos[1] != playerY) return pos
    }

    return [playerX, playerY]
}

Map.prototype.readSign = function () { }

Map.prototype.onGrass = function (playerX, playerY) {
    for (var i = 0; i < this.map.grass.length; i++) {
        grass = this.map.grass[i]
        if (grass.collision(playerX, playerY)) return true
    }

    return false
}

Map.prototype.getEncounterRate = function () {
    return this.encounterRate
}

Map.prototype.getPokemon = function () {

    var randomLevel = Math.floor(Math.random() * 5) + 1;

    const allPokemon = {
      aerodactyl: new Aerodactyl(randomLevel),
      alakazam: new Alakazam(randomLevel),
      arbok: new Arbok(randomLevel),
      articuno: new Articuno(randomLevel),
      beedrill: new Beedrill(randomLevel),
      blastoise: new Blastoise(randomLevel),
      butterfree: new Butterfree(randomLevel),
      caterpie: new Caterpie(randomLevel),
      chansey: new Chansey(randomLevel),
      charizard: new Charizard(randomLevel),
      charmander: new Charmander(randomLevel),
      charmeleon: new Charmeleon(randomLevel),
      clefable: new Clefable(randomLevel),
      clefairy: new Clefairy(randomLevel),
      cloyster: new Cloyster(randomLevel),
      cubone: new Cubone(randomLevel),
      dewgong: new Dewgong(randomLevel),
      diglett: new Diglett(randomLevel),
      ditto: new Ditto(randomLevel),
      dodrio: new Dodrio(randomLevel),
      doduo: new Doduo(randomLevel),
      dragonair: new Dragonair(randomLevel),
      dragonite: new Dragonite(randomLevel),
      dratini: new Dratini(randomLevel),
      drowzee: new Drowzee(randomLevel),
      dugtrio: new Dugtrio(randomLevel),
      eevee: new Eevee(randomLevel),
      ekans: new Ekans(randomLevel),
      electabuzz: new Electabuzz(randomLevel),
      electrode: new Electrode(randomLevel),
      exeggcute: new Exeggcute(randomLevel),
      exeggutor: new Exeggutor(randomLevel),
      farfetchd: new Farfetchd(randomLevel),
      fearow: new Fearow(randomLevel),
      flareon: new Flareon(randomLevel),
      gastly: new Gastly(randomLevel),
      gengar: new Gengar(randomLevel),
      geodude: new Geodude(randomLevel),
      gloom: new Gloom(randomLevel),
      golem: new Golem(randomLevel),
      golduck: new Golduck(randomLevel),
      goldeen: new Goldeen(randomLevel),
      golbat: new Golbat(randomLevel),
      golem: new Golem(randomLevel),
      graveler: new Graveler(randomLevel),
      grimer: new Grimer(randomLevel),
      growlithe: new Growlithe(randomLevel),
      haunter: new Haunter(randomLevel),
      hitmonchan: new Hitmonchan(randomLevel),
      hitmonlee: new Hitmonlee(randomLevel),
      horsea: new Horsea(randomLevel),
      hypno: new Hypno(randomLevel),
      ivysaur: new Ivysaur(randomLevel),
      jigglypuff: new Jigglypuff(randomLevel),
      jolteon: new Jolteon(randomLevel),
      jynx: new Jynx(randomLevel),
      kabuto: new Kabuto(randomLevel),
      kabutops: new Kabutops(randomLevel),
      kadabra: new Kadabra(randomLevel),
      kakuna: new Kakuna(randomLevel),
      kangaskhan: new Kangaskhan(randomLevel),
      kingler: new Kingler(randomLevel),
      koffing: new Koffing(randomLevel),
      krabby: new Krabby(randomLevel),
      lapras: new Lapras(randomLevel),
      lickitung: new Lickitung(randomLevel),
      machamp: new Machamp(randomLevel),
      machoke: new Machoke(randomLevel),
      machop: new Machop(randomLevel),
      magikarp: new Magikarp(randomLevel),
      magmar: new Magmar(randomLevel),
      magneton: new Magneton(randomLevel),
      mankey: new Mankey(randomLevel),
      marowak: new Marowak(randomLevel),
      meowth: new Meowth(randomLevel),
      metapod: new Metapod(randomLevel),
      mew: new Mew(randomLevel),
      mewtwo: new Mewtwo(randomLevel),
      moltres: new Moltres(randomLevel),
      mrMime: new Mrmime(randomLevel),
      muk: new Muk(randomLevel),
      nidoking: new Nidoking(randomLevel),
      nidoqueen: new Nidoqueen(randomLevel),
      nidoranF: new NidoranF(randomLevel),
      nidoranM: new NidoranM(randomLevel),
      nidorina: new Nidorina(randomLevel),
      nidorino: new Nidorino(randomLevel),
      ninetales: new Ninetales(randomLevel),
      oddish: new Oddish(randomLevel),
      omanyte: new Omanyte(randomLevel),
      omastar: new Omastar(randomLevel),
      onix: new Onix(randomLevel),
      paras: new Paras(randomLevel),
      parasect: new Parasect(randomLevel),
      persian: new Persian(randomLevel),
      pidgeot: new Pidgeot(randomLevel),
      pidgeotto: new Pidgeotto(randomLevel),
      pidgey: new Pidgey(randomLevel),
      pikachu: new Pikachu(randomLevel),
      pinsir: new Pinsir(randomLevel),
      poliwag: new Poliwag(randomLevel),
      poliwhirl: new Poliwhirl(randomLevel),
      poliwrath: new Poliwrath(randomLevel),
      ponyta: new Ponyta(randomLevel),
      porygon: new Porygon(randomLevel),
      primeape: new Primeape(randomLevel),
      psyduck: new Psyduck(randomLevel),
      raichu: new Raichu(randomLevel),
      rapidash: new Rapidash(randomLevel),
      rattata: new Rattata(randomLevel),
      raticate: new Raticate(randomLevel),
      rhydon: new Rhydon(randomLevel),
      rhyhorn: new Rhyhorn(randomLevel),
      sandshrew: new Sandshrew(randomLevel),
      sandslash: new Sandslash(randomLevel),
      scyther: new Scyther(randomLevel),
      seadra: new Seadra(randomLevel),
      seaking: new Seaking(randomLevel),
      seel: new Seel(randomLevel),
      shellder: new Shellder(randomLevel),
      slowbro: new Slowbro(randomLevel),
      slowpoke: new Slowpoke(randomLevel),
      snorlax: new Snorlax(randomLevel),
      spearow: new Spearow(randomLevel),
      squirtle: new Squirtle(randomLevel),
      starmie: new Starmie(randomLevel),
      staryu: new Staryu(randomLevel),
      tangela: new Tangela(randomLevel),
      tauros: new Tauros(randomLevel),
      tentacool: new Tentacool(randomLevel),
      tentacruel: new Tentacruel(randomLevel),
      vulpix: new Vulpix(randomLevel),
      wartortle: new Wartortle(randomLevel),
      weedle: new Weedle(randomLevel),
      weepinbell: new Weepinbell(randomLevel),
      weezing: new Weezing(randomLevel),
      wigglytuff: new Wigglytuff(randomLevel),
      zapados: new Zapados(randomLevel),
      zubat: new Zubat(randomLevel),
    };
    var pokemon = allPokemon[Math.floor(Math.random() * allPokemon.length)];

    return pokemon 
}

Map.prototype.offset = function (x, y) {
    for (var i = 0; i < this.map.houses.length; i++) {
        this.map.houses[i].x += x * TILE_SIZE
        this.map.houses[i].y += y * TILE_SIZE
    }
    for (var i = 0; i < this.map.grass.length; i++) {
        this.map.grass[i].x += x * TILE_SIZE
        this.map.grass[i].y += y * TILE_SIZE
    }
    for (var i = 0; i < this.map.obstacles.length; i++) {
        this.map.obstacles[i].obstacle.x += x * TILE_SIZE
        this.map.obstacles[i].obstacle.y += y * TILE_SIZE
    }
    for (var i = 0; i < this.map.ledges.length; i++) {
        this.map.ledges[i].x += x * TILE_SIZE
        this.map.ledges[i].y += y * TILE_SIZE
    }
}
