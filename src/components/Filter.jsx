'use client'
import { useAtom } from 'jotai';
import { filterAtom } from '@/atoms/filter';
import { useRef } from 'react';
import Popup from './Popup';

const Filter = () => {
  const [ filter, setFilter] = useAtom(filterAtom)
  const ref = useRef()
  const handleClick =() => {
    console.log('clicked')
    ref.current.togglePopup()
  }
  return (
    <div className="p-[20px] bg-white mt-[30px] rounded-[20px] border border-[#dbe3e8] text-[#1f2533]">
      <Popup ref={ref} bannerInfo={false} />

      <h4 className="">Filter:</h4>
      <div className="filter__content">
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Category</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input type="checkbox" onClick={() => {
                    if(filter === 'womens') {
                      setFilter('')
                    } else {
                      setFilter('womens')
                    }
                  }} /> Womens
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={() => {
                    if(filter === 'mens') {
                      setFilter('')
                    } else {
                      setFilter('mens')
                    }
                  }} type="checkbox" /> Mens
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Kids
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Fitness
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Sports
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Fangear
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Kids
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Brand</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Adidas
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Asics
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Brooks
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Deuce
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Gray-Nicolls
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Hoka
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Price</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> 0 to $99
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> $100 to $199
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Recently</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> New
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Promotions</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> 30% Off
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> 50% Off
                </label>
              </a>
            </li>
          </ul>
        </div>
        <div className="filter__content__item my-[20px]">
          <h4 className="font-bold pb-[5px]">Availability</h4>
          <ul className="text-[14px]">
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> In Stock
                </label>
              </a>
            </li>
            <li>
              <a href="#">
                <label>
                  <input onClick={handleClick} checked={false} type="checkbox" /> Out of Stock
                </label>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Filter;
