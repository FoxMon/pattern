import { ChefFactory } from "../factory/chef.factory";
import { BaseChef } from "../models/base-chef.model";
import { ChefType } from "../models/chef";

export class CookUseCase {
  public execute(type: ChefType): string {
    const chef = new BaseChef(type.toString());

    chef.setCookStrategy(ChefFactory.create(type));

    return chef.cook();
  }
}
