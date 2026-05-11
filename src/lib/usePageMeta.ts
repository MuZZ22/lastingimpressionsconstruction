import { useEffect } from "react";

type Meta = {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
};

function setMeta(selector: string, attr: string, value: string) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    const [, key, name] = selector.match(/\[([^=]+)="([^"]+)"\]/) || [];
    if (key && name) el.setAttribute(key, name);
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

export function usePageMeta({ title, description, ogTitle, ogDescription, ogImage }: Meta) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) setMeta('meta[name="description"]', "content", description);
    if (ogTitle) setMeta('meta[property="og:title"]', "content", ogTitle);
    if (ogDescription) setMeta('meta[property="og:description"]', "content", ogDescription);
    if (ogImage) {
      setMeta('meta[property="og:image"]', "content", ogImage);
      setMeta('meta[name="twitter:image"]', "content", ogImage);
    }
  }, [title, description, ogTitle, ogDescription, ogImage]);
}
