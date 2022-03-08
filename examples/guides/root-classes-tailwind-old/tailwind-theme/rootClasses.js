// this is the same rootClasses.js from the previous example
// with comments stripped out and all of the class definitions
// imported from a separate file.

import classConfig from './classConfig.js'

function createClassObject (classString) {
  const classList = {}
  classString.split(' ').forEach(className => {
    classList[className] = true
  })
  return classList
}

function rootClasses (sectionKey, node) {
  const type = node.props.type
  const definitionClasses = classConfig[type] && classConfig[type][sectionKey] ? classConfig[type][sectionKey] : ''
  const allClasses = classConfig.all[sectionKey] || ''
  const classList = allClasses ? `${allClasses} ${definitionClasses}` : definitionClasses
  return classList ? createClassObject(classList) : {}
}

export default rootClasses
