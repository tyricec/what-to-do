import { getListToDisplay } from "./todo/reducer";

describe("app", () => {
  it("should have a list to display", () => {
    const state = {
      lists: {
        byId: {
          0: {
            id: 0,
            name: "What Todo"
          }
        }
      },
      app: {
        currentList: 0
      }
    };
    const list = getListToDisplay(state);

    expect(list.name).toBe("What Todo");
  });
});
