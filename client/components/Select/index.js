import { SelectOption } from "./SelectOption.js";

export const Select = (props) => {
  const select = document.createElement('select')

  select.addEventListener('change', (e) => {
    props.onChange(e)
  })

  return { element: select, props }
}

Select.render = ({ element, props, renderer, localState }) => {
  props.options.forEach(({ value, label }) => {
    const { element: selectOption } = renderer.createComponent(SelectOption, {
      value,
      label,
      selected: value === props.selectedOption
    })

    element.append(selectOption)
  })
}