import React from "react"

import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/seo"
import { P } from "../../components/Typo"
import Wrapper from "../../components/Wrapper"
import Footer from "../../components/Footer"
import Image from "../../components/Image"
import Cover from "../../components/Cover"
import Grid, { Column } from "../../components/Grid"

const ColorFestivalPage = () => {
  const data = useStaticQuery(graphql`
    query {
      cover: file(relativePath: { eq: "festiwal-kolorow/business-cards.png" }) {
        ...ImageFragment
      }
      og: file(
        relativePath: { eq: "festiwal-kolorow/festiwal-kolorow-logo-1.png" }
      ) {
        ...ShareImage
      }
      logo: file(
        relativePath: { eq: "festiwal-kolorow/festiwal-kolorow-logo-1.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 889) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
      poster: file(relativePath: { eq: "festiwal-kolorow/poster.jpg" }) {
        ...ImageFragment
      }
      mockup1: file(relativePath: { eq: "festiwal-kolorow/mockup-1.jpg" }) {
        ...ImageFragment
      }
      mockup2: file(relativePath: { eq: "festiwal-kolorow/mockup-2.jpg" }) {
        ...ImageFragment
      }
      mockup3: file(relativePath: { eq: "festiwal-kolorow/mockup-3.jpg" }) {
        ...ImageFragment
      }
      mockup4: file(relativePath: { eq: "festiwal-kolorow/mockup-4.jpg" }) {
        ...ImageFragment
      }
    }
  `)

  return (
    <>
      <Layout>
        <SEO
          title="Festiwal kolorów – Obóz wakacyjny dla dzieci"
          image={data.og.sharp.shareImage}
          description={
            "Festiwal kolorów to program edukacyjny przeznaczony na letnie obozy" +
            " i zajęcia dla dzieci, zrealizowany przez wydawnictwo Misja Pokoleń." +
            " Program zawiera 7 lekcji, do każdej przypisany jest kolor o znaczeniu" +
            " nawiązującym do treści lekcji."
          }
        />
        <Wrapper>
          <Cover
            image={{
              ...data.cover.childImageSharp.fluid,
              aspectRatio: 5 / 3,
            }}
            className="lg:mt-12"
          />
          <div className="w-full sm:w-2/3 mx-auto lg:w-full">
            <Image
              fluid={data.logo.childImageSharp.fluid}
              className="mb-4 sm:mb-8 xl:mb-32 mx-auto my-24 lg:my-48 w-full"
              style={{ maxWidth: "889px" }}
            />
          </div>
          <Grid className="mt-8">
            <Column className="xl:col-span-4 xl:col-start-3 pb-16">
              <p className="my-6 uppercase text-base lg:text-lg leading-tight xl:mb-32">
                logo / materiały reklamowe / ilustracja / sład tekstu /
                publikacja
              </p>
              <div className="grid grid-cols-4 sm:gap-x-15 text-sm xs:text-base">
                <div className="col-span-4 xs:col-start-2 sm:col-start-2 sm:col-span-3 md:col-start-2 md:col-span-2 xl:col-start-2 xl:col-span-3">
                  <P className="mb-6 leading-relaxed">
                    Festiwal kolorów to program edukacyjny przeznaczony na
                    letnie obozy i zajęcia dla dzieci, zrealizowany przez{" "}
                    <a
                      href="https://misjapokolen.org/?dr=https%3A%2F%2Fmagdaklag.pl"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      wydawnictwo Misja Pokoleń
                    </a>
                    . Program zawiera 7 lekcji, do każdej przypisany jest kolor
                    o znaczeniu nawiązującym do treści lekcji.
                  </P>
                  <P className="mb-6 leading-relaxed">
                    Projekt obejmował identyfikacje wizualną, skład podręcznika
                    dla nauczyciela oraz materiały pomocne podczas pracy z
                    dziećmi m.in.&nbsp;kolorowanki, ćwiczenia, ilustracje.
                  </P>
                </div>
              </div>
              <h1 className="text-xl xs:text-3xl font-bold uppercase leading-none mb-16 mt-10">
                Festiwal
                <br />
                kolorów
              </h1>
            </Column>
          </Grid>
        </Wrapper>
        <div className="mb-16 xs:mb-24 lg:mb-32 xl:mb-48 xxl:mb-48">
          <Wrapper className="pt-24 lg:pt-32">
            <Grid>
              <Column className="xs:col-start-1 xs:col-span-8 sm:col-start-2 sm:col-span-6">
                <Image fluid={data.mockup1.childImageSharp.fluid} />
              </Column>
            </Grid>
          </Wrapper>
        </div>
        <div className="mb-16 xs:mb-24 lg:mb-32 xl:mb-48 xxl:mb-48">
          <Wrapper>
            <Grid>
              <Column className="xs:col-start-2 xs:col-span-8 sm:col-start-3 sm:col-span-6">
                <Image fluid={data.mockup2.childImageSharp.fluid} />
              </Column>
            </Grid>
          </Wrapper>
        </div>

        <Wrapper className="mb-16 xs:mb-24 lg:mb-32 xl:mb-48 xxl:mb-48">
          <Grid className="pb-16">
            <Column className="xs:col-start-2 xs:col-span-8 lg:col-start-4 lg:col-span-3">
              <P className="leading-relaxed">
                Podręcznik dla nauczyciela składa się z lekcji, z których każda
                przeznaczona jest na jeden dzień. Scenariusze lekcji podzielone
                są na części oznaczone ikonkami. Margines na każdej ze stron to
                miejsce na notatki nauczyciela.
              </P>
            </Column>
          </Grid>
        </Wrapper>

        <div className="mb-16 xs:mb-24 lg:mb-32 xl:mb-48 xxl:mb-48">
          <Wrapper>
            <Grid>
              <Column className="xs:col-start-1 xs:col-span-8 sm:col-start-2 sm:col-span-6">
                <Image fluid={data.mockup3.childImageSharp.fluid} />
              </Column>
            </Grid>
          </Wrapper>
        </div>
        <div className="mb-16 xs:mb-24 lg:mb-32 xl:mb-48 xxl:mb-48">
          <Wrapper>
            <Grid>
              <Column className="xs:col-start-1 xs:col-span-8 sm:col-start-2 sm:col-span-6">
                <Image fluid={data.mockup4.childImageSharp.fluid} />
              </Column>
            </Grid>
          </Wrapper>
        </div>

        <Wrapper>
          <Cover
            image={data.poster.childImageSharp.fluid}
            className="lg:mt-12"
          />
        </Wrapper>
        <Footer />
      </Layout>
    </>
  )
}

export default ColorFestivalPage
