import { List } from "./components/List";
import { Select } from "./components/Select";
import { LIST_TYPE } from "./constants.js";
import {Counter} from "./components/Counter";

export const App = (_props, { rerender }) => {
  const element = document.createElement('div')

  const localState = {
    selectedList: LIST_TYPE.FIRST,
    setSelectedList(listType) {
      this.selectedList = listType

      rerender()
    }
  }

  return { element, localState }
}

App.render = ({ element, localState, renderer }) => {
  const onSelectValueChange = (e) => {
    localState.setSelectedList(e.target.value)
  }

  const list = renderer.createComponent(List, {
    items: [
      {
        title: 'First Item'
      },
      {
        title: 'Second Item'
      },
    ]
  })
  const select = renderer.createComponent(Select, {
    options: [
      {
        label: 'First Option',
        value: LIST_TYPE.FIRST,
      },
      {
        label: 'Second Option',
        value: LIST_TYPE.SECOND,
      },
      {
        label: 'Third Option',
        value: LIST_TYPE.THIRD,
      },
    ],
    selectedOption: localState.selectedList,
    onChange: onSelectValueChange,
  })
  const counter = renderer.createComponent(Counter)

  element.append(select.element)

  const title = document.createElement('h1')

  switch (localState.selectedList) {
    case LIST_TYPE.THIRD:
      title.innerText = 'THIRD!'
      element.append(title)
      break
    case LIST_TYPE.SECOND:
      title.innerText = 'Counter'
      element.append(counter.element)
      break
    case LIST_TYPE.FIRST:
    default:
      title.innerText = 'List'
      element.append(title)
      element.append(list.element)
      break
  }


}