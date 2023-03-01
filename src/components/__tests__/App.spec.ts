import { expect, describe, test } from "vitest";
import { mount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App behaviour", () => {
  test("Selection is updated properly", async () => {
    const SELECTION_ID = ".selection";
    const SELECTION_BUTTON_ID = ".selection-button";

    // Given
    const wrapper = mount(App);

    const selection = wrapper.find(SELECTION_ID);
    const buttons = wrapper.findAll(SELECTION_BUTTON_ID);

    const buttonToClick = buttons.at(1);
    const buttonValue = buttonToClick?.text();

    // When
    await buttonToClick?.trigger("click");

    // Then
    expect(selection.text()).toBe(buttonValue);
  });
});
