<template>
<!--
  FormKit forms auto-collect values of children inputs.
  Wrap the example in a form so we can display the form values.
-->
<FormKit
  type="form"
  #default="{ value }"
  :actions="false"
>
<!-- %partial%::html:: -->
<FormKit
  type="rating"
  name="priceCategory"
  label="How expensive was the meal?"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M8,8.5s-.04,0-.07,0c-1.14-.15-2.51-.68-2.51-2.38,0-1.02,.68-2.12,2.57-2.12s2.51,1.36,2.57,2.08c.02,.28-.18,.52-.46,.54-.27,.02-.51-.18-.54-.45-.02-.19-.19-1.16-1.58-1.16-1.04,0-1.57,.38-1.57,1.12,0,.38,0,1.18,1.64,1.39,.27,.04,.47,.29,.43,.56-.03,.25-.25,.44-.5,.44Z" fill="currentColor"/><path d="M8,12c-1.9,0-2.51-1.36-2.57-2.08-.02-.28,.18-.52,.46-.54,.27-.02,.51,.18,.54,.45,.02,.19,.19,1.16,1.58,1.16,1.04,0,1.57-.38,1.57-1.12,0-.38,0-1.18-1.64-1.39-.27-.04-.47-.29-.43-.56,.04-.27,.29-.47,.56-.43,1.14,.15,2.51,.68,2.51,2.38,0,1.02-.68,2.12-2.57,2.12Z" fill="currentColor"/><path d="M8,15c-3.86,0-7-3.14-7-7S4.14,1,8,1s7,3.14,7,7-3.14,7-7,7Zm0-13c-3.31,0-6,2.69-6,6s2.69,6,6,6,6-2.69,6-6-2.69-6-6-6Z" fill="currentColor"/><path d="M8,13c-.28,0-.5-.22-.5-.5V3.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5V12.5c0,.28-.22,.5-.5,.5Z" fill="currentColor"/></svg>
</FormKit>
<!-- %partial%::html:: -->
  <pre wrap>{{ value }}</pre>
</FormKit>
</template>
