const BASE_DLC = 'https://archive.org/download/minecraft-ps4-dlc-cusa00265/';

const dlcList = [
  'Minecraft (E) - 1st Birthday Skin Pack.pkg',
  'Minecraft (E) - 2nd Birthday Skin Pack.pkg',
  'Minecraft (E) - 3rd Birthday Skin Pack.pkg',
  'Minecraft (E) - 4th Birthday Skin Pack.pkg',
  'Minecraft (E) - Adventure Time Mash-Up Pack.pkg',
  'Minecraft (E) - Battle & Beasts 2 Skin Pack.pkg',
  'Minecraft (E) - Battle & Beasts Skin Pack.pkg',
  'Minecraft (E) - Battle Map Pack 1.pkg',
  'Minecraft (E) - Battle Map Pack 2.pkg',
  'Minecraft (E) - Battle Map Pack 3.pkg',
  'Minecraft (E) - Battle Map Pack 4.pkg',
  'Minecraft (E) - Biome Settlers Skin Pack 1.pkg',
  'Minecraft (E) - Biome Settlers Skin Pack 2.pkg',
  'Minecraft (E) - Campfire Tales Skin Pack.pkg',
  'Minecraft (E) - Candy Texture Pack.pkg',
  'Minecraft (E) - Cartoon Texture Pack.pkg',
  'Minecraft (E) - Chinese Mythology Mash-Up Pack.pkg',
  'Minecraft (E) - City Texture Pack.pkg',
  'Minecraft (E) - Classic Skin Pack 1.pkg',
  'Minecraft (E) - Doctor Who Skins - Volume 1.pkg',
  'Minecraft (E) - Doctor Who Skins - Volume 2.pkg',
  'Minecraft (E) - Egyptian Mythology Mash-Up Pack.pkg',
  'Minecraft (E) - Fallout Battle Map Pack.pkg',
  'Minecraft (E) - Fallout Mash-Up Pack.pkg',
  'Minecraft (E) - Fantasy Texture Pack.pkg',
  'Minecraft (E) - Festive Battle Map.pkg',
  'Minecraft (E) - Festive Mash-Up Pack.pkg',
  'Minecraft (E) - Festive Skin Pack.pkg',
  'Minecraft (E) - Final Fantasy XV Skin Pack.pkg',
  'Minecraft (E) - From The Shadows Skin Pack.pkg',
  'Minecraft (E) - Glide Beasts Track Pack.pkg',
  'Minecraft (E) - Glide Giants Track Pack.pkg',
  'Minecraft (E) - Glide Myths Track Pack.pkg',
  'Minecraft (E) - Greek Mythology Mash-Up Pack.pkg',
  'Minecraft (E) - Halloween Battle Map.pkg',
  'Minecraft (E) - Halloween Mash-Up Pack.pkg',
  'Minecraft (E) - Halloween Texture Pack.pkg',
  'Minecraft (E) - LittleBigPlanet Mash-Up Pack.pkg',
  'Minecraft (E) - Magic - The Gathering Skin Pack.pkg',
  'Minecraft (E) - Mass Effect Mash-Up Pack.pkg',
  'Minecraft (E) - Minecon 2015 Skin Pack.pkg',
  'Minecraft (E) - Minecon 2016 Skin Pack.pkg',
  'Minecraft (E) - Minecon Earth 2017 Skin Pack.pkg',
  'Minecraft (E) - Mini Game Heroes Skin Pack.pkg',
  'Minecraft (E) - Mini Game Masters Skin Pack.pkg',
  'Minecraft (E) - Moana Character Pack.pkg',
  'Minecraft (E) - Natural Texture Pack.pkg',
  'Minecraft (E) - Norse Mythology Mash-Up Pack.pkg',
  'Minecraft (E) - Pattern Texture Pack.pkg',
  'Minecraft (E) - Pirates of The Caribbean Mash-Up Pack.pkg',
  'Minecraft (E) - Plastic Texture Pack.pkg',
  'Minecraft (E) - Power Rangers Skin Pack.pkg',
  'Minecraft (E) - Redstone Specialists Skin Pack.pkg',
  'Minecraft (E) - Skin Pack 1.pkg',
  'Minecraft (E) - Skin Pack 2.pkg',
  'Minecraft (E) - Skin Pack 3.pkg',
  'Minecraft (E) - Skyrim Mash-Up Pack.pkg',
  'Minecraft (E) - Solo - A Star Wars Story Skin Pack.pkg',
  'Minecraft (E) - Star Wars Classic Skin Pack.pkg',
  'Minecraft (E) - Star Wars Prequel Skin Pack.pkg',
  'Minecraft (E) - Star Wars Rebels Skin Pack.pkg',
  'Minecraft (E) - Star Wars Sequel Skin Pack.pkg',
  'Minecraft (E) - Steampunk Texture Pack.pkg',
  'Minecraft (E) - Steven Universe Mash-Up Pack.pkg',
  'Minecraft (E) - Story Mode Skin Pack.pkg',
  'Minecraft (E) - Stranger Things Skin Pack.pkg',
  'Minecraft (E) - Strangers - Biome Settlers 3 Skin Pack.pkg',
  'Minecraft (E) - Super Cute Texture Pack.pkg',
  'Minecraft (E) - The Incredibles Skin Pack.pkg',
  'Minecraft (E) - The Nightmare Before Christmas Mash-Up Pack.pkg',
  'Minecraft (E) - The Simpsons Skin Pack.pkg',
  'Minecraft (E) - Toy Story Mash-Up Pack.pkg',
  'Minecraft (E) - Villains Skin Pack.pkg',
];

function dlcDisplayName(filename) {
  return filename
    .replace(/^Minecraft \(E\) - /, '')
    .replace(/\.pkg$/i, '');
}

const dlcDlIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;

(function renderDlc() {
  const tbody = document.getElementById('dlc-list');
  if (!tbody) return;
  tbody.innerHTML = dlcList.map((f) => {
    const name = dlcDisplayName(f);
    const href = BASE_DLC + encodeURIComponent(f);
    return `
      <tr>
        <td><div class="filename" title="${f}">${name}</div></td>
        <td>
          <div class="actions">
            <a class="btn-dl" href="${href}" download>
              ${dlcDlIcon} Download
            </a>
          </div>
        </td>
      </tr>`;
  }).join('');
})();