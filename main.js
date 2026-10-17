const BASE = 'https://archive.org/download/minecraft-ps4-edition-patch-archive/';

const JAVA = {
  '1.00': 'Java Edition 1.0 (Launch)',
  '1.15': 'Java Edition 1.4',
  '1.16': 'Java Edition 1.4',
  '1.22': 'Java Edition 1.8',
  '1.25': 'Java Edition 1.8',
  '1.28': 'Java Edition 1.8',
  '1.31': 'Java Edition 1.9 (Combat Update)',
  '1.36': 'Java Edition 1.9 (Combat Update)',
  '1.37': 'Java Edition 1.9',
  '1.39': 'Java Edition 1.10',
  '1.48': 'Java Edition 1.11',
  '1.50': 'Java Edition 1.11',
  '1.53': 'Java Edition 1.11',
  '1.54': 'Java Edition 1.11',
  '1.55': 'Java Edition 1.12 (World of Color)',
  '1.66': 'Java Edition 1.12 (World of Color)',
  '1.67': 'Java Edition 1.12',
  '1.68': 'Java Edition 1.12',
  '1.70': 'Java Edition 1.12',
  '1.73': 'Java Edition 1.12',
  '1.74': 'Java Edition 1.12',
  '1.75': 'Java Edition 1.12',
  '1.76': 'Java Edition 1.13 (Update Aquatic)',
  '1.77': 'Java Edition 1.13 (Update Aquatic)',
  '1.78': 'Java Edition 1.13',
  '1.79': 'Java Edition 1.13',
  '1.81': 'Java Edition 1.13',
  '1.83': 'Java Edition 1.13',
  '1.84': 'Java Edition 1.13',
  '1.85': 'Java Edition 1.13',
  '1.88': 'Java Edition 1.13',
  '1.89': 'Java Edition 1.13',
  '1.90': 'Texture Update (PS4 LCE)',
  '1.91': 'Java Edition 1.14 (Village & Pillage)',
  '1.92': 'Java Edition 1.14',
  '1.93': 'Java Edition 1.14',
  '1.94': 'Java Edition 1.14',
  '1.95': 'Java Edition 1.14 (Final LCE)',

  '1.99': 'Bedrock Edition 1.14.0 (PS4 Bedrock launch)',
  '2.03': 'Bedrock Edition 1.14.30',
  '2.05': 'Bedrock Edition 1.14.41',
  '2.06': 'Bedrock Edition 1.14.60',
  '2.07': 'Bedrock Edition 1.16.0 (Nether Update)',
  '2.10': 'Bedrock Edition 1.16.1',
  '2.13': 'Bedrock Edition 1.16.42',
  '2.14': 'Bedrock Edition 1.16.42',
  '2.15': 'Bedrock Edition 1.16.60',
  '2.16': 'Bedrock Edition 1.16.100',
  '2.22': 'Bedrock Edition 1.16.210',
  '2.23': 'Bedrock Edition 1.16.221',
  '2.24': 'Bedrock Edition 1.17.0 (Caves & Cliffs Part I)',
  '2.26': 'Bedrock Edition 1.17.10',
  '2.29': 'Bedrock Edition 1.17.30',
  '2.33': 'Bedrock Edition 1.17.41',
  '2.34': 'Bedrock Edition 1.18.0 (Caves & Cliffs Part II)',
  '2.35': 'Bedrock Edition 1.18.2',
  '2.40': 'Bedrock Edition 1.18.30',
  '2.41': 'Bedrock Edition 1.18.31',
  '2.42': 'Bedrock Edition 1.18.33',
  '2.46': 'Bedrock Edition 1.19.20',
  '2.54': 'Bedrock Edition 1.19.50',
  '2.56': 'Bedrock Edition 1.19.60',
  '2.57': 'Bedrock Edition 1.19.62',
  '2.62': 'Bedrock Edition 1.19.70',
  '2.63': 'Bedrock Edition 1.19.80',
  '2.64': 'Bedrock Edition 1.19.81',
  '2.65': 'Bedrock Edition 1.19.83',
  '2.66': 'Bedrock Edition 1.20.0 (Trails & Tales)',
  '2.67': 'Bedrock Edition 1.20.1',
  '2.72': 'Bedrock Edition 1.20.15',
  '2.78': 'Bedrock Edition 1.20.40',
  '2.92': 'Bedrock Edition 1.21.3',
  '2.93': 'Bedrock Edition 1.21.20',
  '3.00': 'Bedrock Edition 1.21.31',
  '3.05': 'Bedrock Edition 1.21.60',
  '3.06': 'Bedrock Edition 1.21.61',
  '3.10': 'Bedrock Edition 1.21.70',
  '3.11': 'Bedrock Edition 1.21.80',
  '3.12': 'Bedrock Edition 1.21.90',
  '3.26': 'Bedrock Edition 1.21.130',
  '3.27': 'Bedrock Edition 1.21.131',
  '3.36': 'Bedrock Edition 26.10',
};

