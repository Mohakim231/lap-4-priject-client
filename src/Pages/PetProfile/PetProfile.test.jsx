import React from 'react'; 
import { describe, it, expect, beforeEach, mock } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import PetProfile from '.';
import { AuthProvider } from '../../context';

describe("PetProfile", () => {
    it("exists", () => {
      expect(PetProfile).toBeDefined();
    });
    it("renders", () => {
      render(
        <AuthProvider>
          <PetProfile />
        </AuthProvider>
      );
      expect(1 == 1).toBeTruthy();
    });

  });