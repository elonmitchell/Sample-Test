import React from 'react'
import App from './App'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

describe('App', () => {
  it('Clicking calcultate button should render the sum of even terms for limit=4000000', () => {
    const wrapper = Enzyme.shallow(<App />)
    wrapper.find('.limitNumber').simulate('change', {target: {value: 4000000}})
    wrapper.find('.action').simulate('click')

    expect(wrapper.find('.sumOfEvents').text()).toEqual('4613732')
  })
})