function javaFor(ver) {
  if (JAVA[ver]) return JAVA[ver];
  const n = parseFloat(ver);
  if (n >= 3.36) return 'Bedrock Edition 26.x';
  if (n >= 3.26) return 'Bedrock Edition 1.21.130';
  if (n >= 3.12) return 'Bedrock Edition 1.21.90';
  if (n >= 3.11) return 'Bedrock Edition 1.21.80';
  if (n >= 3.10) return 'Bedrock Edition 1.21.70';
  if (n >= 3.05) return 'Bedrock Edition 1.21.60';
  if (n >= 3.00) return 'Bedrock Edition 1.21.30';
  if (n >= 2.93) return 'Bedrock Edition 1.21.20';
  if (n >= 2.92) return 'Bedrock Edition 1.21.3';
  if (n >= 2.72) return 'Bedrock Edition 1.20.x';
  if (n >= 2.66) return 'Bedrock Edition 1.20.0';
  if (n >= 2.62) return 'Bedrock Edition 1.19.70';
  if (n >= 2.54) return 'Bedrock Edition 1.19.50';
  if (n >= 2.46) return 'Bedrock Edition 1.19.20';
  if (n >= 2.34) return 'Bedrock Edition 1.18.0';
  if (n >= 2.24) return 'Bedrock Edition 1.17.0';
  if (n >= 2.07) return 'Bedrock Edition 1.16.0';
  if (n >= 1.96) return 'Bedrock Edition 1.14.0';
  if (n >= 1.91) return 'Java Edition 1.14';
  if (n >= 1.76) return 'Java Edition 1.13';
  if (n >= 1.55) return 'Java Edition 1.12';
  if (n >= 1.48) return 'Java Edition 1.11';
  if (n >= 1.31) return 'Java Edition 1.9';
  if (n >= 1.22) return 'Java Edition 1.8';
  return 'PS4 Edition ' + ver;
}

const data = {
  eu: {
    base: [
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0100-V0102.pkg', s: '213.4 MB' },
    ],
    updates: [
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0148-V0101.pkg', s: '851.2 MB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0150-V0100.pkg', s: '879.3 MB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0153-V0100.pkg', s: '908.3 MB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0154-V0100.pkg', s: '908.4 MB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0166-V0100.pkg', s: '998.1 MB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0167-V0100.pkg', s: '1.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0168-V0100.pkg', s: '1.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0170-V0100.pkg', s: '1.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0173-V0100.pkg', s: '1.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0174-V0100.pkg', s: '1.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0175-V0100.pkg', s: '1.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0176-V0100.pkg', s: '1.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0177-V0101.pkg', s: '1.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0178-V0100.pkg', s: '1.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0179-V0100.pkg', s: '1.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0181-V0100.pkg', s: '1.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0183-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0184-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0185-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0188-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0189-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0190-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0191-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0192-V0100.pkg', s: '1.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0193-V0100.pkg', s: '1.3 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0194-V0100.pkg', s: '1.3 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0195-V0100.pkg', s: '1.3 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0199-V0100.pkg', s: '1.7 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0203-V0101.pkg', s: '1.7 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0206-V0100.pkg', s: '1.7 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0207-V0100.pkg', s: '1.9 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0213-V0101.pkg', s: '1.9 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0216-V0100.pkg', s: '1.9 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0223-V0100.pkg', s: '1.9 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0233-V0100.pkg', s: '2.0 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0234-V0100.pkg', s: '2.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0235-V0100.pkg', s: '2.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0241-V0100.pkg', s: '2.1 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0242-V0100.pkg', s: '2.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0265-V0100.pkg', s: '2.3 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0267-V0100.pkg', s: '2.3 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0278-V0100.pkg', s: '2.3 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0310-V0100.pkg', s: '2.2 GB' },
      { f: 'EP4433-CUSA00265_00-MINECRAFTPS40000-A0326-V0100.pkg', s: '2.3 GB' },
    ],
    backportBase: [
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0100-V0102.pkg', s: '177.5 MB' },
    ],
    backportUpdates: [
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0262-V0100.pkg', s: '2.2 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0264-V0100.pkg', s: '2.3 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0266-V0100.pkg', s: '2.3 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0272-V0100.pkg', s: '2.3 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0292-V0100.pkg', s: '2.5 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0300-V0100.pkg', s: '2.2 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0305-V0100.pkg', s: '2.2 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0310-V0100.pkg', s: '2.2 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0312-V0100.pkg', s: '2.2 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0326-V0100.pkg', s: '2.3 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0327-V0100.pkg', s: '2.3 GB' },
      { f: 'OPOISSO893-EP4433-CUSA00265_00-MINECRAFTPS40000-A0336-V0100.pkg', s: '2.3 GB' },
    ],
  },
  us: {
    base: [
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0100-V0100.pkg', s: '177.4 MB' },
    ],
    updates: [
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0116-V0100.pkg', s: '279.3 MB' },
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0125-V0101.pkg', s: '395.3 MB' },
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0131-V0101.pkg', s: '562.2 MB' },
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0155-V0100.pkg', s: '915.2 MB' },
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0167-V0100.pkg', s: '1.0 GB' },
      { f: 'UP4433-CUSA00744_00-MINECRAFTPS40000-A0195-V0100.pkg', s: '1.3 GB' },
    ],
  },
  jp: {
    base: [
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0100-V0100.pkg', s: '181.3 MB' },
    ],
    updates: [
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0115-V0101.pkg', s: '283.0 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0122-V0103.pkg', s: '422.1 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0125-V0101.pkg', s: '398.8 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0128-V0101.pkg', s: '512.9 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0131-V0101.pkg', s: '565.6 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0137-V0100.pkg', s: '694.4 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0139-V0100.pkg', s: '768.8 MB' },
      { f: 'JP0127-CUSA00283_00-MINECRAFTPS40000-A0195-V0100.pkg', s: '1.3 GB' },
    ],
  },
};

