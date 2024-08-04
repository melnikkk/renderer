export const Renderer = {
  createComponent: (component, props = {}) => {
    const instance = component(props)

    component.render({
      element: instance.element,
      localState: instance.localState,
      props: instance.props,
      renderer: Renderer
    })

    return instance
  }
}