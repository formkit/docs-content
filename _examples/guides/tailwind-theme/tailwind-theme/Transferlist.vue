<script setup>
const guests = [
  'Monica Baker',
  'Marion Blanchard',
  'Bilal Cline',
  'Harmony Mcdowell',
  'Ellen Dunlap',
  'Anish Ruiz',
  'Edward Mcpherson',
  'Lulu Cabrera',
  'Faizan Donnelly',
  'Jonty Wilkins',
  'Jaime Gibbons',
  'Rhonda Pugh',
  'Mathilda Elliott',
  'Wilbur Chavez',
  'Barnaby Gray',
  'Rachael Bright',
  'Vincent Sherman',
  'Tina Doherty',
  'Lara Robinson',
  'Nathanael Duffy',
  'Millicent Gibbs',
  'Kye Crosby',
  'Martin Michael',
  'Randy Howard',
  'Fraser York',
  'Warren Hoffman',
  'Nannie Savage',
  'Samira Keller',
  'Ioan Hardy',
  'Markus Hanson',
  'Aiza Alvarez',
  'Chelsey Dawson',
  'Aine Bean',
  'Steffan Sullivan',
  'Meghan Ramirez',
  'Tom Parsons',
  'Fleur Franco',
  'Eileen Beltran',
  'Danny Combs',
  'Thomas Barrett',
  'Shreya Pena',
  'Harold Matthams',
  'Lilian Odling',
  'Ismaeel Byrne',
  'Clyde Solis',
  'Wilson Hebert',
  'Libbie Jensen',
  'Ida Dickson',
  'Theodore Eaton',
  'Velma Rivers',
  'Julie Foley',
  'Eloise Potts',
  'Blanche Perez',
  'Candice Howe',
  'Myah Mcmillan',
  'Lyra Fuller',
  'Alastair Rice',
  'Hannah Horton',
  'Sally Chen',
  'John Copeland',
  'Miranda Swanson',
  'Gladys Nichols',
  'Erika Newman',
  'Albie Davenport',
  'Haris Carson',
  'Minnie Perry',
  'Beatrice Connolly',
  'Halle Whitaker',
  'Damien Miles',
  'Damian Blackwell',
  'Hamish Fuentes',
  'Lisa Mcgee',
  'Keanu Bonner',
  'Jaxson Marks',
  'Umair Buckley',
  'Natalie Gentry',
  'Emre Finch',
  'Maddison Ellis',
  'Esme Long',
  'Gareth Stevenson',
  'Beth Mckee',
  'Autumn Todd',
  'Lucie Bonilla',
  'Grace Suarez',
  'Cecil Edwards',
  'Leena Blake',
  'Anya Beck',
  'Flora Benton',
  'Aleena Mcmahon',
  'Caiden Stein',
  'Mario Flores',
  'Cara Nielsen',
  'Leanne Hodges',
  'Inaya Tapia',
  'Hasnain Waller',
  'Serena Pineda',
  'Wojciech Mercado',
  'Jose Gallagher',
  'Zachary Bridges',
  'Ariana Wang',
]
</script>

<template>
  <FormKit
    type="form"
    #default="{ value }"
    :value="{
      vips: ['Monica Baker', 'Marion Blanchard'],
    }"
    :actions="false"
  >
    <FormKit
      name="vips"
      type="transferlist"
      label="Choose VIPs for the party"
      source-label="Guests"
      target-label="VIPs"
      source-empty-message="No guests found"
      target-empty-message="No VIPs selected"
      :options="guests"
      searchable
      placeholder="Search guests"
    />
    <pre wrap>{{ value }}</pre>
  </FormKit>
</template>
