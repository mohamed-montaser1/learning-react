export default function BillComponent({ amount, setAmount }) {
  return (
    <div className="inline">
      <label htmlFor="bill-input">How much was the bill?</label>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        id="bill-input"
      />
    </div>
  );
}
