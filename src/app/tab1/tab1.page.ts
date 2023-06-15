import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router, public alertController: AlertController, public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021',
      duracao: '1h50m',
      classificacao: 9,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w8BVC3qrCWCiTHRz4Rft12dtQF0.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Vingadores: Ultimato (2019)',
      lancamento: '25/04/2019 (BR)',
      duracao: '3h01m',
      classificacao: 6,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/avengers',
      favorito: false
    },
    {
      nome: 'Carros (2006)',
      lancamento: '29/05/2006 (BR)',
      duracao: '2h11m',
      classificacao: 10,
      cartaz: 'https://upload.wikimedia.org/wikipedia/pt/9/9b/Carros_p%C3%B4ster.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/carros',
      favorito: false
    },
    {
      nome: 'Velozes e Furiosos (2006)',
      lancamento: '19/05/2000 (BR)',
      duracao: '2h06m',
      classificacao: 9,
      cartaz: 'https://br.web.img3.acsta.net/pictures/19/07/05/17/41/1616389.jpg',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/velozes',
      favorito: false
    },
    {
      nome: 'Projeto X (2012)',
      lancamento: '19/05/2012 (BR)',
      duracao: '2h30m',
      classificacao: 9,
      cartaz: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq62875SxaUcLxt-FHj17pUIQxzED8Pk2o4z819AiyVeKtMC3-VdKQte6UOVA4YGzcEkM&usqp=CAU',
      generos: ['Aventura', 'Ficção científica', 'Ação'],
      pagina: '/velozes',
      favorito: false
    }
  ];
  exibirFilme(filme: IFilme){
    const navigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'], navigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast();
          }
        }
      ]
    });
    await alert.present();
  }
  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'top'
    });
    toast.present();
  }
}
