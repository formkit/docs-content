export const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

export const updateAttributesPlugin = (node) => {
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

  node.on('commit', ({ payload }) => {
    // Get the sibling attributes using at()
    const attributeNode = node.at('attributes')
    if (attributeNode) attributeNode.input(CHARACTER_BASE_STATS[payload])
  })
}
