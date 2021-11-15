<template>
  <FormKit
    type="group"
    v-model="address"
  >
    <FormKit
      type="text"
      label="Street address"
      name="street"
      placeholder="Your street"
      validation="required"
    />
    <FormKit
      type="text"
      label="City"
      placeholder="Your city"
      name="city"
      validation="required"
    />
    <div class="double">
      <FormKit
        type="select"
        label="State"
        name="state"
        placeholder="Your state"
        :options="states"
        validation="required"
      />
      <FormKit
        type="text"
        name="zip"
        label="Zip"
        placeholder="Your zip"
        validation="required|number"
      />
    </div>
  </FormKit>
  <pre wrap>{{ address }}</pre>
</template>

<script setup>
import { ref } from 'vue'
const address = ref({})

const states = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'AR': 'Arkansas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware',
    'DC': 'District Of Columbia',
    'FM': 'Federated States Of Micronesia',
    'FL': 'Florida',
    'GA': 'Georgia',
    'GU': 'Guam',
    'HI': 'Hawaii',
    'ID': 'Idaho',
    'IL': 'Illinois',
    'IN': 'Indiana',
    'IA': 'Iowa',
    'KS': 'Kansas',
    'KY': 'Kentucky',
    'LA': 'Louisiana',
    'ME': 'Maine',
    'MH': 'Marshall Islands',
    'MD': 'Maryland',
    'MA': 'Massachusetts',
    'MI': 'Michigan',
    'MN': 'Minnesota',
    'MS': 'Mississippi',
    'MO': 'Missouri',
    'MT': 'Montana',
    'NE': 'Nebraska',
    'NV': 'Nevada',
    'NH': 'New Hampshire',
    'NJ': 'New Jersey',
    'NM': 'New Mexico',
    'NY': 'New York',
    'NC': 'North Carolina',
    'ND': 'North Dakota',
    'MP': 'Northern Mariana Islands',
    'OH': 'Ohio',
    'OK': 'Oklahoma',
    'OR': 'Oregon',
    'PW': 'Palau',
    'PA': 'Pennsylvania',
    'PR': 'Puerto Rico',
    'RI': 'Rhode Island',
    'SC': 'South Carolina',
    'SD': 'South Dakota',
    'TN': 'Tennessee',
    'TX': 'Texas',
    'UT': 'Utah',
    'VT': 'Vermont',
    'VI': 'Virgin Islands',
    'VA': 'Virginia',
    'WA': 'Washington',
    'WV': 'West Virginia',
    'WI': 'Wisconsin',
    'WY': 'Wyoming'
}
</script>

<style>
.double {
  display: flex;
  justify-content: space-between;
}
.double > .formkit-outer {
  width: calc(50% - 0.5em);
}
</style>
