import { HomeTest } from "../screens/homeTest";

export class HomeActionsTest {
  #screen;
  constructor(){
    this.#screen = new HomeTest();
  }
  async clickMidwayTema() {
    this.#screen.temaMidwayButton.tap();
  }
  async clickRiachueloTema() {
    this.#screen.temaRiachueloButton.tap();
  }
}
