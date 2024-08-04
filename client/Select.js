import { SelectOption } from "./SelectOption.js";

export const Select = (props) => {
  const select = document.createElement('select')

  const localState = {
    options: [
      {
        label: 'First Option',
        value: 1,
      },
      {
        label: 'Second Option',
        value: 2,
      },
      {
        label: 'Third Option',
        value: 3,
      },
    ]
  }

  select.addEventListener('change', (e) => {
    props.onChange(e)
  })

  return { element: select, props, localState }
}

Select.render = ({ element, props, renderer, localState }) => {
  localState.options.forEach((option) => {
    const { element: selectOption } = renderer.createComponent(SelectOption, { option })

    element.append(selectOption)
  })
}