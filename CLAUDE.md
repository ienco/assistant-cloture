# Assistant de clôture – offices notariaux (ienco expertise)

Outil web gratuit pour les comptables du notariat (formation INAFON) : checklist de clôture + onglets de calcul des écritures d'inventaire, export PDF, sauvegarde locale (localStorage, 15 jours). Aucun backend, aucune donnée transmise.

## Structure
- `src/app.js` : logique (cycles, modules de calcul, export PDF). Chaque onglet de calcul est un objet `MODULES.<id>` avec `html()`, `after()` et `lines()` (lignes d'écriture, utilisées par l'indicateur d'impact sur le résultat).
- `src/style.css` : styles. `src/layout.html` : squelette de la page. `assets/logo.png` : logo ienco.
- `build.py` : génère `dist/app.js` et `dist/app.css`. Toujours relancer avant de committer.

## Déploiement
- Hébergement : page Webflow `ienco.fr/outils/assistant-cloture` (site Webflow « Ienco », page id `6af4940c5994b355dcdeb0d7`).
- Le code personnalisé de la page charge `dist/` via jsDelivr, épinglé sur le **SHA complet du commit** (l'envoi de tags est bloqué par le proxy de session) : en-tête = `<link rel=stylesheet href="https://cdn.jsdelivr.net/gh/ienco/assistant-cloture@<SHA>/dist/app.css">`, pied de page = `<div id="ienco-app"></div><script src="https://cdn.jsdelivr.net/gh/ienco/assistant-cloture@<SHA>/dist/app.js"></script>`.
- Nouvelle version : build → commit → push main → remplacer le SHA dans l'en-tête et le pied de page Webflow → publier.
- Recette : les modules listés dans `BETA` (src/app.js) ne sont actifs que sur `ienco.webflow.io` ; publier d'abord sur ce domaine. Production (ienco.fr) uniquement après validation explicite de S. Dabbabi.

## Conventions métier
- Comptes : chiffres uniquement, 10 max ; alignement automatique sur la saisie la plus longue (6 minimum), comptes système compris.
- Libellés d'écriture : « <Nature> au JJ/MM/AAAA – <désignation> ».
- Date de clôture par défaut : 31/12/N-1 jusqu'au 15 janvier N, puis 31/12/N ; modifiable (arrêtés intermédiaires).
- Impact sur le résultat : classes 6 et 7, crédit − débit.

## État d'avancement
- En production : checklist, ICNE, FNP, CCA, indicateur d'impact sur le résultat.
- À développer (modalités à fournir par S. Dabbabi) : véhicules (AEN, TVS, dotation excédentaire, amortissement batterie), contrôle de TVA, contrôle CRPCEN, liquidation CVAE, provision pour congés payés, réductions et crédits d'impôt, liquidation de l'IS.
