export default function TechnicalTable({
  rows,
  caption,
}: {
  rows: { label: string; valor: string }[];
  caption?: string;
}) {
  return (
    <div className="table-scroll overflow-x-auto border border-graphite-700 scrollbar-thin">
      <table className="w-full min-w-[480px] border-collapse text-left text-sm">
        {caption && (
          <caption className="border-b border-graphite-700 bg-graphite-850 px-5 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-metal-400 caption-top">
            {caption}
          </caption>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={row.label}
              className={i % 2 === 0 ? "bg-graphite-900" : "bg-graphite-850"}
            >
              <th
                scope="row"
                className="w-1/3 border-t border-graphite-700 px-5 py-3.5 font-medium uppercase tracking-wide text-metal-400 whitespace-nowrap"
              >
                {row.label}
              </th>
              <td className="border-t border-graphite-700 px-5 py-3.5 text-offwhite/90">
                {row.valor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
