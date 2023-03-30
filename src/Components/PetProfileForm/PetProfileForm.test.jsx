import React from 'react'; 

import { describe, it, beforeEach, afterEach, expect } from 'vitest'; 
import { screen, render, fireEvent, cleanup } from '@testing-library/react'; 
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers'; 
expect.extend(matchers); 
import PetProfileForm from '.';
import { AuthProvider } from '../../context';

const mockFile = (name, size, type) => {
  const file = new File([], name, { type });
  Object.defineProperty(file, 'size', { get: () => size });
  return file;
};

const uploadFile = (input, file) => {
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(file);
  fireEvent.change(input, {target: {files: dataTransfer.files}});
};

describe("PetProfileForm", () => {
    
    it("exists", () => {
      expect(PetProfileForm).toBeDefined();
    });
    it("renders the form", async () => {
      render(
        <AuthProvider>
          <PetProfileForm/>
        </AuthProvider>
      );
      //test elements are rendered
      expect(screen.getByText('Pet Profile')).toBeInTheDocument();
      expect(screen.getByLabelText('Pet Name')).toBeInTheDocument();
      expect(screen.getByLabelText('Pet Age')).toBeInTheDocument();
      expect(screen.getByLabelText('Pet Species')).toBeInTheDocument();
      expect(screen.getByLabelText('Special Instructions')).toBeInTheDocument();
      expect(screen.getByText('Submit')).toBeInTheDocument();

      await userEvent.type(screen.getByLabelText('Pet Name'), 'Test');
      await userEvent.type(screen.getByLabelText('Pet Age'), '3');
      await userEvent.type(screen.getByLabelText('Pet Species'), 'Test');
      await userEvent.type(screen.getByLabelText('Special Instructions'), 'Test');
      
      expect(screen.getByLabelText('Pet Name')).toHaveValue('Test')
      expect(screen.getByLabelText('Pet Age')).toHaveValue('3')
      expect(screen.getByLabelText('Pet Species')).toHaveValue('Test')
      expect(screen.getByLabelText('Special Instructions')).toHaveValue('Test')
    });

    // it("handles file upload", () => {
    //   render(
    //     <AuthProvider>
    //       <PetProfileForm/>
    //     </AuthProvider>
    //   );
      
    //   const fileInput = screen.getByLabelText('Upload Pet Profile Image');
    //   const testFile = mockFile('test-image.jpg', 5000, 'image/jpeg');
    //   uploadFile(fileInput, testFile)
    
    
    

    afterEach(() => {
      cleanup();
    });
    
  });


