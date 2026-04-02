/* %partial% */
import { FormKit } from '@formkit/react'

const airlines = {
  american: 'American Airlines',
  delta: 'Delta',
  easyjet: 'easyJet',
  jetblue: 'JetBlue',
  klm: 'KLM',
  lufthansa: 'Lufthansa',
}

function LabelSlotExample() {
  return (
    <FormKit
      label="Airlines"
      help="Which airlines do you prefer to fly on?"
      type="checkbox"
      options={airlines}
      optionClass="!mb-0"
      slots={{
        label: ({ option }) => (
          <img
            src={`https://cdn.formk.it/example-assets/airlines/${option.value}.png`}
            width="120"
            alt={option.label}
          />
        ),
      }}
    />
  )
}
/* %partial% */

export default function App() {
  return (
    <>
      <style>{`
        img {
          aspect-ratio: 120 / 46;
        }
        .dark img {
          filter: invert(1) grayscale(1) brightness(1.1) contrast(2);
          mix-blend-mode: lighten;
        }
      `}</style>
      <LabelSlotExample />
    </>
  )
}
