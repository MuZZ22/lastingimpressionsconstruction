import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import { MobileCallBar } from "../components/MobileCallBar";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-bold text-accent-foreground hover:opacity-90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lasting Impressions Construction | HDD & Underground Utilities Ohio" },
      { name: "description", content: "Horizontal directional drilling, fiber optic, and underground utility installation in Perry, Ohio. Serving Northeast Ohio residential and commercial clients." },
      { name: "author", content: "Lasting Impressions Construction" },
      { property: "og:title", content: "Lasting Impressions Construction | HDD & Underground Utilities Ohio" },
      { property: "og:description", content: "Horizontal directional drilling, fiber optic, and underground utility installation in Perry, Ohio. Serving Northeast Ohio residential and commercial clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lasting Impressions Construction | HDD & Underground Utilities Ohio" },
      { name: "twitter:description", content: "Horizontal directional drilling, fiber optic, and underground utility installation in Perry, Ohio. Serving Northeast Ohio residential and commercial clients." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5720894a-a8f4-45b9-a2b7-0671bf10f3d3/id-preview-3744d733--7b0aaf74-5e49-49e9-bfb8-b0c329d314e1.lovable.app-1776788476048.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5720894a-a8f4-45b9-a2b7-0671bf10f3d3/id-preview-3744d733--7b0aaf74-5e49-49e9-bfb8-b0c329d314e1.lovable.app-1776788476048.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <MobileCallBar />
    </div>
  );
}
