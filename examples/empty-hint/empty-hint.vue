<template>
  <FormKit
    type="checkbox"
    label="Relocation Preferences"
    :options="[
      'Argentina',
      'Belarus',
      'Hungary',
      'Iceland',
      'Morocco',
      'Peru',
      'Spain',
      'Yemen',
    ]"
    help="If you had to relocate for work — select your preferred locations."
    validation="+min:3"
    validation-behavior="live"
  />
</template>
