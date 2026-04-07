@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 140 20% 98%;
    --foreground: 150 30% 12%;

    --card: 0 0% 100%;
    --card-foreground: 150 30% 12%;

    --popover: 0 0% 100%;
    --popover-foreground: 150 30% 12%;

    --primary: 152 45% 22%;
    --primary-foreground: 0 0% 100%;

    --secondary: 148 20% 94%;
    --secondary-foreground: 152 45% 22%;

    --muted: 140 15% 93%;
    --muted-foreground: 150 10% 45%;

    --accent: 152 60% 36%;
    --accent-foreground: 0 0% 100%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 100%;

    --border: 148 20% 88%;
    --input: 148 20% 88%;
    --ring: 152 45% 22%;

    --radius: 0.625rem;

    /* Custom tokens */
    --green-50: 140 30% 97%;
    --green-100: 142 28% 92%;
    --green-200: 144 25% 82%;
    --green-300: 148 30% 65%;
    --green-400: 152 40% 45%;
    --green-500: 152 50% 32%;
    --green-600: 152 55% 24%;
    --green-700: 154 55% 18%;
    --green-800: 156 50% 13%;
    --green-900: 158 45% 8%;

    --gold: 38 70% 55%;
    --gold-foreground: 38 80% 20%;

    --sidebar-background: 154 30% 96%;
    --sidebar-foreground: 150 30% 12%;
    --sidebar-primary: 152 45% 22%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 148 20% 92%;
    --sidebar-accent-foreground: 152 45% 22%;
    --sidebar-border: 148 20% 88%;
    --sidebar-ring: 152 45% 22%;
  }
}

@layer base {
  * {
    @apply border-border;
  }

  html {
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    @apply bg-background text-foreground font-sans;
    overflow-wrap: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    text-wrap: balance;
    overflow-wrap: break-word;
  }

  p {
    text-wrap: pretty;
  }
}

@layer utilities {
  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500;
  }

  .glass-nav {
    background: hsla(140, 20%, 98%, 0.8);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
  }

  .section-padding {
    @apply py-20 md:py-28 px-4;
  }

  .section-padding-sm {
    @apply py-14 md:py-20 px-4;
  }
}

/* Scroll reveal base */
.reveal-up {
  opacity: 0;
  transform: translateY(20px);
  filter: blur(4px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-up.revealed {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.reveal-left {
  opacity: 0;
  transform: translateX(-20px);
  filter: blur(4px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-left.revealed {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}

.reveal-right {
  opacity: 0;
  transform: translateX(20px);
  filter: blur(4px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-right.revealed {
  opacity: 1;
  transform: translateX(0);
  filter: blur(0);
}

.reveal-scale {
  opacity: 0;
  transform: scale(0.95);
  filter: blur(4px);
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.7s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.reveal-scale.revealed {
  opacity: 1;
  transform: scale(1);
  filter: blur(0);
}
