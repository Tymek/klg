import React, { FC } from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../../components/Layout"
import SEO from "../../../components/seo"
import { P } from "../../../components/Typo"
import Wrapper from "../../../components/Wrapper"
import Footer from "../../../components/Footer"
import Image, { ImageType } from "../../../components/Image"

const GenericWrapper: FC = ({ children }) => (
  <div className="mt-32 sm:mt-48 xl:mt-64">{children}</div>
)

const Illustration: FC<{ image: ImageType; alt?: string }> = ({
  image,
  alt = "",
}) => (
  <GenericWrapper>
    <div className="grid grid-cols-12">
      <div className="relative col-span-12 xl:col-start-3 xl:col-span-8">
        <div className="-mx-4 sm:-mx-6 md:mx-0">
          <Image image={image} alt={alt} />
        </div>
      </div>
    </div>
  </GenericWrapper>
)

const HorizontalPostcardWrapper: FC = ({ children }) => (
  <GenericWrapper>
    <div className="grid grid-cols-9">
      <div className="relative col-start-1 col-span-9 sm:col-start-2 sm:col-span-7 lg:col-start-4 lg:col-span-3">
        {children}
      </div>
    </div>
  </GenericWrapper>
)

const VerticalPostcardWrapper: FC = ({ children }) => (
  <GenericWrapper>
    <div className="grid grid-cols-10">
      <div className="relative col-start-3 col-span-6 sm:col-start-4 sm:col-span-4 lg:col-start-5 lg:col-span-2">
        {children}
      </div>
    </div>
  </GenericWrapper>
)

const PocztowkiPage = () => {
  const data = useStaticQuery(graphql`
    {
      krk: file(relativePath: { eq: "kartki/pocztowki/kartkak.jpg" }) {
        ...ImageFragment
      }
      krk2: file(relativePath: { eq: "kartki/pocztowki/kartkal.jpg" }) {
        ...ImageFragment
      }
      trn: file(relativePath: { eq: "kartki/pocztowki/kartka_Tarnów.jpg" }) {
        ...ImageFragment
      }
      tarnowRynek: file(
        relativePath: { eq: "kartki/pocztowki/tarnow-rynek-pocztowka.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
      trnDworzec: file(
        relativePath: { eq: "kartki/pocztowki/kartka_Tarnów_dworzec.jpg" }
      ) {
        ...ImageFragment
      }
      tarnowDworzec: file(
        relativePath: { eq: "kartki/pocztowki/tarnow-dworzec-pocztowka.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
      waw: file(
        relativePath: { eq: "kartki/pocztowki/kartka_pałac_kultury.jpg" }
      ) {
        ...ImageFragment
      }
      syrenka: file(
        relativePath: { eq: "kartki/pocztowki/kartka_syrenka.jpg" }
      ) {
        ...ImageFragment
      }
      wawStarowka: file(
        relativePath: { eq: "kartki/pocztowki/kartka_warszawa_kamienice.jpg" }
      ) {
        ...ImageFragment
      }
      warszawaStarowka: file(
        relativePath: { eq: "kartki/pocztowki/warszawa-starowka-pocztowka.png" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: TRACED_SVG, layout: FULL_WIDTH)
        }
      }
      dom: file(
        relativePath: {
          eq: "kartki/pocztowki/kartka_wszędzie_dobrze_ale_w_domu_najlepiej.jpg"
        }
      ) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout largeDecoration>
        <SEO title="Pocztówki" />
        <Wrapper className="pb-16">
          <div className="relative">
            <div className="relative grid grid-cols-12 mt-8">
              <div className="col-start-2 col-span-10 xs:col-start-3 xs:col-span-8 sm:col-start-6 sm:col-span-6 xl:col-start-8 xl:col-span-3 mb-16">
                <Image
                  image={data.krk}
                  alt="pocztówka – Krakowski gołąb z preclem"
                  className="xl:mb-32 transform -rotate-5"
                />
              </div>
            </div>
            <div className="xl:absolute xl:top-1/3">
              <div className="inline-flex flex-col justify-start">
                <div className="ml-auto pb-4">
                  <span className="uppercase text-base md:text-lg">
                    Ilustracja
                  </span>
                </div>
                <h1 className="font-bold uppercase leading-none text-xl sm:text-xxl lg:text-3xl xl:text-giant">
                  Pocztówki
                </h1>
              </div>
              <P className="text-sm mt-6 xl:mt-16">
                Ilustracje na drewniane kartki okolicznościowe zrealizowane dla
                marki&nbsp;
                <a
                  href="http://fabrykat.eu/?dr=https%3A%2F%2Fmagdaklag.pl"
                  className="underline"
                  rel="noopener noreferrer"
                >
                  Fabrykat
                </a>
                .
              </P>
            </div>
          </div>
          <HorizontalPostcardWrapper>
            <Image
              image={data.krk2}
              alt="pocztówka – Krakowskie gołębie"
              className="transform -rotate-1"
            />
          </HorizontalPostcardWrapper>

          <HorizontalPostcardWrapper>
            <Image
              image={data.trn}
              className="transform rotate-2"
              alt="pocztówka – Rynek w Tarnowie"
            />
          </HorizontalPostcardWrapper>
          <Illustration image={data.tarnowRynek} />

          <HorizontalPostcardWrapper>
            <Image
              image={data.trnDworzec}
              alt="pocztówka – Tarnów, dworzec kolejowy"
              className="transform -rotate-2"
            />
          </HorizontalPostcardWrapper>
          <Illustration image={data.tarnowDworzec} alt="" />

          <VerticalPostcardWrapper>
            <Image
              image={data.waw}
              alt="pocztówka – Warszwawa, Pałac Kultury i Nauki"
              className="transform -rotate-1"
            />
          </VerticalPostcardWrapper>
          <VerticalPostcardWrapper>
            <Image
              image={data.syrenka}
              alt="pocztówka – Warszwawska syrenka"
              className="transform rotate-3"
            />
          </VerticalPostcardWrapper>
          <HorizontalPostcardWrapper>
            <Image
              image={data.wawStarowka}
              alt="pocztówka – Warszawska Starówka"
            />
          </HorizontalPostcardWrapper>
          <Illustration image={data.warszawaStarowka} alt="" />
          <VerticalPostcardWrapper>
            <Image
              image={data.dom}
              alt="pocztówka – Wszędzie dobrze ale w domu najlepiej"
            />
          </VerticalPostcardWrapper>
        </Wrapper>
        <Footer nextLink />
      </Layout>
    </>
  )
}

export default PocztowkiPage
