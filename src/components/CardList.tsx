import { Card } from "./Card";
export function CardList({ data, loading }: { data: any; loading: boolean }) {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item: any) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </>
  );
}
