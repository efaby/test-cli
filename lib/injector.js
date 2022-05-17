import { Constants } from "../utils/constant.js";

export class Injector {
  constructor(percentage) {
    this.plasma = ((100 - percentage) * Constants.PlasmaBase) / 100;
  }

  getPlasma() {
    return this.plasma;
  }
}