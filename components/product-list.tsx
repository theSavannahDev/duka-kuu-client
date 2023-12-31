import { Product } from "@/lib/utils/types";

import { NoResults } from "@/components/misc/no-results";
import { ProductCard } from "@/components/misc/product-card";

type ProductListProps = {
  title: string;
  items: Product[];
};

export const ProductList = ({ title, items }: ProductListProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-montserrat text-3xl font-bold">{title}</h3>

      {items.length === 0 && <NoResults />}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
