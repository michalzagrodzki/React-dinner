/* eslint-disable max-lines-per-function */
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Details from "./../routes/Details";
import { MemoryRouter } from "react-router-dom";
import axios from "axios";
import { List as mockList } from "./../mockup/list";
import { DETAILS as DETAILS_LABELS } from "./../utils/labels";

jest.mock("axios");

describe("Details Page", () => {
  describe("Happy path", () => {
    axios.get.mockResolvedValue({ data: mockList });
    test("renders route title", async () => {
      render(<Details />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(DETAILS_LABELS.HEADER_LABEL, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });
  });

  describe("Missing details", () => {
    axios.get.mockResolvedValue({ data: [] });
    test("renders route title", async () => {
      render(<Details />, { wrapper: MemoryRouter });
      const linkElement = await waitFor(() =>
        screen.getByText(new RegExp(DETAILS_LABELS.HEADER_LABEL, "i"))
      );
      expect(linkElement).toBeInTheDocument();
    });

    test("renders message of missing details", async () => {
      render(<Details />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(/No dinner visible/i);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
