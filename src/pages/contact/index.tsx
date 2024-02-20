import AnimateComponentMount from '@/components/animate-component-mount/animate-component-mount';
import { Box, ColoredBox, T } from '@/components/stitches';
import Contact from '@/modules/contact/contact';
import Head from 'next/head';
import { styled } from 'stitches.config';

export default function Home() {
  return (
    <>
      <Head>
        <title>Alexander Makarov | contact</title>
        <meta name="description" content="Contact me." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1">
            <T color="gray1" weight="2" >CONTACT</T>
          </ColoredBox>
        </AnimateComponentMount>

        <Box css={{ h: 20 }} />

        <ComponentsContainer>
          <Box css={{ flex: 1, minWidth: 300, maxWidth: 600 }}>
            <AnimateComponentMount>
              <Contact />
            </AnimateComponentMount>
          </Box>
        </ComponentsContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ComponentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  flexWrap: 'wrap',
});
