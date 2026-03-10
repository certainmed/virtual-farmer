// ==================== NOTIFICATIONS ====================
function showNotification(message, rarity = "common") {
    const container = document.getElementById('notifications');

    // Limit visible notifications
    while (container.children.length >= MAX_NOTIFICATIONS) {
        container.removeChild(container.firstChild);
    }

    const notif = document.createElement('div');
    notif.className = `notification ${rarity}`;
    notif.textContent = message;
    container.appendChild(notif);
    setTimeout(() => notif.remove(), 2500);
}

let modalReturnFocusEl = null;

function openModal(modalEl, focusSelector) {
    if (!modalEl) return;
    modalReturnFocusEl = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    modalEl.classList.add('active');
    modalEl.setAttribute('aria-hidden', 'false');

    const focusTarget = focusSelector
        ? modalEl.querySelector(focusSelector)
        : modalEl.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (focusTarget instanceof HTMLElement) {
        requestAnimationFrame(() => focusTarget.focus());
    }
}

function closeModal(modalEl) {
    if (!modalEl) return;
    modalEl.classList.remove('active');
    modalEl.setAttribute('aria-hidden', 'true');

    if (modalReturnFocusEl && document.contains(modalReturnFocusEl)) {
        modalReturnFocusEl.focus();
    }
}

function closeActiveModal() {
    const activeModal = document.querySelector('.modal.active');
    if (!activeModal) return false;
    closeModal(activeModal);
    return true;
}

