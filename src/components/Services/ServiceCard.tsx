export function ServiceCard({ icon: Icon, title, desc }: any) {
  return (
    <div className="rounded-lg p-4 bg-neutral-200 shadow hover:shadow-lg transition">
      <div className="flex items-center mb-2 space-x-2">
        <Icon className="h-6 w-6 text-gray-500" />
        <h4 className="text-xl font-bold">{title}</h4>
      </div>

      <hr className="my-2" />
      <p className="text-gray-700">{desc}</p>
    </div>
  );
}
