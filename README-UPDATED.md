# Site Hijab Dakar - E-commerce Mode Islamique

Site e-commerce moderne et responsive pour la vente de hijabs, abayas et accessoires de mode islamique au Sénégal.

## 🚀 Fonctionnalités

### Frontend
- ✅ **Page d'accueil** avec hero section, produits vedettes et catégories
- ✅ **Catalogue produits** avec filtres avancés (prix, couleur, catégorie)
- ✅ **Pages produit détaillées** avec galerie d'images et variantes
- ✅ **Système de panier** avec gestion d'état globale
- ✅ **Page de contact** avec formulaire et informations
- ✅ **Page à propos** de l'entreprise
- ✅ **Interface d'administration** pour la gestion des produits
- ✅ **Design responsive** optimisé mobile-first
- ✅ **Intégration WhatsApp** pour les commandes
- ✅ **Système de notifications** toast
- ✅ **Page 404** personnalisée

### Technologies utilisées
- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Bootstrap 5** + **React Bootstrap** - Interface utilisateur
- **SCSS** - Stylisation avancée
- **Context API** - Gestion d'état du panier

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── a-propos/          # Page à propos
│   ├── admin/             # Interface d'administration
│   ├── contact/           # Page de contact
│   ├── panier/            # Page du panier
│   ├── produits/          # Catalogue et détails produits
│   │   └── [id]/         # Page produit dynamique
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   └── not-found.tsx      # Page 404
├── components/
│   ├── home/              # Composants de la page d'accueil
│   ├── layout/            # Header et Footer
│   └── ui/                # Composants d'interface réutilisables
├── context/               # Gestion d'état globale
├── data/                  # Données JSON (produits, config)
├── styles/                # Fichiers SCSS
└── types/                 # Types TypeScript
```

## 🛍️ Gestion des produits

### Catalogue actuel
- **Hijabs** - Soie premium, jersey, everyday
- **Abayas** - Modernes, traditionnelles, coupes diverses
- **Khimars** - Longs, protection complète
- **Ensembles** - Packs économiques
- **Accessoires** - Bandeaux, épingles

### Fonctionnalités produits
- Variantes de couleurs et tailles
- Gestion des stocks
- Prix avec réductions
- Images multiples
- Catégorisation
- Produits vedettes et nouveautés

## 🛒 Système de commande

### Panier intelligent
- Ajout/suppression d'articles
- Modification des quantités
- Persistance entre les sessions
- Calcul automatique des totaux

### Commandes WhatsApp
- Génération automatique de messages
- Récapitulatif complet des articles
- Informations de livraison
- Facilite le processus de vente

## 📱 Responsive Design

- **Mobile-first** - Optimisé pour les smartphones
- **Tablettes** - Interface adaptée
- **Desktop** - Expérience complète
- **Navigation intuitive** - UX optimisée

## 🎨 Personnalisation

### Thème de couleurs
```scss
$primary: #8B4513;        // Marron élégant
$secondary: #D4AF37;      // Or
$hijab-brown: #8B4513;    // Marron principal
$hijab-gold: #D4AF37;     // Or accent
```

### Configuration site
Fichier `src/data/site-config.json` :
- Informations de contact
- Réseaux sociaux
- Paramètres de livraison
- Configuration WhatsApp

## 🚀 Installation et développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [url-du-repo]
cd Site-Hijab

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 📝 Données et contenu

### Products (src/data/products.json)
Structure complète des produits avec :
- Informations détaillées
- Variantes (couleurs, tailles)
- Prix et promotions
- Gestion des stocks
- Images et métadonnées

### Configuration (src/data/site-config.json)
- Paramètres du site
- Informations de contact
- Configuration des livraisons
- Liens sociaux

## 🔧 Administration

### Interface d'administration (/admin)
- Vue d'ensemble des statistiques
- Gestion des produits
- Suivi des commandes (à venir)
- Outils d'export/import

### Fonctionnalités
- Statistiques en temps réel
- Gestion des stocks
- Répartition par catégories
- Produits populaires

## 📞 Contact et support

### Moyens de contact intégrés
- **WhatsApp** : Commandes directes
- **Téléphone** : Support vocal
- **Email** : Contact professionnel
- **Formulaire** : Messages structurés

### Service client
- Support 7j/7 via WhatsApp
- Réponse rapide aux demandes
- Accompagnement personnalisé

## 🚚 Livraison

### Zones couvertes
- **Dakar et banlieue** : 24-48h
- **Reste du Sénégal** : 2-5 jours
- **Livraison gratuite** : Commandes > 50 000 FCFA

### Modes de paiement
- Paiement à la livraison
- Orange Money
- Wave
- Virement bancaire
- Paiement en ligne (à venir)

## 🔮 Développements futurs

### Fonctionnalités prévues
- [ ] Système d'authentification utilisateurs
- [ ] Historique des commandes
- [ ] Programme de fidélité
- [ ] Chat client en temps réel
- [ ] Système d'avis produits
- [ ] Blog mode islamique
- [ ] Application mobile
- [ ] Intégration paiement en ligne
- [ ] Système de recommandations

### Améliorations techniques
- [ ] PWA (Progressive Web App)
- [ ] Optimisation SEO avancée
- [ ] Analytics et tracking
- [ ] Tests automatisés
- [ ] CI/CD pipeline
- [ ] CDN pour les images
- [ ] Base de données externe

## 📈 Performance et SEO

### Optimisations
- Images optimisées et responsive
- Lazy loading des composants
- Structure SEO-friendly
- Meta tags dynamiques
- Sitemap automatique

## 🔒 Sécurité

### Mesures implémentées
- Validation des formulaires
- Protection CSRF
- Sanitisation des données
- Headers de sécurité

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

---

**Hijab Élégance Dakar** - Votre partenaire mode islamique au Sénégal 🌟