# Hijab Élégance Dakar - Site E-commerce

## Description

Site e-commerce professionnel pour vêtements hijab et mode islamique féminine à Dakar, Sénégal. 

### Fonctionnalités

- ✅ Catalogue de produits avec filtres
- ✅ Design responsive (mobile-first)
- ✅ Intégration WhatsApp pour commandes
- ✅ Support multi-catégories (hijabs, abayas, khimars)
- ✅ Interface en français
- ✅ Optimisé pour le Sénégal

### Technologies

- **Frontend**: Next.js 14 + TypeScript
- **Styling**: Bootstrap 5 + SCSS personnalisé
- **Déploiement**: Render
- **Communication**: WhatsApp Business

## Développement Local

### Prérequis

- Node.js 18+ 
- npm ou yarn

### Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd site-hijab-dakar

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

### Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## Structure du Projet

```
src/
├── app/                 # Pages Next.js (App Router)
├── components/          # Composants réutilisables
│   ├── layout/         # Header, Footer, Navigation
│   ├── home/           # Composants page d'accueil
│   └── product/        # Composants produits
├── data/               # Données JSON (produits, config)
├── types/              # Types TypeScript
└── styles/             # Styles SCSS personnalisés
```

## Configuration

### Variables d'Environnement

Créer un fichier `.env.local` :

```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_WHATSAPP_NUMBER=+221781234567
```

### Configuration Site

Modifier `src/data/site-config.json` avec vos informations :

- Nom de la boutique
- Coordonnées de contact
- Réseaux sociaux
- Horaires d'ouverture

## Déploiement sur Render

### 1. Configuration Render

- **Build Command**: `npm run build`
- **Start Command**: `npm start`
- **Node Version**: 18.x

### 2. Variables d'Environnement Render

Ajouter dans le dashboard Render :
- `NODE_VERSION=18.20.0`
- `NEXT_PUBLIC_SITE_URL=https://votre-app.onrender.com`

### 3. Configuration Domaine Personnalisé

1. Acheter un domaine (.sn recommandé pour le Sénégal)
2. Configurer les DNS vers Render
3. Activer HTTPS automatique

## Gestion des Produits

### Ajouter un Produit

Modifier `src/data/products.json` :

```json
{
  "id": "nouveau-produit-001",
  "name": "Nom du produit",
  "description": "Description détaillée",
  "price": 25000,
  "originalPrice": 30000,
  "category": {
    "id": "hijabs",
    "name": "Hijabs",
    "slug": "hijabs"
  },
  "images": ["/images/products/nouveau-produit-001.jpg"],
  "colors": [
    { "name": "Noir", "value": "#000000" }
  ],
  "inStock": true,
  "featured": true
}
```

### Ajouter des Images

1. Placer les images dans `public/images/products/`
2. Optimiser pour le web (format WebP recommandé)
3. Nommer selon l'ID du produit

## Intégrations

### WhatsApp Business

Le site génère automatiquement des liens WhatsApp avec :
- Message pré-rempli
- Informations produit
- Lien direct vers le chat

### Analytics (Optionnel)

Ajouter Google Analytics dans `src/app/layout.tsx` :

```typescript
// Google Analytics
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## Optimisations SEO

- Métadonnées optimisées
- Structure de données JSON-LD
- URLs conviviales
- Images optimisées
- Sitemap automatique

## Support et Maintenance

### Mise à Jour des Produits

1. Modifier les fichiers JSON
2. Commit et push vers le repo
3. Déploiement automatique sur Render

### Sauvegarde

- Code source sur GitHub
- Images sur Render ou CDN
- Base de données JSON versionnée

## Licence

MIT License - Libre d'utilisation et modification.

---

**Contact Développement**
Pour modifications ou support technique, contacter l'équipe de développement.