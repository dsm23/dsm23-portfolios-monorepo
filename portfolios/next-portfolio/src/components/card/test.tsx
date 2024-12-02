import { describe, expect, it } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from ".";

describe("components", () => {
  describe("Card", () => {
    it("should render", () => {
      const { container } = render(
        <Card>
          <CardHeader>
            <CardTitle>Some card title</CardTitle>
            <CardDescription>Some card description</CardDescription>
          </CardHeader>
          <CardContent>
            <div>Some card content</div>
          </CardContent>
        </Card>,
      );

      expect(container).toBeInTheDocument();
      expect(screen.getByText("Some card title")).toBeInTheDocument();
      expect(screen.getByText("Some card description")).toBeInTheDocument();
      expect(screen.getByText("Some card content")).toBeInTheDocument();
    });
  });
});
