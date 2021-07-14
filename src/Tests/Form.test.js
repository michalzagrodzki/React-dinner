/* eslint-disable max-lines-per-function */
import { render, screen } from "@testing-library/react";
import React from "react";
import Form from "./../routes/Form";
import { MemoryRouter } from "react-router-dom";
import { FORM } from "./../utils/labels";

jest.mock("axios");

describe("Form Page", () => {
  describe("Happy path", () => {
    test("renders route title", async () => {
      render(<Form />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(new RegExp(FORM.HEADER_LABEL, "i"));
      expect(linkElement).toBeInTheDocument();
    });

    test("renders form title", async () => {
      render(<Form />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(new RegExp(FORM.FORM_TITLE, "i"));
      expect(linkElement).toBeInTheDocument();
    });

    test("renders form caption", async () => {
      render(<Form />, { wrapper: MemoryRouter });
      const linkElement = screen.getByText(new RegExp(FORM.FORM_CAPTION, "i"));
      expect(linkElement).toBeInTheDocument();
    });
  });
});
