import { fireEvent } from '@testing-library/react'
import React, { useState } from 'react'

import { renderWithTheme } from '../../testing/render'
import TourStepContent from '../TourStepContent'

describe('TourStepContent', () => {
  const TestComponent = () => {
    const [title, setTitle] = useState('First step')

    return (
      <>
        <TourStepContent title={title} descriptionKey={$ => $.tour.welcome} />
        <button type='button' onClick={() => setTitle('Second step')}>
          Change step
        </button>
      </>
    )
  }

  it('should announce the current step to screen readers', () => {
    const { getByRole } = renderWithTheme(<TestComponent />)

    expect(getByRole('status')).toHaveTextContent('First step')

    fireEvent.click(getByRole('button', { name: 'Change step' }))

    expect(getByRole('status')).toHaveTextContent('Second step')
  })
})
