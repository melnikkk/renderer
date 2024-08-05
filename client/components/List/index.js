import { ListItem } from "./ListItem.js";

export const List = () => {
  const element = document.createElement('ul');

  return { element }
}

List.render = ({ element, renderer, props }) => {
  props.items.forEach((item) => {
    const { element: listItemElement } = renderer.createComponent(ListItem, { title: item.title })

    element.append(listItemElement)
  })
}