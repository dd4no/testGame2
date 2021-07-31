import logoImg from '../assets/logo.png'
import dragManager from '../helpers/dragManager';

export default class Game extends Phaser.Scene {

  constructor() {
   super({
    key: "Game"
   }) 
  }

  preload ()
 {
     this.load.image('logo', logoImg);
 }
   
 create ()
 {
     const logo = this.add.image(400, 150, 'logo');
      const dragmanager = new dragManager();
      
      dragmanager.dragLogo(this, logo)
 }

 update ()
 {

 }


}