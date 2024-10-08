export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1.5">
      <img className="w-75 rounded-lg mb-0.75" src={content.img} alt={content.title} />
      <span className="text-xs text-[#d7fa00] border border-[#d7fa00] px-1 py-0.5 rounded-sm">모집중</span>
      <div className="text-lg font-semibold">{content.title}</div>
      <p className="text-xs text-gray-400">{content.subtitle}</p>
    </div>
  );
}
