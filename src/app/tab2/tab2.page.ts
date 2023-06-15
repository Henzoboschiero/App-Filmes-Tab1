import { Component } from '@angular/core';
import { ISeries } from '../model/ISeries';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router, public alertController: AlertController, public toastController: ToastController) {}

  listaSeries: ISeries[] = [
    {
      nome: 'Arrow (2015)',
      lancamento: '19/05/2015 (BR)',
      temporadas: 5,
      classificacao: 9,
      cartaz: 'https://m.media-amazon.com/images/M/MV5BMTI0NTMwMDgtYTMzZC00YmJhLTg4NzMtMTc1NjI4MWY4NmQ4XkEyXkFqcGdeQXVyNTY3MTYzOTA@._V1_FMjpg_UX1000_.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/arrow',
      favorito: false
    },
    {
      nome: 'Raio Negro (2015)',
      lancamento: '03/07/2015 (BR)',
      temporadas: 3,
      classificacao: 8,
      cartaz: 'https://br.web.img2.acsta.net/pictures/17/12/26/10/09/1386260.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/raio',
      favorito: false
    },
  ];
  exibirSeries(series: ISeries){
    const navigationExtras: NavigationExtras = {state:{paramSeries:series}};
    this.router.navigate(['serie-detalhe'], navigationExtras);
  }
  async exibirAlertaFavorito(series: ISeries) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            series.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            series.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Serie adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
