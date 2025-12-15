// We'll create a classConfig object that contains the class lists we want
// for each sectionKey within a given input type
const classConfig = {
  // if we want to return some classes for _all_ section keys regardless of input type
  // we can put them here to later combine with any more specific section output.
  all: {
    outer: 'mb-5',
    help: 'text-xs text-gray-500',
    messages: 'list-none p-0 mt-1 mb-0',
    message: 'text-red-500 mb-1 text-xs'
  },
  // We'll put our specific `text` type styles here separated by
  // their `sectionKey`
  text: {
    label: 'block mb-1 font-bold text-sm',
    inner: 'max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500',
    input: 'w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400',
  },
}

// We need a helper function to convert our strings into objects
// because rootClasses must return a keyed object of booleans
function createClassObject (classString) {
  const classList = {}
  classString.split(' ').forEach(className => {
    classList[className] = true
  })
  return classList
}

// Lastly, put it all together using the information provided to the rootClasses
// function which is called once for each sectionKey in a FormKit input.
function rootClasses (sectionKey, node) {
  // grab the node `type` for easy reference
  const type = node.props.type
  // get a matching class string from our classConfig object
  // if it exists. Otherwise return an empty
  const definitionClasses = classConfig[type] ? classConfig[type][sectionKey] : ''
  // similarly get any matching "all" class lists that should be concatenated
  const allClasses = classConfig.all[sectionKey] || ''
  // combine the two class strings into a single string
  const classList = allClasses ? `${allClasses} ${definitionClasses}` : definitionClasses
  // finally, get an object constructed by our createClassObject function below
  // given the current sectionKey and matching definition. If we do not
  // have a matching definition then return an empty object
  const classObject = classList ? createClassObject(classList) : {}
  // then return the classObject to be applied to the current sectionKey
  return classObject
}

export default rootClasses
