import './style.css'

const logoUrl =
  'https://images.squarespace-cdn.com/content/v1/692d98fb3d6ab80911f86b99/ee31bcbf-2285-4f0e-82a4-9df952d5cf36/SpareLinx+Logo3.png?format=1500w'

document.querySelector('#app').innerHTML = `
  <a class="top-right-link" href="${logoUrl}" target="_blank" rel="noreferrer">
    <img src="${logoUrl}" alt="SpareLinx logo" />
  </a>
  <main class="page-content">
    <h1>DEMO</h1>
    <div class="image-wrapper">
      <img
        id="demo-image"
        class="center-image"
        src="/8EFEA9CA-5AE4-4C5A-AB61-8B1D4AE101C3.jpeg"
        alt="Demo"
      />
      <div class="region-highlight" aria-hidden="true"></div>
    </div>
    <div class="cards-row">
      <article class="card hidden" id="equipmentCard" aria-live="polite">
        <header class="card__header">
          <div class="badge" aria-label="Equipment type">
            <span class="badge__dot" aria-hidden="true"></span>
            Equipment
          </div>
          <h2 class="title"></h2>
          <p class="subtitle">
            <span>Serial number</span>
            <code>18262429</code>
          </p>
        </header>
        <section class="card__body" aria-label="Context menu">
          <div class="menuLabel">Actions</div>
          <ul class="menu">
            <li>
              <a href="#consumables" aria-label="Open Consumables">
                <span class="menu__left">
                  <span class="icon" aria-hidden="true">🧪</span>
                  <span class="menu__text">
                    <span class="menu__title">Consumables</span>
                    <span class="menu__hint">View compatible parts</span>
                  </span>
                </span>
                <span class="chev" aria-hidden="true">›</span>
              </a>
            </li>
            <li>
              <a
                href="#preventive"
                aria-label="Open Preventive Maintenance"
                id="preventiveToggle"
              >
                <span class="menu__left">
                  <span class="icon" aria-hidden="true">🛠️</span>
                  <span class="menu__text">
                    <span class="menu__title">Preventive Maintenance</span>
                    <span class="menu__hint">Plans, checklists, history</span>
                  </span>
                </span>
                <span class="chev" aria-hidden="true">›</span>
              </a>
              <ul class="submenu hidden" id="preventiveSubmenu">
                <li><a href="#pm-3000" class="submenu-link">2.a 3000hour PM</a></li>
                <li><a href="#pm-6000" class="submenu-link">2.b 6000hour PM</a></li>
              </ul>
            </li>
            <li>
              <a href="#emergency" aria-label="Open Emergency Part">
                <span class="menu__left">
                  <span class="icon" aria-hidden="true">🚨</span>
                  <span class="menu__text">
                    <span class="menu__title">Emergency Part</span>
                    <span class="menu__hint">Critical spares & availability</span>
                  </span>
                </span>
                <span class="chev" aria-hidden="true">›</span>
              </a>
            </li>
          </ul>
        </section>
        <footer class="card__footer">
          <div class="meta">Use Tab + Enter to navigate</div>
          <button class="btn" type="button" id="closeBtn" aria-label="Close card">
            Close
          </button>
        </footer>
      </article>

      <article class="maintenance-card hidden" id="maintenanceCard">
        <header class="maintenance-card-header">
          <div class="maintenance-card-title">Maintenance Spare Parts</div>
          <div class="maintenance-dropdown" id="maintenanceDropdown">
            <button class="maintenance-dropdown-btn" type="button">
              Maintenance Info ▲
            </button>
            <div class="maintenance-dropdown-menu">
              <div class="maintenance-kpi-grid">
                <div class="maintenance-kpi">
                  <div class="maintenance-kpi-label">Machine running hour</div>
                  <div class="maintenance-kpi-value">23,000</div>
                </div>
                <div class="maintenance-kpi">
                  <div class="maintenance-kpi-label">Next maintenance</div>
                  <div class="maintenance-kpi-value">20.03.2026</div>
                </div>
                <div class="maintenance-kpi">
                  <div class="maintenance-kpi-label">Duration</div>
                  <div class="maintenance-kpi-value">2 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section class="maintenance-card-body">
          <table class="maintenance-table">
            <thead>
              <tr>
                <th>Part Number</th>
                <th>Description</th>
                <th class="num">In Stock</th>
                <th class="num">Other Manufacturers</th>
                <th class="num">Price</th>
                <th class="num">Price OEM</th>
              </tr>
            </thead>
            <tbody>
              <tr><td class="part">9531-4257-595</td><td>O-RING</td><td class="num">25</td><td class="num">200</td><td class="num price">14.02 €</td><td class="num oem">21.03 €</td></tr>
              <tr><td class="part">9534-1576-901</td><td>PACKING</td><td class="num">5</td><td class="num">40</td><td class="num price">109.58 €</td><td class="num oem">164.37 €</td></tr>
              <tr><td class="part">9513-1365-000</td><td>WASHER</td><td class="num">12</td><td class="num">96</td><td class="num price">117.22 €</td><td class="num oem">175.83 €</td></tr>
              <tr><td class="part">9513-5091-000</td><td>WASHER</td><td class="num">12</td><td class="num">96</td><td class="num price">107.75 €</td><td class="num oem">161.63 €</td></tr>
              <tr><td class="part">9533-2002-041</td><td>PRESSURE TRANSMITTER</td><td class="num">2</td><td class="num">16</td><td class="num price">3,108.28 €</td><td class="num oem">4,662.42 €</td></tr>
              <tr><td class="part">9533-2005-000</td><td>PRESSURE TRANSMITTER</td><td class="num">2</td><td class="num">16</td><td class="num price">2,812.13 €</td><td class="num oem">4,218.20 €</td></tr>
              <tr><td class="part">9533-5163-030</td><td>PNEUMATIC ACTUATOR</td><td class="num">2</td><td class="num">16</td><td class="num price">1,081.85 €</td><td class="num oem">1,622.78 €</td></tr>
              <tr><td class="part">9533-5247-030</td><td>PNEUMATIC ACTUATOR</td><td class="num">2</td><td class="num">16</td><td class="num price">2,559.90 €</td><td class="num oem">3,839.85 €</td></tr>
              <tr><td class="part">9531-6131-516</td><td>ROD SCRAPER</td><td class="num">5</td><td class="num">40</td><td class="num price">14.26 €</td><td class="num oem">21.39 €</td></tr>
              <tr><td class="part">9531-6130-516</td><td>GASKET</td><td class="num">45</td><td class="num">360</td><td class="num price">36.37 €</td><td class="num oem">54.56 €</td></tr>
              <tr><td class="part">9550-0000-158</td><td>FILTER KIT</td><td class="num">3</td><td class="num">24</td><td class="num price">92.10 €</td><td class="num oem">138.15 €</td></tr>
              <tr><td class="part">9550-0000-156</td><td>MAIN PUMP KIT</td><td class="num">2</td><td class="num">16</td><td class="num price">1,067.95 €</td><td class="num oem">1,601.93 €</td></tr>
              <tr><td class="part">9532-3009-000</td><td>FILTER</td><td class="num">3</td><td class="num">24</td><td class="num price">128.58 €</td><td class="num oem">192.87 €</td></tr>
            </tbody>
          </table>
        </section>
        <footer class="maintenance-card-footer">
          <div class="maintenance-footer-meta">
            Prices excl. VAT · Availability subject to confirmation
          </div>
          <div class="maintenance-footer-actions">
            <button class="maintenance-close-btn" type="button" id="maintenanceCloseBtn">
              Close
            </button>
            <button class="maintenance-order-btn" type="button">Order Now</button>
          </div>
        </footer>
      </article>
    </div>
  </main>
  <div class="status-bar" aria-live="polite">
    <span class="coords">x: -, y: -</span>
  </div>
`

