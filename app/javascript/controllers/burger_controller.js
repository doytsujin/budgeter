import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["menu"]

  toggle(e) {
    e.target.classList.toggle("is-active")
    this.menuTarget.classList.toggle("is-active")
  }
}
