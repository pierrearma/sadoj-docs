# Installer le site localement

> Auteur de la page: FlyHight.

---

1. Installer [Visual Studio code](https://desktop.github.com/download/).

2. Installer [Github Desktop](https://desktop.github.com/download/).

3. Aller dans le repo [sadoj-doc](https://github.com/pierrearma/sadoj-docs) et fork le code pour vous.

<img src="../../_media\sadoj-docs\photo_doc_1.png" alt="Photo 1" style="max-width: 600px;"/>
<img src="../../_media\sadoj-docs\photo_doc_2.png" alt="Photo 2" style="max-width: 600px;"/>

Dans cette fenêtre dans **Owner** choississez votre compte puis dans **Repository name** choississez le nom que vous voulez donner au fork. (nom de votre choix).

Mettre une description n'est pas obligatoire.

<img src="../../_media\sadoj-docs\photo_doc_3.png" alt="Photo 3" style="max-width: 600px;"/>

Quand vous êtes satisfait avec votre nom cliquez sur **Create fork**.

4. Allez dans votre profil sur Github puis dans **Your repositories**. Allez dans le gros bouton Vert **<> Code** et cliquez sur **Open with GitHub Desktop**.

5. Installer [NodeJS](https://nodejs.org/fr/).

6. Installer `docsify-cli`.

Ouvrez une console puis lancez la commande suivante

    ```
    npm i docsify-cli -g
    ```

7. Fermer la console. 

8. Faire un click droit sur le dossier source et sélectionnez **Open Git Bash Here** puis faire la commande `docsify serve` pour lancer le site localement.

9. Ouvrir **Visual Studio Code**.

10. Allez dans **File** puis **Open folder** et selectionnez le dossier source du repo.

Ce qui vous ouvrira la dossier dans Visual avec toute l'arborescense des fichiers sur votre gauche.

11. Modifiez le texte et puis sauvegardez. Cela ce mettra directement a jour sur la version du site que vous hébergez sur votre ordinateur.

12. Une fois fini avec vous modifications, retournez sur **Github Desktop**. 

13. En bas a gauche mettez un nom a votre modification puis dans description descrivez les modifications que vous avez apporté.

<img src="../../_media\sadoj-docs\photo_doc_4.png" alt="Photo 4" style="max-width: 600px;"/>

14.  Une fois rempli appuyez sur **Commit sur main** puis un fois fait appuyez sur **push Origin**.

15. Maintenant il faut faire un **Pull Request**. 

Pour cela retournez sur [sadoj-doc](https://github.com/pierrearma/sadoj-docs)

Allez dans **Pull Request**.

Puis **New pull request**.

Cliquez sur **compare across forks**.

<img src="../../_media\sadoj-docs\photo_doc_5.png" alt="Photo 5" style="max-width: 600px;"/>

Sélectionnez votre fork.

<img src="../../_media\sadoj-docs\photo_doc_6.png" alt="Photo 6" style="max-width: 600px;"/>

Puis appuyez sur **Create Pull Request**.

16. Fini! Vous avez modifié le site! Attendez qu'un responsable valide le tout!



{docsify-updated}