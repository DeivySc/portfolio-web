# Portfolio Deployment Guide (Netlify)

This guide will help you deploy your React portfolio application using Netlify. Netlify is a great platform for hosting static websites (like React apps) and offers a generous free tier.

**Before you begin:**
* Ensure you have pushed your latest code (including the `build` folder if you choose manual deployment, though not recommended for CI/CD) to a GitHub repository (or GitLab/Bitbucket).
* Replace placeholder values in your application:
    *   **GitHub Username**: In `src/components/Projects/Projects.js` and `src/components/Footer/Footer.js`, replace `'octocat'` with your actual GitHub username.
    *   **LinkedIn URL**: In `src/components/Footer/Footer.js`, update the placeholder LinkedIn profile URL.
    *   **"Sobre mi"**: In `src/components/About/About.js`, fill in your personal "Sobre mi" (About Me) text.
* After making these changes, commit and push them to your Git repository. Then, run `npm run build` again locally if you plan a manual deploy, or let Netlify build it if connecting to Git.

There are two main ways to deploy to Netlify:

## Option 1: Deploying by Connecting to a Git Repository (Recommended)

This method enables continuous deployment: Netlify will automatically rebuild and redeploy your site whenever you push changes to your connected Git repository.

1.  **Sign up/Log in to Netlify:**
    *   Go to [https://www.netlify.com/](https://www.netlify.com/) and sign up for a free account or log in if you already have one. Using your GitHub account to sign up can simplify the process.

2.  **Add a New Site:**
    *   From your Netlify dashboard, click on "Sites", then "Add new site" > "Import an existing project".

3.  **Connect to Your Git Provider:**
    *   Click on the Git provider where your portfolio code is hosted (e.g., GitHub, GitLab, Bitbucket).
    *   Authorize Netlify to access your repositories.

4.  **Select Your Repository:**
    *   Choose the repository for your portfolio.

5.  **Configure Build Settings:**
    *   **Branch to deploy:** Usually `main` or `master`.
    *   **Build command:** `npm run build` (or `yarn build`)
    *   **Publish directory:** `build` (or `portfolio-app/build` if your React app is in a subdirectory of the repo).
        *   *Important*: If your `package.json` is in `portfolio-app/` relative to the root of your repository, and you are deploying the whole repository, Netlify might need the "Base directory" to be set to `portfolio-app`. Then the publish directory would just be `build`. If your repository *is* the `portfolio-app` directory, then leave "Base directory" empty.

6.  **Deploy Site:**
    *   Click "Deploy site". Netlify will start building and deploying your application.
    *   Once deployed, Netlify will provide you with a unique URL (e.g., `random-name.netlify.app`). You can customize this later or add a custom domain.

## Option 2: Manual Deployment (Drag and Drop)

This is simpler for a one-time deployment but doesn't offer continuous deployment.

1.  **Build Your Project Locally:**
    *   Open your terminal in the `portfolio-app` directory.
    *   Run the command `npm run build`. This will create a `build` folder in your project directory.

2.  **Sign up/Log in to Netlify:**
    *   Go to [https://www.netlify.com/](https://www.netlify.com/) and sign up or log in.

3.  **Drag and Drop:**
    *   In your Netlify dashboard, go to the "Sites" section.
    *   Drag the **contents** of your local `build` folder (not the folder itself) onto the designated drag-and-drop area.

4.  **Deployed!**
    *   Netlify will upload the files and provide you with a URL for your live site.

## Custom Domain (Optional)

Once your site is live, you can:
*   **Change the site name:** In Netlify, go to "Site settings" > "General" > "Site details" > "Change site name".
*   **Add a custom domain:** If you own a domain name (e.g., `yourname.com`), you can configure it in "Site settings" > "Domain management".

---

Congratulations on deploying your portfolio!
