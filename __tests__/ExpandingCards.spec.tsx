import { it, expect, describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "../components/Card";

describe("Card", () => {
  it("should render the component", () => {
    
    render(
      <Card
        id="1"
        title="test"
        url="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
      />
    );
    
    const heading = screen.getByRole("heading", { level: 2, name: "test" });
    const imageSource = screen.getByAltText("test").getAttribute("src");
    
    expect(imageSource).toBe(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"
    );
    
    expect(heading).toBeDefined();
  });
});
