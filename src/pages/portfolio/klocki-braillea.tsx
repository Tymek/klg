import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import Grid, { Column } from "../../components/Grid"

const DollhousePage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "braille/1-klocki-braillea-intro.png" }) {
        ...ImageFragment
      }
      showcase1: file(
        relativePath: { eq: "braille/2-klocki-braillea-opakowanie.png" }
      ) {
        ...ImageFragment
      }
      showcase2: file(
        relativePath: { eq: "braille/3-klocki-braillea-numery.png" }
      ) {
        ...ImageFragment
      }
      showcase3: file(
        relativePath: { eq: "braille/4-klocki-braillea-zabawka.png" }
      ) {
        ...ImageFragment
      }
      showcase4: file(
        relativePath: { eq: "braille/5-klocki-braillea-litery.png" }
      ) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO title="Klocki cyfry alfabet Braille'a" />
        <Wrapper>
          <Grid className="mt-8">
            <div className="col-span-9 xl:col-start-2 xl:col-span-7">
              <Image
                image={data.cover}
                alt=""
                className="mb-4 sm:mb-8 xl:mb-32"
              />
            </div>
            <div className="col-span-9 xl:col-start-2">
              <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold leading-none uppercase mb-12">
                Klo&shy;cki cy&shy;fry
                <br className="d-none xl:d-block" />
                al&shy;fa&shy;bet Brai&shy;lle'a
              </h1>
            </div>
          </Grid>
          <Grid className="mt-8 items-center">
            <Column className="md:col-start-2 xl:col-start-1 xl:col-span-5">
              <div className="grid grid-cols-9 xl:grid-cols-5 xl:gap-x-15">
                <div className="col-span-9 lg:col-span-7 xl:col-start-3 xl:col-end-6">
                  <P className="mb-6">
                    Zabawki służące do nauki alfabetu braille’a oraz cyfr
                    zrealizowane na zlecenie firmy Milin, przy współpracy z
                    Terapeutycznym Przedszkolem „Mały Książę” w Tarnowie.
                  </P>
                  <P className="mb-6">
                    Klocki z wygrawerowaną cyfrą lub literą zawierają otwory,
                    które wypełnić można dołączonymi do zestawu kuleczkami, a
                    także koralikami, suchym ryżem, groszkiem, czy znalezionymi
                    podczas spaceru kamyczkami. Dowolne materiały można układać
                    na klockach według faktur lub kolorów.
                  </P>
                  <P className="mb-6">
                    Zabawki nie tylko wspomagają naukę liczenia oraz alfabetu z
                    systemem braille'a. Rozwijają koordynację wzrokowo-ruchową,
                    motorykę małą, precyzję, koncentrację oraz zmysł dotyku.
                  </P>
                </div>
                <div className="col-span-8 lg:col-span-6 xl:col-start-2 xl:col-end-6">
                  <p className="text-base sm:text-lg uppercase leading-tight mb-16 mt-8">
                    Zabawki / Opakowania
                    <span className="sr-only"> reklamowe</span>
                  </p>
                  <Image
                    image={data.showcase2}
                    alt=""
                    className="mb-6 sm:mb-12"
                  />
                </div>
              </div>
            </Column>
            <Column className="lg:col-span-6 xl:col-span-4 items-center mb-16">
              <Image image={data.showcase1} alt="" />
            </Column>
          </Grid>
          <Grid>
            <Column className="lg:col-span-8 mb-16">
              <Image image={data.showcase3} alt="" />
            </Column>
            <Column className="lg:col-span-8 mb-16">
              <Image image={data.showcase4} alt="" />
            </Column>
          </Grid>
        </Wrapper>
        <Footer nextLink />
      </Layout>
    </>
  )
}

export default DollhousePage
