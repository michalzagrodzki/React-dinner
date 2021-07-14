/* eslint-disable max-lines-per-function */
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import List from "./../routes/List";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { List as mockList } from "./../mockup/list";
import { LIST as LIST_LABELS, SHARED } from "./../utils/labels";

jest.mock("axios");

describe("List Page", () => {
  describe("Happy path", () => {
    axios.get.mockResolvedValue({ data: mockList });
    test("renders app title", async () => {
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(LIST_LABELS.HEADER_LABEL, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders list type switch", async () => {
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(/Switch to table/i)
      );
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Missing list", () => {
    axios.get.mockResolvedValue({ data: [] });
    test("renders app title", async () => {
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(LIST_LABELS.HEADER_LABEL, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders list type switch", async () => {
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(SHARED.TABLE_LINK_LABEL, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders message of missing list", async () => {
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(/No dinners visible/i);
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Link to form", () => {
    axios.get.mockResolvedValue({ data: mockList });
    test("renders title to link to custom order form", async () => {
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(LIST_LABELS.FORM_LINK_CAPTION, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders link to custom order form", async () => {
      axios.get.mockResolvedValue({ data: mockList });
      render(<List />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(LIST_LABELS.FORM_LINK_LABEL, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });
  });
});
