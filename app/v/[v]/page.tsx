import Site from "../../Site";

export function generateStaticParams() {
  return [{ v: "a" }, { v: "b" }, { v: "c" }, { v: "d" }];
}

export const dynamicParams = false;

export default async function VariantPage({
  params,
}: {
  params: Promise<{ v: string }>;
}) {
  const { v } = await params;
  return <Site id={v} />;
}
