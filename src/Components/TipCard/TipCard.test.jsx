import React from 'react'; 
import { describe, it, expect, beforeEach, afterEach } from 'vitest'; 
import { screen, render } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import TipCard from '.';

describe("Tipcard", () => {
    it("exists", () => {
        expect(TipCard).toBeDefined();
    });

    it("renders", () => {
        render(<TipCard />);
        expect(screen.getByLabelText("area of page with cards that have pet tips")).toBeInTheDocument();
    })
})