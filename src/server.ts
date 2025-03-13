import {
  McpServer,
  ResourceTemplate,
} from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { componentDatabase } from "./database";
import { MagicUIComponent } from "./types";

/**
 * Configuration options for the Magic UI MCP Server
 */
export interface MagicUIMcpServerOptions {
  port?: number;
}

/**
 * Magic UI MCP Server
 * Provides tools and resources for AI to understand and use Magic UI components
 */
export class MagicUIMcpServer {
  private server: McpServer;
  public readonly port: number;

  constructor(options: MagicUIMcpServerOptions = {}) {
    this.port = options.port || 3000;

    this.server = new McpServer({
      name: "magicui-mcp",
      version: "1.0.0",
    });

    this.registerTools();
    this.registerResources();
    this.registerPrompts();
  }

  /**
   * Register all tools for the MCP server
   */
  private registerTools(): void {
    // Tool to get a specific component by name
    this.server.tool(
      "getComponent",
      { name: z.string().min(1) },
      async (params) => {
        const name = params.name;
        const component = componentDatabase.getComponentByName(name);

        if (!component) {
          return {
            content: [
              {
                type: "text",
                text: `Component "${name}" not found in Magic UI library.`,
              },
            ],
            isError: true,
          };
        }

        return {
          content: [
            {
              type: "text",
              text: this.formatComponentDetails(component),
            },
          ],
        };
      }
    );

    // Tool to get all components of a specific type (e.g., "button")
    this.server.tool(
      "getComponentsByType",
      { type: z.string().min(1) },
      async (params) => {
        const type = params.type;
        const components = componentDatabase.getComponentsByType(type);

        if (components.length === 0) {
          return {
            content: [
              {
                type: "text",
                text: `No components of type "${type}" found in Magic UI library.`,
              },
            ],
            isError: true,
          };
        }

        const componentsList = components
          .map((comp) => `- ${comp.name}: ${comp.description}`)
          .join("\n");

        return {
          content: [
            {
              type: "text",
              text: `Found ${components.length} components of type "${type}":\n\n${componentsList}`,
            },
          ],
        };
      }
    );

    // Tool to get all available components
    this.server.tool("getAllComponents", {}, async () => {
      const components = componentDatabase.getAllComponents();

      const componentsList = components
        .map((comp) => `- ${comp.name}: ${comp.description}`)
        .join("\n");

      return {
        content: [
          {
            type: "text",
            text: `Available Magic UI components:\n\n${componentsList}`,
          },
        ],
      };
    });
  }

  /**
   * Register all resources for the MCP server
   */
  private registerResources(): void {
    // Resource to get information about a specific component
    this.server.resource("component", "component://{name}", async (uri) => {
      // Extract name from the URL path
      const name = uri.pathname.split("/").pop() || "";
      const component = componentDatabase.getComponentByName(name);

      if (!component) {
        return {
          contents: [
            {
              uri: uri.toString(),
              text: `Component "${name}" not found in Magic UI library.`,
            },
          ],
        };
      }

      return {
        contents: [
          {
            uri: uri.toString(),
            text: this.formatComponentDetails(component),
          },
        ],
      };
    });

    // Resource to get all components of a specific type
    this.server.resource(
      "components-by-type",
      "components://{type}",
      async (uri) => {
        // Extract type from the URL path
        const type = uri.pathname.split("/").pop() || "";
        const components = componentDatabase.getComponentsByType(type);

        if (components.length === 0) {
          return {
            contents: [
              {
                uri: uri.toString(),
                text: `No components of type "${type}" found in Magic UI library.`,
              },
            ],
          };
        }

        const componentsList = components
          .map((comp) => `- ${comp.name}: ${comp.description}`)
          .join("\n");

        return {
          contents: [
            {
              uri: uri.toString(),
              text: `Found ${components.length} components of type "${type}":\n\n${componentsList}`,
            },
          ],
        };
      }
    );

    // Resource to get all available components
    this.server.resource("all-components", "components://all", async (uri) => {
      const components = componentDatabase.getAllComponents();

      const componentsList = components
        .map((comp) => `- ${comp.name}: ${comp.description}`)
        .join("\n");

      return {
        contents: [
          {
            uri: uri.toString(),
            text: `Available Magic UI components:\n\n${componentsList}`,
          },
        ],
      };
    });
  }

  /**
   * Register all prompts for the MCP server
   */
  private registerPrompts(): void {
    // Prompt to help select a component based on requirements
    this.server.prompt(
      "select-component",
      {
        type: z.string().optional(),
        requirements: z.string(),
      },
      (params) => {
        const type = params.type;
        const requirements = params.requirements;

        let promptText = `Please help me select a Magic UI component that meets these requirements: ${requirements}`;

        if (type) {
          promptText += `\nI'm specifically looking for a component of type: ${type}`;
        }

        promptText += `\n\nPlease consider the available components and recommend the best match, explaining why it's suitable.`;

        return {
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: promptText,
              },
            },
          ],
        };
      }
    );
  }

  /**
   * Format component details for display
   * @param component The component to format
   * @returns Formatted component details as a string
   */
  private formatComponentDetails(component: MagicUIComponent): string {
    let result = `# ${component.name}\n\n`;

    // Add metadata if available
    if (component.metadata) {
      result += `## Metadata\n`;
      result += `- Title: ${component.metadata.title}\n`;
      result += `- Date: ${component.metadata.date}\n`;
      result += `- Author: ${component.metadata.author}\n`;
      result += `- Published: ${component.metadata.published ? "Yes" : "No"}\n`;
      if (component.metadata.video) {
        result += `- Video: ${component.metadata.video}\n`;
      }
      result += `\n`;
    }

    result += `## Description\n${component.description}\n\n`;

    result += `## Installation\n`;
    result += `- pnpm: \`${component.installation.pnpm}\`\n`;
    result += `- npm: \`${component.installation.npm}\`\n`;
    result += `- yarn: \`${component.installation.yarn}\`\n`;
    result += `- bun: \`${component.installation.bun}\`\n\n`;

    if (component.props && component.props.length > 0) {
      result += `## Props\n`;
      result += `| Prop | Type | Default | Description |\n`;
      result += `| ---- | ---- | ------- | ----------- |\n`;

      for (const prop of component.props) {
        result += `| \`${prop.name}\` | \`${prop.type}\` | \`${
          prop.default || "N/A"
        }\` | ${prop.description} |\n`;
      }

      result += `\n`;
    }

    result += `## Usage\n\`\`\`tsx\n${component.usage}\n\`\`\``;

    // Add examples if available
    if (component.examples && component.examples.length > 0) {
      result += `\n\n## Examples\n`;
      for (const example of component.examples) {
        result += `### ${example.name}\n\`\`\`tsx\n${example.code}\n\`\`\`\n\n`;
      }
    }

    // Add credits if available
    if (component.credits) {
      result += `\n\n## Credits\n`;
      if (component.credits.inspiration) {
        result += `- Inspiration: ${component.credits.inspiration}\n`;
      }
      if (component.credits.inspirationUrl) {
        result += `- Inspiration URL: ${component.credits.inspirationUrl}\n`;
      }
    }

    return result;
  }

  /**
   * Start the MCP server
   */
  async start(): Promise<void> {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error(`Magic UI MCP Server started on port ${this.port}`);
  }
}

// Create and start the server if this file is run directly
if (typeof require !== "undefined" && require.main === module) {
  const server = new MagicUIMcpServer();
  server.start().catch(console.error);
}
