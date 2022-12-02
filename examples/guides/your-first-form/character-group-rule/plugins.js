export const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

export const characterPlugin = (node) => {
  const CHARACTER_BASE_STATS = {
    Warrior: {
      skill: 1,
      strength: 9,
      dexterity: 5,
    },
    Mage: {
      skill: 9,
      strength: 1,
      dexterity: 5,
    },
    Assassin: {
      skill: 3,
      strength: 3,
      dexterity: 9,
    },
  }

  const classNode = node.at('class')
  const attributesNode = node.at('attributes')

  classNode.on('commit', ({ payload }) => {
    attributesNode.input(CHARACTER_BASE_STATS[payload])
  })
}
