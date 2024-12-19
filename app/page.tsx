import { Categories, Container, Filters, ProductCard, SortPopup, Title, TopBar } from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          {/*Filter*/}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/*List of products*/}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {/*<ProductCard id={0}  imageUrl={} name={} price={}/>*/}
              {/*<ProductsGroupList title="Пиццы" items={[1, 2, 3, 4, 5]}/>*/}
              {/*<ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]}/>*/}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
