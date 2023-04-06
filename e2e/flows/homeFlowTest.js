import { HomeActionsTest } from "../actions/homeActionsTest"

export class HomeFlowTest {
  #actions
  constructor(){
    this.#actions = new HomeActionsTest();
  }
  async changeTema() {
    await this.#actions.clickRiachueloTema();
    await this.#actions.clickMidwayTema();
  }
}
