import 'animate.css';

const Starter = () => {
    return (
        <div className="md:flex bg-slate-700 text-white font-body my-20 animate__animated animate__backInLeft">
            <div className='md:w-1/2 p-10'>
                <h1 className="text-3xl font-bold text-center">Best online market in bikrampur</h1>
                <p>It is an online market where it sells best and most fresh product.where you can buy raw foods like vegetables
                    ,fruits,meats,fishes and chickens. you will also get it in cheapest price and there is also voucher
                    where you will get maximum discount.

                </p>
            </div>
            <div className='flex justify-center items-center md:w-1/2'>
                <div className='text-center'>
                    <h1 className='text-5xl text-red-600 font-extrabold'>
                        summer
                    </h1>
                    <h1 className='text-5xl text-red-600 font-extrabold'>sale</h1>
                </div>
            </div>
        </div>
    );
};

export default Starter;
