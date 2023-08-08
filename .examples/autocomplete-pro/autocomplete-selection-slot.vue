<script setup>
const carBrands = [{ label: 'Audi', value: 'audi', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/audi-logo.png' },{ label: 'BMW', value: 'bmw', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/bmw-logo.png' },{ label: 'Citroen', value: 'citroen', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/citroen-logo.png' },{ label: 'Dacia', value: 'dacia', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/dacia-logo.png' },{ label: 'Fiat', value: 'fiat', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/fiat-logo.png' },{ label: 'Ford', value: 'ford', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ford-logo.png' },{ label: 'Ferrari', value: 'ferrari', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/ferrari-logo.png' },{ label: 'Honda', value: 'honda', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/honda-logo.png' },{ label: 'Hyundai', value: 'hyundai', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/hyundai-logo.png' },{ label: 'Jaguar', value: 'jaguar', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jaguar-logo.png' },{ label: 'Jeep', value: 'jeep', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/jeep-logo.png' },{ label: 'Kia', value: 'kia', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/kia-logo.png' },{ label: 'Land Rover', value: 'land rover', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/land-rover-logo.png' },{ label: 'Mazda', value: 'mazda', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mazda-logo.png' },{ label: 'Mercedes', value: 'mercedes', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mercedes-logo.png' },{ label: 'Mini', value: 'mini', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mini-logo.png' },{ label: 'Mitsubishi', value: 'mitsubishi', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/mitsubishi-logo.png' },{ label: 'Nissan', value: 'nissan', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/nissan-logo.png' },{ label: 'Opel', value: 'opel', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/opel-logo.png' },{ label: 'Peugeot', value: 'peugeot', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/peugeot-logo.png' },{ label: 'Porsche', value: 'porsche', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/porsche-logo.png' },{ label: 'Renault', value: 'renault', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/renault-logo.png' },{ label: 'Saab', value: 'saab', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/saab-logo.png' },{ label: 'Skoda', value: 'skoda', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/skoda-logo.png' },{ label: 'Subaru', value: 'subaru', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/subaru-logo.png' },{ label: 'Suzuki', value: 'suzuki', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/suzuki-logo.png' },{ label: 'Toyota', value: 'toyota', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/toyota-logo.png' },{ label: 'Volkswagen', value: 'volkswagen', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volkswagen-logo.png' },{ label: 'Volvo', value: 'volvo', logo: 'https://s3.amazonaws.com/cdn.formk.it/example-assets/car-brands/volvo-logo.png' }];
</script>

<template>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search and select a car brand"
    placeholder="Example: Toyota"
    :options="carBrands"
    selection-appearance="option"
    value="toyota"
  >
    <!--SELECTION SLOT-->
      <template #selection="{ selections, handlers }">
        <div
          v-for="option in selections"
          :key="option.value"
          class="formkit-selection"
        >
          <div class="formkit-option">
            <img
              :src="option.logo"
              :alt="option.label + ' logo'"
            />
            <span>
              {{ option.label }}
            </span>
          </div>
          <button @click.prevent="handlers.removeSelection(option)()" tabindex="-1" type="button" aria-controls="input_1" class="formkit-remove-selection"><span class="formkit-close-icon formkit-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path></svg></span></button>
        </div>
      </template>
    <!--/SELECTION SLOT-->
  </FormKit>
  <FormKit
    type="autocomplete"
    name="autocomplete"
    label="Search and select a car brand"
    placeholder="Example: Toyota"
    :options="carBrands"
    selection-appearance="option"
    multiple
    :value="['toyota', 'honda']"
  >
    <!--SELECTION SLOT-->
      <template #selection="{ selections, handlers }">
        <div
          v-for="option in selections"
          :key="option.value"
          class="formkit-selection"
        >
          <div class="formkit-option">
            <img
              :src="option.logo"
              :alt="option.label + ' logo'"
            />
            <span>
              {{ option.label }}
            </span>
          </div>
          <button @click.prevent="handlers.removeSelection(option)()" tabindex="-1" type="button" aria-controls="input_1" class="formkit-remove-selection"><span class="formkit-close-icon formkit-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 16"><path d="M10,12.5c-.13,0-.26-.05-.35-.15L1.65,4.35c-.2-.2-.2-.51,0-.71,.2-.2,.51-.2,.71,0L10.35,11.65c.2,.2,.2,.51,0,.71-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path><path d="M2,12.5c-.13,0-.26-.05-.35-.15-.2-.2-.2-.51,0-.71L9.65,3.65c.2-.2,.51-.2,.71,0,.2,.2,.2,.51,0,.71L2.35,12.35c-.1,.1-.23,.15-.35,.15Z" fill="currentColor"></path></svg></span></button>
        </div>
      </template>
    <!--/SELECTION SLOT-->
  </FormKit>
</template>

<style>
.formkit-option {
  display: flex;
  align-items: center;
}

.formkit-option img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
</style>

