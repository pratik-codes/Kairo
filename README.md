# Kairo - AI-Powered Personal Tutor

Your personal AI tutor that never sleeps. Transform how you learn with custom animations, interactive content, and personalized explanations tailored to your learning style and pace.

![Kairo AI Tutor](https://dwdwn8b5ye.ufs.sh/f/MD2AM9SEY8GucGJl7b5qyE7FjNDKYduLOG2QHWh3f5RgSi0c)

## Features

### Core Learning Experience
- 🧠 **AI-Powered Tutoring** - Personalized explanations adapted to your knowledge level
- 🎨 **Custom Animations** - Visual learning through interactive animations and content
- 💬 **Natural Conversation** - Chat with Kairo like a human tutor
- 📚 **Any Subject Support** - From mathematics to history, languages to professional skills
- 🔄 **Spaced Repetition** - Optimized retention and recall timing
- 📱 **Kairo Shorts** - Bite-sized educational videos (30-60 seconds) for learning while scrolling

### Platform Integrations
- 📝 **Notion Integration** - Transform your notes into interactive learning experiences
- 🗂️ **Google Docs Support** - Import and enhance your existing documents
- 🔗 **Obsidian Connectivity** - Leverage your knowledge graphs for dynamic learning paths
- 🔄 **Cross-Platform Sync** - Unified dashboard for all your content

### Technology Stack
- ⚡ **Next.js 15** - The latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 📘 **TypeScript** - Type-safe code
- 🔒 **Authentication** - Clerk integration with persistent authorization
- 🎭 **Shadcn/ui** - Beautiful and accessible components
- 💾 **Convex DB** - Real-time database with built-in file storage and serverless functions
- 💳 **Polar.sh** - Open-source solution for managing subscriptions and payments

### Performance Optimizations
- 🚀 **Route Prefetching** - Instant page transitions
- 🖼️ **Optimized Images** - Eager loading for critical images
- 🌓 **Dark/Light Mode** - System-aware theme switching
- 📱 **Responsive Design** - Mobile-first approach
- 🔄 **Real-time Updates** - Powered by Convex DB's real-time capabilities

## Convex DB Integration

To set up your Convex database, visit: [https://convex.link/rasmicstarter](https://convex.link/rasmicstarter)

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/michaelshimeles/nextjs14-starter-template.git
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```env
# Authentication (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Convex
NEXT_PUBLIC_CONVEX_URL=
CONVEX_DEPLOYMENT=
CONVEX_ADMIN_KEY=

# Polar.sh
POLAR_WEBHOOK_SECRET=

# Frontend
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Optional: AI Integration
OPENAI_API_KEY=
```

5. Run the development server:
```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to start your learning journey with Kairo.

## Project Structure

```
├── app/
│   ├── (auth)/         # Authentication routes
│   ├── (marketing)/    # Marketing and landing pages
│   ├── (pages)/        # Additional pages (waitlist, etc.)
│   ├── api/           # API routes
│   ├── dashboard/     # User dashboard
│   └── playground/    # AI chat playground
├── components/
│   ├── homepage/     # Landing page components
│   ├── shared/       # Shared UI components
│   └── wrapper/      # Layout wrappers and navigation
├── config/           # Configuration files
├── convex/          # Convex DB schema and functions
├── lib/             # Utility functions
├── public/          # Static assets
│   ├── images/      # Image assets
│   └── svg/         # SVG assets
└── styles/          # Global styles
```

## Key Features Explained

### Personalized Learning
Kairo analyzes your learning patterns, strengths, and preferences to create a truly personalized tutoring experience. Ask about any concept and get clear, conversational explanations adapted to your knowledge level.

### Interactive Content
Transform static notes into dynamic learning experiences with custom animations, visual explanations, and interactive recall tools that make complex concepts easier to understand.

### Kairo Shorts
Beat brain rot with bite-sized learning! AI-generated short-form videos (30-60 seconds) based on your study history and interests, turning your social media scrolling into productive learning time.

### Platform Integration
Connect your existing tools like Notion, Google Docs, and Obsidian. Kairo transforms your notes and documents into interactive learning experiences while maintaining your existing workflow.

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run format` - Format code with Prettier

## Sponsors and Supporters

Special thanks to [Convex](https://www.convex.dev/) for their sponsorship and support in making this AI-powered learning platform possible. Their real-time database and file storage solutions have been instrumental in creating a seamless learning experience.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you find Kairo helpful for your learning journey, please give it a ⭐️ on GitHub!

---

**Ready to transform your learning experience?** Join thousands of learners who are already experiencing the future of education with Kairo's revolutionary AI-powered tutoring platform.
