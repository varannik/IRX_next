
import { BuildingOffice2Icon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import ContactForm from './ContactForm'
import Image from 'next/image'

export default function ContactUs() {
  return (
    <div className="relative isolate bg-bg-layer3">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <svg x="100%" y={-1} className="overflow-visible fill-gray-800/20">
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" width="100%" height="100%" strokeWidth={0} />
              </svg>
              <div
                aria-hidden="true"
                className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)',
                  }}
                  className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-sky-900 opacity-20"
                />
              </div>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">Get in touch</h2>
            <figure className="border-l border-border-selected pl-8 pt-5">
              <blockquote className="text-md font-semibold leading-8 tracking-tight text-gray-400">
                <p>
                Quantical offers a unique system to see how most traders predict future rates, alongside AI-driven forecasts. 
                Compete with AI and discover how skilled you are at analyzing the market. 
                Think you’ve got what it takes? Now’s your time to shine!
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <Image
                  alt=""
                  height={200}
                  width={200}
                  src="/images/ProfileImage.webp"
                  className="mt-1 h-10 w-10 flex-none rounded-full bg-gray-50"
                />
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-300">Reza</div>
                  <div className="text-gray-500">Full Stack AI Engineer</div>
                  <a href="mailto:reza@quantical.dev" className="hover:text-white text-gray-400">
                  reza@quantical.dev
                  </a>
                </div>
              </figcaption>
            </figure>

            <ul className="list-disc pl-6 mt-6 text-lg leading-8 text-gray-300">
              <li className="mb-2">AI/ML end-to-end solutions</li>
              <li className="mb-2">Web and API development</li>
              <li className="mb-2">Full-stack integration</li>
              <li className="mb-2">Analytics Engineering</li>
            </ul>
            Connect with us and bring your ideas to life!

            <dl className="mt-10 space-y-4 text-base leading-7 text-gray-300">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Address</span>
                  <BuildingOffice2Icon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                Sanford House, 81 Skipper Way,
                  <br />
                  St Neots, United Kingdom
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="tel:+447502063557" className="hover:text-white">
                    
                    +44 75020-63557
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Email</span>
                  <EnvelopeIcon aria-hidden="true" className="h-7 w-6 text-gray-400" />
                </dt>
                <dd>
                  <a href="mailto:tech@quantical.dev" className="hover:text-white text-gray-400">
                  tech@quantical.dev
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
