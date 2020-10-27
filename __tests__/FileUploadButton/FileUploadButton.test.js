import React from "react";
import renderer from "react-test-renderer";
import FileUploadButton from "../../components/FileUploadButton/FileUploadButton";

describe("Render FileUploadButton", () => {
  it("render correctly FileUploadButton component", () => {
    const component = renderer.create(
      <FileUploadButton
        accept="image/*"
        disabled={false}
        maxSize={512000}
        minSize={5120}
      />
    );

    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });
});
