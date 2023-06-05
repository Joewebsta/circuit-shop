/**
 * @jest-environment jsdom
 */

import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CartItemListing from "./CartItemListing";

// Pass an item
// Test that no items are shown
  // returns an empty array
// Test that total is zero
// Test that items are shown
  // Test for 