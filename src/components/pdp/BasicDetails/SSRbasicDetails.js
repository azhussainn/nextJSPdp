import Image from 'next/image';

const Stars = () => {
    return new Array(5).fill("").map((_, i) => {
        return (
          <Image
              key={"star_" + i}
              src="/star.png"
              width={16}
              height={16}
              alt="Rating"
              className='inline ml-1'
          />
        );
    });
}

const BasicDetails = ({ data }) => {

  const { basic_details, product_details, aggregateRating } =  data;

  return (
    <section className="px-4">
      <div className="flex items-center justify-between">
        <p>{basic_details.name}</p>
        <p>{basic_details.diamondDiscount}% OFF on Diamond</p>
      </div>

      <div className="flex items-center justify-between">
        <p>
          Rs {basic_details.price}
          <span className="mx-2"></span>
          {basic_details.mrp !== basic_details.price && (
            <span className="line-through decoration-red-500">
              Rs {basic_details.mrp}
            </span>
          )}
        </p>
        <p>{basic_details.makingDiscount}% OFF on Making</p>
      </div>

      <div className="flex items-center justify-between pt-3">
        <p className="flex items-center">
          {aggregateRating.ratingValue}
          {<Stars />}
        </p>
        <p className="text-start">GIA</p>
      </div>

      <div className="flex items-center justify-between">
        <p>{aggregateRating.reviewCount} Reviewed</p>
        <p>Why GIA is better?</p>
      </div>

      <div className="flex items-center justify-between pt-3">
        <p>Diamond Weight</p>
        <p>
          {product_details.totalDiamondWeight} ct (
          {product_details.diamondColor}-{product_details.diamondClarity})
        </p>
      </div>
      <div className="flex items-center justify-between">
        <p>{product_details.metalType} Weight</p>
        <p>
          {product_details.metalWeight} gm ({product_details.metalCarat} KT)
        </p>
      </div>
    </section>
  );
};

export default BasicDetails;
