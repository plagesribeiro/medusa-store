import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Já pensou em como seria a união entre a arte e a tecnologia?
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          A Paint & Solids desperta o artista em cada um de nós, proporcionando
          impressões 3D e kits de pintura para que possamos decorar nosso
          ambiente com a nossa personalidade única e criativa.
        </p>
        <UnderlineLink href="/store">Explorar produtos</UnderlineLink>
      </div>
      <Image
        src="/hero.png"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
  )
}

export default Hero
