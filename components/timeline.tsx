"use client";

import React from 'react';
import { Timeline } from './ui/about-timeline';

const TimeLine = () => {
    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, neque voluptatem repellendus ipsam possimus ducimus quia itaque quas ratione eligendi atque perferendis vel, modi tempore! Possimus nisi rem facere quibusdam?
                        Quibusdam quis adipisci nulla iure voluptatem libero eaque tempore eligendi dolorum, aut maiores, alias reiciendis sapiente, earum reprehenderit. At, beatae delectus alias nemo excepturi ab minus laborum necessitatibus voluptatem eum!
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo odio molestias saepe commodi aliquam, voluptate distinctio in facilis voluptatibus provident sapiente recusandae eos enim officia, ea eveniet vitae nesciunt ipsa!
                        Sint enim veritatis, voluptatibus voluptatum fugiat tenetur magni velit sapiente rerum est nobis, odit atque sed adipisci, inventore dolorum! Fugit laborum suscipit, vel ipsa exercitationem eligendi amet rerum ducimus magnam.
                    </p>
                  
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                  
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam ullam incidunt illo eos nostrum omnis asperiores. Accusamus sequi possimus non repellat tempore voluptatibus velit repellendus, error asperiores odit ex!
                        Expedita, et ex.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                  
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam ullam incidunt illo eos nostrum omnis asperiores. Accusamus sequi possimus non repellat tempore voluptatibus velit repellendus, error asperiores odit ex!
                        Expedita, et ex.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                  
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam ullam incidunt illo eos nostrum omnis asperiores. Accusamus sequi possimus non repellat tempore voluptatibus velit repellendus, error asperiores odit ex!
                        Expedita, et ex.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div>
                  
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam ullam incidunt illo eos nostrum omnis asperiores. Accusamus sequi possimus non repellat tempore voluptatibus velit repellendus, error asperiores odit ex!
                        Expedita, et ex.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2018",
            content: (
                <div>
                  
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs sm:text-sm md:text-base font-normal mb-6 sm:mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut numquam ullam incidunt illo eos nostrum omnis asperiores. Accusamus sequi possimus non repellat tempore voluptatibus velit repellendus, error asperiores odit ex!
                        Expedita, et ex.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="timeline-section" className="w-full px-4 sm:px-6 md:px-12 lg:px-32 py-12 sm:py-20 md:py-28 lg:py-40 mx-auto">
            <Timeline data={data} />
        </section>
    );
};

export default TimeLine;
