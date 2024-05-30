<script setup>
import { getNode } from '@formkit/core'

const htmlNamedColors = [
  { label: 'aliceblue', value: '#F0F8FF' },
  { label: 'antiquewhite', value: '#FAEBD7' },
  { label: 'aqua', value: '#00FFFF' },
  { label: 'aquamarine', value: '#7FFFD4' },
  { label: 'azure', value: '#F0FFFF' },
  { label: 'beige', value: '#F5F5DC' },
  { label: 'bisque', value: '#FFE4C4' },
  { label: 'black', value: '#000000' },
  { label: 'blanchedalmond', value: '#FFEBCD' },
  { label: 'blue', value: '#0000FF' },
  { label: 'blueviolet', value: '#8A2BE2' },
  { label: 'brown', value: '#A52A2A' },
  { label: 'burlywood', value: '#DEB887' },
  { label: 'cadetblue', value: '#5F9EA0' },
  { label: 'chartreuse', value: '#7FFF00' },
  { label: 'chocolate', value: '#D2691E' },
  { label: 'coral', value: '#FF7F50' },
  { label: 'cornflowerblue', value: '#6495ED' },
  { label: 'cornsilk', value: '#FFF8DC' },
  { label: 'crimson', value: '#DC143C' },
  { label: 'cyan', value: '#00FFFF' },
  { label: 'darkblue', value: '#00008B' },
  { label: 'darkcyan', value: '#008B8B' },
  { label: 'darkgoldenrod', value: '#B8860B' },
  { label: 'darkgray', value: '#A9A9A9' },
  { label: 'darkgreen', value: '#006400' },
  { label: 'darkkhaki', value: '#BDB76B' },
  { label: 'darkmagenta', value: '#8B008B' },
  { label: 'darkolivegreen', value: '#556B2F' },
  { label: 'darkorange', value: '#FF8C00' },
  { label: 'darkorchid', value: '#9932CC' },
  { label: 'darkred', value: '#8B0000' },
  { label: 'darksalmon', value: '#E9967A' },
  { label: 'darkseagreen', value: '#8FBC8F' },
  { label: 'darkslateblue', value: '#483D8B' },
  { label: 'darkslategray', value: '#2F4F4F' },
  { label: 'darkturquoise', value: '#00CED1' },
  { label: 'darkviolet', value: '#9400D3' },
  { label: 'deeppink', value: '#FF1493' },
  { label: 'deepskyblue', value: '#00BFFF' },
  { label: 'dimgray', value: '#696969' },
  { label: 'dodgerblue', value: '#1E90FF' },
  { label: 'firebrick', value: '#B22222' },
  { label: 'floralwhite', value: '#FFFAF0' },
  { label: 'forestgreen', value: '#228B22' },
  { label: 'fuchsia', value: '#FF00FF' },
  { label: 'gainsboro', value: '#DCDCDC' },
  { label: 'ghostwhite', value: '#F8F8FF' },
  { label: 'gold', value: '#FFD700' },
  { label: 'goldenrod', value: '#DAA520' },
  { label: 'gray', value: '#808080' },
  { label: 'green', value: '#008000' },
  { label: 'greenyellow', value: '#ADFF2F' },
  { label: 'honeydew', value: '#F0FFF0' },
  { label: 'hotpink', value: '#FF69B4' },
  { label: 'indianred', value: '#CD5C5C' },
  { label: 'indigo', value: '#4B0082' },
  { label: 'ivory', value: '#FFFFF0' },
  { label: 'khaki', value: '#F0E68C' },
  { label: 'lavender', value: '#E6E6FA' },
  { label: 'lavenderblush', value: '#FFF0F5' },
  { label: 'lawngreen', value: '#7CFC00' },
  { label: 'lemonchiffon', value: '#FFFACD' },
  { label: 'lightblue', value: '#ADD8E6' },
  { label: 'lightcoral', value: '#F08080' },
  { label: 'lightcyan', value: '#E0FFFF' },
  { label: 'lightgoldenrodyellow', value: '#FAFAD2' },
  { label: 'lightgray', value: '#D3D3D3' },
  { label: 'lightgreen', value: '#90EE90' },
  { label: 'lightpink', value: '#FFB6C1' },
  { label: 'lightsalmon', value: '#FFA07A' },
  { label: 'lightseagreen', value: '#20B2AA' },
  { label: 'lightskyblue', value: '#87CEFA' },
  { label: 'lightslategray', value: '#778899' },
  { label: 'lightsteelblue', value: '#B0C4DE' },
  { label: 'lightyellow', value: '#FFFFE0' },
  { label: 'lime', value: '#00FF00' },
  { label: 'limegreen', value: '#32CD32' },
  { label: 'linen', value: '#FAF0E6' },
  { label: 'magenta', value: '#FF00FF' },
  { label: 'maroon', value: '#800000' },
  { label: 'mediumaquamarine', value: '#66CDAA' },
  { label: 'mediumblue', value: '#0000CD' },
  { label: 'mediumorchid', value: '#BA55D3' },
  { label: 'mediumpurple', value: '#9370DB' },
  { label: 'mediumseagreen', value: '#3CB371' },
  { label: 'mediumslateblue', value: '#7B68EE' },
  { label: 'mediumspringgreen', value: '#00FA9A' },
  { label: 'mediumturquoise', value: '#48D1CC' },
  { label: 'mediumvioletred', value: '#C71585' },
  { label: 'midnightblue', value: '#191970' },
  { label: 'mintcream', value: '#F5FFFA' },
  { label: 'mistyrose', value: '#FFE4E1' },
  { label: 'moccasin', value: '#FFE4B5' },
  { label: 'navajowhite', value: '#FFDEAD' },
  { label: 'navy', value: '#000080' },
  { label: 'oldlace', value: '#FDF5E6' },
  { label: 'olive', value: '#808000' },
  { label: 'olivedrab', value: '#6B8E23' },
  { label: 'orange', value: '#FFA500' },
  { label: 'orangered', value: '#FF4500' },
  { label: 'orchid', value: '#DA70D6' },
  { label: 'palegoldenrod', value: '#EEE8AA' },
  { label: 'palegreen', value: '#98FB98' },
  { label: 'paleturquoise', value: '#AFEEEE' },
  { label: 'palevioletred', value: '#DB7093' },
  { label: 'papayawhip', value: '#FFEFD5' },
  { label: 'peachpuff', value: '#FFDAB9' },
  { label: 'peru', value: '#CD853F' },
  { label: 'pink', value: '#FFC0CB' },
  { label: 'plum', value: '#DDA0DD' },
  { label: 'powderblue', value: '#B0E0E6' },
  { label: 'purple', value: '#800080' },
  { label: 'rebeccapurple', value: '#663399' },
  { label: 'red', value: '#FF0000' },
  { label: 'rosybrown', value: '#BC8F8F' },
  { label: 'royalblue', value: '#4169E1' },
  { label: 'saddlebrown', value: '#8B4513' },
  { label: 'salmon', value: '#FA8072' },
  { label: 'sandybrown', value: '#F4A460' },
  { label: 'seagreen', value: '#2E8B57' },
  { label: 'seashell', value: '#FFF5EE' },
  { label: 'sienna', value: '#A0522D' },
  { label: 'silver', value: '#C0C0C0' },
  { label: 'skyblue', value: '#87CEEB' },
  { label: 'slateblue', value: '#6A5ACD' },
  { label: 'slategray', value: '#708090' },
  { label: 'snow', value: '#FFFAFA' },
  { label: 'springgreen', value: '#00FF7F' },
  { label: 'steelblue', value: '#4682B4' },
  { label: 'tan', value: '#D2B48C' },
  { label: 'teal', value: '#008080' },
  { label: 'thistle', value: '#D8BFD8' },
  { label: 'tomato', value: '#FF6347' },
  { label: 'turquoise', value: '#40E0D0' },
  { label: 'violet', value: '#EE82EE' },
  { label: 'wheat', value: '#F5DEB3' },
  { label: 'white', value: '#FFFFFF' },
  { label: 'whitesmoke', value: '#F5F5F5' },
  { label: 'yellow', value: '#FFFF00' },
  { label: 'yellowgreen', value: '#9ACD32' },
]

function handleColorInput() {
  const textNode = getNode('textInput')
  const colorpickerNode = getNode('colorpickerInput')
  colorpickerNode.input(textNode.value)
  textNode.input('')
}
</script>

<template>
  <!-- %partial% -->
  <div class="input-color-name">
    <FormKit
      id="textInput"
      type="text"
      label="Input a named CSS color"
      help="Try 'red', 'blue', or 'papayawhip'"
      @keydown.enter="handleColorInput"
    >
      <template #suffix>
        <FormKit type="button" label="Set color" @click="handleColorInput" outer-class="!mb-0" input-class="!mb-0 whitespace-nowrap" />
      </template>
    </FormKit>
  </div>

  <FormKit
    id="colorpickerInput"
    type="colorpicker"
    inline
    :options="htmlNamedColors"
  />
  <!-- %partial% -->
</template>
