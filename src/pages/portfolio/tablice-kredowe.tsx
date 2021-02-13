import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import { FluidObject } from "gatsby-image"

import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import Grid, { Column } from "../../components/Grid"
import Cover from "../../components/Cover"

const ChalkBoardsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "tablice/tablice-kredowe-domki.png" }) {
        ...ImageFragment
      }
      title: file(relativePath: { eq: "tablice/tablica-pomalowana.png" }) {
        ...ImageFragment
      }
      preview: file(
        relativePath: { eq: "tablice/tablica-kredowa-malowanie.png" }
      ) {
        ...ImageFragment
      }
      presentation: file(
        relativePath: { eq: "tablice/tablica-kredowa-rondo.png" }
      ) {
        ...ImageFragment
      }
    }
  `)

  return (
    <Layout largeDecoration>
      <SEO title="Tablice kredowe" />
      <Wrapper>
        <Cover
          image={{
            ...data.cover.childImageSharp.fluid,
            aspectRatio: 5 / 3,
          }}
        />

        <Grid className="my-16 lg:my-48">
          <div className="col-span-7 col-start-3 lg:col-start-1 lg:col-span-4">
            <Image fluid={data.title.childImageSharp.fluid} />
          </div>
          <Column className="relative lg:col-start-5 lg:col-span-4 self-end">
            <div className="mt-6 sm:mt-20">
              <div className="xxl:grid xxl:grid-cols-4 xxl:gap-x-15">
                <h1 className="text-xl sm:text-3xl lg:text-giant font-bold leading-none uppercase">
                  Tablice kredowe
                </h1>
              </div>
            </div>
          </Column>
          <Column className="lg:col-start-5 lg:col-span-4">
            <div className="text-sm mt-10 sm:w-1/2 lg:w-full leading-relaxed">
              <P className="mb-12">
                Duże tablice kredowe dla marki Milin powstały w odpowiedzi na
                prośbę sklepu{" "}
                <a
                  href="https://bystrzak.eu/?rel=magdaklag.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Bystrzak – mądre zabawki
                </a>
                .
              </P>
              <P className="mb-12">
                Jako miłośniczka starych kamienic zaprojektowałam wysokie,
                bogato zdobione domki. Następnie powstała Ulica Kredowa -
                okrągła tablica przypominająca mapę.
              </P>
              <P className="mb-12">
                Tablice ozdobione grawerem zachęcać mają do kreatywnej zabawy,
                swobodnego rysowania i rozwijania wyobraźni.
              </P>
            </div>
            <p className="uppercase leading-snug text-sm md:text-lg">
              zabawki / opakowania / materiały reklamowe
            </p>
          </Column>
        </Grid>

        <Grid className="my-16 lg:my-24">
          <div className="col-start-2 col-span-7">
            <Image fluid={data.preview.childImageSharp.fluid} />
          </div>
        </Grid>

        <Grid className="my-16 lg:my-24 xl:my-32">
          <Column className="lg:col-start-2 lg:col-span-7">
            <Image fluid={data.presentation.childImageSharp.fluid} />
          </Column>
        </Grid>
      </Wrapper>
      <Footer nextLink />
    </Layout>
  )
}

export default ChalkBoardsPage
