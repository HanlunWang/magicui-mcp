/**
 * Types for Magic UI MCP Service
 */

// Base component interface
export interface MagicUIComponent {
  name: string;
  description: string;
  metadata?: {
    title: string;
    date: string;
    description: string;
    author: string;
    published: boolean;
    video?: string;
  };
  installation: {
    pnpm: string;
    npm: string;
    yarn: string;
    bun: string;
  };
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
  }[];
  usage: string;
  credits?: {
    inspiration?: string;
    inspirationUrl?: string;
  };
  examples?: {
    name: string;
    code: string;
  }[];
}

// Button component type
export interface ButtonComponent extends MagicUIComponent {
  type: "button";
  variant?: string;
}

// Component database type
export interface ComponentDatabase {
  components: MagicUIComponent[];
  getComponentByName(name: string): MagicUIComponent | undefined;
  getComponentsByType(type: string): MagicUIComponent[];
  getAllComponents(): MagicUIComponent[];
}
