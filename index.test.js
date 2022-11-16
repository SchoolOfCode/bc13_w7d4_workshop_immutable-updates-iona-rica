import * as fn from "./index.js";

describe("addToEnd", function () {
  it("should not mutate the original array", function () {
    const array = ["duck", "duck", "duck"];
    const actual = fn.addToEnd(array, "GOOSE");
    expect(array).toEqual(["duck", "duck", "duck"]);
    expect(actual).not.toBe(array);
  });
  it("should add item to the end", function () {
    const expected = ["duck", "duck", "duck", "GOOSE"];
    const actual = fn.addToEnd(["duck", "duck", "duck"], "GOOSE");
    expect(actual).toEqual(expected);
  });
});

describe("addToBeginning", function () {
  it("should not mutate the original array", function () {
    const array = ["meanie", "meinie", "moe"];
    const actual = fn.addToBeginning(array, "einie");
    expect(array).toEqual(["meanie", "meinie", "moe"]);
    expect(actual).not.toBe(array);
  });
  it("should add item to the beginning", function () {
    const expected = ["einie", "meanie", "meinie", "moe"];
    const actual = fn.addToBeginning(["meanie", "meinie", "moe"], "einie");
    expect(actual).toEqual(expected);
  });
});

describe("insertItem", function () {
  it("should not mutate the original array", function () {
    const array = ["bread", "cheese", "ham", "bread"];
    const actual = fn.insertItem(array, "lettuce", 1);
    expect(array).toEqual(["bread", "cheese", "ham", "bread"]);
    expect(actual).not.toBe(array);
  });
  it("should insert into middle", function () {
    const expected = ["bread", "lettuce", "cheese", "ham", "bread"];
    const actual = fn.insertItem(
      ["bread", "cheese", "ham", "bread"],
      "lettuce",
      1
    );
    expect(actual).toEqual(expected);
  });
});

describe("replaceItem", function () {
  it("should not mutate the original array", function () {
    const array = ["bread", "cheese", "ham", "bread"];
    const actual = fn.replaceItem(array, "chicken", 2);
    expect(array).toEqual(["bread", "cheese", "ham", "bread"]);
    expect(actual).not.toBe(array);
  });
  it("should replace item", function () {
    const expected = ["bread", "cheese", "chicken", "bread"];
    const actual = fn.replaceItem(
      ["bread", "cheese", "ham", "bread"],
      "chicken",
      2
    );
    expect(actual).toEqual(expected);
  });
});

describe("removeItem", function () {
  it("should not mutate the original array", function () {
    const array = ["bread", "cheese", "ham", "bread"];
    const actual = fn.removeItem(array, 1);
    expect(array).toEqual(["bread", "cheese", "ham", "bread"]);
    expect(actual).not.toBe(array);
  });
  it("should remove item", function () {
    const expected = ["bread", "ham", "bread"];
    const actual = fn.removeItem(["bread", "cheese", "ham", "bread"], 1);
    expect(actual).toEqual(expected);
  });
});

describe("updateName", function () {
  it("should not mutate the original object", function () {
    const user = { name: "Lambert", age: 99, height: "6ft" };
    const actual = fn.updateName(user, "Lammy");
    expect(user).toEqual({ name: "Lambert", age: 99, height: "6ft" });
    expect(actual).not.toBe(user);
  });
  it("should updateName", function () {
    const expected = { name: "Lammy", age: 99, height: "6ft" };
    const actual = fn.updateName(
      { name: "Lambert", age: 99, height: "6ft" },
      "Lammy"
    );
    expect(actual).toEqual(expected);
  });
});

describe("toggleTeaStatus", function () {
  it("should not mutate the original object", function () {
    const user = { name: "Ben", needsACupOfTea: true };
    const actual = fn.toggleTeaStatus(user);
    expect(user).toEqual({ name: "Ben", needsACupOfTea: true });
    expect(actual).not.toBe(user);
  });
  it("should toggle tea status to true", function () {
    const expected = { name: "Ben", needsACupOfTea: true };
    const actual = fn.toggleTeaStatus({ name: "Ben", needsACupOfTea: false });
    expect(actual).toEqual(expected);
  });
  it("should toggle tea status to false", function () {
    const expected = { name: "Ben", needsACupOfTea: false };
    const actual = fn.toggleTeaStatus({ name: "Ben", needsACupOfTea: true });
    expect(actual).toEqual(expected);
  });
  it("should toggle tea status", function () {
    const expected = { name: "Ben", needsACupOfTea: true };
    const actual = fn.toggleTeaStatus({ name: "Ben", needsACupOfTea: false });
    expect(actual).toEqual(expected);
  });
});
describe("toggleListItemCompleted", function () {
  it("should not mutate the original array or nested object", function () {
    const index = 0;
    const list = [
      { task: "Do washing up", completed: false },
      { task: "Do code wars", completed: false },
      { task: "Send post card", completed: false },
    ];
    const actual = fn.toggleListItemCompleted(list, index);
    expect(list).toEqual([
      { task: "Do washing up", completed: false },
      { task: "Do code wars", completed: false },
      { task: "Send post card", completed: false },
    ]);
    expect(actual).not.toBe(list);
    expect(actual[index]).not.toBe(list[index]);
  });
  it("should toggle completed to true", function () {
    const expected = [
      { task: "Do washing up", completed: true },
      { task: "Do code wars", completed: false },
      { task: "Send post card", completed: false },
    ];
    const actual = fn.toggleListItemCompleted(
      [
        { task: "Do washing up", completed: false },
        { task: "Do code wars", completed: false },
        { task: "Send post card", completed: false },
      ],
      0
    );
    expect(actual).toEqual(expected);
  });
  it("should toggle completed to false", function () {
    const expected = [
      { task: "Do washing up", completed: false },
      { task: "Do code wars", completed: false },
      { task: "Send post card", completed: false },
    ];
    const actual = fn.toggleListItemCompleted(
      [
        { task: "Do washing up", completed: false },
        { task: "Do code wars", completed: true },
        { task: "Send post card", completed: false },
      ],
      1
    );
    expect(actual).toEqual(expected);
  });
});
