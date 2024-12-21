import { Categories, Container, Filters, ProductCard, SortPopup, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/*Filter*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*List of products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={1}
                className="mb-10"
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 9,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 10,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                  {
                    id: 11,
                    name: 'Пицца',
                    imageUrl: 'https://media.dodostatic.com/image/r:584x584/11ee87499f9a4542a46933a1b5fd8a0f.avif',
                    price: 550,
                    items: [{ price: 550 }],
                  },
                ]}
                categoryId={2}
                className="mb-10"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
