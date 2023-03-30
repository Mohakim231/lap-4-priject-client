import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import { AuthProvider } from '.';

describe("useAuth component", () => {
    it("renders children", () => {
      const testChild = <p data-testid="test-text">Test</p>;
      render(
        <AuthProvider>
          {testChild}
        </AuthProvider>
      );

      expect(screen.getByTestId('test-text')).toBeInTheDocument();
    });
  });