function isEditableTarget(target) {
    if (!(target instanceof HTMLElement)) return false;
    if (target.isContentEditable) return true;
    return ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

// ==================== COOLDOWN BAR ====================
function updateCooldownBar(duration) {
    const bar = document.getElementById('cooldown-bar');
    const btn = document.getElementById('farm-btn');

    function update() {
        const now = Date.now();
        if (now >= cooldownEndTime) {
            cooldownActive = false;
            bar.style.width = '0%';
            btn.disabled = false;
            return;
        }

        const remaining = cooldownEndTime - now;
        const percent = (remaining / duration) * 100;
        bar.style.width = percent + '%';
        btn.disabled = true;
        requestAnimationFrame(update);
    }
    update();
}

// ==================== UI UPDATES ====================
function updateAllUI() {
    updateStatsBar();
    updateHoeSelect();
    updateFertilizerSelect();
    updatePrestigeCard();
    updateShopPage();
    updateUpgradesPage();
    updateInventoryPage();
    updateStatsPage();
    updateAchievementsPage();
    updateAutoFarmUI();
    updateAutoFarmStats();
}

function updateStatsBar() {
    const selectedHoe = HOES[game.selectedHoeIndex] || HOES[0];
    document.getElementById('balance-display').textContent = formatMoney(game.balance);
    document.getElementById('xp-display').textContent = formatNumber(game.xp);
    document.getElementById('plants-display').textContent = formatNumber(getTotalPlants());
    document.getElementById('hoe-display').textContent = selectedHoe.name;
    document.getElementById('prestige-display').textContent = `Lv. ${game.prestigeLevel} (+${game.prestigeBonus}%)`;
}

function updateHoeSelect() {
    const select = document.getElementById('hoe-select');
    select.innerHTML = '';

    for (const index of game.unlockedHoes.sort((a, b) => a - b)) {
        const hoe = HOES[index];
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${hoe.name} (${hoe.multiplier}x)`;
        option.selected = index === game.selectedHoeIndex;
        select.appendChild(option);
    }
}

function updateFertilizerSelect() {
    const select = document.getElementById('fertilizer-select');
    select.innerHTML = '<option value="none">No Fertilizer</option>';

    for (const fert of FERTILIZERS) {
        const qty = game.fertilizers[fert.name] || 0;
        if (qty > 0) {
            const option = document.createElement('option');
            option.value = fert.name;
            option.textContent = `${fert.name} (+${fert.bonus}) [${qty}]`;
            option.selected = fert.name === game.selectedFertilizer;
            select.appendChild(option);
        }
    }
}

function updatePrestigeCard() {
    const card = document.getElementById('prestige-card');
    const desc = document.getElementById('prestige-description');

    if (canPrestige()) {
        card.style.display = 'block';
        const newBonus = (game.prestigeLevel + 1) * 2;
        let text = `Reset your progress to gain Prestige Level ${game.prestigeLevel + 1} with a permanent +${newBonus}% bonus to all yields and earnings!`;

        // Show Offshore Account info if owned
        if (game.upgrades.offshoreAccount > 0) {
            const keepPercent = game.upgrades.offshoreAccount;
            const keptAmount = Math.floor(game.balance * (keepPercent * 0.01));
            text += ` You will keep ${formatMoney(keptAmount)} (${keepPercent}% via Offshore Account).`;
        }

        desc.textContent = text;
    } else {
        card.style.display = 'none';
    }
}

function getHoeDisplayCost(hoe) {
    const discount = 1 - ((game.upgrades.lobbying || 0) * 0.02);
    return Math.floor(hoe.cost * discount);
}

function updateShopPage() {
    // Hoes
    const hoeGrid = document.getElementById('hoe-grid');
    hoeGrid.innerHTML = '';

    const sortedHoes = HOES.map((hoe, index) => ({
        hoe,
        index,
        displayCost: getHoeDisplayCost(hoe)
    })).sort((a, b) => {
        if (a.displayCost !== b.displayCost) return a.displayCost - b.displayCost;
        if (a.hoe.cost !== b.hoe.cost) return a.hoe.cost - b.hoe.cost;
        return a.index - b.index;
    });

    for (const { hoe, index: i, displayCost } of sortedHoes) {
        const owned = game.unlockedHoes.includes(i);
        const equipped = game.selectedHoeIndex === i;
        const canBuy = !owned && game.balance >= displayCost;

        const card = document.createElement('div');
        card.className = `item-card${owned ? ' owned' : ''}${equipped ? ' equipped' : ''}`;

        let priceHtml;
        if (hoe.cost === 0) {
            priceHtml = 'Free';
        } else if (displayCost < hoe.cost) {
            priceHtml = `<s style="opacity:0.5;font-size:0.75rem">${formatMoney(hoe.cost)}</s> ${formatMoney(displayCost)}`;
        } else {
            priceHtml = formatMoney(hoe.cost);
        }

        card.innerHTML = `
            <div class="item-header">
                <span class="item-name">${hoe.name}</span>
                <span class="item-price">${priceHtml}</span>
            </div>
            <div class="item-stats">Multiplier: ${hoe.multiplier}x</div>
            ${owned
                ? (equipped
                    ? '<button class="btn" disabled>Equipped</button>'
                    : `<button class="btn btn-secondary" onclick="equipHoe(${i})">Equip</button>`)
                : `<button class="btn" ${canBuy ? '' : 'disabled'} onclick="buyHoe(${i})">Buy</button>`
            }
        `;
        hoeGrid.appendChild(card);
    }

    // Fertilizers
    const fertGrid = document.getElementById('fertilizer-grid');
    fertGrid.innerHTML = '';

    const sortedFertilizers = [...FERTILIZERS].sort((a, b) => {
        if (a.cost !== b.cost) return a.cost - b.cost;
        if (a.bonus !== b.bonus) return a.bonus - b.bonus;
        return a.name.localeCompare(b.name);
    });

    for (const fert of sortedFertilizers) {
        const qty = game.fertilizers[fert.name] || 0;
        const canBuy = game.balance >= fert.cost;

        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `
            <div class="item-header">
                <span class="item-name">${fert.name}</span>
                <span class="item-price">${formatMoney(fert.cost)}</span>
            </div>
            <div class="item-stats">Bonus: +${formatNumber(fert.bonus)} yield | Owned: ${qty}</div>
        `;

        const actions = document.createElement('div');
        actions.style.display = 'flex';
        actions.style.gap = '5px';

        const purchaseAmounts = [1, 10, 100];
        for (const amount of purchaseAmounts) {
            const btn = document.createElement('button');
            btn.className = amount === 100 ? 'btn btn-secondary' : 'btn';
            btn.textContent = `+${amount}`;
            btn.disabled = game.balance < (fert.cost * amount);
            btn.addEventListener('click', () => buyFertilizer(fert.name, amount));
            actions.appendChild(btn);
        }

        if (!canBuy) {
            actions.querySelector('button')?.setAttribute('disabled', 'true');
        }

        card.appendChild(actions);
        fertGrid.appendChild(card);
    }
}

function updateUpgradesPage() {
    const grid = document.getElementById('upgrade-grid');
    grid.innerHTML = '';

    // Render upgrades grouped by category
    for (const catKey of Object.keys(UPGRADE_CATEGORIES)) {
        const category = UPGRADE_CATEGORIES[catKey];

        // Category header
        const header = document.createElement('div');
        header.className = 'upgrade-category';
        header.textContent = category.label;
        grid.appendChild(header);

        // Upgrades in this category
        for (const upgradeId of category.ids) {
            const upgrade = UPGRADES.find(u => u.id === upgradeId);
            if (!upgrade) continue;

            const level = game.upgrades[upgrade.id] || 0;
            const maxed = level >= upgrade.maxLevel;
            const cost = maxed ? 0 : getUpgradeCost(upgrade, level);
            const canBuy = !maxed && game.balance >= cost;

            const card = document.createElement('div');
            card.className = `item-card${maxed ? ' owned' : ''}`;
            card.innerHTML = `
                <div class="item-header">
                    <span class="item-name">${upgrade.name}</span>
                    <span class="upgrade-level">Lv. ${level}/${upgrade.maxLevel}</span>
                </div>
                <div class="item-stats">${upgrade.desc}</div>
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${(level / upgrade.maxLevel) * 100}%"></div>
                </div>
                ${maxed
                    ? '<button class="btn" disabled>Maxed</button>'
                    : `<button class="btn" ${canBuy ? '' : 'disabled'} onclick="buyUpgrade('${upgrade.id}')">${formatMoney(cost)}</button>`
                }
            `;
            grid.appendChild(card);
        }
    }
}

function updateInventoryPage() {
    const grid = document.getElementById('inventory-grid');
    const sortBy = document.getElementById('sort-select').value;
    const filterBy = document.getElementById('filter-select').value;

    let items = PLANTS.map(p => ({
        ...p,
        quantity: game.inventory[p.name] || 0
    })).filter(p => p.quantity > 0);

    // Filter
    if (filterBy !== 'all') {
        items = items.filter(p => p.rarity === filterBy);
    }

    // Sort
    switch (sortBy) {
        case 'quantity':
            items.sort((a, b) => b.quantity - a.quantity);
            break;
        case 'value':
            items.sort((a, b) => b.price - a.price);
            break;
        case 'rarity':
            items.sort((a, b) => RARITY_ORDER[b.rarity] - RARITY_ORDER[a.rarity]);
            break;
        default:
            items.sort((a, b) => a.name.localeCompare(b.name));
    }

    grid.innerHTML = '';

    if (items.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; opacity: 0.6;">No plants in inventory</p>';
    } else {
        for (const item of items) {
            const div = document.createElement('div');
            div.className = `inventory-item ${item.rarity}`;
            div.innerHTML = `
                <span>${item.name}</span>
                <span>${formatNumber(item.quantity)}</span>
            `;
            grid.appendChild(div);
        }
    }

    const totalValue = calculateSellPrice();
    document.getElementById('inventory-total').textContent =
        `Total Value: ${formatMoney(totalValue)} (${formatNumber(getTotalPlants())} plants)`;
}

function updateStatsPage() {
    const grid = document.getElementById('stats-grid');

    const statItems = [
        { label: "Total Farms", value: formatNumber(stats.totalFarms) },
        { label: "Total Plants Harvested", value: formatNumber(stats.totalPlantsHarvested) },
        { label: "Total Money Earned", value: formatMoney(stats.totalEarned) },
        { label: "Total Money Spent", value: formatMoney(stats.totalSpent) },
        { label: "Best Single Yield", value: formatNumber(stats.bestYield) },
        { label: "Best Single Sale", value: formatMoney(stats.bestSale) },
        { label: "Unique Plants Discovered", value: `${stats.uniquePlantsHarvested}/${PLANTS.length}` },
        { label: "Legendary Plants Harvested", value: formatNumber(stats.legendaryHarvested) },
        { label: "Fertilizer Used", value: formatNumber(stats.totalFertilizerUsed) },
        { label: "Session Farms", value: formatNumber(stats.sessionFarms) },
        { label: "Current Prestige Level", value: `Lv. ${game.prestigeLevel}` },
        { label: "Prestige Bonus", value: `+${game.prestigeBonus}%` }
    ];

    grid.innerHTML = statItems.map(s => `
        <div class="stats-card">
            <div class="value">${s.value}</div>
            <div class="label">${s.label}</div>
        </div>
    `).join('');
}

function updateAchievementsPage() {
    const grid = document.getElementById('achievement-grid');
    const unlocked = game.achievements.length;

    document.getElementById('achievement-progress').textContent =
        `Unlocked: ${unlocked}/${ACHIEVEMENTS.length}`;

    grid.innerHTML = ACHIEVEMENTS.map(a => {
        const isUnlocked = game.achievements.includes(a.id);
        return `
            <div class="achievement-card${isUnlocked ? ' unlocked' : ''}">
                <div class="achievement-icon">${a.icon}</div>
                <div class="achievement-info">
                    <h3>${a.name}</h3>
                    <p>${a.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

// ==================== AUTO FARM UI ====================
function updateAutoFarmUI() {
    const toggleBtn = document.getElementById('auto-farm-toggle');
    const statusEl = document.getElementById('auto-farm-status');

    if (autoFarmActive) {
        toggleBtn.textContent = 'Disable Auto Farm';
        toggleBtn.classList.add('active');
        statusEl.textContent = 'Active';
        statusEl.classList.add('active');
    } else {
        toggleBtn.textContent = 'Enable Auto Farm';
        toggleBtn.classList.remove('active');
        statusEl.textContent = 'Inactive';
        statusEl.classList.remove('active');
    }
}

function updateAutoFarmStats() {
    const grid = document.getElementById('auto-farm-stats');
    if (autoFarmActive) {
        grid.innerHTML = `
            <div class="auto-farm-stat">
                <div class="af-value">${formatNumber(autoFarmSessionHarvests)}</div>
                <div class="af-label">Harvests</div>
            </div>
            <div class="auto-farm-stat">
                <div class="af-value">${formatNumber(autoFarmSessionPlants)}</div>
                <div class="af-label">Plants Earned</div>
            </div>
            <div class="auto-farm-stat">
                <div class="af-value">${formatNumber(autoFarmSessionXP)}</div>
                <div class="af-label">XP Earned</div>
            </div>
            <div class="auto-farm-stat">
                <div class="af-value">30%</div>
                <div class="af-label">Yield Rate</div>
            </div>
        `;
    } else {
        grid.innerHTML = `
            <div class="auto-farm-stat">
                <div class="af-value">--</div>
                <div class="af-label">Harvests</div>
            </div>
            <div class="auto-farm-stat">
                <div class="af-value">--</div>
                <div class="af-label">Plants Earned</div>
            </div>
            <div class="auto-farm-stat">
                <div class="af-value">--</div>
                <div class="af-label">XP Earned</div>
            </div>
            <div class="auto-farm-stat">
                <div class="af-value">30%</div>
                <div class="af-label">Yield Rate</div>
            </div>
        `;
    }
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(`page-${btn.dataset.page}`).classList.add('active');
        });
    });

    // Farm button
    document.getElementById('farm-btn').addEventListener('click', farm);

    // Sell button
    document.getElementById('sell-btn').addEventListener('click', sellAll);

    // Hoe select
    document.getElementById('hoe-select').addEventListener('change', (e) => {
        equipHoe(parseInt(e.target.value));
    });

    // Fertilizer select
    document.getElementById('fertilizer-select').addEventListener('change', (e) => {
        game.selectedFertilizer = e.target.value;
        saveGame();
    });

    // Inventory sort/filter
    document.getElementById('sort-select').addEventListener('change', updateInventoryPage);
    document.getElementById('filter-select').addEventListener('change', updateInventoryPage);

    // Export/Import
    document.getElementById('export-btn').addEventListener('click', () => {
        const modal = document.getElementById('save-modal');
        const textarea = document.getElementById('save-textarea');
        const actionBtn = document.getElementById('modal-action');

        document.getElementById('modal-title').textContent = 'Export Save';
        textarea.value = exportSave();
        textarea.readOnly = true;
        actionBtn.textContent = 'Copy';
        actionBtn.onclick = () => {
            navigator.clipboard.writeText(textarea.value).then(() => {
                showNotification('Copied to clipboard!', 'achievement');
            }).catch(() => {
                textarea.select();
                document.execCommand('copy');
                showNotification('Copied to clipboard!', 'achievement');
            });
        };
        openModal(modal, '#save-textarea');
        textarea.select();
    });

    document.getElementById('import-btn').addEventListener('click', () => {
        const modal = document.getElementById('save-modal');
        const textarea = document.getElementById('save-textarea');
        const actionBtn = document.getElementById('modal-action');

        document.getElementById('modal-title').textContent = 'Import Save';
        textarea.value = '';
        textarea.readOnly = false;
        textarea.placeholder = 'Paste your save code here...';
        actionBtn.textContent = 'Import';
        actionBtn.onclick = () => {
            if (importSave(textarea.value.trim())) {
                closeModal(modal);
            }
        };
        openModal(modal, '#save-textarea');
    });

    document.getElementById('modal-close').addEventListener('click', () => {
        closeModal(document.getElementById('save-modal'));
    });

    // Prestige
    document.getElementById('prestige-btn').addEventListener('click', () => {
        const newBonus = (game.prestigeLevel + 1) * 2;
        let previewText = `You will gain: Prestige Level ${game.prestigeLevel + 1} with +${newBonus}% permanent bonus!`;

        if (game.upgrades.offshoreAccount > 0) {
            const keepPercent = game.upgrades.offshoreAccount;
            const keptAmount = Math.floor(game.balance * (keepPercent * 0.01));
            previewText += ` (Keeping ${formatMoney(keptAmount)})`;
        }

        document.getElementById('prestige-bonus-preview').textContent = previewText;
        openModal(document.getElementById('prestige-modal'), '#prestige-cancel');
    });

    document.getElementById('prestige-cancel').addEventListener('click', () => {
        closeModal(document.getElementById('prestige-modal'));
    });

    document.getElementById('prestige-confirm').addEventListener('click', prestige);

    // Close modals when clicking backdrop
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal(modal);
            }
        });
    });

    // Auto Farm toggle
    document.getElementById('auto-farm-toggle').addEventListener('click', toggleAutoFarm);

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && closeActiveModal()) {
            e.preventDefault();
            return;
        }
        if (document.querySelector('.modal.active')) return;
        if (isEditableTarget(e.target)) return;

        switch (e.code) {
            case 'Space':
                e.preventDefault();
                farm();
                break;
            case 'KeyS':
                sellAll();
                break;
            case 'KeyA':
                if (e.repeat) break;
                toggleAutoFarm();
                break;
            case 'KeyF':
                const fertSelect = document.getElementById('fertilizer-select');
                const options = fertSelect.options;
                const currentIndex = fertSelect.selectedIndex;
                const nextIndex = (currentIndex + 1) % options.length;
                fertSelect.selectedIndex = nextIndex;
                game.selectedFertilizer = fertSelect.value;
                saveGame();
                break;
            case 'Digit1':
            case 'Digit2':
            case 'Digit3':
            case 'Digit4':
            case 'Digit5':
            case 'Digit6':
            case 'Digit7':
            case 'Digit8':
            case 'Digit9':
                const hoeIndex = parseInt(e.code.slice(-1)) - 1;
                if (game.unlockedHoes.includes(hoeIndex)) {
                    equipHoe(hoeIndex);
                }
                break;
        }
    });
}

// ==================== INITIALIZATION ====================
function init() {
    loadGame();
    setupEventListeners();
    updateAllUI();
    updateAutoFarmStats();

    // Process offline auto-farm earnings
    processOfflineAutoFarm();

    // Auto-save every 30 seconds
    setInterval(saveGame, 30000);
}

init();
