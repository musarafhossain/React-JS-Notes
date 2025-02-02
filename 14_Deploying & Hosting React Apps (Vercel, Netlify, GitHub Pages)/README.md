# **Chapter 14: Deploying & Hosting React Apps (Vercel, Netlify, GitHub Pages)**

Once you’ve built a React application, the next step is **deploying** it so users can access it online. In this chapter, we’ll explore different **deployment options**, including **Vercel, Netlify, and GitHub Pages**. We will also cover how to optimize the build for production.

---

## **14.1 Preparing a React App for Deployment**

Before deploying, ensure the app is optimized for production:

1. **Run a Production Build**  
   React applications need to be built for production to improve performance. Use the following command:

   ```bash
   npm run build
   ```

   This command creates an optimized production-ready version of your app in the `build/` folder.

2. **Check for Errors**  
   Run the app locally in production mode:

   ```bash
   serve -s build
   ```

   If `serve` is not installed, install it using:

   ```bash
   npm install -g serve
   ```

---

## **14.2 Deploying React Apps on Vercel**
[Vercel](https://vercel.com/) is one of the best hosting platforms for React apps, offering free SSL, fast global deployment, and easy integration with GitHub.

### **14.2.1 Steps to Deploy on Vercel**
1. Install the Vercel CLI:

   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:

   ```bash
   vercel login
   ```

3. Deploy the project:

   ```bash
   vercel
   ```

4. Follow the prompts:
   - Choose a project name.
   - Select build settings (default works for most cases).
   - Wait for deployment to complete.

5. Your app will be deployed, and you’ll get a live URL like:

   ```
   https://your-project-name.vercel.app
   ```

---

## **14.3 Deploying React Apps on Netlify**
[Netlify](https://www.netlify.com/) is another popular hosting service that provides automatic deployments and continuous integration.

### **14.3.1 Steps to Deploy on Netlify**
#### **Option 1: Using Netlify CLI**
1. Install Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Log in to Netlify:

   ```bash
   netlify login
   ```

3. Deploy the project:

   ```bash
   netlify deploy --prod
   ```

4. Select the `build/` directory when prompted.

5. Your app will be deployed with a URL like:

   ```
   https://your-project-name.netlify.app
   ```

#### **Option 2: Using Netlify GitHub Integration**
1. Push your project to **GitHub**.
2. Go to [Netlify](https://app.netlify.com/) and log in.
3. Click **New Site from Git** and connect your GitHub repository.
4. Select your React project and set the **Build Command** to:

   ```
   npm run build
   ```

5. Click **Deploy** and wait for the process to complete.

---

## **14.4 Deploying React Apps on GitHub Pages**
GitHub Pages is a free way to host static websites directly from a GitHub repository.

### **14.4.1 Steps to Deploy on GitHub Pages**
1. Install `gh-pages`:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Update `package.json`:

   Add a **homepage** field:

   ```json
   "homepage": "https://your-username.github.io/your-repository-name"
   ```

   Modify the `scripts` section:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Push your project to GitHub:

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

4. Run the deploy command:

   ```bash
   npm run deploy
   ```

5. Your app will be live at:

   ```
   https://your-username.github.io/your-repository-name
   ```

---

## **14.5 Choosing the Best Deployment Platform**
| Feature          | Vercel | Netlify | GitHub Pages |
|-----------------|--------|---------|-------------|
| **Ease of Use** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Free SSL**    | ✅ | ✅ | ✅ |
| **CI/CD Support** | ✅ | ✅ | ❌ |
| **Custom Domain** | ✅ | ✅ | ✅ |
| **Best For**    | Full-Stack Apps | Static & Serverless | Simple Static Sites |

### **Which one should you use?**
- **Use Vercel** if you're deploying **Next.js** or full-stack applications.
- **Use Netlify** if you want an easy way to deploy static **React apps with CI/CD**.
- **Use GitHub Pages** for **basic static React apps** with minimal setup.

---

## **14.6 Custom Domains & HTTPS**
If you have a custom domain (e.g., `www.example.com`), you can connect it to your hosting provider:

- **Vercel & Netlify**:  
  - Go to your project settings → Custom Domains.
  - Add your domain and follow the DNS setup instructions.

- **GitHub Pages**:  
  - Go to **Repository → Settings → Pages**.
  - Add your custom domain under **Custom domain**.

---

## **🚀 Chapter Summary**
✔ **Vercel**: Best for Next.js and modern React apps.  
✔ **Netlify**: Great for static sites and offers an easy GitHub integration.  
✔ **GitHub Pages**: Free and simple but limited to static sites.  
✔ **Custom Domains**: Can be added to all platforms for a professional look.

---
