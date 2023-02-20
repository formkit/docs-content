<script setup>
const schema = [
  {
    $formkit: 'form',
    actions: false,
    children: [
      /* %partial% */
      {
        $formkit: 'taglist',
        name: 'car_brands',
        label: 'Search for your favorite car brands',
        options: '$carBrands',
        value: ['honda', 'toyota']
      },
      /* %partial% */
      {
        $el: 'pre',
        children: '$stringify($value)'
      }
    ]
  }
]

const data = {
  stringify: JSON.stringify,
  carBrands: [{ label: "Audi", value: "audi" }, { label: "BMW", value: "bmw" }, { label: "Citroen", value: "citroen" }, { label: "Dacia", value: "dacia" }, { label: "Fiat", value: "fiat" }, { label: "Ford", value: "ford" }, { label: "Ferrari", value: "ferrari" }, { label: "Honda", value: "honda" }, { label: "Hyundai", value: "hyundai" }, { label: "Jaguar", value: "jaguar" }, { label: "Jeep", value: "jeep" }, { label: "Kia", value: "kia" }, { label: "Land Rover", value: "land rover" }, { label: "Mazda", value: "mazda" }, { label: "Mercedes", value: "mercedes" }, { label: "Mini", value: "mini" }, { label: "Mitsubishi", value: "mitsubishi" }, { label: "Nissan", value: "nissan" }, { label: "Opel", value: "opel" }, { label: "Peugeot", value: "peugeot" }, { label: "Porsche", value: "porsche" }, { label: "Renault", value: "renault" }, { label: "Saab", value: "saab" }, { label: "Skoda", value: "skoda" }, { label: "Subaru", value: "subaru" }, { label: "Suzuki", value: "suzuki" }, { label: "Toyota", value: "toyota" }, { label: "Volkswagen", value: "volkswagen" }, { label: "Volvo", value: "volvo" }]
}
</script>

<template>
  <FormKitSchema :schema="schema" :data="data" />
</template>