import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { screen, render } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";
expect.extend(matchers);
import Message from ".";
import { AuthProvider } from "../../context";

describe("Message", () => {
  it("exists", () => {
    expect(Message).toBeDefined();
  });
  it("renders", () => {
    render(
    <AuthProvider>
      <Message />
    </AuthProvider>
    );
    expect(screen.getByText('Conversations')).toBeInTheDocument();
  });

  
});
