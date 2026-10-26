# Pushparaj Adka — Embedded Engineering Portfolio

A responsive, static portfolio site designed for GitHub Pages. No build step or package installation is required.

## Included
- Dark technical visual design with responsive layout
- Four interactive case studies with illustrative architecture flows
- Expertise and experience sections
- Résumé, LinkedIn, and email links
- Mobile navigation and accessible case-study dialog
- GitHub Pages deployment instructions

## Before publishing — important checks
1. Review every project narrative for accuracy and permission to disclose.
2. Add your résumé PDF to `assets/PushparajAdkaResume.pdf` (the supplied résumé is copied there if available).
3. Confirm your LinkedIn URL and email address.
4. The architecture diagrams are conceptual illustrations, not verified internal product diagrams.
5. Replace or supplement project claims with specific outcomes only where you can verify them and have permission to share them.
6. This website intentionally does not include confidential source code, product secrets, unreleased hardware details, internal network addresses, or proprietary schematics.

## Preview locally
Open `index.html` in a browser. For the best local preview, you can run a simple static server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish on GitHub Pages
1. Create a public GitHub repository named `YOUR-USERNAME.github.io` (or another repository if you prefer a project site).
2. Upload all files and folders from this package to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`, then save.
6. After GitHub Pages finishes deploying, open the URL shown in Settings → Pages.
7. Test the website on desktop and mobile, including résumé links and all four case-study dialogs.

For a project repository named `embedded-portfolio`, the site URL will normally be `https://YOUR-USERNAME.github.io/embedded-portfolio/`. For a repository named `YOUR-USERNAME.github.io`, it will normally be `https://YOUR-USERNAME.github.io/`.

## Personal links currently configured
- LinkedIn: https://www.linkedin.com/in/pushparaj-adka/
- Email: pushparajadka10@gmail.com

## Content notes
Project descriptions are based on the supplied résumé and context already shared. Some detailed engineering stories, quantitative impact, and exact architecture are marked as things to verify or add; they have not been invented.
