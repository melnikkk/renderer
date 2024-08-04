import { List } from "./List.js";
import { Select } from "./Select.js";

export const App = () => {
  const element = document.createElement('div')
  const title = document.createElement('h1')

  title.innerText = 'Hello World!'

  element.append(title)

  const localState = {
    currentList: 'first'
  }

  return { element, localState }
}

App.render = ({ element, localState, renderer }) => {
  const onSelectValueChange = (e) => {
    const selectedValue = e.target.value

    localState.currentList = selectedValue

    console.log(selectedValue)

    // renderer.rerender()
  }

  const list = renderer.createComponent(List)
  const select = renderer.createComponent(Select, {
    onChange: onSelectValueChange,
  })

  element.append(select.element)
  element.append(list.element)
}