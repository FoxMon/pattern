import { CookStrategy } from "../strategy/cook.strategy";

export class BaseChef implements CookStrategy {
  private name: string;

  private cookStrategy!: CookStrategy;

  constructor(name: string) {
    this.name = name;
  }

  public cook(): string {
    if (!this.cookStrategy) {
      throw new Error(`Cannot find chef!`);
    }

    return this.cookStrategy.cook();
  }

  public setCookStrategy(strategy: CookStrategy) {
    this.cookStrategy = strategy;
  }

  public getName(): string {
    return this.name;
  }
}
