import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import milinLogo from "../../images/milin/milin-logo.svg"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Cover from "../../components/Cover"
import Image from "../../components/Image"
import Grid, { Column } from "../../components/Grid"
import Footer from "../../components/Footer"

const MilinPage = () => {
  const data = useStaticQuery(graphql`
    query {
      branding: file(relativePath: { eq: "milin/milin-branding.jpg" }) {
        ...ImageFragment
      }
      og: file(relativePath: { eq: "milin/milin-branding.jpg" }) {
        ...ShareImage
      }
      businessCards: file(relativePath: { eq: "milin/wizytowki-milin.jpg" }) {
        ...ImageFragment
      }
      catalogFront: file(relativePath: { eq: "milin/katalog-front.png" }) {
        ...ImageFragment
      }
      catalogInside: file(relativePath: { eq: "milin/katalog-wnetrze.png" }) {
        ...ImageFragment
      }
      presentation: file(relativePath: { eq: "milin/presentation.jpg" }) {
        ...ImageFragment
      }
      leaflet: file(relativePath: { eq: "milin/leaflet.jpg" }) {
        ...ImageFragment
      }
      box: file(relativePath: { eq: "milin/box.jpg" }) {
        ...ImageFragment
      }
    }
  `)

  return (
    <Layout>
      <SEO
        title="Milin"
        image={data.og.sharp.shareImage}
        description={
          "Milin to marka, która tworzy drewniane zabawki, " +
          "wykorzystując ekologiczne materiały. Działa w duchu less waste. " +
          "Założeniem marki Milin jest tworzenie zabawek o prostych formaci " +
          "i dobrym designie, jednocześnie rozwijających, pobudzających " +
          "wyobraźnie, tak by w pełniwykorzystywać potencjał dzieci i " +
          "kształtować wrażliwość wizualną."
        }
      />

      <Wrapper>
        <Cover image={data.branding.childImageSharp.gatsbyImageData} />
        <Cover
          image={data.businessCards.childImageSharp.gatsbyImageData}
          className="my-6 lg:my-32"
        />

        <div className="lg:pt-16 pt-12 lg:pb-20 pb-16 max-w-xl mx-auto">
          <img src={milinLogo} alt="Logo Milin Toys" />
        </div>
        <Grid>
          <Column className="sm:col-start-2 sm:col-span-7 lg:col-start-3 lg:col-span-5">
            <section className="lg:pt-20 pt-16 mx-auto">
              <p className="my-6 uppercase text-base lg:text-lg leading-tight xl:mb-24">
                logo / materiały reklamowe / ilustracja / sład tekstu /
                publikacja
              </p>
              <P className="text-sm sm:text-base mb-4">
                Milin to marka, która tworzy drewniane zabawki, wykorzystując
                ekologiczne materiały. Działa w duchu less waste. Założeniem
                marki Milin jest tworzenie zabawek o prostych formaci i dobrym
                designie, jednocześnie rozwijających, pobudzających wyobraźnie,
                tak by w pełni wykorzystywać potencjał dzieci i kształtować
                wrażliwość wizualną.
              </P>
              <P className="text-sm sm:text-base mb-4">
                Logo ma lekką, minimalistyczną formę, by podkreślić charakter
                marki. Kolory użyte w identyfikacji pasować miały do odcieni
                drawna, biei oraz opakowań ekologicznych materiałów.
              </P>
              <h1 className="text-3xl font-bold uppercase -ml-1 pt-4 lg:pt-10">
                milin
              </h1>
            </section>
          </Column>
        </Grid>

        <Grid className="my-12 lg:my-32 pt-32">
          <Column className="xs:col-start-2 xs:col-span-6 lg:col-start-2 lg:col-span-4">
            <Image
              image={data.catalogFront}
              alt="Katalog Milin – okładka"
              className="mb-10 lg:mb-24"
            />
          </Column>
          <Column className="xs:col-start-2 xs:col-span-6 lg:col-start-2 lg:col-span-4">
            <Image
              image={data.catalogInside}
              alt="Katalog Milin – wnętrze"
              className="mb-10 lg:mb-24"
            />
          </Column>
          <Column className="xs:col-start-3 xs:col-span-7">
            <Image
              image={data.presentation}
              alt="Katalog Milin – wnętrze"
              className="my-12 lg:my-24"
            />
          </Column>
          <Column className="xs:col-start-4 xs:col-span-5">
            <P className="py-16">
              Ulotki zawierały kolorowanki oraz labirynty z motywem zabawek
              marki Milin. Dzięki temu ulotki zyskały dodatkową wartość.
            </P>
          </Column>
          <Column className="xs:col-start-2 xs:col-span-7">
            <Image
              image={data.leaflet}
              alt="Katalog Milin"
              className="my-12 lg:my-24"
            />
          </Column>
          <Column className="xs:col-start-2 xs:col-span-7">
            <Image
              image={data.box}
              alt="Milin – projekt opakowań"
              className="my-12 lg:my-24"
            />
          </Column>
        </Grid>
      </Wrapper>
      <Footer nextLink />
    </Layout>
  )
}

export default MilinPage
