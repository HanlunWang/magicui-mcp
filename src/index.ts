/**
 * Magic UI MCP Service
 *
 * This service provides AI with information about Magic UI components,
 * allowing it to understand and use them effectively.
 */

import { MagicUIMcpServer } from "./server";

// Export the MagicUIMcpServer class
export { MagicUIMcpServer };

// Start the server if this file is run directly
if (typeof require !== "undefined" && require.main === module) {
  const server = new MagicUIMcpServer();
  server.start().catch(console.error);
}
