import type { NodeTypes } from '@xyflow/react';

import { PositionLoggerNode } from './PositionLoggerNode';
import { AppNode } from './types';
import TextUpdaterNode from './TextUpdaterNode';

export const nodeTypes = {
  'position-logger': PositionLoggerNode,
  'textUpdater': TextUpdaterNode
  // Add any of your custom nodes here!
} satisfies NodeTypes;


export const initialNodes: AppNode[] = [
  { id: 'a', type: 'input', position: { x: 0, y: 0 }, data: { label: 'Kins React Flow' } },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'drag me!' },
  },
  { id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
  {
    id: 'd',
    type: 'output',
    position: { x: 0, y: 200 },
    data: { label: 'with React Flow' },
  },
  {
    id: 'e',
    type: 'textUpdater',
    position: { x: 0, y: 400 },
    data: {value: 123}
  }
];

