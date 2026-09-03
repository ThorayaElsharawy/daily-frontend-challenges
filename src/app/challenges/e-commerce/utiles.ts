export type Order = {
    id: string;
    customer: string;
    product: string;
    amount: number;
    status: "pending" | "processing" | "completed" | "cancelled";
    createdAt: string;
    email: string;
    quantity: number;
};