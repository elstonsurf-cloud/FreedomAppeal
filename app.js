const requestEmail = "joeyelstonjr@gmail.com";
const orderLogEndpoint = "AKfycbwAJwDBiv55plLwmUC7lf7AcbuMq0gq8NTyEYP5YizXYNqMxpSRdq7TYYERd4HEbP3m";
const catalogStorageKey = "shopRequestCatalogV7";
const cartStorageKey = "shopRequestCart";

const defaultCatalog = [
  {
    "id": "tf-home-plate-mri6z96h",
    "name": "TF Home Plate",
    "description": "",
    "basePrice": 10,
    "imageUrls": [
      "images/tfhomeplatewhite.jpg",
      "images/tfmomeplateblack.jpg",
      "images/tfhomeplatetan.jpg"
    ],
    "colorImages": {
      "White": "images/tfhomeplatewhite.jpg",
      "Black": "images/tfmomeplateblack.jpg",
      "Tan": "images/tfhomeplatetan.jpg"
    },
    "options": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Tan",
          "White"
        ]
      },
      {
        "name": "Type (Preview image doesn't change)",
        "values": [
          "Short Sleeve",
          "Short Sleeve Hooded",
          "Long Sleeve",
          "Long Sleeve Hooded"
        ]
      },
      {
        "name": "Fit (Preview image doesn't change)",
        "values": [
          "Men's",
          "Women's",
          "Youth"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "optionPrices": {
      "Type (Preview image doesn't change)": {
        "Short Sleeve Hooded": 4,
        "Long Sleeve": 2,
        "Long Sleeve Hooded": 5
      }
    }
  },
  {
    "id": "tf-motion-mri7wub2",
    "name": "TF Motion",
    "description": "",
    "basePrice": 12,
    "imageUrls": [
      "images/tfmotionwhite.jpg",
      "images/tfmotionblack.jpg",
      "images/tfmotiontan.jpg"
    ],
    "colorImages": {
      "White": "images/tfmotionwhite.jpg",
      "Black": "images/tfmotionblack.jpg",
      "Tan": "images/tfmotiontan.jpg"
    },
    "options": [
      {
        "name": "Color",
        "values": [
          "White",
          "Black",
          "Tan"
        ]
      },
      {
        "name": "Type (Preview image doesn't change)",
        "values": [
          "Short Sleeve",
          "Long Sleeve"
        ]
      },
      {
        "name": "Fit (Preview image doesn't change)",
        "values": [
          "Men's",
          "Women's",
          "Youth"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "optionPrices": {
      "Type (Preview image doesn't change)": {
        "Long Sleeve": 2
      }
    }
  },
  {
    "id": "tf-eagle-mri7ynfr",
    "name": "TF Eagle",
    "description": "",
    "basePrice": 10,
    "imageUrls": [
      "images/tfeaglewhite.jpg",
      "images/tfeagleblack.jpg",
      "images/tfeagletan.jpg"
    ],
    "colorImages": {
      "White": "images/tfeaglewhite.jpg",
      "Black": "images/tfeagleblack.jpg",
      "Tan": "images/tfeagletan.jpg"
    },
    "options": [
      {
        "name": "Color",
        "values": [
          "Tan",
          "White",
          "Black"
        ]
      },
      {
        "name": "Type (Preview image doesn't change)",
        "values": [
          "Short Sleeve",
          "Short Sleeve Hooded",
          "Long Sleeve",
          "Long Sleeve Hooded"
        ]
      },
      {
        "name": "Fit (Preview image doesn't change)",
        "values": [
          "Men's",
          "Women's",
          "Youth"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "optionPrices": {
      "Type (Preview image doesn't change)": {
        "Short Sleeve Hooded": 4,
        "Long Sleeve": 2,
        "Long Sleeve Hooded": 5
      }
    }
  },
  {
    "id": "tf-bold-mri87c4t",
    "name": "TF Bold",
    "description": "",
    "basePrice": 10,
    "imageUrls": [
      "images/tfboldwhite.jpg",
      "images/tfboldblank.jpg",
      "images/tfboldtan.jpg"
    ],
    "colorImages": {
      "White": "images/tfboldwhite.jpg",
      "Black": "images/tfboldblank.jpg",
      "Tan": "images/tfboldtan.jpg"
    },
    "options": [
      {
        "name": "Color",
        "values": [
          "Black",
          "Tan",
          "White"
        ]
      },
      {
        "name": "Type (Preview image doesn't change)",
        "values": [
          "Short Sleeve",
          "Short Sleeve Hooded",
          "Long Sleeve",
          "Long Sleeve Hooded"
        ]
      },
      {
        "name": "Fit (Preview image doesn't change)",
        "values": [
          "Men's",
          "Women's",
          "Youth"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "optionPrices": {
      "Type (Preview image doesn't change)": {
        "Short Sleeve Hooded": 4,
        "Long Sleeve": 2,
        "Long Sleeve Hooded": 5
      }
    }
  },
  {
    "id": "tf-bold-eagle-mri8ha6o",
    "name": "TF Bold Eagle",
    "description": "",
    "basePrice": 10,
    "imageUrls": [
      "images/tfboldeaglewhite.jpg",
      "images/tfboldeagleblack.jpg",
      "images/tfboldeagletan.jpg"
    ],
    "colorImages": {
      "White": "images/tfboldeaglewhite.jpg",
      "Black": "images/tfboldeagleblack.jpg",
      "Tan": "images/tfboldeagletan.jpg"
    },
    "options": [
      {
        "name": "Color",
        "values": [
          "Tan",
          "White",
          "Black"
        ]
      },
      {
        "name": "Type (Preview image doesn't change)",
        "values": [
          "Short Sleeve",
          "Short Sleeve Hooded",
          "Long Sleeve",
          "Long Sleeve Hooded"
        ]
      },
      {
        "name": "Fit (Preview image doesn't change)",
        "values": [
          "Men's",
          "Women's",
          "Youth"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "optionPrices": {
      "Type (Preview image doesn't change)": {
        "Short Sleeve Hooded": 4,
        "Long Sleeve": 2,
        "Long Sleeve Hooded": 5
      }
    }
  },
  {
    "id": "freedom-plate-mri99z2j",
    "name": "Freedom Plate",
    "description": "",
    "basePrice": 12,
    "imageUrls": [
      "images/freedomplateblack.jpg",
      "images/freedomplatetan.jpg",
      "images/freedomplatewhite.jpg"
    ],
    "colorImages": {
      "Black": "images/freedomplateblack.jpg",
      "Tan": "images/freedomplatetan.jpg",
      "White": "images/freedomplatewhite.jpg"
    },
    "options": [
      {
        "name": "Color",
        "values": [
          "Tan",
          "Black",
          "White"
        ]
      },
      {
        "name": "Type (Preview image doesn't change)",
        "values": [
          "Short Sleeve",
          "Long Sleeve"
        ]
      },
      {
        "name": "Fit (Preview image doesn't change)",
        "values": [
          "Men's",
          "Women's",
          "Youth"
        ]
      },
      {
        "name": "Size",
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "2XL"
        ]
      }
    ],
    "optionPrices": {
      "Type (Preview image doesn't change)": {
        "Long Sleeve": 2
      }
    }
  }
];

let cart = getStoredCart();
let selectedItemId = "";

const orderForm = document.querySelector("#order-form");
const catalogEl = document.querySelector("#catalog");
const itemDetailSection = document.querySelector("#item-detail-section");
const itemDetailEl = document.querySelector("#item-detail");
const cartEl = document.querySelector("#cart");
const cartCountEl = document.querySelector("#cart-count");
const cartTotalEl = document.querySelector("#cart-total");
const orderMessage = document.querySelector("#order-message");
const adminPanel = document.querySelector("#admin-panel");
const itemForm = document.querySelector("#item-form");
const adminItems = document.querySelector("#admin-items");
const adminMessage = document.querySelector("#admin-message");
const importCatalogJson = document.querySelector("#import-catalog-json");
const saveItemButton = document.querySelector("#save-item");
const cancelEditButton = document.querySelector("#cancel-edit");

function getStoredCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(cartStorageKey));
    return Array.isArray(saved) ? saved.map(normalizeCartItem) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  cart = cart.map(normalizeCartItem);
  localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  renderCartCountBadges();
}

function normalizeCartItem(cartItem) {
  return {
    id: String(cartItem.id || createId(cartItem.name || "cart-item")),
    itemId: String(cartItem.itemId || ""),
    name: String(cartItem.name || ""),
    imageUrl: convertImageUrl(String(cartItem.imageUrl || "")),
    quantity: Number(cartItem.quantity || 0),
    unitPrice: Number.isFinite(Number(cartItem.unitPrice)) ? normalizePrice(cartItem.unitPrice) : null,
    options: Array.isArray(cartItem.options)
      ? cartItem.options.map((option) => ({
          name: String(option.name || ""),
          value: String(option.value || "")
        }))
      : []
  };
}

function getCartItemImage(cartItem) {
  const item = getCatalog().find((entry) => entry.id === cartItem.itemId || entry.name === cartItem.name);
  const selectedColor = cartItem.options
    ?.find((option) => option.name.toLowerCase().includes("color"))
    ?.value;
  const matchedColorImage = item ? getSelectedColorImage(item, selectedColor) : "";
  return matchedColorImage || cartItem.imageUrl || item?.imageUrls[0] || "";
}

function getCatalog() {
  try {
    const saved = normalizeCatalog(JSON.parse(localStorage.getItem(catalogStorageKey)));
    return saved.length ? saved : defaultCatalog;
  } catch {
    return defaultCatalog;
  }
}

function saveCatalog(catalog) {
  localStorage.setItem(catalogStorageKey, JSON.stringify(catalog));
}

function normalizeCatalog(value) {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => ({
      id: String(item.id || createId(item.name || "item")),
      name: String(item.name || "").trim(),
      description: String(item.description || "").trim(),
      basePrice: normalizePrice(item.basePrice),
      imageUrls: normalizeImageUrls(item.imageUrls || item.imageUrl || []),
      colorImages: normalizeColorImages(item.colorImages || {}),
      options: Array.isArray(item.options)
        ? item.options
            .map((option) => ({
              name: String(option.name || "").trim(),
              values: Array.isArray(option.values)
                ? option.values.map((entry) => String(entry).trim()).filter(Boolean)
                : []
            }))
            .filter((option) => option.name && option.values.length)
        : [],
      optionPrices: normalizeOptionPrices(item.optionPrices || {})
    }))
    .filter((item) => item.name && item.options.length);
}

function normalizePrice(value) {
  const price = Number(value);
  return Number.isFinite(price) ? Math.max(0, price) : 0;
}

function normalizeOptionPrices(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .map(([groupName, prices]) => [
        String(groupName || "").trim(),
        Object.fromEntries(
          Object.entries(prices || {})
            .map(([optionValue, price]) => [String(optionValue || "").trim(), Number(price)])
            .filter(([optionValue, price]) => optionValue && Number.isFinite(price))
        )
      ])
      .filter(([groupName, prices]) => groupName && Object.keys(prices).length)
  );
}

function normalizeImageUrls(value) {
  const urls = Array.isArray(value) ? value : String(value || "").split("\n");
  return urls.map((url) => convertImageUrl(url.trim())).filter(Boolean);
}

function convertImageUrl(url) {
  if (!url) return "";

  const driveMatch = url.match(/drive\.google\.com\/file\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
  if (driveMatch) {
    return `https://drive.google.com/thumbnail?id=${encodeURIComponent(driveMatch[1])}&sz=w1200`;
  }

  return url;
}

function normalizeColorImages(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};

  return Object.fromEntries(
    Object.entries(value)
      .map(([color, url]) => [String(color).trim(), convertImageUrl(String(url || "").trim())])
      .filter(([color, url]) => color && url)
  );
}

function parseColorImages(value) {
  return Object.fromEntries(
    value
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const separator = line.indexOf(":");
        if (separator < 0) return ["", ""];
        const color = line.slice(0, separator).trim();
        const url = convertImageUrl(line.slice(separator + 1).trim());
        return [color, url];
      })
      .filter(([color, url]) => color && url)
  );
}

function colorImagesToText(colorImages) {
  return Object.entries(colorImages).map(([color, url]) => `${color}: ${url}`).join("\n");
}

function getColorOption(item) {
  return item.options.find((option) => option.name.toLowerCase().includes("color"));
}

function getColorImage(item, color) {
  const match = Object.entries(item.colorImages || {}).find(([key]) => key.toLowerCase() === String(color).toLowerCase());
  return match ? match[1] : "";
}

function getColorForImage(item, imageUrl) {
  const normalizedImageUrl = convertImageUrl(imageUrl);
  const match = Object.entries(item.colorImages || {})
    .find(([, url]) => convertImageUrl(url) === normalizedImageUrl);
  return match ? match[0] : "";
}

function getSelectedColorImage(item, selectedColor) {
  const colorOption = getColorOption(item);
  const color = selectedColor || colorOption?.values[0] || "";
  return getColorImage(item, color);
}

function getGalleryUrls(item) {
  return [...new Set([...(item.imageUrls || []), ...Object.values(item.colorImages || {})])];
}

function formatMoney(value) {
  return normalizePrice(value).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

function formatSignedMoney(value) {
  const amount = Number(value);
  if (!Number.isFinite(amount) || amount === 0) return "";
  return `${amount > 0 ? "+" : "-"}${formatMoney(Math.abs(amount))}`;
}

function findCaseInsensitiveEntry(value, key) {
  return Object.entries(value || {}).find(([entryKey]) => entryKey.toLowerCase() === String(key).toLowerCase());
}

function getOptionPrice(item, optionName, optionValue) {
  const groupEntry = findCaseInsensitiveEntry(item.optionPrices, optionName);
  if (!groupEntry) return 0;

  const valueEntry = findCaseInsensitiveEntry(groupEntry[1], optionValue);
  return valueEntry ? Number(valueEntry[1]) || 0 : 0;
}

function getUnitPrice(item, selectedOptions = []) {
  const adjustmentTotal = selectedOptions.reduce(
    (sum, option) => sum + getOptionPrice(item, option.name, option.value),
    0
  );
  return Math.max(0, normalizePrice(item.basePrice) + adjustmentTotal);
}

function getCartItemUnitPrice(cartItem) {
  const savedPrice = Number(cartItem.unitPrice);
  if (cartItem.unitPrice !== null && Number.isFinite(savedPrice)) return Math.max(0, savedPrice);

  const item = getCatalog().find((entry) => entry.id === cartItem.itemId || entry.name === cartItem.name);
  return item ? getUnitPrice(item, cartItem.options) : 0;
}

function getCartItemLineTotal(cartItem) {
  return getCartItemUnitPrice(cartItem) * cartItem.quantity;
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + getCartItemLineTotal(item), 0);
}

function createId(text) {
  const base = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  return `${base || "item"}-${Date.now().toString(36)}`;
}

function renderCatalog() {
  const catalog = getCatalog();

  if (!catalog.length) {
    catalogEl.innerHTML = '<div class="empty">No items yet. Open the backdoor to add one.</div>';
    return;
  }

  catalogEl.innerHTML = catalog.map(renderCatalogTile).join("");
}

function renderCatalogTile(item) {
  const previewImage = getSelectedColorImage(item) || item.imageUrls[0] || "";
  const image = previewImage
    ? `<img src="${escapeHtml(previewImage)}" alt="${escapeHtml(item.name)}">`
    : `<div class="image-placeholder">${escapeHtml(item.name)}</div>`;

  return `
    <article class="product-tile">
      <a class="product-link" href="product.html?id=${encodeURIComponent(item.id)}">
        <span class="product-tile-image">${image}</span>
        <span class="product-tile-body">
          <strong>${escapeHtml(item.name)}</strong>
          <span class="product-tile-price">${escapeHtml(formatMoney(item.basePrice))}</span>
          <span>${escapeHtml(item.description || "Choose options and add it to the cart.")}</span>
        </span>
      </a>
    </article>
  `;
}

function renderItemDetail(item) {
  const imageUrls = item.imageUrls || [];
  const galleryUrls = getGalleryUrls(item);
  const previewImage = getSelectedColorImage(item) || imageUrls[0] || "";
  const image = previewImage
    ? `<img src="${escapeHtml(previewImage)}" alt="${escapeHtml(item.name)}" data-main-image>`
    : `<div class="image-placeholder">${escapeHtml(item.name)}</div>`;
  const thumbnails = galleryUrls.length > 1
    ? `<div class="image-strip">${galleryUrls.map((url, index) => `<button type="button" data-thumb-image="${escapeHtml(url)}" aria-label="Show ${escapeHtml(item.name)} image ${index + 1}"><img src="${escapeHtml(url)}" alt=""></button>`).join("")}</div>`
    : "";
  const optionControls = item.options
    .map((option) => `
      <label>
        ${escapeHtml(option.name)}
        <select data-option-name="${escapeHtml(option.name)}">
          ${option.values.map((value) => {
            const adjustment = getOptionPrice(item, option.name, value);
            const priceText = adjustment ? ` (${formatSignedMoney(adjustment)})` : "";
            return `<option value="${escapeHtml(value)}">${escapeHtml(value + priceText)}</option>`;
          }).join("")}
        </select>
      </label>
    `)
    .join("");
  const defaultOptions = item.options.map((option) => ({ name: option.name, value: option.values[0] }));
  const startingPrice = getUnitPrice(item, defaultOptions);

  return `
    <article class="item-detail" data-item-id="${escapeHtml(item.id)}">
      <div class="item-image">${image}${thumbnails}</div>
      <div class="item-content">
        <div>
          <p class="item-label">Order request item</p>
          <h3>${escapeHtml(item.name)}</h3>
          <p class="item-price" data-selected-price>Selected price: ${escapeHtml(formatMoney(startingPrice))}</p>
          <p>${escapeHtml(item.description || "Select options and add it to the cart.")}</p>
        </div>
        <div class="item-options">${optionControls}</div>
        <div class="price-row">
          <span>Estimated each</span>
          <strong data-unit-price>${escapeHtml(formatMoney(startingPrice))}</strong>
        </div>
        <div class="quantity-row">
          <label>
            Quantity
            <input type="number" min="1" value="1" inputmode="numeric" data-quantity>
          </label>
          <button class="button primary" type="button" data-add-to-cart>Add to cart</button>
        </div>
      </div>
    </article>
  `;
}

function openItem(itemId) {
  const item = getCatalog().find((entry) => entry.id === itemId);
  if (!item || !itemDetailEl || !itemDetailSection) return;

  selectedItemId = itemId;
  itemDetailEl.innerHTML = renderItemDetail(item);
  itemDetailSection.hidden = false;
  itemDetailSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProductPage() {
  if (!itemDetailEl || catalogEl) return;

  const itemId = new URLSearchParams(window.location.search).get("id");
  const item = getCatalog().find((entry) => entry.id === itemId);

  if (!item) {
    itemDetailEl.innerHTML = `
      <div class="empty">
        Product not found. <a href="index.html#items-title">Return to the shop</a>.
      </div>
    `;
    return;
  }

  document.title = `${item.name} - Shirt Shop`;
  itemDetailEl.innerHTML = renderItemDetail(item);
}

function closeItemDetail(scrollToItems = true) {
  selectedItemId = "";
  if (!itemDetailSection || !itemDetailEl) return;
  itemDetailSection.hidden = true;
  itemDetailEl.innerHTML = "";
  if (scrollToItems) {
    document.querySelector("#items-title").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderCart() {
  renderCartCountBadges();
  if (cartTotalEl) cartTotalEl.textContent = formatMoney(getCartTotal());

  if (!cartEl || !cartCountEl) return;

  const totalQuantity = getCartQuantity();
  cartCountEl.textContent = `${totalQuantity} ${totalQuantity === 1 ? "item" : "items"}`;

  if (!cart.length) {
    cartEl.innerHTML = '<div class="empty">Your cart is empty.</div>';
    return;
  }

  cartEl.innerHTML = cart
    .map((cartItem) => {
      const imageUrl = getCartItemImage(cartItem);
      const unitPrice = getCartItemUnitPrice(cartItem);
      const lineTotal = getCartItemLineTotal(cartItem);
      return `
      <div class="cart-item">
        <div class="cart-item-image" data-cart-image="${escapeHtml(imageUrl)}">
          ${imageUrl ? `<img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(cartItem.name)}">` : `<div class="image-placeholder">${escapeHtml(cartItem.name)}</div>`}
        </div>
        <div>
          <strong>${escapeHtml(cartItem.quantity)} x ${escapeHtml(cartItem.name)}</strong>
          <p class="cart-item-meta">${escapeHtml(formatMoney(unitPrice))} each</p>
          <ul>
            ${cartItem.options.map((option) => `<li>${escapeHtml(option.name)}: ${escapeHtml(option.value)}</li>`).join("")}
          </ul>
        </div>
        <div class="cart-item-actions">
          <strong class="cart-item-price">${escapeHtml(formatMoney(lineTotal))}</strong>
          <button class="button danger" type="button" data-remove-cart="${escapeHtml(cartItem.id)}">Remove</button>
        </div>
      </div>
    `;
    })
    .join("");
}

function renderAdminItems() {
  const catalog = getCatalog();

  if (!catalog.length) {
    adminItems.innerHTML = '<div class="empty">No catalog items yet.</div>';
    return;
  }

  adminItems.innerHTML = catalog
    .map((item) => `
      <div class="admin-item">
        <div>
          <strong>${escapeHtml(item.name)}</strong>
        </div>
        <div class="admin-item-actions">
          <button class="button quiet" type="button" data-edit-item="${escapeHtml(item.id)}">Edit</button>
          <button class="button danger" type="button" data-delete-item="${escapeHtml(item.id)}">Delete</button>
        </div>
      </div>
    `)
    .join("");
}

function parseOptionGroups(value) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [name, rawValues] = line.split(":");
      const values = (rawValues || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      return { name: (name || "").trim(), values };
    })
    .filter((option) => option.name && option.values.length);
}

function optionsToText(options) {
  return options.map((option) => `${option.name}: ${option.values.join(", ")}`).join("\n");
}

function parseOptionPrices(value) {
  const result = {};

  value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((line) => {
      const separator = line.indexOf(":");
      if (separator < 0) return;

      const groupName = line.slice(0, separator).trim();
      const optionAndPrice = line.slice(separator + 1).trim();
      const match = optionAndPrice.match(/^(.+?)(?:\s*[,=]\s*|\s+)([+-]?\$?\d+(?:\.\d{1,2})?)$/);
      if (!groupName || !match) return;

      const optionValue = match[1].trim();
      const price = Number(match[2].replace("$", ""));
      if (!optionValue || !Number.isFinite(price)) return;

      result[groupName] = result[groupName] || {};
      result[groupName][optionValue] = price;
    });

  return result;
}

function optionPricesToText(optionPrices) {
  return Object.entries(optionPrices || {})
    .flatMap(([groupName, prices]) => (
      Object.entries(prices || {}).map(([optionValue, price]) => {
        const amount = Number(price);
        if (!Number.isFinite(amount)) return "";
        return `${groupName}: ${optionValue} ${amount >= 0 ? "+" : ""}${amount}`;
      })
    ))
    .filter(Boolean)
    .join("\n");
}

function startEditItem(itemId) {
  const item = getCatalog().find((entry) => entry.id === itemId);
  if (!item) return;

  itemForm.elements.itemId.value = item.id;
  itemForm.elements.itemName.value = item.name;
  itemForm.elements.itemDescription.value = item.description;
  itemForm.elements.itemBasePrice.value = item.basePrice || "";
  itemForm.elements.itemImageUrls.value = item.imageUrls.join("\n");
  itemForm.elements.itemColorImages.value = colorImagesToText(item.colorImages);
  itemForm.elements.itemOptions.value = optionsToText(item.options);
  itemForm.elements.itemOptionPrices.value = optionPricesToText(item.optionPrices);
  saveItemButton.textContent = "Save item";
  cancelEditButton.hidden = false;
  itemForm.scrollIntoView({ behavior: "smooth", block: "start" });
  showMessage(adminMessage, `Editing ${item.name}.`);
}

function resetItemForm() {
  itemForm.reset();
  itemForm.elements.itemId.value = "";
  saveItemButton.textContent = "Add item";
  cancelEditButton.hidden = true;
}

function addItemToCart(card) {
  const catalog = getCatalog();
  const item = catalog.find((entry) => entry.id === card.dataset.itemId);
  if (!item) return;

  const quantity = Number(card.querySelector("[data-quantity]").value || 0);
  if (quantity < 1) {
    showMessage(orderMessage, "Quantity must be at least 1.", true);
    return;
  }

  const selectedOptions = Array.from(card.querySelectorAll("[data-option-name]")).map((select) => ({
    name: select.dataset.optionName,
    value: select.value
  }));
  const selectedColor = selectedOptions.find((option) => option.name.toLowerCase().includes("color"))?.value;
  const imageUrl = getSelectedColorImage(item, selectedColor) || item.imageUrls[0] || "";
  const unitPrice = getUnitPrice(item, selectedOptions);

  cart.push({
    id: createId(item.name),
    itemId: item.id,
    name: item.name,
    imageUrl,
    quantity,
    unitPrice,
    options: selectedOptions
  });

  saveCart();
  renderCart();
  showMessage(orderMessage, `${item.name} added to cart.`);
  window.location.assign("cart.html");
}

function updatePreviewForSelection(card) {
  const catalog = getCatalog();
  const item = catalog.find((entry) => entry.id === card.dataset.itemId);
  const mainImage = card.querySelector("[data-main-image]");
  if (!item || !mainImage) return;

  const colorSelect = Array.from(card.querySelectorAll("[data-option-name]"))
    .find((select) => select.dataset.optionName.toLowerCase().includes("color"));
  const nextImage = getSelectedColorImage(item, colorSelect?.value) || item.imageUrls[0];
  if (nextImage) mainImage.src = nextImage;
}

function updatePriceForSelection(card) {
  const catalog = getCatalog();
  const item = catalog.find((entry) => entry.id === card.dataset.itemId);
  const priceEl = card.querySelector("[data-unit-price]");
  const selectedPriceEl = card.querySelector("[data-selected-price]");
  if (!item) return;

  const selectedOptions = Array.from(card.querySelectorAll("[data-option-name]")).map((select) => ({
    name: select.dataset.optionName,
    value: select.value
  }));
  const selectedPrice = formatMoney(getUnitPrice(item, selectedOptions));
  if (priceEl) priceEl.textContent = selectedPrice;
  if (selectedPriceEl) selectedPriceEl.textContent = `Selected price: ${selectedPrice}`;
}

function updateColorForThumbnail(card, imageUrl) {
  const catalog = getCatalog();
  const item = catalog.find((entry) => entry.id === card.dataset.itemId);
  if (!item) return;

  const color = getColorForImage(item, imageUrl);
  if (!color) return;

  const colorSelect = Array.from(card.querySelectorAll("[data-option-name]"))
    .find((select) => select.dataset.optionName.toLowerCase().includes("color"));
  if (!colorSelect) return;

  const matchingOption = Array.from(colorSelect.options)
    .find((option) => option.value.toLowerCase() === color.toLowerCase());
  if (matchingOption) {
    colorSelect.value = matchingOption.value;
    updatePriceForSelection(card);
  }
}


function buildOrderSummary() {
  const contact = Object.fromEntries(new FormData(orderForm).entries());
  const cartLines = cart.map((item, index) => [
    `${index + 1}. ${item.quantity} x ${item.name} - ${formatMoney(getCartItemLineTotal(item))}`,
    `   Unit price: ${formatMoney(getCartItemUnitPrice(item))}`,
    ...item.options.map((option) => `   - ${option.name}: ${option.value}`)
  ].join("\n"));

  return [
    "Shop Order Request",
    "",
    `Name: ${contact.name || ""}`,
    `Email: ${contact.email || ""}`,
    `Phone: ${contact.phone || ""}`,
    "",
    "Items:",
    cartLines.join("\n\n"),
    "",
    `Estimated total: ${formatMoney(getCartTotal())}`,
    "",
    "No payment was collected through the app."
  ].join("\n");
}

function buildOrderPayload() {
  const contact = Object.fromEntries(new FormData(orderForm).entries());
  return {
    submittedAt: new Date().toISOString(),
    contact: {
      name: contact.name || "",
      email: contact.email || "",
      phone: contact.phone || ""
    },
    items: cart.map((item) => ({
      itemId: item.itemId,
      name: item.name,
      quantity: item.quantity,
      unitPrice: getCartItemUnitPrice(item),
      lineTotal: getCartItemLineTotal(item),
      imageUrl: getCartItemImage(item),
      options: item.options
    })),
    estimatedTotal: getCartTotal(),
    summary: buildOrderSummary()
  };
}

async function submitOrder() {
  if (!orderForm.reportValidity()) return;

  if (!cart.length) {
    showMessage(orderMessage, "Add at least one item to the cart first.", true);
    return;
  }

  if (orderLogEndpoint) {
    showMessage(orderMessage, "Submitting order request...");
    try {
      await fetch(orderLogEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(buildOrderPayload())
      });
      cart = [];
      saveCart();
      renderCart();
      orderForm.reset();
      window.location.assign("thank-you.html");
    } catch {
      showMessage(orderMessage, "The order could not be submitted. Please try again.", true);
    }
    return;
  }

  const contact = Object.fromEntries(new FormData(orderForm).entries());
  const subject = encodeURIComponent(`Order request from ${contact.name}`);
  const body = encodeURIComponent(buildOrderSummary());
  window.location.href = `mailto:${requestEmail}?subject=${subject}&body=${body}`;
  showMessage(orderMessage, "Your email app should open with the order ready to send. After sending, continue to the confirmation page.");
  setTimeout(() => {
    window.location.assign("thank-you.html");
  }, 1200);
}

function showAdminPanel() {
  adminPanel.hidden = false;
  renderAdminItems();
  adminPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showMessage(element, message, isError = false) {
  if (!element) return;
  element.textContent = message;
  element.classList.toggle("error", isError);
}

function getCartQuantity() {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

function renderCartCountBadges() {
  const quantity = getCartQuantity();
  document.querySelectorAll("[data-cart-badge]").forEach((badge) => {
    badge.textContent = String(quantity);
    badge.hidden = quantity === 0;
  });
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

if (itemDetailEl) {
  const handleOptionChange = (event) => {
    if (!event.target.matches("[data-option-name]")) return;
    const card = event.target.closest("[data-item-id]");
    updatePriceForSelection(card);
    if (event.target.dataset.optionName.toLowerCase().includes("color")) {
      updatePreviewForSelection(card);
    }
  };

  itemDetailEl.addEventListener("click", (event) => {
    const thumbnail = event.target.closest("[data-thumb-image]");
    if (thumbnail) {
      const card = thumbnail.closest("[data-item-id]");
      const mainImage = card.querySelector("[data-main-image]");
      if (mainImage) mainImage.src = thumbnail.dataset.thumbImage;
      updateColorForThumbnail(card, thumbnail.dataset.thumbImage);
      return;
    }

    const button = event.target.closest("[data-add-to-cart]");
    if (!button) return;
    addItemToCart(button.closest("[data-item-id]"));
  });

  itemDetailEl.addEventListener("change", handleOptionChange);
  itemDetailEl.addEventListener("input", handleOptionChange);
}

document.querySelector("#back-to-items")?.addEventListener("click", () => closeItemDetail());

cartEl?.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-cart]");
  if (!button) return;
  cart = cart.filter((item) => item.id !== button.dataset.removeCart);
  saveCart();
  renderCart();
});

document.querySelector("#submit-order")?.addEventListener("click", submitOrder);
document.querySelector("#clear-cart")?.addEventListener("click", () => {
  cart = [];
  saveCart();
  renderCart();
  showMessage(orderMessage, "Cart cleared.");
});

document.querySelector("#show-admin")?.addEventListener("click", showAdminPanel);

itemForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(itemForm).entries());
  const options = parseOptionGroups(formData.itemOptions || "");
  const optionPrices = parseOptionPrices(formData.itemOptionPrices || "");
  const imageUrls = normalizeImageUrls(formData.itemImageUrls || "");
  const colorImages = parseColorImages(formData.itemColorImages || "");

  if (!options.length) {
    showMessage(adminMessage, "Add at least one option group like Size: S, M, L.", true);
    return;
  }

  const catalog = getCatalog();
  const nextItem = {
    id: formData.itemId || createId(formData.itemName),
    name: formData.itemName.trim(),
    description: formData.itemDescription.trim(),
    basePrice: normalizePrice(formData.itemBasePrice),
    imageUrls,
    colorImages,
    options,
    optionPrices
  };

  const existingIndex = catalog.findIndex((item) => item.id === formData.itemId);
  if (existingIndex >= 0) {
    catalog[existingIndex] = nextItem;
  } else {
    catalog.push(nextItem);
  }

  saveCatalog(catalog);
  resetItemForm();
  if (catalogEl) renderCatalog();
  if (selectedItemId === nextItem.id) openItem(nextItem.id);
  renderAdminItems();
  showMessage(adminMessage, existingIndex >= 0 ? "Item updated." : "Item added.");
});

adminItems?.addEventListener("click", (event) => {
  const editButton = event.target.closest("[data-edit-item]");
  if (editButton) {
    startEditItem(editButton.dataset.editItem);
    return;
  }

  const button = event.target.closest("[data-delete-item]");
  if (!button) return;
  const itemToDelete = getCatalog().find((item) => item.id === button.dataset.deleteItem);
  const confirmed = window.confirm(`Delete "${itemToDelete?.name || "this item"}"? This cannot be undone unless you re-import or recreate it.`);
  if (!confirmed) return;

  const catalog = getCatalog().filter((item) => item.id !== button.dataset.deleteItem);
  saveCatalog(catalog);
  cart = cart.filter((item) => item.itemId !== button.dataset.deleteItem);
  saveCart();
  if (selectedItemId === button.dataset.deleteItem) closeItemDetail(false);
  if (catalogEl) renderCatalog();
  renderCart();
  renderAdminItems();
  showMessage(adminMessage, "Item deleted.");
});

cancelEditButton?.addEventListener("click", () => {
  resetItemForm();
  showMessage(adminMessage, "Edit canceled.");
});

document.querySelector("#export-catalog")?.addEventListener("click", async () => {
  const json = JSON.stringify(getCatalog(), null, 2);
  importCatalogJson.value = json;
  try {
    await navigator.clipboard.writeText(json);
    showMessage(adminMessage, "Catalog copied and shown below.");
  } catch {
    showMessage(adminMessage, "Catalog shown below. Copy it from the import box.");
  }
});

document.querySelector("#import-catalog")?.addEventListener("click", () => {
  try {
    const catalog = normalizeCatalog(JSON.parse(importCatalogJson.value));
    if (!catalog.length) throw new Error("Catalog must include at least one valid item.");
    saveCatalog(catalog);
    cart = [];
    saveCart();
    closeItemDetail(false);
    if (catalogEl) renderCatalog();
    renderCart();
    renderAdminItems();
    showMessage(adminMessage, "Catalog imported.");
  } catch {
    showMessage(adminMessage, "That JSON does not look like a catalog export.", true);
  }
});

document.querySelector("#reset-catalog")?.addEventListener("click", () => {
  localStorage.removeItem(catalogStorageKey);
  cart = [];
  saveCart();
  closeItemDetail(false);
  if (catalogEl) renderCatalog();
  renderCart();
  renderAdminItems();
  showMessage(adminMessage, "Catalog reset to defaults.");
});

if (adminPanel && window.location.pathname.endsWith("/admin.html")) {
  renderAdminItems();
}

if (adminPanel && (window.location.hash === "#admin" || window.location.hash === "#backdoor")) {
  showAdminPanel();
}

if (catalogEl) renderCatalog();
renderProductPage();
renderCart();
