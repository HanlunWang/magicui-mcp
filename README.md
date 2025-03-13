# Model Context Protocol (MCP) for Magic UI Components

This MCP server provides AI assistants with comprehensive information about Magic UI components, enabling them to effectively understand, recommend, and use these components in development projects.

> **Note:** This is an MCP wrapper for [Magic UI](https://magicui.design/), a beautiful UI component library. Visit the [original repository](https://github.com/magicuidesign/magicui) for more information.

## Overview

The Magic UI MCP service allows AI to:

- Access detailed documentation for Magic UI components
- Discover components by name or type
- Get installation and usage instructions
- Understand component props and API
- Receive recommendations for specific use cases

## Installation

The package is now available on npm and can be installed using the following commands:

### Option 1: Install globally from npm

```bash
# Install globally
npm install -g magicui-mcp
# or
npm i -g magicui-mcp

# Run the server
magicui-mcp
```

### Option 2: Use with npx (no installation required)

```bash
npx magicui-mcp
```

### Option 3: Clone and build from source

```bash
# Clone the repository
git clone https://github.com/HanlunWang/magicui-mcp.git
cd magicui-mcp

# Install dependencies
npm install

# Build the project
npm run build

# Run the server
npm start
```

## CLI Options

```
Usage:
  npx magicui-mcp [options]

Options:
  -h, --help      Show this help message
  -v, --version   Show version information
  -p, --port      Specify the port to run the server on (default: 3000)
```

## Using with Claude for Desktop

1. Make sure you have [Claude for Desktop](https://claude.ai/download) installed and updated
2. Open your Claude configuration file:

```bash
# On macOS
code ~/Library/Application\ Support/Claude/claude_desktop_config.json

# On Windows
code %APPDATA%\Claude\claude_desktop_config.json
```

3. Add the Magic UI MCP server to your configuration:

```json
{
  "mcpServers": {
    "magicui": {
      "command": "npx",
      "args": ["magicui-mcp"]
    }
  }
}
```

4. Save the file and restart Claude for Desktop
5. You should now see the hammer icon in the chat interface indicating MCP tools are available

## Using with Cursor

1. Make sure you have [Cursor](https://cursor.sh/) installed and updated
2. Open Cursor and ensure the Cursor Composer is enabled
3. Open the MCP configuration panel in Cursor's settings
4. Add a new MCP server with the following settings:
   - Name: Magic UI
   - Command: `npx`
   - Arguments: `magicui-mcp`
5. Save the configuration
6. The Magic UI MCP tools should now be available in the Cursor Composer

## Available Tools

The Magic UI MCP server provides the following tools:

- **getComponent**: Retrieve detailed information about a specific component by name
- **getComponentsByType**: Find components by their type (e.g., "button", "input")
- **getAllComponents**: List all available Magic UI components

## Example Queries

When using Claude or Cursor with the Magic UI MCP:

- "What components are available in Magic UI?"
- "Show me how to use the ShimmerButton component"
- "I need a button with a glowing effect, what component should I use?"
- "What props does the GlowButton accept?"
- "Help me implement a Magic UI component for my React application"

## Contributing

To add or update component information, modify the `database.ts` file in the `src` directory and rebuild the project.

## License

MIT
