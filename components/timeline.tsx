"use client";

import React from 'react'
import { Timeline } from './ui/about-timeline'
import Image from 'next/image'

const TimeLine = () => {

    const data = [
        {
            title: "2024",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus accusantium vel, ipsum provident commodi nulla? Iusto atque a necessitatibus dignissimos eius, perspiciatis dolorum, aspernatur, nulla recusandae accusantium dolorem. Quaerat, consectetur!
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2023",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, voluptatibus? Eaque vel sequi culpa natus fugiat molestias impedit nisi pariatur magni debitis expedita error quo ipsa aliquam, animi quis ipsum?
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt omnis debitis non eos. Voluptatum, totam hic ullam facilis nemo porro distinctio id, doloribus commodi eveniet, reprehenderit similique expedita eos? Quidem?
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2021",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam officiis voluptatibus ad accusantium? Facere, ipsum vitae hic necessitatibus laboriosam nulla aperiam dolor velit natus, ea cupiditate sunt! Qui, ipsa nesciunt.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, dignissimos odio! Velit, excepturi. Quae eveniet minima assumenda quos? Praesentium natus tempora, neque ipsum accusantium sapiente nam aspernatur suscipit dolorum harum.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2020",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo id optio illum tempora consectetur vel eveniet facilis laudantium nulla culpa, magni, labore consequuntur doloribus quia nemo non dolor minima veniam.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2019",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis exercitationem, reprehenderit rerum fugit eius veritatis tempore expedita praesentium ipsum assumenda? Quos, delectus. Praesentium ratione reprehenderit aspernatur beatae, exercitationem nemo totam?
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
        {
            title: "2018",
            content: (
                <div>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        I usually run out of copy, but when I see content this big, I try to
                        integrate lorem ipsum.
                    </p>
                    <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
                        Lorem ipsum is for people who are too lazy to write copy. But we are
                        not. Here are some more example of beautiful designs I built.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    </div>
                </div>
            ),
        },
    ];

    return (
        <section id="timeline-section">
            <Timeline data={data} />
        </section>
    )
}

export default TimeLine