declare global {
  interface Window {
    snap: {
      pay: (transactionToken: string) => void;
      // Add other necessary methods from the Midtrans Snap API
    };
  }
}
