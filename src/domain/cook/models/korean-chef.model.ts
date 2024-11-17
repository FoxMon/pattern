import { CookStrategy } from "../strategy/cook.strategy";

export class KoreanChef implements CookStrategy {
  public cook(): string {
    return "Korean";
  }
}
