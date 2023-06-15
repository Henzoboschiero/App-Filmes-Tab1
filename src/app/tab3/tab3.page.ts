import { IAtores } from './../model/IAtores';
import { Component } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router:Router, public alertController: AlertController, public toastController: ToastController) {}

  listaAtores: IAtores[] = [
    {
      nome: 'Brad Pitt',
      nascimento: '09/09/1966',
      idade: 56,
      imagem: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRA5ERshGKkFmw6DS8DWsoRKkpdLOWPxesnKkvTPA6eSEC_cxJ0jhWboyZecJBsgJVq',
      favorito: false
    },
    {
      nome: 'Adam Sandler',
      nascimento: '12/12/1963',
      idade: 59,
      imagem: 'https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR0zqNv45WkSoIGg1bvbOrsuPFLmQ_TE7Jz-MbwOBTlMv_qBAy35TdboCr3u7aR6z2F',
      favorito: false
    },
    {
      nome: 'The Rock',
      nascimento: '02/05/1972',
      idade: 51,
      imagem: 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRjbZoNxzwLeBDRRxD9UXr25WSvm6L1QoFxM7pODhfXqIDwAH98bYnUu_Lzj2LF0tK1',
      favorito: false
    }

  ];
  exibirAtores(atores: IAtores){
    const navigationExtras: NavigationExtras = {state:{paramAtores:atores}};
    this.router.navigate(['ator-detalhe'], navigationExtras);
  }
  async exibirAlertaFavorito(atores: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            atores.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            atores.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
