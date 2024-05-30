export const castRangeToNumber = (node) => {
  // We add a check to add the cast only to range inputs
  if (node.props.type !== 'range') return

  node.hook.input((value, next) => next(Number(value)))
}

export const updateAttributesPlugin = (node) => {
  const CHARACTER_BASE_STATS = {
    Warrior: {
      strength: 10,
      skill: 4,
      dexterity: 6,
    },
    Mage: {
      strength: 3,
      skill: 10,
      dexterity: 7,
    },
    Assassin: {
      strength: 5,
      skill: 5,
      dexterity: 10,
    },
  }

  node.on('commit', ({ payload }) => {
    // Get the sibling attributes using at()
    const attributeNode = node.at('attributes')
    if (attributeNode && CHARACTER_BASE_STATS[payload])
      attributeNode.input(CHARACTER_BASE_STATS[payload])
  })
}
