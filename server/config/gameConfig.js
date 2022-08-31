const gameConfig = {


    plugins: {
      scene: [
        {
          key: "gridEngine",
          plugin: GridEngine,
          mapping: "gridEngine",
        },
      ],
    },
  
  
  };
  
  const game = new Phaser.Game(gameConfig);

function preload() {
    this.load.tilemapTiledJSON("game-map", "map/animalcrusademap.json");
}

function create() {

  
    const gridEngineConfig = {
      characters: [
        {
          id: "player",
          sprite: playerSprite,
          walkingAnimationMapping: 6,
        },
      ],
    };
  
    this.gridEngine.create(tilemap, gridEngineConfig);
  

  }

module.exports = { create, preload };