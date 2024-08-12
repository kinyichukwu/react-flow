import { type NodeProps } from "@xyflow/react";
import { type PaymentInitNode } from "./types";

export function PaymentInit({
  data: { amount },
}: NodeProps<PaymentInitNode>) {
  return (
    <div
      className="payment-init-node"
      style={{
        padding: "15px",
        border: "2px solid #3498db",
        borderRadius: "10px",
        backgroundColor: "#ecf0f1",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
        color: "#2c3e50",
        textAlign: "center",
        minWidth: "150px",
      }}
    >
      <h3 style={{ margin: "0 0 10px", fontSize: "18px", fontWeight: "bold" }}>
        Payment Init
      </h3>
      <div
        style={{
          backgroundColor: "#3498db",
          color: "white",
          padding: "8px 12px",
          borderRadius: "5px",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        ${amount}
      </div>
    </div>
  );
}
