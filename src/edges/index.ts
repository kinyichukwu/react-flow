import type { Edge, EdgeTypes } from '@xyflow/react';

export const initialEdges: Edge[] = [
  { id: 'a->c', source: 'a', target: 'b', animated: true },
  { id: 'b->d', source: 'b', target: 'c' },
  { id: 'c->d', source: 'c', target: 'd' },
  { id: 'd->e', source: 'e', target: 'a', animated: true },
];

export const edgeTypes = {
  // Add your custom edge types here!
} satisfies EdgeTypes;
