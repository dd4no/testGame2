export default class dragManager {

  constructor(scene, logo) {

    this.dragLogo = function (scene, logo) {

      logo.setInteractive();

      scene.input.setDraggable(logo);

      scene.input.on('drag', function (pointer, gameObject, dragX, dragY) {
        gameObject.x = dragX;
        gameObject.y = dragY;
      })
    }
  }
}