# Instructions pour les Agents de Codage AI - Site Hijab

## Vue d'ensemble du projet

Site e-commerce pour vêtements hijab et mode islamique féminine. Ce projet privilégie l'expérience utilisateur, l'accessibilité culturelle et les pratiques de développement modernes.

## Architecture et structure

- **Frontend**: Technologies web modernes (à déterminer selon les besoins)
- **Backend**: API RESTful ou GraphQL pour la gestion des produits et commandes
- **Base de données**: Gestion des catalogues produits, utilisateurs et commandes
- **Assets**: Images produits optimisées, styles responsives

## Conventions de développement

### Nomenclature des fichiers

- Utiliser kebab-case pour les fichiers et dossiers
- Noms explicites reflétant la fonctionnalité (`product-catalog.js`, `hijab-styles.css`)
- Organiser par fonctionnalité plutôt que par type de fichier

### Structure des composants

- Composants réutilisables pour les cartes produits, filtres de couleur/taille
- Séparation claire entre logique métier et présentation
- Gestion d'état centralisée pour le panier et les préférences utilisateur

### Spécificités du domaine

- **Filtres produits**: Par type (hijab, abaya, accessoires), couleur, taille, matière
- **Images**: Multiples vues par produit (portrait, détail, porté)
- **Internationalisation**: Support français/arabe si applicable
- **Responsive design**: Mobile-first pour l'audience cible

## Workflows de développement

### Commandes essentielles

```bash
# À définir selon la stack technique choisie
npm run dev          # Développement local
npm run build        # Build de production
npm run test         # Tests automatisés
```

### Tests et qualité

- Tests unitaires pour la logique métier (calculs prix, gestion panier)
- Tests d'intégration pour les parcours d'achat
- Tests d'accessibilité pour l'inclusion

## Intégrations externes

- **Paiement**: Intégration sécurisée (PayPal, Stripe, solutions locales)
- **Livraison**: APIs de calcul de frais et suivi
- **Images**: CDN pour l'optimisation des performances
- **Analytics**: Suivi des conversions et comportement utilisateur

## Patterns spécifiques au projet

- État de chargement avec squelettes pour les listes de produits
- Gestion d'erreur gracieuse pour les APIs externes
- Cache intelligent pour les images et données produits
- Validation robuste des formulaires de commande

## Considérations importantes

- Performance mobile prioritaire
- Sécurité des données utilisateur (RGPD/équivalent)
- SEO optimisé pour la découverte produits
- Accessibilité web (WCAG 2.1)

---

_Ce fichier sera mis à jour au fur et à mesure de l'évolution du projet._
