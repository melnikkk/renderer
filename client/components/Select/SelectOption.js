export const SelectOption = (props) => {
  const selectOption = document.createElement('option')

  selectOption.value = props.value
  selectOption.label = props.label
  selectOption.selected = props.selected

  return { element: selectOption, props }
}

SelectOption.render = () => {}