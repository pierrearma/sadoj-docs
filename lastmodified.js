// Docsify plugin pour ajouter la dernière date de modification
window.$docsify.plugins = [
    function(hook, vm) {
        // Utiliser l'API GitHub pour récupérer la date de dernière modification d'un fichier
        hook.afterEach(function (html, next) {
            const repoOwner = 'pierrearma'; // Remplace par le nom d'utilisateur du repo GitHub
            const repoName = 'sadoj-docs'; // Remplace par le nom de ton repo GitHub
            const filePath = vm.route.file; // Récupérer le nom du fichier actuel directement via Docsify

            // Effectuer une requête pour obtenir les informations des commits depuis l'API GitHub
            fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/commits?path=${filePath}`)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération des commits');
                    }
                    return response.json();
                })
                .then(data => {
                    if (data && data[0] && data[0].committer) {
                        const lastModifiedDate = new Date(data[0].commit.committer.date); // Date de la dernière modification

                        const formattedDate = lastModifiedDate.toLocaleString('fr-FR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric'
                        });

                        // Ajouter la date à la fin de la page avec "à" avant l'heure
                        const footer = `<p>Dernière mise à jour de cette page le ${formattedDate} à ${lastModifiedDate.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}.</p>`;
                        html += footer; // Ajouter le texte à la fin de la page

                        next(html); // Passer le contenu modifié au prochain hook
                    } else {
                        next(html); // Si pas de données, continuer sans ajouter de date
                    }
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération des données:', error);
                    next(html); // En cas d'erreur, continuer sans ajouter de date
                });
        });
    },
    ...(window.$docsify.plugins || []) // Assurer que le plugin Docsify existant reste intact
];
