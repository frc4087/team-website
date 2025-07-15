# FRC Team 4087 Website

## Getting Started

### What You'll Need

Before you can work on this website, you'll need to install some tools on your computer:

#### 1. Install VSCode (Code Editor)
- Go to [https://code.visualstudio.com/](https://code.visualstudio.com/)
- Download and install VSCode for your operating system
- This is where you'll write and edit code

#### 2. Install Bun (JavaScript Runtime)
- Go to [https://bun.sh/](https://bun.sh/)
- Follow the installation instructions for your operating system
- On Mac/Linux: Open Terminal and run `curl -fsSL https://bun.sh/install | bash`
- On Windows: Open PowerShell and run `powershell -c "irm bun.sh/install.ps1 | iex"`
- Bun is like Node.js but faster - it runs our website and manages packages

### Running the Website Locally

1. **Clone this repository** (if you haven't already)
2. **Open the project in VSCode**
3. **Open the terminal in VSCode** (Terminal → New Terminal)
4. **Install dependencies** by running `bun install`
5. **Start the development server** by running `bun dev`
6. **Open your browser** and go to `http://localhost:8000` to see the website

### Project Structure

```
website/
├── README.md
├── package.json
├── astro.config.ts          # Font configuration is here
├── tsconfig.json
├── public/
│   └── icon.png
└── src/
    ├── assets/
    │   └── global.css       # Theme colors and styles are here
    ├── content/
    │   ├── blog/
    │   │   └── example-blog-post.mdx
    │   └── sponsors/        # Sponsor information
    ├── page-components/     # Reusable parts of the website
    │   ├── common/
    │   │   ├── Nav.astro
    │   │   ├── VVButton.astro
    │   │   └── ...
    │   └── index/
    ├── page-layouts/
    │   ├── BaseLayout.astro # Font settings are here
    │   └── PostLayout.astro
    └── pages/               # The main pages of the website
        ├── index.astro
        └── blog/
```

### Customizing the Website

#### Changing Colors/Themes
- Edit `src/assets/global.css` - look for the `themes:` section
- The site uses DaisyUI themes (currently set to "forest")

#### Changing Fonts
- Main font config: `astro.config.ts` (look for "Lexend")
- Font loading: `src/page-layouts/BaseLayout.astro`
- Font application: `src/assets/global.css`

### What This Website Uses

- **[Astro](https://astro.build/)** - The main framework that builds our website
- **[TailwindCSS](https://tailwindcss.com/)** - For styling and making things look good
- **[DaisyUI](https://daisyui.com/)** - Pre-built components and themes
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with type checking (helps catch errors)
