
/* injected */
let cookieCount = 0;
let cookiesPerSecond = 0;
const shopItems = document.querySelectorAll('.shop-item');

function updateDisplay() {
    document.getElementById('cookie-count').innerText = Math.floor(cookieCount).toLocaleString();
    document.getElementById('cps-display').innerText = `per second: ${cookiesPerSecond.toFixed(1)}`;
    
    shopItems.forEach(item => {
        const cost = parseInt(item.getAttribute('data-cost'));
        if (cookieCount >= cost) {
            item.classList.add('available');
        } else {
            item.classList.remove('available');
        }
    });
}

function createParticle(x, y) {
    const text = document.createElement('div');
    text.className = 'floating-text';
    text.innerText = '+1';
    text.style.left = `${x}px`;
    text.style.top = `${y}px`;
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 800);
}

document.getElementById('main-cookie').addEventListener('click', (e) => {
    cookieCount += 1;
    createParticle(e.clientX, e.clientY);
    updateDisplay();
});

shopItems.forEach(item => {
    item.addEventListener('click', () => {
        const cost = parseInt(item.getAttribute('data-cost'));
        const cps = parseFloat(item.getAttribute('data-cps'));
        
        if (cookieCount >= cost) {
            cookieCount -= cost;
            cookiesPerSecond += cps;
            
            // Increase item cost and count
            const newCost = Math.ceil(cost * 1.15);
            item.setAttribute('data-cost', newCost);
            item.querySelector('.cost').innerText = newCost;
            
            const amountEl = item.querySelector('.item-amount');
            amountEl.innerText = parseInt(amountEl.innerText) + 1;
            
            updateDisplay();
        }
    });
});

// Main Game Loop (CPS)
setInterval(() => {
    if (cookiesPerSecond > 0) {
        cookieCount += cookiesPerSecond / 10;
        updateDisplay();
    }
}, 100);

/* injected */
let cookies = 0;
let totalCps = 0;

const cookieBtn = document.getElementById('main-cookie');
const countDisplay = document.getElementById('cookie-count');
const cpsDisplay = document.getElementById('cps-display');
const shopItems = document.querySelectorAll('.shop-item');

function updateUI() {
    countDisplay.innerText = Math.floor(cookies).toLocaleString();
    cpsDisplay.innerText = `per second: ${totalCps.toFixed(1)}`;
    
    shopItems.forEach(item => {
        const cost = parseInt(item.getAttribute('data-cost'));
        if (cookies >= cost) {
            item.classList.add('available');
        } else {
            item.classList.remove('available');
        }
    });
}

cookieBtn.addEventListener('click', (e) => {
    cookies += 1;
    
    // Create +1 effect
    const effect = document.createElement('div');
    effect.className = 'floating-text';
    effect.innerText = '+1';
    effect.style.left = `${e.clientX}px`;
    effect.style.top = `${e.clientY}px`;
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 600);
    
    updateUI();
});

shopItems.forEach(item => {
    item.addEventListener('click', () => {
        const cost = parseInt(item.getAttribute('data-cost'));
        const cps = parseFloat(item.getAttribute('data-cps'));
        
        if (cookies >= cost) {
            cookies -= cost;
            totalCps += cps;
            
            // Scaled cost
            const nextCost = Math.ceil(cost * 1.15);
            item.setAttribute('data-cost', nextCost);
            item.querySelector('.cost').innerText = nextCost;
            
            // Increment count
            const amount = item.querySelector('.item-amount');
            amount.innerText = parseInt(amount.innerText) + 1;
            
            updateUI();
        }
    });
});

// Tick loop (every 100ms)
setInterval(() => {
    if (totalCps > 0) {
        cookies += totalCps / 10;
        updateUI();
    }
}, 100);

// Set initial state
updateUI();

/* injected */
let count = 0;
let perSecond = 0;

const countEl = document.getElementById('count');
const cpsEl = document.getElementById('cps');
const cookie = document.getElementById('cookie-target');
const items = document.querySelectorAll('.item');

