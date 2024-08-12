import type { Node, BuiltInNode } from '@xyflow/react';

export type PositionLoggerNode = Node<{ label: string }, 'position-logger'>;
export type PaymentInitNode = Node<{ amount: number }, 'payment-init'>;
export type AppNode = BuiltInNode | PositionLoggerNode | PaymentInitNode;
