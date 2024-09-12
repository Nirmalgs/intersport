'use client';
import Image from 'next/image';
import { EyeIcon } from '../Icons/EyeIcon';
import { StarIcon } from '../Icons/StarIcon';
import { useState, Suspense, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { toast, ToastContainer } from 'react-toastify';
import { useProgress } from '@react-three/drei';
import 'react-toastify/dist/ReactToastify.css';
import ProgressBar from '@/components/ProgressBar';
import ModelRender from '../ModelRender';
import { colors } from '@/utils/colors';
import Promotions from '../Promotions';

const ProductDetail = (props) => {
  const { catdataSSR, random } = props;

  const sections = ['hoodie', 'nikeShoe'];

  const [bodyColor, setBodyColor] = useState(colors[sections[random]][0]);
  const [show360, setShow360] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedMedia, setSelectedMedia] = useState('');

  const canvasRef = useRef();
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const addToCart = () => {
    toast.success('Product added to wishlist!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const tabs = [
    { id: 'tab1', label: 'Description', content: catdataSSR?.data?.description },
    { id: 'tab2', label: 'Storage Advice', content: catdataSSR?.data?.storageAdvice },
    { id: 'tab3', label: 'Variant information', content: catdataSSR?.data?.composition },
    { id: 'tab4', label: 'Related Assets', content: catdataSSR?.data?.imageGallery },
  ];
  const [activeTab, setActiveTab] = useState(tabs[3].id);

  const getMediaType = (media) => {
    if (!media) return 'image'; // Default to image if no media
    return media.endsWith('.mp4') ? 'video' : 'image';
  };

  function Loader() {
    const { progress } = useProgress();
    return <ProgressBar progress={progress} />;
  }
  console.log(tabs);
  return (
    <>
      <div className="py-[60px] flex">
        <div className="w-[45%]">
          <div className="h-[500px] bg-white">
            {selectedMedia && getMediaType(selectedMedia) === 'video' ? (
              <div>
                <video
                  src={selectedMedia}
                  alt="Selected video"
                  className="w-full h-full rounded"
                  muted
                  playsInline
                  loop
                  autoPlay
                />
              </div>
            ) : show360 ? (
              <Suspense fallback={<Loader />}>
                <Canvas
                  dpr={[1, 2]}
                  resize={{ scroll: false }}
                  //   width={window.innerWidth}
                  //   height={window.innerHeight}
                  ref={canvasRef}
                >
                  <ModelRender color={bodyColor} random={random} />
                </Canvas>
              </Suspense>
            ) : (
              <Image
                src={selectedMedia || catdataSSR?.data?.thumbnail}
                alt={catdataSSR?.data?.name}
                width={600}
                height={500}
                quality={100}
                className="w-full h-full object-contain"
              />
            )}
          </div>
          <div className="flex flex-wrap overflow-x-auto mt-[20px]">
            {catdataSSR?.data?.imageGallery?.map((img, index) => (
              <button
                key={index}
                onClick={() => {
                  setShow360(false);
                  setSelectedMedia(img);
                }}
                className={`flex-shrink-0 mb-2 w-20 h-20 mr-2 rounded border border-primaryColor hover:border-primaryColor`}
              >
                <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-contain rounded" />
              </button>
            ))}
            <button
              className={`flex-shrink-0 w-20 h-20 mr-2 rounded border border-primaryColor hover:border-primaryColor`}
            >
              <video
                src={catdataSSR?.data?.videoUrl}
                alt="video"
                className="w-full h-full object-contain rounded"
                muted
                playsInline
                loop
                onClick={() => {
                  setShow360(false);
                  setSelectedMedia(catdataSSR?.data?.videoUrl);
                }}
              />
            </button>
            <button
              className={`flex-shrink-0 w-20 h-20 mr-2 rounded border border-primaryColor hover:border-primaryColor`}
              onClick={() => {
                setShow360(true);
              }}
            >
              <img src="/images/image-360.png" alt="360 image" className="w-full h-full object-contain rounded" />
            </button>
          </div>
        </div>
        <div className="w-[55%] ml-[100px] px-[30px] py-[20px] bg-white text-[#333333]">
          <h1 className="text-[28px] font-semibold mb-[10px]">{catdataSSR?.data?.name}</h1>
          {/* <div className="flex items-center">
            <p className="text-[16px] text-[#666666] mr-[10px] line-through">€ {catdataSSR?.data?.mrp}</p>
            <p className="text-[18px] font-bold">€ {catdataSSR?.data?.mrp}</p>
          </div> */}
          <div className="flex space-x-2">
            <Promotions
              price={3134}
              originalPrice={3999}
              discount={21.63}
              currency="€"
              buttonColor="bg-blue-500"
              textColor="black"
              backgroundColor="bg-yellow-50"
              summerSale={true}
            />
            <Promotions
              price={2800}
              originalPrice={3999}
              discount={21.63}
              currency="€"
              buttonColor="bg-blue-500"
              textColor="black"
              backgroundColor="bg-yellow-50"
            />
          </div>
          {/* <div className="visitors-user flex items-center text-[14px] my-[15px]">
            <StarIcon classNameSvg="mr-[10px] hover:text-red" />
          </div> */}
          <p className="product-sku my-[15px] text-[16px]">
            <span>SKU:</span> {catdataSSR?.data?.productId}
          </p>
          <div className="my-[20px] text-[16px]">
            <p className="text-[#33333]">Color Variant:</p>
            <div className="flex ">
              {colors[sections[random]].map((color) => {
                return (
                  <span
                    className={`w-[35px] h-[35px] block my-[10px] mx-[5px] cursor-pointer`}
                    style={{ backgroundColor: color }}
                    onClick={() => {
                      setBodyColor(color);
                    }}
                  ></span>
                );
              })}
            </div>
          </div>
          <div className="my-[20px] text-[16px]">
            <p className="text-[#33333]">
              Categories: <span className="text-[14px] text-[#66666]">{catdataSSR?.data?.productType}</span>
            </p>
          </div>
          <div className="">
            <p className="flex items-center gap-[7px]">
              <span className="availability">Availability : </span>
              <svg width="15" height="15" aria-hidden="true">
                <circle cx="7.5" cy="7.5" r="7.5" fill="rgb(62,214,96, 0.3)"></circle>
                <circle
                  cx="7.5"
                  cy="7.5"
                  r="5"
                  stroke="rgb(255, 255, 255)"
                  stroke-width="1"
                  fill="rgb(62,214,96)"
                ></circle>
              </svg>
              New Product
            </p>
            <div className="stock-countdown">
              <div className="laber_total_items">
                <div className="laber_progress"></div>
              </div>
            </div>
          </div>

          <div>
            {/* <p className="mb-[6px]">Quantity</p> */}
            <div className="flex items-center">
              {/* <div className="inline-block rounded border border-primaryColor mr-[8px]">
                <button
                  onClick={decrement}
                  className="button_increment w-[45px] h-[47px] btn-hover transition-all duration-500 ease-in-out"
                >
                  <span className="m-auto text-2xl">−</span>
                </button>
                <input className="w-[47px] h-[45px] text-center" type="text" value={quantity}></input>
                <button
                  onClick={increment}
                  className="button_increment w-[45px] h-[47px] btn-hover transition-all duration-500 ease-in-out"
                >
                  <span className="m-auto text-2xl">+</span>
                </button>
              </div> */}
              <div>
                <button
                  className="w-[200px] h-[50px] flex justify-center items-center btn-hover rounded bg-primaryColor text-[14px] text-[#fff] py-[5px] px-[10px] border border-primaryColor"
                  onClick={addToCart}
                >
                  Add to List
                </button>
                {/* <button
                  className="w-[300px] h-[50px] flex justify-center items-center btn-hover rounded bg-primaryColor text-[14px] text-[#fff] py-[5px] px-[10px] border border-primaryColor"
                  onClick={addToCart}
                >
                  Add to Wishlist
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`text-white py-[15px] px-[20px] text-[16px] mr-[5px] transition-all duration-500 ease-in-out ${
              activeTab === tab.id ? 'bg-primaryColor border-primaryColor' : 'bg-[#333333] hover:bg-primaryColor'
            } focus:outline-none`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="px-4 py-[25px] border border-[#e5e5e5] bg-white">
        {tabs.map((tab) => (
          <div key={tab.id} className={`tab-content ${activeTab === tab.id ? '' : 'hidden'}`}>
            {Array.isArray(tab.content) ? (
              <>
                <div className="flex flex-wrap gap-[20px]">
                  {tab.content.map((img, index) => (
                    <div className="rounded border border-[#ccc] relative">
                      <div className="absolute top-[4px] left-[4px] cursor-pointer">
                        <input type="checkbox" />
                      </div>
                      <img
                        key={index}
                        src={img}
                        alt={`Thumbnail ${index}`}
                        className="w-[220px] h-[220px] object-contain rounded"
                      />
                    </div>
                  ))}
                  <div className="rounded border border-[#ccc] relative w-[220px] text-center pt-16">
                    <div className="absolute top-[4px] left-[4px] cursor-pointer">
                      <input type="checkbox" />
                    </div>
                    <video
                      src={catdataSSR?.data?.videoUrl}
                      alt="video"
                      className="w-full h-full object-contain rounded"
                      muted
                      playsInline
                      loop
                      autoPlay
                    />
                  </div>
                  <div className="rounded border border-[#ccc] relative w-[220px] text-center pt-16">
                    <div className="absolute top-[4px] left-[4px] cursor-pointer">
                      <input type="checkbox" />
                    </div>
                    <button
                      className={`flex-shrink-0 w-20 h-20 mr-2`}
                      onClick={() => {
                        setShow360(true);
                      }}
                    >
                      <img
                        src="/images/image-360.png"
                        alt="360 image"
                        className="w-full h-full object-contain rounded"
                      />
                    </button>
                  </div>
                  
                </div>
                <button
                  className="btn-hover rounded text-[14px] text-primaryColor px-[15px] py-[5px] border border-primaryColor mt-[20px] mx-auto block"
                  onClick={addToCart}
                >
                  Add
                </button>
              </>
            ) : (
              <p className="text-[14px] text-[#666666]">
                <span className="description" dangerouslySetInnerHTML={{ __html: tab.content }}></span>
              </p>
            )}
          </div>
        ))}
      </div>
      <ToastContainer />
    </>
  );
};
export default ProductDetail;
