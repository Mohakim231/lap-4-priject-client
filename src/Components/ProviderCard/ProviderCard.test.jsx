import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import ProviderCard from '.';
import { AuthProvider } from '../../context';
import { BrowserRouter } from 'react-router-dom';

describe("ProviderCard", () => {

    it("exists", () => {
      expect(ProviderCard).toBeDefined();
    });

    it("renders", () => {
      render(
          <AuthProvider>
            <BrowserRouter>
              <ProviderCard />
            </BrowserRouter>
          </AuthProvider>
        );
      
    });


  });