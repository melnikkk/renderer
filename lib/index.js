export const Renderer = {
  createComponent: (component, props = {}) => {
    const rerender = () => {
      instance.element.innerHTML = ''

      renderComponent()
    }

    const renderer = {
      createComponent: Renderer.createComponent,
      rerender,
    }

    const instance = component(props, { rerender })

    const renderComponent = () => {
      component.render({
        element: instance.element,
        localState: instance.localState,
        props,
        renderer,
      })
    }

    renderComponent()

    return instance
  },
}