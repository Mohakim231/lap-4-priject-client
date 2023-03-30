import React from 'react';
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { screen, render, cleanup, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { AuthProvider } from '../../context';
import matchers from '@testing-library/jest-dom/matchers';
expect.extend(matchers);

import CalendarUser from ".";

