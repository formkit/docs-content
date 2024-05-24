import {
  outer,
  inner,
  wrapper,
  label,
  help,
  messages,
  message,
  icon,
  prefix,
  suffix,
  textInput,
  $attrs,
} from '@formkit/inputs'
/**
 * Input definition for a text.
 * @public
 */
export const floatingLabelTextInput = {
  schema: outer(
    wrapper(
      /*
       * Here we are commenting out the label input and moving it below the
       * text input.
       * label('$label'),
       */
      inner(
        icon('prefix', 'label'),
        prefix(),
        textInput(),
        /*
         * New label placemenet
         */
        $attrs(
          {
            class: '$classes.labelFloating',
            'data-has-value': '$_value !== "" && $_value !== undefined',
            for: '$id',
          },
          label('$label')
        ),
        suffix(),
        icon('suffix')
      )
    ),
    help('$help'),
    messages(message('$message.value'))
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * The family the input belongs to. Will inherit class lists
   */
  family: 'text',
  /**
   * An array of extra props to accept for this input.
   */
  props: [],
  /**
   * Additional features that should be added to your input
   */
  features: [],
}
