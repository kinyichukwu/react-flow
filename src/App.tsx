import { useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type OnConnect,
  Node,
  Edge,
  Connection,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import PaymentInit from './Workflow/PaymentProviderSelect';
import { initialEdges, initialNodes } from './Workflow/Workflow.constants';
import { ChakraProvider } from '@chakra-ui/react';
import { Workflow } from './Workflow/Workflow';

export default function App() {
  

  // const onConnect = useCallback((connection: Connection) => {

  //   console.log(connection)
  //   const edge = {...connection, animated: true, id: `${edges.length + 1}`,   }

  //   setEdges(prevEdges => addEdge(prevEdges, edge))
  // }, [])

  return (
    <ChakraProvider>
<Workflow/>
    </ChakraProvider>
  );
}
