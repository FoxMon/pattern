import { describe, expect, it } from "vitest";
import { CookUseCase } from "../src";
import { ChefType } from "../src/domain/cook/models/chef";

describe("Cook", () => {
  it("KoreanChef", () => {
    const useCase = new CookUseCase();

    const food = useCase.execute(ChefType.KOREAN);

    expect(food).equal("Korean");
  });
});
