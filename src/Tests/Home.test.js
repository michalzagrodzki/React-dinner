import { render, screen } from "@testing-library/react";
import React from "react";
import Home from "./../routes/Home";
import { MemoryRouter } from "react-router-dom";

describe("Home Page", () => {
  describe("Happy path", () => {
    test("renders learn react link", () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(/Dinner App/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Missing list", () => {
    test("renders learn react link", () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(/Dinner App/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Link to form", () => {
    test("renders link to custom order form", () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(/Dinner App/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
