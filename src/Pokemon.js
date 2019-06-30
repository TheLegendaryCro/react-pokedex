class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.sprite = data.sprites.front_default;
    this.height = data.height;
    this.weight = data.weight;
    this.type = data.types[0].type.name;
  }
}

export default Pokemon;