import React from 'react'; 

import { describe, it, beforeEach, afterEach, expect } from 'vitest'; 
import { screen, render, fireEvent, cleanup } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import { BrowserRouter } from 'react-router-dom';
import NavBar from '.';
import { AuthProvider } from '../../context';

describe("NavBar", () => {
    it("exists", () => {
      expect(NavBar).toBeDefined();
    });

    it("renders", () => {
      render(
        <AuthProvider>
          <BrowserRouter>
            <NavBar />
          </BrowserRouter>
        </AuthProvider>
      );
      expect(screen.getByText("Pet Profile")).toBeInTheDocument();
      expect(screen.getByText("Pet Tips")).toBeInTheDocument();
      expect(screen.getByText("Message")).toBeInTheDocument();

    });

  });