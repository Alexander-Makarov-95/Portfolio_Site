import CornerDotsBox from '@/components/ui/corner-dots-box';
import ProgressBar from '@/components/progress-bar/progress-bar';
import { Box, T } from '@/components/stitches';
import useRandomRange from '@/helpers/hooks/use-random-range';
import { styled } from 'stitches.config';

const LoadThresMetrics = () => {
  const progress1 = useRandomRange({ minValue: 0, maxValue: 100, updateInterval: 2000, multiplyAdd: 6 });

  const progress2 = useRandomRange({ minValue: 0, maxValue: 100, updateInterval: 2000, multiplyAdd: 6 });

  return (
    <Wrapper>
      <CornerDotsBox>
        <MetricGroupWrapper>
          <Box css={{ height: 10 }} />

          <MetricGroup>
            <Dot />
            <T weight='3' size={5} color="cyanLight1" >DYNAMIC_EXPERTISE_LOAD</T>
            <ProgressBar percent={progress1} />
          </MetricGroup>

          <Box />

          <MetricGroup>
            <Dot color='orange1' />
            <T weight='3' size={5} color="cyanLight1" >DYNAMIC_SKILL_TREE</T>
            <ProgressBar percent={progress2} filledColor="$orange1" />
          </MetricGroup>

          <Box css={{ height: 5 }} />
        </MetricGroupWrapper>
        <CornerDotsBox />
      </CornerDotsBox>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  minWidth: '250px',
});

const MetricGroupWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  background: '$cyan14',
  height: '60px',
  paddingLeft: '10px',
  paddingRight: '10px',
});

const MetricGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
});

const Dot = styled('div', {
  height: '8px',
  width: '8px',
  backgroundColor: '$cyan1',
  borderRadius: '50%',
  variants: {
    color: {
      orange1: {
        backgroundColor: '$orange1',
      }
    }
  }
});

export default LoadThresMetrics;
