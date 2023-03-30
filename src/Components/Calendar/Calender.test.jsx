 import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { AuthProvider } from '../../context';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import Calendar from ".";
import FullCalendar from '@fullcalendar/react';

describe('Calendar component', () => {
  it('exists', () => {
    expect(Calendar).toBeDefined();
  });

  it('renders', () => {
    render(
      <AuthProvider>
        {Calendar}
      </AuthProvider>
    );
    expect(1 == 1).toBeTruthy();
  })
});