import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup } from '@testing-library/react';

import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Alert from ".";

describe('Alert component', () => {
    it('should render the alert message', async () => {
        render(<Alert msg="test message" type='warning'/>);

        expect(screen.queryByText('test message')).toBeInTheDocument();
        expect(screen.queryByText('test message').className).toContain('alert-warning');
    })

    it('should not render the alert message when show is false', async() => {
        render(<Alert msg="test message" type="warning" />);

        await new Promise((resolve) => setTimeout(resolve, 2100));

        expect(screen.queryByText('Test message')).not.toBeInTheDocument();
    })
});
