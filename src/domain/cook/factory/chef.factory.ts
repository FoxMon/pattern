import { ChefType } from "../models/chef";
import { KoreanChef } from "../models/korean-chef.model";

export class ChefFactory {
  public static create(type: ChefType) {
    switch (type) {
      case ChefType.KOREAN: {
        return new KoreanChef();
      }

      default: {
        throw new Error(`Cannot support chef ${type}`);
      }
    }
  }
}
