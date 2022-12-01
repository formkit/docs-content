export const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

export const characterPlugin = (node) => {
  const CHARACTER_BASE_STATS = {
    Warrior: {
      vitality: 10,
      skill: 1,
      strength: 9,
      dexterity: 5,
    },
    Mage: {
      vitality: 2,
      skill: 10,
      strength: 5,
      dexterity: 8,
    },
    Assassin: {
      vitality: 6,
      skill: 4,
      strength: 5,
      dexterity: 10,
    },
  }

  // As we are using a plugin we can use the `at` to get the inputs instead of getNode
  const classNode = node.at('class')
  const attributesNode = node.at('attributes')

  classNode.on('commit', ({ payload }) => {
    attributesNode.input(CHARACTER_BASE_STATS[payload])
  })
}
