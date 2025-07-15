export default function History({
  history,
}: {
  history: Array<{ date: string; amount: number; name: string }>;
}) {
  return (
    <div className="grid gap-6 max-w-4xl mx-auto">
      {history.length === 0 ? (
        <div className="bg-white rounded-xl shadow-lg p-6 text-center text-gray-500">
          No donation history yet.
        </div>
      ) : (
        history.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-lg font-bold text-gray-900 mb-2">
              {item.amount} BDT is Donated for {item.name}
            </p>
            <p className="text-sm text-gray-600">Date: {item.date}</p>
          </div>
        ))
      )}
    </div>
  );
}
