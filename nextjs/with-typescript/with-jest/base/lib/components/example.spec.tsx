import { Example } from './example';
import { render, waitFor, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('example', () => {
    test('renders text', async () => {
        const TEXT = 'Hello, World!';
        render(<Example text={TEXT} />)
        await waitFor(() => {
            screen.getByText(TEXT)
        })
        expect(screen.getByText(TEXT)).toHaveTextContent(TEXT)
    })
})
