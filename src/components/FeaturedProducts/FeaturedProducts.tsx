import ProductsGrid from '../common/ProductsGrid';
import SectionTitle from '../common/SectionTitle';
const FeaturedProducts = () => {
  return (
    <section className='pt-24 '>
      <SectionTitle text='featured products' />
      <ProductsGrid />
    </section>
  );
};
export default FeaturedProducts;
