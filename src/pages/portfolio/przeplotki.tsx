import React, { useMemo } from "react"

import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image, { ImageType } from "../../components/Image"

const productGridSequence = [
  "",
  "",
  "",
  "",
  "col-span-2 row-span-2",
  "",
  "",
  "col-span-2 row-span-2",
]

const sortByBaseName = (
  a: { node: { base: string } },
  b: { node: { base: string } }
) => {
  if (a?.node?.base < b?.node?.base) {
    return -1
  }
  if (a?.node?.base > b?.node?.base) {
    return 1
  }
  return 0
}

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    {
      cover: file(relativePath: { eq: "przeplotki/cover.jpg" }) {
        childImageSharp {
          gatsbyImageData(
            placeholder: TRACED_SVG
            tracedSVGOptions: { color: "#f1f1f2" }
            layout: FULL_WIDTH
            aspectRatio: 0.8 # 4 / 5
          )
        }
      }
      showcase1: file(
        relativePath: { eq: "przeplotki/przeplotki-milin-zabawka.jpg" }
      ) {
        ...ImageFragment
      }
      showcase2: file(relativePath: { eq: "przeplotki/milin-toy.jpg" }) {
        ...ImageFragment
      }
      showcase3: file(relativePath: { eq: "przeplotki/on-the-shelf.jpg" }) {
        ...ImageFragment
      }
      showcase4: file(relativePath: { eq: "przeplotki/opakowania.jpg" }) {
        ...ImageFragment
      }
      showcase5: file(relativePath: { eq: "przeplotki/opakowanie.jpg" }) {
        ...ImageFragment
      }
      showcase6: file(relativePath: { eq: "przeplotki/sklep.jpg" }) {
        ...ImageFragment
      }
      przeplotki: allFile(filter: { dir: { regex: "/przeplotki/zabawka/" } }) {
        edges {
          node {
            id
            base
            childImageSharp {
              gatsbyImageData(quality: 80, layout: FULL_WIDTH)
            }
          }
        }
      }
      prize: file(relativePath: { eq: "zabawkaroku_logo_w.png" }) {
        childImageSharp {
          gatsbyImageData(width: 250, placeholder: TRACED_SVG, layout: FIXED)
        }
      }
    }
  `)

  const getAlt = (base?: string) => {
    let alt = base || ""
    alt = alt.slice(3, -4)
    alt = alt[0].toUpperCase() + alt.slice(1)

    return `przeplotka ${alt}`
  }

  const przeplotki: Array<{
    image: ImageType
    className: string
    key: string
    alt: string
  }> = useMemo(
    () =>
      data.przeplotki.edges
        .sort(sortByBaseName)
        .map((edge: any, index: number) => ({
          key: edge?.node?.id,
          className: productGridSequence[index % productGridSequence.length],
          image: edge?.node,
          alt: getAlt(edge?.node?.base),
        })),
    [data]
  )

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Przeplotki" />
        <div
          className="pb-24 md:pb-56 mt-16 md:mt-48"
          style={{
            background: "url(/assets/shoelace.svg) no-repeat center center",
            backgroundSize: "cover",
          }}
        >
          <Wrapper customWidth="max-w-7xl pb-0 md:pb-24">
            <div className="flex justify-end px-10 md:px-0">
              <div className="w-full max-w-4xl md:w-3/4 -mt-10 md:-mt-40">
                <Image image={data.cover} alt="" />
              </div>
            </div>
          </Wrapper>
        </div>
        <Wrapper customWidth="max-w-7xl">
          <section className="xl:mx-48 md:-mt-24 xl:-mt-40">
            <h1 className="text-giant font-bold uppercase mb-12 leading-none">
              Prze&shy;plot&shy;ki
            </h1>
            <P className="mb-12">
              Przeplotki to drewniane zabawki z dziurkami i sznurówką w
              zestawie, zrealizowane dla marki{" "}
              <Link className="underline" to="/portfolio/milin/">
                Milin
              </Link>
              .
            </P>

            <P className="mb-12">
              Seria zawiera 18 zabawek oraz zestawy dla zaawansowanych
              przeplataczy – Panna Miś i Pan Miś z ubrankami. Projekt obejmował
              wzory zabawek, wykrojniki opakowań indywidualnie dopasowanych do
              każdej zabawki, nadruki na opakowania, ekspozytory oraz materiały
              marketingowe.
            </P>

            <P className="mb-12">
              Przeplatanie sznurówki przez dziurki rozwija motorykę małą, pomaga
              w wyciszeniu i skupieniu uwagi, ćwiczy koordynację ręka-oko.
            </P>

            {/* TODO: unify other portfolio items to this */}
            <h2 className="text-md xl:text-lg uppercase pt-16 pb-10 mb-12">
              Zabawki &ensp; Opakowania &ensp; Materiały reklamowe &ensp;
              Systemy&nbsp;wystawiennicze
            </h2>

            <div className="mb-16 flex">
              <a
                href="https://www.zabawkaroku.pl/produkt/?id=7770"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image image={data.prize} alt="Zabawka roku 2020 Wyróżnienie" />
              </a>
            </div>
          </section>

          <div className="mb-20">
            <Image image={data.showcase1} alt="" />
          </div>
          <div className="mb-32">
            <Image image={data.showcase2} alt="" />
          </div>

          <div className="grid gap-4 sm:gap-8 lg:gap-16 grid-cols-2 grid-flow-row-dense">
            {przeplotki.map(({ key, image, className, alt }) => (
              <Image key={key} image={image} className={className} alt={alt} />
            ))}
          </div>

          <div className="mt-24 mb-20">
            <Image image={data.showcase3} alt="" />
          </div>
          <div className="mb-20">
            <Image image={data.showcase4} alt="" />
          </div>
          <div className="mb-20">
            <Image image={data.showcase5} alt="" />
          </div>

          <section className="max-w-4xl mx-auto mt-20 md:mt-48 mb-16 md:mb-32">
            <div className="md:w-2/3">
              <P className="mb-12">
                Zabawki w opakowaniach miały być dobrze widoczne, tak by ułatwić
                klientom wybór ulubionej przeplotki. Udało się to dzięki
                opakowaniom przypominającym ubranka, indywidualnie dopasowanym
                do każdego wzoru.
              </P>

              <P className="mb-12">
                Opakowania wykonane zostały z kartonu kraft z białym nadrukiem,
                co podkreślić ma ekologiczny charakter marki. Opakowanie
                składane jest za pomocą nap do tkanin, które dodatkowo są
                drobnym akcentem kolorystycznym.
              </P>

              <P className="mb-12">
                Opakowanie zwiera przeplotkę oraz zwiniętą z tyłu opakowania
                sznurówkę.
              </P>
            </div>
          </section>

          <div className="mt-24 mb-20">
            <Image image={data.showcase6} alt="" />
          </div>
        </Wrapper>
        <Footer nextLink />
      </Layout>
    </>
  )
}

export default MilinPage
