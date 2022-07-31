import styled from '@emotion/styled';

type Props = {
  selected?: boolean;
};

export const PlayerContainer = styled.div`
  align-items: center;
  justify-content: center;
  height: 80px;
  display: flex;
`;

export const PlayerSelect = styled.div`
  text-align: center;
  width: 150px;
  padding: 10px 20px;
  margin: 10px;
  border: 3px solid rgba(0, 0, 0, 0.8);
  font-size: 15px;
  font-weight: bold;
  &:active {
    ${(props: Props) => (props.selected ? '' : 'margin-bottom: 5px')}
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: rgb(255, 255, 255);
  }
  background-color: ${(props: Props) =>
    props.selected ? 'rgba(0, 0, 0, 0.8)' : ''};
  color: ${(props: Props) => (props.selected ? 'rgb(255, 255, 255)' : '')};
`;

export const TitleContainer = styled.div`
  font-family: 'Futura';
  font-weight: bolder;
  color: rgb(127, 171, 18);
  text-align: center;
  margin: 20px;
  font-size: 30px;
`;
