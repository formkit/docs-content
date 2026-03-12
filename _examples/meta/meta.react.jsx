import { FormKit } from '@formkit/react'

const extraData = {
  hair: 'gold',
  eyes: 'blue',
  weight: '215lb',
  height: '6ft 3in',
  hands: 'tiny',
  cool: false,
}

export default function App() {
  return (
    <>
      {/* %partial% */}
      <FormKit type="form" actions={false}>
        {({ value }) => (
          <>
            <FormKit name="name" label="Name" />
            <FormKit type="meta" name="metaDetails" value={extraData} />
            <pre>{JSON.stringify(value, null, 2)}</pre>
          </>
        )}
      </FormKit>
      {/* %partial% */}
    </>
  )
}
