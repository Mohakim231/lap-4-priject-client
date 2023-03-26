import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Filters from '.';

describe('Filters component', () => {
    it('renders services and animals', () => {
        render(<Filters />);
        expect(screen.getByRole('heading', {name: /services/i})).toBeInTheDocument();
        expect(screen.getByRole('heading', {name: /animals/i})).toBeInTheDocument();
    });

    it('toggles services visibility when services is clicked', async () => {
        render(<Filters />);
        const services = screen.getByRole('heading', {name: /services/i})
        await userEvent.click(services);
        expect(screen.getByText('Daycare')).toBeInTheDocument();
        await userEvent.click(services);
        expect(screen.queryByText('Daycare')).toBeNull();
    });

    it('toggles animals visibility when animals is clicked', async () => {
        render(<Filters />);
        const services = screen.getByRole('heading', {name: /animals/i})
        await userEvent.click(services);
        expect(screen.getByText('Dogs')).toBeInTheDocument();
        await userEvent.click(services);
        expect(screen.queryByText('Dogs')).toBeNull();
    });

    //below test needs fixing
    it('updates checkbox when clicked', async () => {
        render(<Filters />);
        userEvent.click(screen.getByRole('heading', {name: /services/i}));
        const checkbox = screen.getByLabelText('Daycare');
        expect(checkbox).not.toBeChecked();
        userEvent.click(screen.getByRole('heading', {name: /services/i}));
        expect(checkbox).toBeChecked();
    })

    afterEach(() => {
        cleanup();
    });

})


