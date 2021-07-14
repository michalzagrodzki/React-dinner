import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Home from "./../routes/Home";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { List as mockList } from "./../mockup/list";

jest.mock("axios");

describe("Home Page", () => {
  describe("Happy path", () => {
    axios.get.mockResolvedValue({ data: mockList });
    test("renders app title", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() => screen.getByText(/Dinner App/i));
      expect(linkElement).toBeInTheDocument();
    });

    test("renders list title", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/Most popular dinners:/i)
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders three items in list", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/Most popular dinners:/i)
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders link to full list", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/View all dinners/i)
      );
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Missing list", () => {
    axios.get.mockResolvedValue({ data: [] });
    test("renders app title", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() => screen.getByText(/Dinner App/i));
      expect(linkElement).toBeInTheDocument();
    });

    test("renders list title", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/Most popular dinners:/i)
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders message of missing list", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(/No dinners visible/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Link to form", () => {
    axios.get.mockResolvedValue({ data: mockList });
    test("renders title to link to custom order form", async () => {
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/Haven't found what you were looking for?/i)
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders link to custom order form", async () => {
      axios.get.mockResolvedValue({ data: mockList });
      render(<Home />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/Place a custom order/i)
      );
      expect(linkElement).toBeInTheDocument();
    });
  });
});
