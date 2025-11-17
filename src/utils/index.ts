export const createPageUrl = (pageName: string): string => {
  if (pageName === "Home") {
    return "/";
  }
  return `/${pageName.toLowerCase().replace(/\s+/g, "-")}`;
};
