import React from 'react'; 

import { describe, it, beforeEach, afterEach, expect } from 'vitest'; 
import { screen, render, fireEvent } from '@testing-library/react'; 
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import PetProfileForm from '.';


describe("PetProfileForm", () => {

    it("exists", () => {
      expect(PetProfileForm).toBeDefined();
    });
    it("renders", () => {
      render(PetProfileForm);
      expect(1 == 1).toBe(true);
    });

  });


//extra tests
//mocking the fetch function:
global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve({ message: 'Image uploaded successfully'})
  })
})

beforeEach(() => {
  fetch.mockClear();
});

it('renders component and uploads', async ({expect}) => {
  const { getByText, getByLabelText, getByAltText } = render(petProfileForm);

  expect(getByText('Upload an image')).toBeInTheDocument();

  const file = new File(['test-image'], 'test-image.png', {
    type: 'image/png'
  });

  const fileInput = getByLabelText('image');
  fireEvent.change(fileInput, { target:{files: [file]}});

  const preview = getByAltText('chosen');
  expect(preview).toBeInTheDocument();

  const submitButton = getByText('Submit');
  fireEvent.click(submitButton);
  await waitFor(() => getByText('Image uploaded successfully'));

  expect(fetch).toHaveBeenCalledWith('http://localhost:5000/pets/upload', {
    method: 'POST',
    body: JSON.stringify({ data: expect.any(String) }),
    headers: {
      'Content-type': 'application/json',
    },
  });

  afterEach(() => {
    cleanup();
  })
});
