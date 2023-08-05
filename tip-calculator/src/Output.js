export default function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${Number(bill) + Number(tip)} (${bill} + ${tip} tip)
    </h3>
  );
}
