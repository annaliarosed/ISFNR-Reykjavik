# ISFNR Minisite Plugin

This WordPress plugin embeds the ISFNR React-based minisite directly into a page. It's designed to be easy to deploy for non-developers, while also allowing developers to make changes if needed.

---

## How to Deploy the Plugin

If you just want to use the plugin (no code changes needed):

1. Create a new folder (e.g. `isfnr-minisite`)
2. Copy into it:
   - `mini-site.php`
   - the `build/` folder (already included in this repository)
3. Zip the folder.
4. Upload the ZIP via **WordPress Admin → Plugins → Add New → Upload Plugin**
5. Activate the plugin.

This will render the minisite inside the ISFNR site.

---

## For Developers: Making Changes to the Minisite

You only need to do this section **if you want to make changes to the React code**.

1. Make sure you have [Node.js](https://nodejs.org/) installed.
2. From the plugin root, install dependencies:
   `npm install`
3. Start the local dev server (optional):
    `npm run dev`
4. When you're ready to deploy changes:
    `npm run build`
