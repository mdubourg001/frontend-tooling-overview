# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a visual interactive frontend tooling overview website built with Astro and React. The main feature is an interactive graph visualization showing relationships between frontend development tools, categorized by their purpose (bundlers, compilers, runtimes, etc.).

**Live site**: https://frontend-tooling-overview.netlify.app

## Architecture

### Core Technology Stack

- **Astro**: Static site generator with React integration
- **React**: Component library for interactive UI
- **TypeScript**: Type safety across the codebase
- **Tailwind CSS**: Utility-first CSS framework
- **ReactFlow**: Interactive node graph visualization
- **D3 Force**: Physics simulation for node positioning

### Key Components Structure

- `ToolingGraph`: Main interactive graph component with force simulation
- `Tool`: Individual tool node component
- `CategoryFilters`: Left sidebar with category filters and controls
- `Modal components`: Tool/category detail modals
- `useLayoutedElements`: Custom hook managing D3 force simulation
- `useModal`: Modal state management hook

### Data Architecture

- `constants.tsx`: Contains all tool data and categories as static objects
- `types.ts`: TypeScript definitions for tools and categories
- Tool data includes: name, description, category flags, relationships (uses/related), positioning, and metadata

## Development Commands

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Key Features

### Interactive Graph

- **Force Simulation**: Uses D3 forces for automatic node positioning
- **Drag & Drop**: Nodes can be dragged while simulation runs
- **Filtering**: Category-based filtering with visual emphasis
- **Relationships**: Shows "uses" (directed) and "related" (undirected) connections

### State Management

- **URL State**: Category/tool focus managed via query parameters (nuqs)
- **Local State**: Filter states, simulation control, modal visibility
- **Simulation State**: Physics simulation running/paused state

### Modal System

- **Tool Details**: Individual tool information and relationships
- **Category Details**: Category description with tool listings
- **What Modal**: Project explanation

## Data Management

### Adding New Tools

1. Add tool object to `TOOLS` in `constants.tsx`
2. Include category boolean flags, relationships, and positioning
3. Ensure TypeScript types are satisfied

### Adding New Categories

1. Add category to `CATEGORIES` array in `constants.tsx`
2. Add corresponding boolean flag to tool objects
3. Update `CategoryKey` type automatically inferred

## Development Notes

### Performance Considerations

- Force simulation can be CPU intensive - toggle controls provided
- React Flow handles virtualization for large node sets
- Memoization used for filtered nodes/edges

### Positioning System

- Tools have predefined positions (`pos` property)
- Reset button restores original positions
- Shuffle button randomizes positions
- Force simulation provides automatic layout

### Component Patterns

- Custom ReactFlow node types for tool rendering
- Compound components for modals with render props
- Custom hooks for complex state management (simulation, modals)