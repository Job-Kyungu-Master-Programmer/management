Add Cloud Cloudinary

Dans cette branche, j'ai viens d'ajouter un Cloud appeler 'Cloudinary' , parce que quand j'ai deployer l'app sur Render, j'ai connut un probleme : 
Les images, s'affiche bel et bien , mais au bout des 30 a 45 minutes, cela ne s'affiche plus, mais dans la base de donnees, toutes les images etaient la! 
Ceci m'a pousser a chercher a comprendre quelle etait cette magie dont je ne comprennais absolument rien. 

Apres avoir lus plusieurs articles sur le sujet, j'ai vite compris que : - Quand on deploy une app sur le serveur mais qui est connecter avec Github, il faut necessairement utiliser des cloud comme : 
" Google Storage Cloud, AWS Amazon S3, ou Cloudinary" 
Dans mon cas j'ai choisi Cloudinary :

- Facile a utiliser!
- Rapide

  Comment voir si tout va bien apres avoir configurer cloudinary :
on fait comme ca :
cloudinary.api.resources(function(error, result) {
      console.log(result, error);
});

 #Installation pour node js : "Npm install cloudinary"

 Details Important: 

Il faut configuere votre API KEY, NAME_CLOUDINARY ET API SECRET. 
tres facile a retrouver dans la documentation au niveau de Dashboard. 


#Job DEV
