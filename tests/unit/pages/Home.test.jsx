import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom/vitest'
import { describe, expect, it } from 'vitest'
import Home from '../../../src/pages/Home'

describe('Home page', () => {
  it('links visitors to the contact page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute(
      'href',
      '/contact'
    )
  })
})
