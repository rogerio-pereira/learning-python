import {render, screen} from '@testing-library/vue'

const TestComponent = {
  template: '<h1>Hello</h1>',
}

test('renders', () => {
    render(TestComponent)
    expect(screen.getByText('Hello')).toBeInTheDocument()
})