const demoImage = document.querySelector('#demo-image')
const coords = document.querySelector('.coords')
const infoCard = document.querySelector('#equipmentCard')
const infoCardTitle = document.querySelector('.title')
const highlight = document.querySelector('.region-highlight')
const menuSection = document.querySelector('.card__body')
const closeBtn = document.querySelector('#closeBtn')
const preventiveToggle = document.querySelector('#preventiveToggle')
const preventiveSubmenu = document.querySelector('#preventiveSubmenu')
const submenuLinks = document.querySelectorAll('.submenu-link')
const maintenanceCard = document.querySelector('#maintenanceCard')
const maintenanceDropdown = document.querySelector('#maintenanceDropdown')
const maintenanceDropdownBtn = document.querySelector('.maintenance-dropdown-btn')
const maintenanceCloseBtn = document.querySelector('#maintenanceCloseBtn')
let selectedRegion = null

const regions = [
  {
    label: 'Shrink Wrapper',
    x1: 340,
    y1: 340,
    x2: 520,
    y2: 375,
  },
  {
    label: 'Filling Machine',
    x1: 770,
    y1: 240,
    x2: 970,
    y2: 330,
  },
  {
    label: 'Heater Exchanger',
    x1: 1110,
    y1: 240,
    x2: 1300,
    y2: 300,
  },
]

