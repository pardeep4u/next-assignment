import { headers } from "next/headers";

export function getCurrentUrl() {
  const headersList = headers();
  const host = headersList.get("host");
  const protocol = headersList.get("x-forwarded-proto") || "http";
  const currentUrl = `${protocol}://${host}${
    headersList.get("x-url-path") || ""
  }`;

  return currentUrl;
}
