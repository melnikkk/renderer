export const ListItem = (props) => {
  const element = document.createElement('li')

  element.innerText = props.title

  return { element, props }
}

ListItem.render = () => {}