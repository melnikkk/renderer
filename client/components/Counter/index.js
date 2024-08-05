export const Counter = (_props, { rerender }) => {
  const element = document.createElement('p')

  const localState = {
    counter: 0,
    setCounter(value) {
      this.counter = value

      rerender()
    }
  }

  // TODO: add clean up
  setInterval(() => {
    localState.setCounter(++localState.counter)
  }, 1000)

  return {
    element,
    localState,
  }
}

Counter.render = ({ element, localState, renderer }) => {
  element.innerText = localState.counter
}