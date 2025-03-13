#!/usr/bin/env node

/**
 * Magic UI MCP CLI
 *
 * This file is the entry point when the package is used with npx.
 */

import { MagicUIMcpServer } from "./server";

// Parse command line arguments
const args = process.argv.slice(2);
const helpRequested = args.includes("--help") || args.includes("-h");
const versionRequested = args.includes("--version") || args.includes("-v");
const port = args.find(
  (arg, index) => (arg === "--port" || arg === "-p") && args.length > index + 1
)
  ? parseInt(
      args[args.findIndex((arg) => arg === "--port" || arg === "-p") + 1],
      10
    )
  : undefined;

if (versionRequested) {
  const packageJson = require("../package.json");
  console.error(`magicui-mcp v${packageJson.version}`);
  process.exit(0);
}

if (helpRequested) {
  console.error(`
Magic UI MCP Service

Usage:
  npx magicui-mcp [options]

Options:
  -h, --help      Show this help message
  -v, --version   Show version information
  -p, --port      Specify the port to run the server on (default: 3000)

Description:
  Starts a Model Context Protocol (MCP) server for Magic UI components.
  This service provides AI with information about Magic UI components,
  allowing it to understand and use them effectively.
  `);
  process.exit(0);
}

// Start the server
console.error("Starting Magic UI MCP Server...");
const server = new MagicUIMcpServer({ port });
server
  .start()
  .then(() => {
    console.error(`Magic UI MCP Server is running on port ${server.port}`);
    console.error("Press Ctrl+C to stop the server");
  })
  .catch((error) => {
    console.error("Failed to start Magic UI MCP Server:", error);
    process.exit(1);
  });
