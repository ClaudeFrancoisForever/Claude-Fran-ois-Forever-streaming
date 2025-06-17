<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Claude François Forever streaming</title>
  <link rel="icon" type="image/png" href="favicon.png">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Raleway', sans-serif;
      background: linear-gradient(135deg, #0D0B1E, #2A124A);
      color: #EAEAEA;
    }

    header {
      background-color: #1A1333;
      padding: 1rem 2rem;
      text-align: center;
    }

    header h1 {
      font-family: 'Playfair Display', serif;
      font-size: 2.5rem;
      margin: 0;
      color: #A78BFA;
    }

    .container {
      max-width: 1200px;
      margin: 2rem auto;
      padding: 0 2rem;
    }

    .video-card {
      background-color: #1E1B2E;
      border-radius: 12px;
      padding: 1rem;
      margin-bottom: 1.5rem;
      display: flex;
      gap: 1rem;
    }

    .video-card img {
      width: 200px;
      height: auto;
      border-radius: 8px;
    }

    .video-info h2 {
      font-family: 'Playfair Display', serif;
      margin-top: 0;
      color: #D1C4E9;
    }

    .buttons {
      margin-top: 1rem;
    }

    .buttons button {
      background-color: #4C1D95;
      border: none;
      padding: 0.5rem 1rem;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 0.5rem;
    }

    nav {
      background-color: #160F2A;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    nav a {
      color: #EAEAEA;
      text-decoration: none;
      margin: 0 1rem;
      font-weight: bold;
    }

    nav a:hover {
      color: #A78BFA;
    }

    .admin-section {
      background-color: #221A39;
      padding: 2rem;
      border-radius: 12px;
      margin-top: 3rem;
    }

    .admin-section h2 {
      color: #A78BFA;
      font-family: 'Playfair Display', serif;
    }

    .admin-section label {
      display: block;
      margin-top: 1rem;
      font-weight: bold;
    }

    .admin-section input,
    .admin-section textarea {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
      border: none;
      border-radius: 6px;
    }

    .admin-section button {
      margin-top: 1.5rem;
      padding: 0.7rem 1.5rem;
      background-color: #4C1D95;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <header>
    <h1>Claude François Forever streaming</h1>
  </header>

  <nav>
    <div>
      <a href="#">Accueil</a>
      <a href="#">Archives</a>
      <a href="#">Favoris</a>
      <a href="#">Ajouter une émission</a>
    </div>
    <div>
      <a href="#">Connexion</a>
      <a href="#">Inscription</a>
    </div>
  </nav>

  <div class="container">
    <div class="video-card">
      <img src="https://via.placeholder.com/200x120.png?text=Miniature" alt="Miniature de l'émission">
      <div class="video-info">
        <h2>Concert Olympia 1974</h2>
        <p>Une performance exceptionnelle de Claude François à l'Olympia. Archive restaurée en qualité optimale.</p>
        <div class="buttons">
          <button>💜 J'aime</button>
          <button>⭐ Ajouter aux favoris</button>
        </div>
      </div>
    </div>

    <div class="admin-section">
      <h2>Administration</h2>

      <label for="favicon">Modifier le favicon :</label>
      <input type="file" id="favicon" accept="image/png, image/x-icon">

      <label for="seo-title">Titre SEO :</label>
      <input type="text" id="seo-title" placeholder="Titre affiché sur Google">

      <label for="seo-description">Description SEO :</label>
      <textarea id="seo-description" rows="3" placeholder="Résumé pour les moteurs de recherche"></textarea>

      <label for="highlight-photo">Photo mise en avant :</label>
      <input type="file" id="highlight-photo">

      <label for="social-link">Lien vers un réseau social :</label>
      <input type="url" id="social-link" placeholder="https://facebook.com/claude.francois">

      <button>Enregistrer les modifications</button>
    </div>
  </div>
</body>
</html>
