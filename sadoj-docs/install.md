# Contribuer à SADoJ Docs

> Auteur de la page: FlyHight, Pierre.

---

Cette page vous explique comment contribuer à faire des modifications sur SADoJ Docs.

1. Installer [Visual Studio code](https://code.visualstudio.com/Download).

2. Installer [Github Desktop](https://desktop.github.com/download/).

3. Créer un compte [GitHub](https://github.com/).

4. Aller dans le repository [sadoj-docs](https://github.com/pierrearma/sadoj-docs) et fork le projet.

<img src="../../_media\sadoj-docs\photo_doc_1.png" alt="Photo 1" style="max-width: 600px;"/>
<img src="../../_media\sadoj-docs\photo_doc_2.png" alt="Photo 2" style="max-width: 600px;"/>

Dans cette fenêtre dans **Owner** choississez votre compte puis dans **Repository name** choississez le nom que vous voulez donner au fork. (nom de votre choix).

Mettre une description n'est pas obligatoire.

<img src="../../_media\sadoj-docs\photo_doc_3.png" alt="Photo 3" style="max-width: 600px;"/>

Quand vous êtes satisfait avec votre nom cliquez sur **Create fork**.

5. Allez dans votre profil sur Github puis dans **Your repositories**. Allez dans le gros bouton Vert **<> Code** et cliquez sur **Open with GitHub Desktop**.

6. Installer [NodeJS](https://nodejs.org/fr/).

7. Installer `docsify-cli`.

Ouvrez un invite de commande puis lancez la commande suivante

    ```
    npm i docsify-cli -g
    ```

8. Fermer la console. 

9. Faire un click droit sur le dossier source et sélectionnez **Open Git Bash Here** puis faire la commande `docsify serve` pour lancer le site localement.

10. Ouvrir **Visual Studio Code**.

11. Allez dans **File** puis **Open folder** et selectionnez le dossier source du repo.

Ce qui vous ouvrira la dossier dans Visual avec toute l'arborescense des fichiers sur votre gauche.

12. Modifiez le texte et puis sauvegardez. Cela ce mettra directement a jour sur la version du site que vous hébergez sur votre ordinateur.

13. Une fois fini avec vous modifications, retournez sur **Github Desktop**. 

14. En bas a gauche mettez un nom a votre modification puis dans description descrivez les modifications que vous avez apporté.

<img src="../../_media\sadoj-docs\photo_doc_4.png" alt="Photo 4" style="max-width: 600px;"/>

15.  Une fois rempli appuyez sur **Commit sur main** puis un fois fait appuyez sur **push Origin**.

16. Maintenant il faut faire un **Pull Request**. 

Pour cela retournez sur [sadoj-docs](https://github.com/pierrearma/sadoj-docs)

Allez dans **Pull Request**.

Puis **New pull request**.

Cliquez sur **compare across forks**.

<img src="../../_media\sadoj-docs\photo_doc_5.png" alt="Photo 5" style="max-width: 600px;"/>

Sélectionnez votre fork.

<img src="../../_media\sadoj-docs\photo_doc_6.png" alt="Photo 6" style="max-width: 600px;"/>

Puis appuyez sur **Create Pull Request**.

17. Fini! Vous avez modifié le site! Attendez qu'un responsable valide le tout!



