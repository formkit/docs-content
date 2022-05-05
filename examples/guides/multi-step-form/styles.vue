<template>
  <!-- Just a component so we have put styles in a different file -->
</template>

<style>
.steps {
  list-style-type: none;
  display: flex;
  padding-left: 0;
  border-bottom: 1px solid gray;
}

.step {
  font-size: 14px;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 12px 15px;
  background-color: #F4F4F8;
  color: gray;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
}

.step:hover { cursor: pointer; }

[data-step-active="true"] {
  font-weight: 700;
  color: black;
  font-size: 16px;
  background-color: white;
  border: 1px solid gray;
  border-bottom: none;
  position: relative;
  top: 1px;
}

.has-errors {
  background-color: #FFD6D6;
}

.step-active .step--num {
  color: black;
}

.step--num {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #D3D3DA;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  color: black;
  text-align: center;
  margin-right: 5px;
  overflow: hidden;
  position: relative;
}

.step--errors,
[data-step-valid="true"]:after {
  content: '✓';
  background-color: #54A085;
  position: absolute;
  top: -7px; right: -7px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: white;
}

.step--errors {
  background-color: #ff4949;
  color: black;
  font-weight: bold;
  font-size: 13px;
  z-index: 100;
}

.step-nav {
  display: flex;
  margin-bottom: 1em;
}

.next { margin-left: auto;}

[data-errors="true"] .formkit-label { color: #ff4949; }
.formkit-wrapper { max-width: 100%; }
details { margin-bottom: 15px; }
button:hover, summary { cursor: pointer }
p { max-width: 600px; }
h1 { margin: .25em 0}
.form-body { max-width: 500px;}

</style>