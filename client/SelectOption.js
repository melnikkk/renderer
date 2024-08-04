export const SelectOption = (props) => {
  const selectOption = document.createElement('option')

  selectOption.value = props.option.value
  selectOption.label = props.option.label

  return { element: selectOption, props }
}

SelectOption.render = () => {}