function extractVersion(filename) {
  const m = filename.match(/-A(\d{4})-/);
  if (!m) return '—';
  const num = m[1];
  return parseInt(num.slice(0, 2), 10) + '.' + num.slice(2);
}

const dlIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`;
const infoIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;

function renderRows(items, tbodyId) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  tbody.innerHTML = items.map((item) => {
    const ver = extractVersion(item.f);
    return `
      <tr>
        <td class="ver">${ver}</td>
        <td><div class="filename" title="${item.f}">${item.f}</div></td>
        <td class="size">${item.s}</td>
        <td>
          <div class="actions">
            <button class="btn-info" data-file="${item.f}" data-size="${item.s}" data-ver="${ver}" type="button">
              ${infoIcon} Info
            </button>
            <a class="btn-dl" href="${BASE}${item.f}" download>
              ${dlIcon} Download
            </a>
          </div>
        </td>
      </tr>`;
  }).join('');
}

renderRows(data.eu.base, 'eu-base');
renderRows(data.eu.updates, 'eu-updates');
renderRows(data.eu.backportBase, 'eu-backport-base');
renderRows(data.eu.backportUpdates, 'eu-backport-updates');
renderRows(data.us.base, 'us-base');
renderRows(data.us.updates, 'us-updates');
renderRows(data.jp.base, 'jp-base');
renderRows(data.jp.updates, 'jp-updates');

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const region = tab.dataset.region;
    tabs.forEach((t) => {
      t.classList.toggle('active', t === tab);
      t.setAttribute('aria-selected', t === tab ? 'true' : 'false');
    });
    panels.forEach((p) => p.classList.toggle('active', p.id === 'panel-' + region));
  });
});

const modal = document.getElementById('info-modal');
const modalClose = document.getElementById('modal-close');

function openInfo(ver, size, file) {
  document.getElementById('modal-title').textContent = 'Version ' + ver;
  document.getElementById('modal-ver').textContent = ver;
  document.getElementById('modal-java').textContent = javaFor(ver);
  document.getElementById('modal-size').textContent = size;
  document.getElementById('modal-file').textContent = file;
  modal.classList.remove('hidden');
}

function closeInfo() {
  modal.classList.add('hidden');
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-info');
  if (btn) {
    openInfo(btn.dataset.ver, btn.dataset.size, btn.dataset.file);
  }
});

modalClose.addEventListener('click', closeInfo);
modal.querySelector('.modal-backdrop').addEventListener('click', closeInfo);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeInfo();
});