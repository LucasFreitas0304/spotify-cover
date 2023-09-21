const albums = [
  {
    title: 'Graduation',
    author: 'Kanye West',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg',
  },
  {
    title: 'The College Dropout',
    author: 'Kanye West',
    cover: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg',
  },
  {
    title: 'Ye',
    author: 'Kanye West',
    cover: 'https://upload.wikimedia.org/wikipedia/en/7/74/Ye_album_cover.jpg',
  },
  {
    title: 'My Beautiful Dark Twisted Fantasy',
    author: 'Kanye West',
    cover: 'https://upload.wikimedia.org/wikipedia/en/b/be/MBDTF_ALT.jpg',
  },
  {
    title: 'Yeezus',
    author: 'Kanye West',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/2/2f/Capa_de_Yeezus.jpg',
  },
  {
    title: 'Die Lit',
    author: 'Playboi Carti',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Die_Lit.png',
  },
  {
    title: '17',
    author: 'XXXTENTACION',
    cover: 'https://upload.wikimedia.org/wikipedia/pt/thumb/2/2e/XXXTentacion_17.jpg/220px-XXXTentacion_17.jpg'
  },
];

let position = 0;

function handleAlbum(action) {
  if (action === 'back') {
    position = position === 0 ? albums.length - 1 : position - 1;
  } else if (action === 'next') {
    position = position === albums.length - 1 ? 0 : position + 1;
  }

  const album = albums[position];

  const albumHTML = `
    <div class="card">
      <img
        src="${album.cover}"
        alt="Album Cover"
      />
      <div class="card-text">
        <h2>${album.title}</h2>
        <p>${album.author}</p>
      </div>
    </div>
  `;

  document.querySelector('.card-wrapper').innerHTML = albumHTML;

  document.querySelector('.album-counter').innerHTML = `${position + 1}/${albums.length}`;
}

handleAlbum();
