// @ts-ignore
import GhostAdminAPI from "@tryghost/admin-api";

export const ghostAdmin = new GhostAdminAPI({
  url: process.env.GHOST_API_URL,
  key: process.env.GHOST_ADMIN_API_KEY,
  version: "v3",
});
