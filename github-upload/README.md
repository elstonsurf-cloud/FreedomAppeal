# Shirt Order Request Shop

A simple static shop-style order request app for GitHub Pages. The main page shows each item image and title, shoppers click into a separate product page to choose options, then add it to a cart page and submit an order request. It does not collect money or process payments.

## How orders work

When someone submits the cart, the app can send the order to a backend log. The easiest backend is a Google Sheet with the included `google-apps-script.js` script.

If no backend URL is added in `app.js`, the app falls back to opening a pre-filled email addressed to:

```text
joeyelstonjr@gmail.com
```

GitHub Pages is static, so it cannot save orders to a database by itself. The backend log has to be something external, such as Google Apps Script, Netlify Forms, Formspree, or another small server.

The cart is saved in the shopper's browser so it carries between `index.html`, `product.html`, and `cart.html`.

Checkout only asks for name, email, and phone number.

## Save orders to a Google Sheet

1. Create a new Google Sheet.
2. Go to Extensions -> Apps Script.
3. Paste the contents of `google-apps-script.js` into the Apps Script editor.
4. Click Deploy -> New deployment.
5. Choose Web app.
6. Set Execute as to `Me`.
7. Set Who has access to `Anyone`.
8. Deploy and copy the Web app URL.
9. In `app.js`, paste that URL into `orderLogEndpoint`:

```js
const orderLogEndpoint = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec";
```

After that, `Submit order request` logs the order into the Google Sheet instead of opening an email.

## Backdoor item editor

Open the editor by visiting:

```text
/#admin
```

Use the item form to add products. Option groups use one line per group:

```text
Size: Youth S, Youth M, Adult S, Adult M
Color: Navy, White, Gray
Print: Front only, Front and back
```

Backdoor changes save in that browser only. Use `Export catalog` to copy the item list, and `Import catalog JSON` to restore it in another browser.

Images are added with the `Image URLs` field. Put one image per line. You can use full web image URLs, or add image files to the repo and reference them with paths like:

```text
images/team-shirt-front.jpg
images/team-shirt-back.jpg
```

Google Drive share links usually point to a preview page instead of an image file. The app tries to convert common Google Drive links automatically, but the most reliable option is adding image files to the repo or using a direct image link ending in something like `.jpg`, `.png`, or `.webp`.

To change the preview image when a shirt color is selected, use `Color preview images` in the backdoor. The color names should match your `Color` or `Shirt color` option values:

```text
Navy: images/navy-shirt.jpg
White: images/white-shirt.jpg
Gray: images/gray-shirt.jpg
```

To make default items change for everyone, edit `defaultCatalog` in `app.js` before publishing.

## Run locally

Open `index.html` in a browser, or start a simple local server from this folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `product.html`, `cart.html`, `styles.css`, `app.js`, and `README.md`.
3. In the repository, go to Settings -> Pages.
4. Set the source to the main branch and root folder.
5. Save, then use the Pages URL GitHub provides.