// Update game state visuals
function refresh() {
    countEl.innerText = Math.floor(count);
    cpsEl.innerText = `per second: ${perSecond.toFixed(1)}`;
    
    items.forEach(item => {
        const cost = parseFloat(item.getAttribute('data-cost'));
        if (count >= cost) {
            item.classList.add('can-buy');
        } else {
            item.classList.remove('can-buy');
        }
    });
}

// Click Cookie Logic
cookie.addEventListener('click', (e) => {
    count += 1;
    
    // Popup effect
    const msg = document.createElement('div');
    msg.className = 'float-msg';
    msg.innerText = '+1';
    msg.style.left = e.pageX + 'px';
    msg.style.top = e.pageY + 'px';
    document.body.appendChild(msg);
    setTimeout(() => msg.remove(), 800);
    
    refresh();
});

// Shop Logic
items.forEach(item => {
    item.addEventListener('click', () => {
        const cost = parseFloat(item.getAttribute('data-cost'));
        const adds = parseFloat(item.getAttribute('data-add'));
        
        if (count >= cost) {
            count -= cost;
            perSecond += adds;
            
            // Increase cost
            const nextCost = Math.ceil(cost * 1.15);
            item.setAttribute('data-cost', nextCost);
            item.querySelector('.price').innerText = nextCost;
            
            // Update owned count
            const owned = item.querySelector('.owned');
            owned.innerText = parseInt(owned.innerText) + 1;
            
            refresh();
        }
    });
});

// Auto-clicker loop
setInterval(() => {
    if (perSecond > 0) {
        count += (perSecond / 10);
        refresh();
    }
}, 100);

// Initialize
refresh();

