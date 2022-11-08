import React from 'react'
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'

const honey = [
  {
    id: 1,
    name: 'Майский мёд',
    href: '#',
    color: '1л',
    price: '1000 руб / 1 л',
    imageSrc: './images/akaciia.jpg',
    imageAlt: '',

    volumes: [
      { name: '250 гр', inStock: true },
      { name: '500 гр', inStock: true },
      { name: '1 л', inStock: true },
      { name: '3 л', inStock: true },
    ]
  }
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(true)


  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-[#4C2F27] hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <i className="fa-solid fa-xmark h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                    {honey.map((honey) => (

                      <>
                        <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                          <img
                            src={honey.imageSrc}
                            alt={honey.imageAlt}
                            className="object-cover object-center"
                          />
                        </div>
                        <div className="sm:col-span-8 lg:col-span-7">
                          <h2 className="text-2xl font-bold text-[#56261c] sm:pr-12">{honey.name}</h2>
                          <section aria-labelledby="information-heading" className="mt-2">
                            <h3 id="information-heading" className="sr-only">
                              Информация о продукте
                            </h3>
                            <p className="text-2xl text-[#56261c]">{honey.price}</p>
                            <p className="pt-4 text-[#4C2F27]">Натуральный мед первой качки, полученный из нектара акации,  обладает тонким вкусом и оказывает положительное влияние на организм. Цвет светло-желтый слегка с зеленоватым оттенком. Допустим к применению диабетиками и аллергиками.</p>
                          </section>
                          <div className="mt-10">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-[#56261c]">Объем</h4>

                            </div>

                            <RadioGroup className="mt-4">
                              <RadioGroup.Label className="sr-only"> Выберите объем </RadioGroup.Label>
                              <div className="grid grid-cols-4 gap-4">
                                {honey.volumes.map((volume) => (
                                  <RadioGroup.Option
                                    key={volume.name}
                                    value={volume}
                                    disabled={!volume.inStock}
                                    className={({ active }) =>
                                      classNames(
                                        volume.inStock
                                          ? 'bg-white shadow-sm text-[#56261c] cursor-pointer'
                                          : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                        active ? 'ring-2 ring-[#Fbeb44]' : '',
                                        'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium hover:bg-[#FFDC33] focus:outline-none sm:flex-1'
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <RadioGroup.Label as="span">{volume.name}</RadioGroup.Label>
                                        {volume.inStock ? (
                                          <span
                                            className={classNames(
                                              active ? 'border' : 'border-2',
                                              checked ? 'border-[#FFDC33]' : 'border-transparent',
                                              'pointer-events-none absolute -inset-px rounded-md'
                                            )}
                                            aria-hidden="true"
                                          />
                                        ) : (
                                          <span
                                            aria-hidden="true"
                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                          >
                                            <svg
                                              className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                              viewBox="0 0 100 100"
                                              preserveAspectRatio="none"
                                              stroke="currentColor"
                                            >
                                              <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                            </svg>
                                          </span>
                                        )}
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                          <button
                            type="submit"
                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFDC33] py-3 px-8 text-base font-medium text-[#56261c] hover:bg-[#Fbeb44] focus:outline-none focus:ring-2 focus:ring-[#Fbeb44] focus:ring-offset-2"
                          >
                            Добавить в корзину
                          </button>
                        </div>
                      </>


                    ))}
                  </div>

                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>

      </Dialog>
    </Transition.Root>
  )
}