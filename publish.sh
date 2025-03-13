#!/bin/bash

# Exit on error
set -e

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}Preparing to publish magicui-mcp to npm...${NC}"

# Check if user is logged in to npm
echo -e "${YELLOW}Checking npm login status...${NC}"
npm whoami || (echo -e "${YELLOW}You need to login to npm first. Run 'npm login' and try again.${NC}" && exit 1)

# Build the package
echo -e "${YELLOW}Building package...${NC}"
npm run build

# Run tests if they exist
if grep -q "\"test\":" package.json && ! grep -q "\"test\": \"echo \\\"Error: no test specified\\\" && exit 1\"" package.json; then
  echo -e "${YELLOW}Running tests...${NC}"
  npm test
fi

# Confirm version
PACKAGE_VERSION=$(node -p "require('./package.json').version")
echo -e "${YELLOW}Current version is ${PACKAGE_VERSION}. Is this correct? (y/n)${NC}"
read -r answer
if [ "$answer" != "y" ]; then
  echo -e "${YELLOW}Please update the version in package.json and try again.${NC}"
  exit 1
fi

# Publish to npm
echo -e "${YELLOW}Publishing to npm...${NC}"
npm publish

echo -e "${GREEN}Successfully published magicui-mcp v${PACKAGE_VERSION} to npm!${NC}"
echo -e "${GREEN}Your package can now be installed with:${NC}"
echo -e "${GREEN}npm install -g magicui-mcp${NC}"
echo -e "${GREEN}or used directly with:${NC}"
echo -e "${GREEN}npx magicui-mcp${NC}" 