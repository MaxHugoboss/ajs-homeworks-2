export function getHealthStatus(character) {
    if (character.health > 50) {
      return 'healthy';
    } else if (character.health >= 15) {
      return 'wounded';
    } else {
      return 'critical';
    }
}

export function sortHeroesByHealth(heroes) {
  const sortedHeroes = heroes.slice();
  
  sortedHeroes.sort((a, b) => b.health - a.health);
  
  return sortedHeroes;
}

  
