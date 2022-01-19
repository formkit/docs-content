<template>
  <div>
    <div
      class="source-content"
      ref="source"
    >
      <!-- %partial%::html:: -->
        <FormKit
          type="text"
          label="Your username"
          value="calypso"
          help="Pick a username people will remember!"
        />
        <!-- %partial%::html:: -->
    </div>
    <div class="output">
      <pre v-html="output" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      output: ''
    }
  },
  mounted () {
    if (this.$refs && this.$refs.source) {
      this.output = window.hljs.highlight(
        this.format(this.$refs.source).innerHTML,
        { language: 'html' }
      ).value
    }
  },
  methods: {
    format(node, level = 0) {
      let indentBefore = new Array(level++ + 1).join('  ')
      let indentAfter = new Array(level - 1).join('  ')
      let textNode


      for (var i = 0; i < node.children.length; i++) {
          textNode = document.createTextNode('\n' + indentBefore);
          node.insertBefore(textNode, node.children[i]);
          this.format(node.children[i], level);
          if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
          }
      }
      return node;
    }
  }
}
</script>

<style>
html {
  background-color: #132427;
  background-image:
    linear-gradient(to right, #0c404b 1px, transparent 1px, transparent 100%),
    linear-gradient(to bottom, #0c404b 1px, transparent 1px, transparent 100%);
  background-repeat: no-repeat;
  background-attachment: fixed;
  color: #fff;
}

.source-content {
  display: none;
}
.output pre {
  white-space: pre;
  padding: 0 1rem;
  margin: 0;
  line-height: 1.6;
  margin-top: -1rem;
  font-size: 0.875em;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
}

.hljs-name {
  color: #fd7ff8;
}
.hljs-attr {
  color: #b9ff47;
}
.hljs-string {
  color: #4ae9ff;
}
.hljs-comment {
  display: none;
}
</style>
