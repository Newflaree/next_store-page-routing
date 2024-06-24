// Next.js
import NextLink from 'next/link';
// Components
import { Building, Title } from '@/ui/components';
// Database
import { productsDB } from '@/database';
// Layouts
import { AdminLayout } from '@/ui/layouts';
// Utils
import { currencyFormat } from '@/utils';


export const AdminProductsView = () => {
  const products = productsDB;

  return (
    <AdminLayout
      pagetitle='productos'
    >
      <Title label="Mantenimiento de productos" />

      
      <div classname="flex justify-end">
        <NextLink href="/admin/product/new" className="btn-primary">
          Nuevo producto
        </NextLink>
      </div>

      <div className="mb-10 mt-4">
        <table className="min-w-full">
          <thead className="bg-gray-200 border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Imagen
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Titulo
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Precio
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Género
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Inventario
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <NextLink href={`/products/${product.slug}`}>
                    {/*
                    <ProductImage
                      src={ product.ProductImage[0]?.url }
                      width={80}
                      height={80}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                      */}
                  </NextLink>
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <NextLink
                    href={`/admin/products/${product.slug}`}
                    className="hover:underline"
                  >
                    {product.name}
                  </NextLink>
                </td>
                <td className="text-sm font-bold  text-gray-900 px-6 py-4 whitespace-nowrap">
                  {currencyFormat(product.price)}
                </td>

                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {product.cate}
                </td>

                <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                  { 0 }
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*
        <Pagination totalPages={totalPages} />
            */}
      </div>
    </AdminLayout>
  );
}