/* injected */
window.onload = function() {
    let score = 0;
    let autoClicksPerSecond = 0;

    const scoreDisplay = document.getElementById('cookie-count');
    const cpsDisplay = document.getElementById('cookies-per-second');
    const cookieBtn = document.getElementById('cookie-btn');
    const shopItems = document.querySelectorAll('.upgrade-item');

    function updateDisplay() {
        scoreDisplay.innerText = Math.floor(score).toLocaleString();
        cpsDisplay.innerText = `per second: ${autoClicksPerSecond.toFixed(1)}`;

        shopItems.forEach(item => {
            const cost = parseInt(item.getAttribute('data-cost'));
            if (score >= cost) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    cookieBtn.onclick = function(e) {
        score += 1;
        
        // Visual text effect
        const popup = document.createElement('div');
        popup.className = 'float-text';
        popup.innerText = '+1';
        popup.style.left = e.clientX + 'px';
        popup.style.top = e.clientY + 'px';
        document.body.appendChild(popup);
        setTimeout(() => popup.remove(), 1000);

        updateDisplay();
    };

    shopItems.forEach(item => {
        item.onclick = function() {
            const cost = parseInt(item.getAttribute('data-cost'));
            const cpsAdd = parseFloat(item.getAttribute('data-cps'));

            if (score >= cost) {
                score -= cost;
                autoClicksPerSecond += cpsAdd;

                // Increase Price
                const nextCost = Math.ceil(cost * 1.15);
                item.setAttribute('data-cost', nextCost);
                item.querySelector('.upgrade-cost').innerText = `Price: ${nextCost}`;

                // Update Count
                const countBadge = item.querySelector('.upgrade-count');
                countBadge.innerText = parseInt(countBadge.innerText) + 1;

                updateDisplay();
            }
        };
    });

    // Main Game Loop (CPS) - Runs every 100ms
    setInterval(() => {
        if (autoClicksPerSecond > 0) {
            score += (autoClicksPerSecond / 10);
            updateDisplay();
        }
    }, 100);

    updateDisplay();
};

/* injected */
const game = {
    cookies: 0,
    cps: 0,
    items: [
        { id: 'cursor', name: 'Cursor', cost: 15, add: 0.1, owned: 0 },
        { id: 'grandma', name: 'Grandma', cost: 100, add: 1, owned: 0 },
        { id: 'farm', name: 'Farm', cost: 1100, add: 8, owned: 0 }
    ]
};

const display = document.getElementById('count-display');
const cpsDisplay = document.getElementById('cps-display');
const cookie = document.getElementById('cookie-clicker');
const store = document.getElementById('store-container');

function initStore() {
    store.innerHTML = '';
    game.items.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `item ${game.cookies >= item.cost ? 'affordable' : 'locked'}`;
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Cost: ${Math.floor(item.cost)}</small>
            </div>
            <span>${item.owned}</span>
        `;
        div.onclick = () => buyItem(index);
        store.appendChild(div);
    });
}

function buyItem(index) {
    const item = game.items[index];
    if (game.cookies >= item.cost) {
        game.cookies -= item.cost;
        game.cps += item.add;
        item.owned++;
        item.cost *= 1.15;
        updateUI();
    }
}

function updateUI() {
    display.innerText = Math.floor(game.cookies).toLocaleString();
    cpsDisplay.innerText = `cookies per second: ${game.cps.toFixed(1)}`;
    initStore();
}

cookie.addEventListener('click', (e) => {
    game.cookies += 1;
    
    const txt = document.createElement('div');
    txt.className = 'float-txt';
    txt.innerText = '+1';
    txt.style.left = e.pageX + 'px';
    txt.style.top = e.pageY + 'px';
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 700);
    
    updateUI();
});

// Main Loop
setInterval(() => {
    if (game.cps > 0) {
        game.cookies += game.cps / 10;
        updateUI();
    }
}, 100);

// Start
updateUI();

/* injected */
let cookies = 0;
let perSecond = 0;

const shopData = [
    { id: 'c', name: 'Cursor', cost: 15, cps: 0.1, owned: 0 },
    { id: 'g', name: 'Grandma', cost: 100, cps: 1.0, owned: 0 },
    { id: 'f', name: 'Farm', cost: 1100, cps: 8.0, owned: 0 }
];

const totalDisplay = document.getElementById('cookie-total');
const cpsDisplay = document.getElementById('cps-val');
const clickBtn = document.getElementById('cookie-hitbox');
const shopList = document.getElementById('shop-list');

function renderShop() {
    shopList.innerHTML = '';
    shopData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `shop-item ${cookies >= item.cost ? 'can-afford' : ''}`;
        div.innerHTML = `
            <strong>${item.name}</strong> (${item.owned})<br>
            Cost: ${Math.floor(item.cost)}
        `;
        div.onclick = () => {
            if (cookies >= item.cost) {
                cookies -= item.cost;
                perSecond += item.cps;
                item.owned++;
                item.cost *= 1.15;
                updateFullUI();
            }
        };
        shopList.appendChild(div);
    });
}

function updateFullUI() {
    totalDisplay.innerText = Math.floor(cookies).toLocaleString();
    cpsDisplay.innerText = `per second: ${perSecond.toFixed(1)}`;
    renderShop();
}

// THE CLICK HANDLER
clickBtn.addEventListener('click', function(e) {
    cookies += 1;
    
    // Smoke test: if this doesn't run, there's a serious workspace overlay issue
    console.log("Cookie Clicked! Total:", cookies);

    const txt = document.createElement('div');
    txt.className = 'plus-one';
    txt.innerText = '+1';
    txt.style.left = e.pageX + 'px';
    txt.style.top = e.pageY + 'px';
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 600);
    
    updateFullUI();
});

// Auto-clicker loop (every 100ms)
setInterval(() => {
    if (perSecond > 0) {
        cookies += perSecond / 10;
        updateFullUI();
    }
}, 100);

// Startup
updateFullUI();

/* injected */
let cookies = 0;
let perSecond = 0;

const shopData = [
    { id: 'c', name: 'Cursor', cost: 15, cps: 0.1, owned: 0 },
    { id: 'g', name: 'Grandma', cost: 100, cps: 1.0, owned: 0 },
    { id: 'f', name: 'Farm', cost: 1100, cps: 8.0, owned: 0 }
];

const totalDisplay = document.getElementById('cookie-total');
const cpsDisplay = document.getElementById('cps-val');
const clickBtn = document.getElementById('cookie-hitbox');
const shopList = document.getElementById('shop-list');

function renderShop() {
    shopList.innerHTML = '';
    shopData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `shop-item ${cookies >= item.cost ? 'can-afford' : ''}`;
        div.innerHTML = `
            <strong>${item.name}</strong> (${item.owned})<br>
            Cost: ${Math.floor(item.cost)}
        `;
        div.onclick = () => {
            if (cookies >= item.cost) {
                cookies -= item.cost;
                perSecond += item.cps;
                item.owned++;
                item.cost *= 1.15;
                updateFullUI();
            }
        };
        shopList.appendChild(div);
    });
}

function updateFullUI() {
    totalDisplay.innerText = Math.floor(cookies).toLocaleString();
    cpsDisplay.innerText = `per second: ${perSecond.toFixed(1)}`;
    renderShop();
}

// THE CLICK HANDLER
clickBtn.addEventListener('click', function(e) {
    cookies += 1;
    
    // Smoke test: if this doesn't run, there's a serious workspace overlay issue
    console.log("Cookie Clicked! Total:", cookies);

    const txt = document.createElement('div');
    txt.className = 'plus-one';
    txt.innerText = '+1';
    txt.style.left = e.pageX + 'px';
    txt.style.top = e.pageY + 'px';
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 600);
    
    updateFullUI();
});

// Auto-clicker loop (every 100ms)
setInterval(() => {
    if (perSecond > 0) {
        cookies += perSecond / 10;
        updateFullUI();
    }
}, 100);

// Startup
updateFullUI();

/* injected */
let cookies = 0;
let perSecond = 0;

const shopData = [
    { id: 'c', name: 'Cursor', cost: 15, cps: 0.1, owned: 0 },
    { id: 'g', name: 'Grandma', cost: 100, cps: 1.0, owned: 0 },
    { id: 'f', name: 'Farm', cost: 1100, cps: 8.0, owned: 0 }
];

const totalDisplay = document.getElementById('cookie-total');
const cpsDisplay = document.getElementById('cps-val');
const clickBtn = document.getElementById('cookie-hitbox');
const shopList = document.getElementById('shop-list');

function renderShop() {
    shopList.innerHTML = '';
    shopData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `shop-item ${cookies >= item.cost ? 'can-afford' : ''}`;
        div.innerHTML = `
            <strong>${item.name}</strong> (${item.owned})<br>
            Cost: ${Math.floor(item.cost)}
        `;
        div.onclick = () => {
            if (cookies >= item.cost) {
                cookies -= item.cost;
                perSecond += item.cps;
                item.owned++;
                item.cost *= 1.15;
                updateFullUI();
            }
        };
        shopList.appendChild(div);
    });
}

function updateFullUI() {
    totalDisplay.innerText = Math.floor(cookies).toLocaleString();
    cpsDisplay.innerText = `per second: ${perSecond.toFixed(1)}`;
    renderShop();
}

// THE CLICK HANDLER
clickBtn.addEventListener('click', function(e) {
    cookies += 1;
    
    // Smoke test: if this doesn't run, there's a serious workspace overlay issue
    console.log("Cookie Clicked! Total:", cookies);

    const txt = document.createElement('div');
    txt.className = 'plus-one';
    txt.innerText = '+1';
    txt.style.left = e.pageX + 'px';
    txt.style.top = e.pageY + 'px';
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 600);
    
    updateFullUI();
});

// Auto-clicker loop (every 100ms)
setInterval(() => {
    if (perSecond > 0) {
        cookies += perSecond / 10;
        updateFullUI();
    }
}, 100);

// Startup
updateFullUI();

/* injected */
let cookies = 0;
let perSecond = 0;

const shopData = [
    { id: 'c', name: 'Cursor', cost: 15, cps: 0.1, owned: 0 },
    { id: 'g', name: 'Grandma', cost: 100, cps: 1.0, owned: 0 },
    { id: 'f', name: 'Farm', cost: 1100, cps: 8.0, owned: 0 }
];

const totalDisplay = document.getElementById('cookie-total');
const cpsDisplay = document.getElementById('cps-val');
const clickBtn = document.getElementById('cookie-hitbox');
const shopList = document.getElementById('shop-list');

function renderShop() {
    shopList.innerHTML = '';
    shopData.forEach((item, index) => {
        const div = document.createElement('div');
        div.className = `shop-item ${cookies >= item.cost ? 'can-afford' : ''}`;
        div.innerHTML = `
            <strong>${item.name}</strong> (${item.owned})<br>
            Cost: ${Math.floor(item.cost)}
        `;
        div.onclick = () => {
            if (cookies >= item.cost) {
                cookies -= item.cost;
                perSecond += item.cps;
                item.owned++;
                item.cost *= 1.15;
                updateFullUI();
            }
        };
        shopList.appendChild(div);
    });
}

function updateFullUI() {
    totalDisplay.innerText = Math.floor(cookies).toLocaleString();
    cpsDisplay.innerText = `per second: ${perSecond.toFixed(1)}`;
    renderShop();
}

// THE CLICK HANDLER
clickBtn.addEventListener('click', function(e) {
    cookies += 1;
    
    // Smoke test: if this doesn't run, there's a serious workspace overlay issue
    console.log("Cookie Clicked! Total:", cookies);

    const txt = document.createElement('div');
    txt.className = 'plus-one';
    txt.innerText = '+1';
    txt.style.left = e.pageX + 'px';
    txt.style.top = e.pageY + 'px';
    document.body.appendChild(txt);
    setTimeout(() => txt.remove(), 600);
    
    updateFullUI();
});

// Auto-clicker loop (every 100ms)
setInterval(() => {
    if (perSecond > 0) {
        cookies += perSecond / 10;
        updateFullUI();
    }
}, 100);

// Startup
updateFullUI();

/* injected */
const state = {
    cookies: 0,
    cps: 0,
    upgrades: [
        { id: 'cursor', name: 'Auto-Clicker', cost: 15, power: 0.5, owned: 0 },
        { id: 'grandma', name: 'Nano-Bakery', cost: 100, power: 5, owned: 0 },
        { id: 'factory', name: 'Cookie Forge', cost: 1100, power: 25, owned: 0 },
        { id: 'nexus', name: 'Nexus Engine', cost: 12000, power: 150, owned: 0 }
    ]
};

const cookieBtn = document.getElementById('cookie');
const countEl = document.getElementById('cookie-count');
const cpsEl = document.getElementById('cps-display');
const upgradeList = document.getElementById('upgrade-list');

function init() {
    renderUpgrades();
    gameLoop();
}

function updateDisplay() {
    countEl.innerText = Math.floor(state.cookies).toLocaleString();
    cpsEl.innerText = `CPS: ${state.cps.toFixed(1)}`;
    
    document.querySelectorAll('.upgrade-item').forEach((el, index) => {
        const up = state.upgrades[index];
        el.classList.toggle('disabled', state.cookies < up.cost);
        el.querySelector('.cost').innerText = Math.floor(up.cost);
    });
}

function renderUpgrades() {
    upgradeList.innerHTML = state.upgrades.map((up, i) => `
        <div class="upgrade-item" onclick="buyUpgrade(${i})">
            <div style="font-weight: bold">${up.name}</div>
            <div style="font-size: 0.8rem; color: #888">
                Cost: <span class="cost">${up.cost}</span> | Owned: <span class="owned">${up.owned}</span>
            </div>
        </div>
    `).join('');
}

function buyUpgrade(index) {
    const up = state.upgrades[index];
    if (state.cookies >= up.cost) {
        state.cookies -= up.cost;
        up.owned++;
        up.cost *= 1.15;
        state.cps += up.power;
        renderUpgrades();
        updateDisplay();
    }
}

cookieBtn.addEventListener('click', (e) => {
    state.cookies += 1;
    createParticle(e.clientX, e.clientY);
    updateDisplay();
});

function createParticle(x, y) {
    const p = document.createElement('div');
    p.className = 'float-text';
    p.innerText = '+1';
    p.style.left = `${x}px`;
    p.style.top = `${y}px`;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 800);
}

function gameLoop() {
    state.cookies += state.cps / 60;
    updateDisplay();
    requestAnimationFrame(gameLoop);
}

init();

/* injected */
// Resetting the script to ensure zero conflicts
const state = {
    cookies: 0,
    cps: 0,
    upgrades: [
        { id: 'cursor', name: 'Auto-Clicker', cost: 15, power: 0.5, owned: 0 },
        { id: 'grandma', name: 'Nano-Bakery', cost: 100, power: 5, owned: 0 },
        { id: 'factory', name: 'Cookie Forge', cost: 1100, power: 25, owned: 0 },
        { id: 'nexus', name: 'Nexus Engine', cost: 12000, power: 150, owned: 0 }
    ]
};

const cookieBtn = document.getElementById('cookie');
const countEl = document.getElementById('cookie-count');
const cpsEl = document.getElementById('cps-display');
const upgradeList = document.getElementById('upgrade-list');

function updateDisplay() {
    countEl.innerText = Math.floor(state.cookies).toLocaleString();
    cpsEl.innerText = `CPS: ${state.cps.toFixed(1)}`;
    
    // Update upgrade buttons state
    document.querySelectorAll('.upgrade-item').forEach((el, i) => {
        const up = state.upgrades[i];
        if (state.cookies < up.cost) {
            el.classList.add('disabled');
        } else {
            el.classList.remove('disabled');
        }
    });
}

function renderUpgrades() {
    upgradeList.innerHTML = '';
    state.upgrades.forEach((up, i) => {
        const div = document.createElement('div');
        div.className = 'upgrade-item';
        div.innerHTML = `
            <div style="font-weight: bold">${up.name}</div>
            <div style="font-size: 0.8rem; color: #888">
                Cost: <span class="cost">${Math.floor(up.cost)}</span> | Owned: <span class="owned">${up.owned}</span>
            </div>
        `;
        div.onclick = () => buyUpgrade(i);
        upgradeList.appendChild(div);
    });
}

window.buyUpgrade = function(index) {
    const up = state.upgrades[index];
    if (state.cookies >= up.cost) {
        state.cookies -= up.cost;
        up.owned++;
        up.cost = Math.ceil(up.cost * 1.15);
        state.cps += up.power;
        renderUpgrades();
        updateDisplay();
    }
};

// Main Click Handler
cookieBtn.addEventListener('mousedown', function(e) {
    state.cookies += 1;
    updateDisplay();
    
    // Small click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => { this.style.transform = 'scale(1)'; }, 50);

    // Floating text
    const text = document.createElement('div');
    text.className = 'float-text';
    text.innerText = '+1';
    text.style.left = e.pageX + 'px';
    text.style.top = e.pageY + 'px';
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 800);
});

// Passive Income Loop (Run every 100ms)
setInterval(() => {
    if (state.cps > 0) {
        state.cookies += state.cps / 10;
        updateDisplay();
    }
}, 100);

// Initialize
renderUpgrades();
updateDisplay();

/* injected */
// Re-initializing the core logic with improved event handling and coordinate mapping
const state = {
    cookies: 0,
    cps: 0,
    upgrades: [
        { id: 'cursor', name: 'Auto-Clicker', cost: 15, power: 0.5, owned: 0 },
        { id: 'grandma', name: 'Nano-Bakery', cost: 100, power: 5, owned: 0 },
        { id: 'factory', name: 'Cookie Forge', cost: 1100, power: 25, owned: 0 },
        { id: 'nexus', name: 'Nexus Engine', cost: 12000, power: 150, owned: 0 }
    ]
};

const cookieBtn = document.getElementById('cookie');
const countEl = document.getElementById('cookie-count');
const cpsEl = document.getElementById('cps-display');
const upgradeList = document.getElementById('upgrade-list');

function init() {
    renderUpgrades();
    setInterval(() => {
        state.cookies += state.cps / 10;
        updateDisplay();
    }, 100);
}

function updateDisplay() {
    countEl.innerText = Math.floor(state.cookies).toLocaleString();
    cpsEl.innerText = `CPS: ${state.cps.toFixed(1)}`;
    
    const items = document.querySelectorAll('.upgrade-item');
    state.upgrades.forEach((up, i) => {
        if(items[i]) {
            items[i].classList.toggle('disabled', state.cookies < up.cost);
            items[i].querySelector('.cost').innerText = Math.floor(up.cost);
            items[i].querySelector('.owned').innerText = up.owned;
        }
    });
}

function renderUpgrades() {
    upgradeList.innerHTML = state.upgrades.map((up, i) => `
        <div class="upgrade-item" onclick="buyUpgrade(${i})">
            <div style="font-weight: bold">${up.name}</div>
            <div style="font-size: 0.8rem; color: #888">
                Cost: <span class="cost">${Math.floor(up.cost)}</span> | Owned: <span class="owned">${up.owned}</span>
            </div>
        </div>
    `).join('');
}

window.buyUpgrade = function(index) {
    const up = state.upgrades[index];
    if (state.cookies >= up.cost) {
        state.cookies -= up.cost;
        up.owned++;
        up.cost = Math.ceil(up.cost * 1.15);
        state.cps += up.power;
        updateDisplay();
    }
};

cookieBtn.addEventListener('mousedown', (e) => {
    state.cookies += 1;
    updateDisplay();
    spawnText(e.pageX, e.pageY);
});

function spawnText(x, y) {
    const text = document.createElement('div');
    text.className = 'float-text';
    text.innerText = '+1';
    text.style.left = `${x}px`;
    text.style.top = `${y}px`;
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 800);
}

init();

/* injected */
// Resetting the script to ensure zero conflicts
const state = {
    cookies: 0,
    cps: 0,
    upgrades: [
        { id: 'cursor', name: 'Auto-Clicker', cost: 15, power: 0.5, owned: 0 },
        { id: 'grandma', name: 'Nano-Bakery', cost: 100, power: 5, owned: 0 },
        { id: 'factory', name: 'Cookie Forge', cost: 1100, power: 25, owned: 0 },
        { id: 'nexus', name: 'Nexus Engine', cost: 12000, power: 150, owned: 0 }
    ]
};

const cookieBtn = document.getElementById('cookie');
const countEl = document.getElementById('cookie-count');
const cpsEl = document.getElementById('cps-display');
const upgradeList = document.getElementById('upgrade-list');

function updateDisplay() {
    countEl.innerText = Math.floor(state.cookies).toLocaleString();
    cpsEl.innerText = `CPS: ${state.cps.toFixed(1)}`;
    
    // Update upgrade buttons state
    document.querySelectorAll('.upgrade-item').forEach((el, i) => {
        const up = state.upgrades[i];
        if (state.cookies < up.cost) {
            el.classList.add('disabled');
        } else {
            el.classList.remove('disabled');
        }
    });
}

function renderUpgrades() {
    upgradeList.innerHTML = '';
    state.upgrades.forEach((up, i) => {
        const div = document.createElement('div');
        div.className = 'upgrade-item';
        div.innerHTML = `
            <div style="font-weight: bold">${up.name}</div>
            <div style="font-size: 0.8rem; color: #888">
                Cost: <span class="cost">${Math.floor(up.cost)}</span> | Owned: <span class="owned">${up.owned}</span>
            </div>
        `;
        div.onclick = () => buyUpgrade(i);
        upgradeList.appendChild(div);
    });
}

window.buyUpgrade = function(index) {
    const up = state.upgrades[index];
    if (state.cookies >= up.cost) {
        state.cookies -= up.cost;
        up.owned++;
        up.cost = Math.ceil(up.cost * 1.15);
        state.cps += up.power;
        renderUpgrades();
        updateDisplay();
    }
};

// Main Click Handler
cookieBtn.addEventListener('mousedown', function(e) {
    state.cookies += 1;
    updateDisplay();
    
    // Small click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => { this.style.transform = 'scale(1)'; }, 50);

    // Floating text
    const text = document.createElement('div');
    text.className = 'float-text';
    text.innerText = '+1';
    text.style.left = e.pageX + 'px';
    text.style.top = e.pageY + 'px';
    document.body.appendChild(text);
    setTimeout(() => text.remove(), 800);
});

// Passive Income Loop (Run every 100ms)
setInterval(() => {
    if (state.cps > 0) {
        state.cookies += state.cps / 10;
        updateDisplay();
    }
}, 100);

// Initialize
renderUpgrades();
updateDisplay();
