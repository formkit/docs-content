<script setup lang="ts">
import { FormKitSummary } from '@formkit/vue'

function submitApplication() {
  alert('Application submitted!')
}
</script>

<template>
  <h1>Apply to FormKit University</h1>
    <p>Submit this form to see the summary.</p>
    <FormKit
      id="fk-univ-app"
      v-slot="{ value: formData }"
      type="form"
      form-class="fk-univ-app"
      submit-label="Submit application"
      incomplete-message="Sorry. The application was not submitted because not all fields are filled out correctly."
      @submit="submitApplication"
    >
      <!-- 👀 notice the summary is inside the form -->
      <FormKitSummary />

      <h2>Personal Information</h2>
      <FormKit name="contact_info" type="group">
        <FormKit
          name="first_name"
          label="First name"
          type="text"
          validation="required"
          help="Enter your first name only."
          outer-class="side-by-side"
        />
        <FormKit
          name="last_name"
          label="Last name"
          type="text"
          validation="required"
          help="Enter your last name only."
          outer-class="side-by-side"
          :errors="['Foobar son, foobar i tell you.']"
        />
        <FormKit
          name="date_of_birth"
          type="date"
          label="Date of birth"
          help="Enter your birthday."
          validation="required|date_between:1990-01-01:00:01:00,1999-12-31:23:59:59"
          :validation-messages="{
            date_between: 'Only 90s kids please.',
          }"
        />
        <FormKit
          name="email"
          type="email"
          label="Email address"
          validation="required|email"
          placeholder="example@example.com"
        />
        <FormKit
          name="favorite_color"
          type="color"
          value="#0062cc"
          label="Favorite color"
          outer-class="triple"
          help="What color gets you jazzed?"
        />
        <FormKit
          name="favorite_month"
          type="select"
          placeholder="Select a month"
          label="Favorite month"
          value="August"
          outer-class="triple"
          help="Choose your favorite month."
          validation="is:June,July,August,September"
          :validation-messages="{
            is: 'Only Summer months allowed.',
          }"
          validation-visibility="dirty"
          :options="[
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ]"
        />
        <FormKit
          name="favorite_number"
          type="number"
          value="10"
          label="Favorite number"
          outer-class="triple"
          help="What are your favorite digits?"
        />

        <h3>Emergency contacts</h3>
        <FormKit type="list" name="emergency_contacts">
          <FormKit type="group" name="emergency_contact_1">
            <FormKit
              name="emergency_1_name"
              label="Emergency contact 1: Full name"
              type="text"
              validation="required"
              outer-class="side-by-side"
            />
            <FormKit
              name="emergency_1_email"
              label="Emergency contact 1: Email address"
              type="email"
              validation="required"
              outer-class="side-by-side"
            />
          </FormKit>

          <FormKit type="group" name="emergency_contact_2">
            <FormKit
              name="emergency_2_name"
              label="Emergency contact 2: Full name"
              type="text"
              outer-class="side-by-side"
            />
            <FormKit
              name="emergency_2_email"
              label="Emergency contact 2: Email address"
              type="email"
              outer-class="side-by-side"
            />
          </FormKit>
        </FormKit>
      </FormKit>

      <h2>Application</h2>

      <FormKit
        name="why_apply"
        type="textarea"
        label="Why do you want to attend FormKit University?"
        help="Serious applicants only."
        validation="required|length:300,1000"
        validation-label="Your answer"
        validation-visibility="blur"
        rows="6"
      >
        <template #help="context">
          <div :class="[context.classes.help]">
            {{ context.help }} <br />
            <span
              >{{ 1000 - (context._value ? context._value.length : 0) }} / 1000
              characters remaining.</span
            >
          </div>
        </template>
      </FormKit>

      <FormKit
        type="file"
        label="Your résumé"
        accept=".pdf,.doc,.md,.jpg,.jpeg,.png"
        help="Upload your résumé if you have one."
        multiple
      />

      <FormKit
        name="interests"
        label="What are your areas of interest?"
        type="checkbox"
        validation="required|min:2"
        :options="[
          'Accessibility',
          'Form error handling',
          'Form generation from schema',
          'Form styles and theming',
          'Validation',
          'Internationalization',
        ]"
      />

      <FormKit
        name="hear_about"
        label="How did you hear about FormKit University?"
        type="radio"
        value="A lot"
        :options="[
          'A friend',
          'The radio',
          'TV commercial',
          'Thoughts on Forms podcast',
          'Google search',
          'Other',
        ]"
      />
      <FormKit
        v-if="formData?.hear_about == 'Other'"
        name="hear_about_other"
        label="Other way you heard about FormKit University:"
        type="text"
      />

      <FormKit
        type="select"
        multiple
        label="What free merch would you like to receive?"
        name="merch"
        :options="[
          { label: 'T-shirt', value: 'shirt' },
          { label: 'Hat', value: 'hat' },
          { label: 'Beanie', value: 'beanie' },
          { label: 'Mug', value: 'mug' },
        ]"
        help="Select all the free merch you'd like to receive by holding command (macOS) or control (PC)."
      />

      <FormKit
        v-if="
          Array.isArray(formData?.merch) && formData?.merch.includes('shirt')
        "
        name="t_shirt"
        type="select"
        placeholder="Select a shirt size"
        label="T-shirt size"
        :options="['Small', 'Medium', 'Large']"
      />

      <FormKit
        name="years_experience"
        label="Years of experience"
        help="How many years of experience building forms do you have?"
        type="range"
        value="5"
        min="0"
        max="10"
        outer-class="side-by-side"
      />

      <div class="side-by-side years-output">
        <strong>{{ formData?.years_experience || 0 }} years.</strong>
      </div>

      <h2>Next steps</h2>

      <FormKit
        name="zoom_meeting"
        type="datepicker"
        label="Date and time of Zoom interview"
        help="Schedule a date and we'll send you a calendar invite."
        validation="required"
        validation-label="The interview"
      />

      <FormKit
        name="zoom_backup"
        type="time"
        label="Backup time for Zoom interview"
        help="Select a backup time of day for the Zoom interview."
        validation="required"
      />

      <FormKit
        type="month"
        name="tuition_start"
        label="Tuition start month"
        help="If accepted, choose which month you'd like your tuition cycle to begin."
        min="2022-08"
        max="2022-10"
      />

      <FormKit
        name="access_pin"
        label="Access Pin"
        help="Set your numeric Access Pin to retrieve your application data later."
        type="password"
        validation="required|length:16|matches:/^\d+$/"
        :validation-messages="{
          matches: 'Access Pin can only contain numbers.',
        }"
        outer-class="side-by-side"
      />

      <FormKit
        type="password"
        name="access_pin_confirm"
        label="Confirm Access Pin"
        help="Must match the Access Pin exactly as entered in the last step."
        validation="required|confirm"
        validation-label="Access Pin confirmation"
        outer-class="side-by-side"
      />
    </FormKit>
</template>