const getImageCoords = (event) => {
  const rect = demoImage.getBoundingClientRect()
  const scaleX = demoImage.naturalWidth / rect.width
  const scaleY = demoImage.naturalHeight / rect.height
  const x = Math.round((event.clientX - rect.left) * scaleX)
  const y = Math.round((event.clientY - rect.top) * scaleY)
  return { x, y }
}

const updateCoords = (event) => {
  const { x, y } = getImageCoords(event)
  coords.textContent = `x: ${x}, y: ${y}`
  const activeRegion = regions.find(
    (region) =>
      x >= region.x1 && x <= region.x2 && y >= region.y1 && y <= region.y2
  )
  if (activeRegion) {
    if (selectedRegion) {
      infoCardTitle.textContent = selectedRegion.label
      infoCard.classList.remove('hidden')
      menuSection.classList.remove('hidden')
    } else {
      infoCardTitle.textContent = activeRegion.label
      infoCard.classList.remove('hidden')
      menuSection.classList.add('hidden')
      preventiveSubmenu.classList.add('hidden')
    }
    const left = (activeRegion.x1 / demoImage.naturalWidth) * 100
    const top = (activeRegion.y1 / demoImage.naturalHeight) * 100
    const width =
      ((activeRegion.x2 - activeRegion.x1) / demoImage.naturalWidth) * 100
    const height =
      ((activeRegion.y2 - activeRegion.y1) / demoImage.naturalHeight) * 100
    highlight.style.left = `${left}%`
    highlight.style.top = `${top}%`
    highlight.style.width = `${width}%`
    highlight.style.height = `${height}%`
    highlight.classList.add('is-visible')
  } else {
    if (selectedRegion) {
      infoCardTitle.textContent = selectedRegion.label
      infoCard.classList.remove('hidden')
      menuSection.classList.remove('hidden')
    } else {
      infoCardTitle.textContent = ''
      infoCard.classList.add('hidden')
      menuSection.classList.add('hidden')
      preventiveSubmenu.classList.add('hidden')
    }
    highlight.classList.remove('is-visible')
  }
}

demoImage.addEventListener('mousemove', updateCoords)
demoImage.addEventListener('mouseleave', () => {
  coords.textContent = 'x: -, y: -'
  if (selectedRegion) {
    infoCardTitle.textContent = selectedRegion.label
    infoCard.classList.remove('hidden')
    menuSection.classList.remove('hidden')
  } else {
    infoCardTitle.textContent = ''
    infoCard.classList.add('hidden')
    menuSection.classList.add('hidden')
    preventiveSubmenu.classList.add('hidden')
  }
  highlight.classList.remove('is-visible')
})

demoImage.addEventListener('click', (event) => {
  const { x, y } = getImageCoords(event)
  const activeRegion = regions.find(
    (region) =>
      x >= region.x1 && x <= region.x2 && y >= region.y1 && y <= region.y2
  )
  if (!activeRegion) {
    return
  }
  selectedRegion = activeRegion
  infoCardTitle.textContent = activeRegion.label
  infoCard.classList.remove('hidden')
  menuSection.classList.remove('hidden')
  preventiveSubmenu.classList.add('hidden')
})

const resetToInitialState = () => {
  selectedRegion = null
  infoCardTitle.textContent = ''
  infoCard.classList.add('hidden')
  menuSection.classList.add('hidden')
  highlight.classList.remove('is-visible')
  preventiveSubmenu.classList.add('hidden')
  maintenanceCard.classList.add('hidden')
  maintenanceDropdown.classList.remove('open')
}

closeBtn.addEventListener('click', () => {
  resetToInitialState()
})

preventiveToggle.addEventListener('click', (event) => {
  event.preventDefault()
  preventiveSubmenu.classList.toggle('hidden')
})

submenuLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()
    maintenanceCard.classList.remove('hidden')
  })
})

maintenanceDropdownBtn.addEventListener('click', () => {
  maintenanceDropdown.classList.toggle('open')
})

maintenanceCloseBtn.addEventListener('click', () => {
  resetToInitialState()
})
