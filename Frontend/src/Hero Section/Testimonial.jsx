import {UserStar} from 'lucide-react'

export default function App(){
    const cardsData = [
        {
            image: '../../public/image/woman-avatar-profile-icon-vector-illustration_874723-207.jpg',
            name: 'Ranu Mandal',
            handle: '@ranusinger',
            message: 'Fast, simple, and incredibly effective. Built my resume in minutes.',
        },
        {
            image: '../../public/image/male-portrait-people-profile-perfect-for-social-media-and-business-presentations-user-interface-ux-graphic-and-web-design-applications-and-interfaces-illustration-vector.jpg',
            name: 'Bill Gates',
            handle: '@microsoft',
            message: 'The templates look modern and ATS-friendly — exactly what I needed.',
        },
        {
            image: '../../public/image/business-man-avatar-profile_1133257-2431.jpg',
            name: 'Mark Zukerberg',
            handle: '@MetaOwner',
            message: 'Super user-friendly experience. Highly recommended.',
        },
        {
            image: '../../public/image/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg',
            name: 'Giorgia Meloni',
            handle: '@primemeloni',
            message: 'Clean UI, accurate suggestions, and great customization.',
        },
                {
            image: '../../public/image/3135789.png',
            name: 'Queen Victoria',
            handle: '@Qv',
            message: 'It took me less than 10 minutes to create a resume.',
        }
    ];

    const CreateCard = ({ card }) => (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0">
            <div className="flex gap-2">
                <img className="h-10 w-10 rounded-full" src={card.image} alt="User Image" />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p>{card.name}</p>
                        <svg className="mt-0.5 fill-blue-500" width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M4.555.72a4 4 0 0 1-.297.24c-.179.12-.38.202-.59.244a4 4 0 0 1-.38.041c-.48.039-.721.058-.922.129a1.63 1.63 0 0 0-.992.992c-.071.2-.09.441-.129.922a4 4 0 0 1-.041.38 1.6 1.6 0 0 1-.245.59 3 3 0 0 1-.239.297c-.313.368-.47.551-.56.743-.213.444-.213.96 0 1.404.09.192.247.375.56.743.125.146.187.219.24.297.12.179.202.38.244.59.018.093.026.189.041.38.039.48.058.721.129.922.163.464.528.829.992.992.2.071.441.09.922.129.191.015.287.023.38.041.21.042.411.125.59.245.078.052.151.114.297.239.368.313.551.47.743.56.444.213.96.213 1.404 0 .192-.09.375-.247.743-.56.146-.125.219-.187.297-.24.179-.12.38-.202.59-.244a4 4 0 0 1 .38-.041c.48-.039.721-.058.922-.129.464-.163.829-.528.992-.992.071-.2.09-.441.129-.922a4 4 0 0 1 .041-.38c.042-.21.125-.411.245-.59.052-.078.114-.151.239-.297.313-.368.47-.551.56-.743.213-.444.213-.96 0-1.404-.09-.192-.247-.375-.56-.743a4 4 0 0 1-.24-.297 1.6 1.6 0 0 1-.244-.59 3 3 0 0 1-.041-.38c-.039-.48-.058-.721-.129-.922a1.63 1.63 0 0 0-.992-.992c-.2-.071-.441-.09-.922-.129a4 4 0 0 1-.38-.041 1.6 1.6 0 0 1-.59-.245A3 3 0 0 1 7.445.72C7.077.407 6.894.25 6.702.16a1.63 1.63 0 0 0-1.404 0c-.192.09-.375.247-.743.56m4.07 3.998a.488.488 0 0 0-.691-.69l-2.91 2.91-.958-.957a.488.488 0 0 0-.69.69l1.302 1.302c.19.191.5.191.69 0z" />
                        </svg>
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm py-4 text-gray-800">{card.message}</p>
        </div>
    );

    return (
        <section id="testimonial">
            <style>{`
            @keyframes merquee-scroll {
                0% { transform: translateX(0%); }
                100% { transform: translateX(-50%); }
            }

            .marquee-inner {
                animation: marqueeScroll 20s linear infinite;
            }

            .marquee-reverse {
                animation-direction: reverse;
            }
        `}</style>
      <div className="flex flex-col items-center text-center">
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-indigo-200 text-indigo-700 text-sm font-medium">
          < UserStar />  Easy to create,edit & share
          </div>

        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
          Real Stories, Real Results.
        </h1>

        <p className="text-gray-600 text-lg max-w-xl mx-auto mt-4">
          Don't just scroll — listen to the people who’ve already tried it,
          loved it, and leveled up their careers with us.
        </p>
        </div>
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="flex gap-4 animate-[merquee-scroll_30s_linear_infinite] w-max pt-10 pb-5">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
                <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
                <div className="flex gap-4 animate-[merquee-scroll_30s_linear_infinite] w-max pt-10 pb-5 marquee-reverse">
                    {[...cardsData, ...cardsData].map((card, index) => (
                        <CreateCard key={index} card={card} />
                    ))}
                </div>
                <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
            </div>
        </section>
    )
}