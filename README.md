# Magic UI MCP Service

A Model Context Protocol (MCP) service that provides AI with information about Magic UI components, allowing it to understand and use them effectively.

## Overview

This MCP service enables AI to:

- Discover available Magic UI components
- Get detailed information about specific components
- Find components by type (e.g., buttons)
- Understand component installation and usage
- Select appropriate components based on requirements

## Features

- **Component Information**: Get detailed information about Magic UI components, including descriptions, installation instructions, props, and usage examples.
- **Component Discovery**: Find components by name or type.
- **Component Selection**: Get help selecting the most appropriate component for specific requirements.

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/magicui-mcp.git
cd magicui-mcp

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Starting the MCP Server

```bash
# Start the server
npm start
```

### Using with AI Tools

This MCP service can be used with any AI tool that supports the Model Context Protocol. When connected, the AI can:

1. **Get Component Information**:

   - Get details about a specific component (e.g., ShimmerButton)
   - View installation instructions, props, and usage examples

2. **Discover Components**:

   - List all available components
   - Find components by type (e.g., buttons)

3. **Select Components**:
   - Get help selecting the most appropriate component based on requirements

## Available Components

Currently, the service includes information about the following Magic UI components:

- **ShimmerButton**: A button with a shimmering light which travels around the perimeter.
- **GlowButton**: A button with a glowing effect on hover.

## Development

### Project Structure

```
magicui-mcp/
├── src/
│   ├── index.ts        # Main entry point
│   ├── server.ts       # MCP server implementation
│   ├── database.ts     # Component database
│   └── types.ts        # TypeScript type definitions
├── dist/               # Compiled JavaScript files
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

### Adding New Components

To add new Magic UI components to the database, edit the `database.ts` file and add the component information to the `initializeComponents` method.

## License

MIT
