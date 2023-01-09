import { screen, render } from '@testing-library/react'
import React from "react";
import App from './app'
import "jest-dom/extend-expect";

describe('App', function () {
    it('should have the right message', () => {
        render(<App />)
         const message = 'Hello World..Hayes!';
         expect(screen.getByText(message)).toBeInTheDocument()
      })
});