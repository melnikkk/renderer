import { ListItem } from "./ListItem.js";

export const List = () => {
  const element = document.createElement('ul');

  const localState = {
    items: [
      {
        title: 'First Item'
      },
      {
        title: 'Second Item'
      },
    ]
  }

  return {
    element,
    localState
  }
}

List.render = ({ element, localState, renderer }) => {
  localState.items.forEach((item) => {
    const { element: listItemElement } = renderer.createComponent(ListItem, { title: item.title })

    element.append(listItemElement)
  })
}