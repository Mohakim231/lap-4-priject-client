import React from 'react'; 
import { describe, it, expect, beforeEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import { AuthProvider } from '../../context';
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import Home from '.';
import { BrowserRouter } from 'react-router-dom';

describe("Home", () => {
  it("exists", () => {
    expect(Home).toBeDefined();
  });
  it("renders", () => {
    render(
      <AuthProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </AuthProvider>
    );
      
  });

});