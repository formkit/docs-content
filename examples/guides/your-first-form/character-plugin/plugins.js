export const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

export const characterPlugin = (node) => {
  const CHARACTER_BASE_STATS = {
    Warrior: {
      strength: 9,
      skill: 1,
      dexterity: 5,
    },
    Mage: {
      strength: 5,
      skill: 10,
      dexterity: 8,
    },
    Assassin: {
      strength: 5,
      skill: 4,
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
