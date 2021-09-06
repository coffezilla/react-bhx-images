/* eslint-disable */
// images Next and ReactJs apps
export const IMG_SPONSORS = (elementUrl: string): string => {
	return require('../images/sponsors/' + elementUrl + '.png').default;
};

// verifica se possui imagem a ser carregada
// caso o conteudo nao tenha imagem, nao sera adicionado lazy load
// let _hasImageToLoad = false; // true caso tenha imagem a ser carregada dentro
// const allImages = document.querySelectorAll('.image-lazy-load');
// console.log('national', allImages);
// allImages.forEach((el) => {
// 	console.log('twen', el);
// });

// if(el.querySelector('.image-lazy-load')) {
//   _hasImageToLoad = true;
// } else {
//   _hasImageToLoad = false;
// }
// // busca todas as imagens que precisam ser carregadas com lazy load
// if(_hasImageToLoad) {
//   let imgLarge = new Image();				// cria imagem para verificar loading
//   imgLarge.src = el.querySelector('.image-lazy-load').src;
// }

// if(_hasImageToLoad) {
//   imgLarge.onload = function () {

//     // informa que elemento esta carregado
//     indexLoadedArr[index] = true;
//     contentLazyTotal--;

//     //############################################################
//     // VERIFICA SEQUENCIA DE CARREGAMENTO
//     // verifica se a imagem (do elemento) foi carregada e está na sequencia correta.
//     // caso nao esteja em sequencia, armazena e apenas apresenta após carregar o proximo item sequencial
//     //
//     if(index == indexNext) {
//       // carrega todos em sequencia enquanto estiverem como TRUE em carregamento
//       nextIsLoaded = true;

//       // continua apresentando conteudo enquanto o proximo item ja se encontra carregado
//       while(nextIsLoaded) {

//         // apresenta o conteudo
//         array[indexNext].classList.add('content-lazy-loaded');
//         array[indexNext].classList.remove('content-lazy-loading');
//         array[indexNext].classList.remove('content-lazy-load');

//         indexNext++;
//         nextIsLoaded = indexLoadedArr[indexNext];

//         //############################################################
//         // VERIFICA SE CARREGOU TODAS AS IMAGENS DO DOM
//         // finaliza quanto todos forem carregados e apresentados
//         if( contentLazyTotal == 0 && !nextIsLoaded) {
//           // carregou todo o json e todas as imagens
//           isLoadingJson = false;
//           $(_domJSON).querySelectorAll('.json-reload').forEach(function(el, index, array){
//              el.remove();
//            });

//           // identifica se carregamento foi feito via push to refresh
//           // BUG: pode contar bugs quando carregar multiplos jsons e passar rapidamente por varias telas carregando novos PTR
//           // a verificacao do loading serve apenas para carregamento em uma pagina
//           if(isLoadingPTR) {
//             ptrComplete();
//           }
//         }

//       }
//     } else {

//     }

//   };	// onload = success

//   //############################################################
//   // ONERRO - LOAD DE IMAGEM - LOAD COM ERRO
//   // erro ao carregar imagem
//   // ATENCAO = FUNCAO COPIADA DO onload
//   // ALTERACOES DEVEM SER FEITAS POR IGUAL
//   //
//   imgLarge.onerror = function (e) {

//     // informa que elemento esta carregado
//     indexLoadedArr[index] = true;
//     contentLazyTotal--;

//     //
//     if(index == indexNext) {

//       // ALTERA IMAGEM COM ERRO
//       //
//       array[indexNext].querySelector('.image-lazy-load').style.display = "none";
//       array[indexNext].querySelector('.image-lazy-load').src = "#";

//       nextIsLoaded = true;

//       // continua apresentando conteudo enquanto o proximo item ja se encontra carregado
//       while(nextIsLoaded) {

//         // apresenta o conteudo
//         array[indexNext].classList.add('content-lazy-loaded');
//         array[indexNext].classList.remove('content-lazy-loading');
//         array[indexNext].classList.remove('content-lazy-load');

//         indexNext++;
//          nextIsLoaded = indexLoadedArr[indexNext];

//         if( contentLazyTotal == 0 && !nextIsLoaded) {
//           isLoadingJson = false;						// libera o carregamento para novas solicitacoes

//           $(_domJSON).querySelectorAll('.json-reload').forEach(function(el, index, array){
//              el.remove();
//            });

//           if(isLoadingPTR) {
//             ptrComplete();
//           }
//         }
//       }
//     }
//   };	// onerro = erro

//   // imagens precisam carregar
//   el.classList.add('content-lazy-loading');
